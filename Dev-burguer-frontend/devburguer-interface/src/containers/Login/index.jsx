import { useForm } from "react-hook-form"
import { yupResolver } from "@hookform/resolvers/yup"
import * as yup from "yup"
import { toast } from "react-toastify"
import { useNavigate } from "react-router-dom"


import { api } from "../../services/api"
import { Container, Form, InputContainer, LeftContainer, Link, RightContainer, Title } from "./styles"
import { Button } from '../../components/Button'

export function Login() {
    const navigate = useNavigate()

    const schema = yup
        .object({
            email: yup.string().email('Digite um email válido.').required('O email é obrigatório.'),
            password: yup.string().min(6, 'A senha deve conter pelo menos 6 caracteres').required('A senha é obrigatória'),
        })
        .required()


    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm({
        resolver: yupResolver(schema),
    })


    const onSubmit = async (data) => {
        await toast.promise(api.post('/sessions', {
            email: data.email,
            password: data.password
        }), {
            pending: 'Verificando seus dados',
            success: {
                render() {
                    setTimeout(() => {
                        navigate('/')
                    }, 1000);

                    return 'Seja Bem vindo(a)!'
                }
            },
            error: {
                render({ data: error }) {
                    if (error.response && error.response.status === 400) {
                        return 'Email ou Senha Incorretos 🤯';
                    }

                    return 'Falha no Sistema! Tente novamente.';
                }
            }
        }
        )

    }



    return (
        <Container>
            <LeftContainer>
            </LeftContainer>


            <RightContainer>
                <Title>Olá, seja bem vindo ao <span>Dev Burguer!</span>
                    <br></br>
                    Acesse com seu <span>Login e senha.</span>
                </Title>

                <Form onSubmit={handleSubmit(onSubmit)}>
                    <InputContainer>
                        <label>Email</label>
                        <input type="email" {...register("email")} />
                        <p>{errors?.email?.message}</p>
                    </InputContainer>
                    <InputContainer>
                        <label>Senha</label>
                        <input type="password" {...register("password")} />
                        <p>{errors?.password?.message}</p>
                    </InputContainer>
                    <Button type="submit">Entrar</Button>
                </Form>

                <p>Não possui conta?
                    <Link to='/cadastro'> Clique aqui.</Link>
                </p>
            </RightContainer>
        </Container>
    )
}