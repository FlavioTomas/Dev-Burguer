import { Button } from '../../components'
import { Container } from './styles'



export function CartResume(){




    return(
        <div>
            <Container>
                <div className="container-top">
                    <h2 className='title'>Resumo do Pedido</h2>
                    <p className='items'>Items</p>
                    <p className='items-price'></p>
                    <p className='delivery-tax'>Taxa de Entrega</p>
                    <p className='delivery-tax-price'></p>
                </div>
                <div className="container-bottom">
                    <p>Total</p>
                    <p></p>
                </div>
            </Container>
            <Button>Finalizar Pedido</Button>
        </div>
)
}