import React, {useState, useEffect} from 'react';
import '../styles/ArticleDetail.scss'
 
export function ArticleDetail({ detail, handleClick }) { 
  const [id, setID] = useState('') 
 
  useEffect(() => { 
    console.log('ArticleDetail did mount') 
 
    return(() => { 
    console.log('ArticleDetail will unmount') 
    }) 
  }, []) 
 
   useEffect(() => { 
    console.log('ArticleDetail did update') 
 
 
  }, [id]) 
 
  return ( 
    <div className='ArticleDetail'>
      <button onClick={() => {
        handleClick({})
      }}>Back</button>
      <p>ArticleDetail</p>
      <p>{detail.title}</p>
    </div> 
  ); 
} 

