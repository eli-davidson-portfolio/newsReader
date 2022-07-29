import React from 'react';
import '../styles/Article.scss'
 
export function Article({data, handleClick}) { 
  return ( 
    <div className='Article' onClick={() => {
      handleClick(data, data.section)
    }}> 
    <p>{data.title}</p> 
    </div> 
  ); 
} 

