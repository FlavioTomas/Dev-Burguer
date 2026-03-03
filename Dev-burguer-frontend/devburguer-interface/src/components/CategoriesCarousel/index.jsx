import { useEffect, useState } from 'react'
import { api } from '../../services/api'



export function CategoriesCarousel() {
    const [categories, setCategories] = useState([])

    useEffect(() => {


        async function LoadCategories() {
            const {data} = await api.get('/categories')


            setCategories(data)
            console.log(data)
        }

        LoadCategories()
    }, [])





    return (
        <div></div>
    )
}