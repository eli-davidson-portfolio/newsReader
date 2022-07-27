import React, {useState, useEffect} from 'react';
import '../styles/Article.scss'
 
export function Article() { 
  const [id, setID] = useState('') 
 
  useEffect(() => { 
    console.log('Article did mount') 
 
    return(() => { 
    console.log('Article will unmount') 
    }) 
  }, []) 
 
   useEffect(() => { 
    console.log('Article did update') 
 
 
  }, [id]) 
 
  return ( 
    <div className='Article'> 
      <p>Article</p> 
    </div> 
  ); 
} 
 
//import { Article } from '../components/Article' 
//<Article />' 
