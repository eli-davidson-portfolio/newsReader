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
  const [sectionButtons, setSectionButtons] = useState('')  
  const [articlesData, setArticlesData] = useState([])
  const [articles, setArticles] = useState([]) 
 
  useEffect(() => { 
    currentSection ? setSection(currentSection) : setSection(getRandomSection())
  }, []) 
  
  useEffect(() => {
    generateSectionRadios(section)
    section && getData(section)
    .then(data => setArticlesData(data.results))
    .catch(error => alert(error));
  }, [section])
 
   useEffect(() => { 
    if (!articlesData.length) return
    setArticles(articlesData.map(article => {
      if (article.item_type !== "Article") return
      const uuid = article.uri.split("/").pop()
      return <Article handleClick={handleClick} data={article}/>
    }))
  }, [articlesData])

  const changeSection = (section) => {
    setArticlesData([])
    setSection(section)
  }
  
const generateSectionRadios = (selection) => {
    const radios = sections.map(section => {
      let status = false
      if (selection === section) {
        status = true
      } 
      return (<>
        <input onChange={() =>{changeSection(section)}} type="radio" id={section} name="sectionFilter" value={section} checked={status}/>
        <label onClick={() =>{changeSection(section)}} htmlFor={section}>{section}</label>
        </>)
      })
    setSectionButtons(radios)
}

  return ( 
    <div className='ArticleContainer'> 
      {sectionButtons}
      {!articlesData.length ? <h3>  LOADING...</h3> : articles}
    </div> 
  ); 
} 

