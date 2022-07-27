import React from 'react';
import '../styles/Article.scss'
 
export function Article({data, handleClick}) { 
  return ( 
    <div className='Article' onClick={() => {
      handleClick(data, data.section)
    }}> 
    <hr/>
    {data.multimedia && <img className='thumbnail' src={data.multimedia[2].url} />}
    <p>{data.title}</p> 
    </div> 
  ); 
} 

