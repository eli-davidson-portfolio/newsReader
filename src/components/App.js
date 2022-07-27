import React, {useState, useEffect} from 'react';
import '../styles/App.scss'
import { getData } from '../classes/apiEndpoints'
import { ArticleContainer } from '../components/ArticleContainer' 


 
export function App() { 
  const [id, setID] = useState('') 
  
  useEffect(() => { 
    console.log('App did mount') 
    getData('science')
    .then(data => console.log(data))
    .catch(error => alert(error));
 
    return(() => { 
    console.log('App will unmount') 
    }) 
  }, []) 
 
   useEffect(() => { 
    console.log('App did update') 
 
 
  }, [id]) 
 
  return ( 
    <div className='App'> 
      <p>App</p> 
      <ArticleContainer />
    </div> 
  ); 
} 
 
