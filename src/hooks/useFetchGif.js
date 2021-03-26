import { useState, useEffect } from "react"
import { getGifs } from "../helpers/getGifs";


export const useFetchGif = (category) => {
    const [state, setstate] = useState({
        data: [],
        loading: true
    });
    //El useEffect hara que solo se renderice una sola vez

    useEffect(()=> {
        getGifs(category)
            .then( imgs => {
                setstate({
                    data:imgs,
                    loading: false
                });
            })
    }, [category]);

    // setTimeout(() => {
    //     setstate({
    //         data: [1,2,3,4,5,6,7],
    //         loading: false
    //     })
    // }, 3000);
    return state; // {data: [],loading: true}
}
