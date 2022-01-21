import { Box, Button, Grid, TextField, Typography } from "@material-ui/core";
import { Link, useHistory } from 'react-router-dom';
import useLocalStorage from "react-use-localstorage";
import { login } from "../../services/Service";
import UserLogin from "../../models/UserLogin";
import React, { ChangeEvent, useState, useEffect } from "react";
import "./Login.css";

function Login() {
    let history = useHistory();
    const [token, setToken] = useLocalStorage("token");
    const [userLogin, setUserLogin] = useState<UserLogin>(
        {
            id: 0,
            usuario: "",
            senha: "",
            token: ""
        }
    )

    function updatedModel(e: ChangeEvent<HTMLInputElement>) {

        setUserLogin({
            ...userLogin,
            [e.target.name]: e.target.value
        })
    }

    useEffect(() => {
        if (token != "") {
            history.push("/home")
        }
    }, [token])

    async function onSubmit(e: ChangeEvent<HTMLFormElement>) {
        e.preventDefault();
        try {
            await login(`/usuarios/logar`, userLogin, setToken)

            alert("usuario logado com sucesso!");
        } catch (error) {
            alert("Dados do usúarios inconsistentes. Erro ao logar!");
        }
    }

    return (
   
        <Grid container className='pagina'>
            <Grid xs={6} className='imagem'>
            </Grid>
            <Grid alignItems="center" xs={6}>
                <Box paddingX={20}>
                    <form>
                        <Typography variant='h3' gutterBottom component='h3' align='center' className='textos1'>Entrar</Typography>
                        <TextField id='usuario' label='usuario' variant='outlined' name='usuario' margin='normal' fullWidth />
                        <TextField id='senha' label='senha' variant='outlined' name='senha' margin='normal' type='password' fullWidth />
                        <Box marginTop={2} textAlign='center'>
                            <Link to='/home' className='text-decorator-none'>
                                <Button type='submit' variant='contained' className="butao">
                                    Logar</Button>
                            </Link>
                        </Box>
                    </form>
                    <Box display='flex' justifyContent='center' marginTop={2}>
                        <Box marginRight={1}>
                            <Typography variant="subtitle1" gutterBottom align="center" className='textos1'>Não tem uma conta?</Typography>
                        </Box>
                        <Link to='/cadastrousuario' className='text-decorator-none'>
                            <Typography variant="subtitle1" gutterBottom align="center" className='textos1'>Cadastre-se</Typography>
                        </Link>
                    </Box>
                </Box>
            </Grid>
        </Grid>
    )
}

export default Login;