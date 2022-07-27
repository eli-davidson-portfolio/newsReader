import React, {useState, useEffect} from 'react';
import '../styles/ArticleContainer.scss'
import { getData } from '../classes/apiEndpoints'
 
import { Article } from '../components/Article' 

 
export function ArticleContainer({ handleClick }) { 
  const [articlesData, setArticlesData] = useState([])
  const [section, setSection] = useState('science') 
  const [articles, setArticles] = useState([]) 
 
  useEffect(() => { 
    getData(section)
    .then(data => setArticlesData(data.results))
    .catch(error => alert(error));
  }, []) 
 
   useEffect(() => { 
    if (!articlesData.length) return
    setArticles(articlesData.map(article => {
      const uuid = article.uri.split("/").pop()
      return <Article key={uuid} handleClick={handleClick} data={article}/>
    }))
  }, [articlesData]) 
 
  return ( 
    <div className='ArticleContainer'> 
      <h2>ArticleContainer</h2> 
      { !articlesData.length ? <h3>  LOADING...</h3> : articles}
    </div> 
  ); 
} 

