import React, {useState, useEffect} from 'react';
import '../styles/ArticleContainer.scss'
 
export function ArticleContainer() { 
  const [id, setID] = useState('') 
 
  useEffect(() => { 
    console.log('ArticleContainer did mount') 
 
    return(() => { 
    console.log('ArticleContainer will unmount') 
    }) 
  }, []) 
 
   useEffect(() => { 
    console.log('ArticleContainer did update') 
 
 
  }, [id]) 
 
  return ( 
    <div className='ArticleContainer'> 
      <p>ArticleContainer</p> 
    </div> 
  ); 
} 

