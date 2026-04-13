import { Container, Content, HeaderLink, LinkContainer, Logout, Navigation, Options, Profile } from "./style";
import { UserIcon, ShoppingCartSimpleIcon } from '@phosphor-icons/react'


export function Header() {



    return (
        <Container>
            <Content>
                <Navigation>
                    <div>
                        <HeaderLink>
                            Home
                        </HeaderLink>
                        <HeaderLink>
                            Cardápio
                        </HeaderLink>
                    </div>
                </Navigation>

                <Options>
                    <Profile>
                        <UserIcon color="#fff" size={24} />
                        <div>
                            <p>Olá, <span>Flávio</span></p>
                            <Logout>Sair</Logout>
                        </div>
                    </Profile>
                    <LinkContainer>
                        <ShoppingCartSimpleIcon color="#fff" size={24} />
                        <HeaderLink>Carrinho</HeaderLink>
                    </LinkContainer>
                </Options>
            </Content>
        </Container>
    )
}