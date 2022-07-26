import React, {useState, useEffect} from 'react';
import '../styles/App.scss'
 
export function App() { 
  const [id, setID] = useState('') 
 
  useEffect(() => { 
    console.log('App did mount') 
 
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
    </div> 
  ); 
} 
 
//import { App } from '../components/App' 
//<App />' 
