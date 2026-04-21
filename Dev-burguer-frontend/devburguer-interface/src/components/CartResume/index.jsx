import { toast } from 'react-toastify'
import { useEffect, useState } from 'react'
import { useCart } from '../../hooks/CartContext'
import { api } from '../../services/api'
import { formatPrice } from '../../utils/formatPrice'
import { useNavigate } from 'react-router-dom'



import { Button } from '../../components'
import { Container } from './styles'



export function CartResume() {
    const navigate = useNavigate()
    const [finalPrice, setFinalPrice] = useState(0)
    const [deliveryTax] = useState(500)

    const { cartProducts, clearCart } = useCart()


    useEffect(() => {
        const sumAllItems = cartProducts.reduce((acc, current) => {
            return current.price * current.quantity + acc
        }, 0)

        setFinalPrice(sumAllItems)
    }, [cartProducts])


    const submitOrder = async () => {
        const products = cartProducts.map(prd => {
            return { id: prd.id, quantity: prd.quantity }
        })

        try {
            const { status } = await api.post('/orders',
                {
                    products
                },
                {
                    validateStatus: () => true
                })

            if (status === 200 || status === 201) {
                setTimeout(() => {
                    navigate('/')
                    clearCart()
                }, 2000);
                toast.success('Pedido Realizado com sucesso!')
            } else if (status === 409) {
                toast.error('Falha ao realizar o seu pedido')
            } else {
                throw new Error()
            }

        } catch (error) {
            toast.error('Falha no sistema! Tente Novamente 😭')
        }
    }




    return (
        <div>
            <Container>
                <div className="container-top">
                    <h2 className='title'>Resumo do Pedido</h2>
                    <p className='items'>Items</p>
                    <p className='items-price'>{formatPrice(finalPrice)}</p>
                    <p className='delivery-tax'>Taxa de Entrega</p>
                    <p className='delivery-tax-price'>{formatPrice(deliveryTax)}</p>
                </div>
                <div className="container-bottom">
                    <p>Total</p>
                    <p>{formatPrice(finalPrice + deliveryTax)}</p>
                </div>
            </Container>
            <Button onClick={submitOrder}>Finalizar Pedido</Button>
        </div>
    )
}