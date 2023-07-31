import { React } from 'react';
import { useQuery } from '@tanstack/react-query';
import axios from 'axios'
import { useGlobalContext } from '../globals/globalconfiguration';
const Gallery = () => {
    const {searchKey } = useGlobalContext();
    const url = `https://api.unsplash.com/search/photos?client_id=${import.meta.env.VITE_API_KEY}&query=${searchKey}`

    const response = useQuery({
        queryKey: ['search',searchKey],
        queryFn: async () => {
            const result = await axios.get(url);
            return result.data
        }
    })

    if (response.isLoading) {
        return <main className='image-container'><p>Please wait. Loading...</p></main>

    }
    if (response.isError) {
        return <main className='image-container'><p>Something wrong happened...</p></main>
    }
    const results = response.data.results;
    console.log(results)
    if(results.lenght < 1)
    {
        return <main className='image-container'><h3>No results found ...</h3></main>
    }



    return <section className='image-container'>
        {
            results.map((val)=>{ return <div key = {val.id}>
                <img className='gallery-items' src={val?.urls?.regular} alt='imgae' style={{width:'300px',height:'300px'}}/>
                
            </div>

            })

        }
    </section>
}
export default Gallery;