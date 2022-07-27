import React, {useState, useEffect} from 'react';
import '../styles/ArticleContainer.scss'
import { getData } from '../classes/apiEndpoints'
import { Article } from '../components/Article' 
import sections from '../data/sections';

const getRandomSection = () => {
    return sections[Math.floor(Math.random() * sections.length)];
}

export function ArticleContainer({ currentSection, handleClick }) { 
  const [section, setSection] = useState('') 
  const [articlesData, setArticlesData] = useState([])
  const [articles, setArticles] = useState([]) 
 
  useEffect(() => { 
    currentSection ? setSection(currentSection) : setSection(getRandomSection())
  }, []) 

  useEffect(() => {
    section && getData(section)
    .then(data => setArticlesData(data.results))
    .catch(error => alert(error));
  }, [section])
 
   useEffect(() => { 
    if (!articlesData.length) return
    setArticles(articlesData.map(article => {
      if (article.item_type !== "Article") return
      const uuid = article.uri.split("/").pop()
      return <Article key={uuid} handleClick={handleClick} data={article}/>
    }))
  }, [articlesData])
  
  return ( 
    <div className='ArticleContainer'> 
      <input type="radio" id={sections[3]} name="fav_language" value={sections[3]} />
        <label htmlFor={sections[3]}>{sections[3]}</label>

      <h2>{section}</h2> 
      { !articlesData.length ? <h3>  LOADING...</h3> : articles}
    </div> 
  ); 
} 

