import { Button, TextField, Box, InputLabel, Select, MenuItem, FormControl } from '@mui/material';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAppDispatch } from '../config/hook';
import { Transacao, adicionarTransacao } from '../config/modules/transacoesSlice';


export function Transacoes() {
    const navigate = useNavigate();
    const [descricao, setDescricao] = useState('');
    const [tipo, setTipo] = useState('');
    const [valor, setValor] = useState(0);
    const dispatch = useAppDispatch();

    const cadastrarTransacao = () => {
        const transacao: Transacao = {
            descricao: descricao,
            tipo: "Entrada" === tipo ? "Entrada" : "Saída",
            valor: valor
        }
        dispatch(adicionarTransacao(transacao));
        console.log(transacao);
        
    }


    return (
        <>
        <h1>Finanças</h1>
        <div style={{
                display: 'flex', justifyContent: 'center', alignItems: 'center'}}>
        <Button variant="contained" onClick={() => navigate('/')} style = {{color: 'white', backgroundColor: 'green'}}>Ver Transações</Button>
        </div>
        <br />
        <br />
        <Box>
        <TextField  id="descricao" 
        label="Descrição" 
        name="descricao" 
        variant="outlined"
        value={descricao}
        onChange={(event) => setDescricao(event.target.value)}
         ></TextField>
        <br />
        <br />
        <FormControl fullWidth>
          <InputLabel id="demo-simple-select-label">Tipo</InputLabel>
            <Select
                labelId="demo-simple-select-label"
                id="demo-simple-select"
                value={tipo}
                label="Tipo"
                onChange={(event) => setTipo(event.target.value)}

            >
                <MenuItem value={'Entrada'}>Entrada</MenuItem>
                <MenuItem value={'Saída'}>Saída</MenuItem>
               
              </Select>
          </FormControl>
        <br />
        <br />
        <TextField  
        id="valor" 
        label="Valor" 
        name="valor" 
        variant="outlined"
        value={valor}
        onChange={(event) => setValor(Number(event.target.value))}
         ></TextField>
        <br />
        <br />
        <div style={{display: 'flex', justifyContent: 'center', alignItems: 'center'}}>
        <Button variant="contained" style = 
        {{color: 'white', fontWeight: 'bold', backgroundColor: 'darkgreen'}} onClick={cadastrarTransacao}>Enviar</Button>
        </div>

        </Box>


        </>
    )
}