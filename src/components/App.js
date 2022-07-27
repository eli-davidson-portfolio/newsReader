import React, {useState, useEffect} from 'react';
import '../styles/App.scss'

import { ArticleContainer } from '../components/ArticleContainer' 


 
export function App() { 
  const [id, setID] = useState('')
  
  

 

 
  return ( 
    <div className='App'> 
      <p>App</p> 
      <ArticleContainer />
    </div> 
  ); 
} 
 
