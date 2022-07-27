import React, {useState, useEffect} from 'react';
import '../styles/Article.scss'
 
export function Article({data, handleClick}) { 

  return ( 
    <div className='Article' onClick={() => {
      handleClick(data)
    }}> 
      <p>Title: {data.title}</p> 
    </div> 
  ); 
} 

