import React, { Fragment, useState } from 'react';
import Logo from '../src/resources/images/Logo.png'
import { AddCategory } from './components/AddCategory';
import { GifGrid } from './components/GifGrid';

export const GifExpertApp = () => {

    
    //Hook de categorias
    const [categories, setCategories] = useState(['One Punch'])

    //const handleAdd = () =>{
    //    setCategories([...categories, 'Hunter x Hunter']);
    //    //setCategories(cast => [...categories, 'Hunter x Hunter'])
    //}
    return (
        <>
        <div className="logo_images">
          <img  src={Logo}/> 
        </div>
        
        <AddCategory setCategories = {setCategories}/>
      

        
        
        <ol>
            {
                categories.map( (category) => 
                  <GifGrid 
                    key={category} 
                    category={category}
                  />
                )
            }
        </ol>
        </>
    )
}


//Exportacion por default de GifExpertApp
export default GifExpertApp;

