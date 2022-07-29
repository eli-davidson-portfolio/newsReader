import React, {useState} from 'react';
import '../styles/App.scss'
import { ArticleContainer } from '../components/ArticleContainer' 
import { ArticleDetail } from '../components/ArticleDetail' 

export function App() { 
  const [section, setSection] = useState('')
  const [detail, setDetail] = useState({})
  
  const handleClick = (detail, section = '') => {
    section && setSection(section)
    setDetail(detail)
  }

  return ( 
    <div className='App'> 
      {!detail.title ? <ArticleContainer currentSection={section} handleClick={handleClick} /> :
      <ArticleDetail detail={detail} handleClick={handleClick}/>}
    </div> 
  ); 
} 
 
