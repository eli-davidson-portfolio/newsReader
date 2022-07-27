import React, {useState, useEffect} from 'react';
import '../styles/ArticleContainer.scss'
import { getData } from '../classes/apiEndpoints'
 
export function ArticleContainer() { 
  const [id, setID] = useState('') 
  const [articles, setArticles] = useState([]) 
 
  useEffect(() => { 
    getData('science')
    .then(data => setArticles(data.results))
    .catch(error => alert(error));
  }, []) 
 
   useEffect(() => { 
    if (!articles.length) return
      console.log("articles2", articles)
 
  }, [articles]) 
 
  return ( 
    <div className='ArticleContainer'> 
      <p>ArticleContainer</p> 
    </div> 
  ); 
} 

