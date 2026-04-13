import { Container, Content, HeaderLink, LinkContainer, Logout, Navigation, Options, Profile } from "./style";
import { UserIcon, ShoppingCartSimpleIcon } from '@phosphor-icons/react'
import { useNavigate, useResolvedPath } from "react-router-dom";
import { useUser } from '../../hooks/UserContext'


export function Header() {
    const navigate = useNavigate()
    const { logout, userInfo } = useUser()

    const {pathname} = useResolvedPath()

    const logoutUser = () => {
        logout()

        navigate('/login')
    }


    return (
        <Container>
            <Content>
                <Navigation>
                    <div>
                        <HeaderLink to='/' $isActive={pathname === '/'}>
                            Home
                        </HeaderLink>
                        <hr></hr>
                        <HeaderLink to='/menu' $isActive={pathname === '/menu'}>
                            Cardápio
                        </HeaderLink>
                    </div>
                </Navigation>

                <Options>
                    <Profile>
                        <UserIcon color="#fff" size={24} />
                        <div>
                            <p>Olá, <span>{userInfo.name}</span></p>
                            <Logout onClick={logoutUser}>Sair</Logout>
                        </div>
                    </Profile>
                    <LinkContainer>
                        <ShoppingCartSimpleIcon color="#fff" size={24} />
                        <HeaderLink to='/carrinho'>Carrinho</HeaderLink>
                    </LinkContainer>
                </Options>
            </Content>
        </Container>
    )
}