import React, {useState, useEffect} from 'react';
import '../styles/ArticleDetail.scss'
 
export function ArticleDetail() { 
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
      <p>ArticleDetail</p> 
    </div> 
  ); 
} 
 
//import { ArticleDetail } from '../components/ArticleDetail' 
//<ArticleDetail />' 
