import React, {useState, useEffect} from 'react';
import '../styles/Article.scss'
 
export function Article({data, handleClick}) { 

  return ( 
    <div className='Article' onClick={() => {
      handleClick(data)
    }}> 
    <hr/>
    <img className='thumbnail' src={data.multimedia[2].url} />
    <p>{data.title}</p> 
    </div> 
  ); 
} 

