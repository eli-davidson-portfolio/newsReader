import React, {useState, useEffect} from 'react';
import '../styles/App.scss'
import { ArticleContainer } from '../components/ArticleContainer' 
import { ArticleDetail } from '../components/ArticleDetail' 
 
export function App() { 
  const [id, setID] = useState('')
  const [detail, setDetail] = useState({})
  
  const handleClick = (detail) => {
    detail ? setDetail(detail) : setDetail({})
  }

  return ( 
    <div className='App'> 
      <p>App</p> 
      {!detail.title ? <ArticleContainer handleClick={handleClick} /> :
      <ArticleDetail detail={detail} handleClick={handleClick}/>}
    </div> 
  ); 
} 
 
