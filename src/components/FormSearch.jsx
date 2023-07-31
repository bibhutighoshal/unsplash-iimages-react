import { React } from 'react';
import axios from 'axios'

import { useState } from 'react'
import { useGlobalContext } from '../globals/globalconfiguration';
const FormSearch = () => {
    const {setSearchKey} = useGlobalContext();
    
    
   
    const handlSubmit = (e) => {
        e.preventDefault()

        const searchkey = e.target.elements.search.value;
        setSearchKey(searchkey)


    }
    
    return <>
        <section >
            <h1 className='title'>Search an item here</h1>
            <form className='form-search' onSubmit={handlSubmit}>
                <input type='text' name='search' placeholder='cat' className='search-items' />
                <button type='submit' className='search-items btn'>Search</button>
            </form>
        </section>

    </>
}
export default FormSearch;