import { useEffect, useState } from 'react'
import { Container, Banner, CategoriesMenu, ProductsContainer, CategoryButton, ReturnButton } from './styles'
import { api } from '../../services/api'
import { formatPrice } from '../../utils/formatPrice'
import { CardProduct } from '../../components/CardProduct'
import { useLocation, useNavigate } from 'react-router-dom'



export const Menu = () => {

    const [categories, setCategories] = useState([])
    const [products, setProducts] = useState([])
    const [filteredProducts, setFilteredProducts] = useState([])
    
    
    const navigate = useNavigate()
    const { search } = useLocation()
    const queryParms = new URLSearchParams(search)
    
    
    const [activeCategory, setActiveCategory] = useState(() => {
        const categoryId = +queryParms.get('category')

        if (categoryId){
            return categoryId
        }
        return 0

    })



    useEffect(() => {


        async function LoadCategories() {
            const { data } = await api.get('/categories')

            const newCategories = [{ id: 0, name: 'Todas' }, ...data]

            setCategories(newCategories)
        }

        async function LoadProducts() {
            const { data } = await api.get('/products')

            const newProducts = data.map(product => ({
                currencyValue: formatPrice(product.price),
                ...product
            }))

            setProducts(newProducts)
        }

        LoadProducts()

        LoadCategories()
    }, [])


    useEffect(() => {
        if (activeCategory === 0){
            setFilteredProducts(products)
        } else {
            const newProducts = products.filter( product => product.category_id === activeCategory);
            setFilteredProducts(newProducts)
        }
    }, [products, activeCategory])



    return (
        <Container>
            <Banner>
                <h1>O MELHOR <br />
                    HAMBÚRGUER <br />
                    ESTÁ AQUI! <br />
                    <span>Esse cardápio está irresistível!</span>
                </h1>
            </Banner>

            <CategoriesMenu>
                {categories.map(category => (
                    <CategoryButton key={category.id}
                        $isActive={category.id === activeCategory}
                        onClick={() => {
                            navigate(
                                {
                                    pathname: '/menu',
                                    search: `?category=${category.id}`
                                },
                                {
                                    replace: true
                                }
                            )
                            setActiveCategory(category.id)
                        }}
                    >{category.name}</CategoryButton>
                ))}
            </CategoriesMenu>

            <ProductsContainer>
                {filteredProducts.map(product => (
                    <CardProduct product={product} key={product.id} />
                ))}
            <ReturnButton to='/'>{"< Voltar"}</ReturnButton>
            </ProductsContainer>

        </Container>
    )
}