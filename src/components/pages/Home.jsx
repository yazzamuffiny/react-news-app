import { useState, useEffect } from 'react';
import axios from "axios";

import { useArticlesContext } from '../hooks/useArticlesContext';

//api key
const apiKey = import.meta.env.VITE_NEWS_API_KEY

const Home = () => {
  //state for selects
  const [country, setCountry] = useState('');
  const [category, setCategory] = useState('');
  //state for loading
  const [loading, setLoading] = useState(true);

  //bring in state and dispatch
  const {articles, dispatch} = useArticlesContext()

  //use effect 
  useEffect(() => {
    setLoading(true);
    //fetch function
    const fetchArticles = async() => {
      await axios.get(`https://newsapi.org/v2/top-headlines?language=en&country=${country}&category=${category}&apiKey=${apiKey}`)
        .then(response => {
          console.log(response.data.articles);
          // setArticles(response.data.articles);
          dispatch({type:"GET_ARTICLES", payload: response.data.articles})
          setLoading(false);
        })
        .catch(error => {
          console.log(error);
          setLoading(true);
        })
    }
    fetchArticles()
        
  }, [country, category])

  // handle country change
    const handleCountryChange = (event) => {
        let newCountry = event.target.value
        setCountry(newCountry);
    }

  //handle category change
    const handleCategoryChange = (event) => {
        let newCategory = event.target.value
        setCategory(newCategory);
    }

  //mapped articles component
    const Articles = ({articles}) => {
      const mappedArticles = articles.map((article, index) => {
        //map return
        return (
          <div key={index} className='article'>
            <h4>{article.title}</h4>
            <p className="author">{article.author}</p>
    
          </div>
        )
      })
      //articles component return
      return (
        <>
          	{mappedArticles}
        </>
      )
    }



  return (
    <div className="home-container">
      <div className="filter-container">
        <div className="filter-flex-container">
          {/* country filter */}
          <label htmlFor="country-select">Country:</label>
          <select name="country-select" id="country-select" onChange={handleCountryChange}>
            <option value="" >Any</option>
            <option value="us">USA</option>
            <option value="gb">UK</option>
            <option value="au">Australia</option>
            <option value="nz">NZ</option>
          </select>
        </div>
          {/* category filter */}
        <div className="filter-flex-container">
          <label htmlFor="category-select">Category:</label>
          <select name="category-select" id="category-select" onChange={handleCategoryChange}>
            <option value="">Any</option>
            <option value="business">Business</option>
            <option value="entertainment">Entertainment</option>
            <option value="health">Health</option>
            <option value="science">Science</option>
            <option value="sports">Sports</option>
            <option value="technology">Technology</option>
          </select>
        </div>
      </div>
      {/* end of filters */}
      <div className="article-container">
        {loading ? (
          <div>Loading...</div>
        ) : (
          <div className="article-grid">
            <Articles articles={articles}/>
          </div>
          
        )}

      </div>
    </div>
  )
}

export default Home
