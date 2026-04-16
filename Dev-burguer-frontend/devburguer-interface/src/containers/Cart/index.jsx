import Logo from '../../assets/Logo-1.svg'
import { CartItems } from '../../components'
import { Banner, Container, Content, Title } from './style'



export function Cart() {


    return(
        <Container>
            <Banner>
                <img src={Logo} alt="Logo devburguer" />
            </Banner>
            <Title>Checkout - Pedido</Title>
            <Content>
                <CartItems />
                {/* <CartResume /> */}
            </Content>
        </Container>
    )
}