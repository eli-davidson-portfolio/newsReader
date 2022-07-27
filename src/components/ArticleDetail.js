import React, {useState, useEffect} from 'react';
import '../styles/ArticleDetail.scss'
 
export function ArticleDetail({ detail, handleClick }) { 
 
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

