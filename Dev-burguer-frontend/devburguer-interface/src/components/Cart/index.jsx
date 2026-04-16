import Logo from '../../assets/Logo-1.svg'
import { Banner, Container, Content, Title } from './style'



export function Cart() {


    return(
        <Container>
            <Banner>
                <img src={Logo} alt="Logo devburguer" />
            </Banner>
            <Title>Checkout - Pedido</Title>
            <Content>
                {/* <CartItens />
                <CartResume /> */}
            </Content>
        </Container>
    )
}