import { Button } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import { useEffect } from 'react';
import { useAppSelector } from '../config/hook';

export function Home() {
    const navigate = useNavigate();
    const financas = useAppSelector((state) => state.transacoes)

    useEffect(() => {
      console.log(financas);
      
    },[])

    return (
        <>
        <h1>Minhas Finanças</h1>
        <div style={{
                display: 'flex', justifyContent: 'center', alignItems: 'center'}}>
            <br/>
            <Button variant="contained" onClick={() => navigate('/transacoes')} style = {{color: 'white', backgroundColor: 'darkgreen'}}>Cadastrar</Button>
            <br/>
            </div>
            
            <Table sx={{ minWidth: 650 }} aria-label="simple table">
            <TableHead>
            <TableRow>
                <TableCell>Descrição</TableCell>
                <TableCell align="right">Tipo</TableCell>
                <TableCell align="right">Valor</TableCell>
            </TableRow>
            </TableHead>
            <TableBody>
            {financas.transacoes.map((transacao) => {
                return (
                    <TableRow
                      sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                    >
                      <TableCell component="th" scope="row">
                        {transacao.descricao}
                      </TableCell>
                      <TableCell align="right">{transacao.tipo}</TableCell>
                      <TableCell align="right">{transacao.valor}</TableCell>
                      
                    </TableRow>
                )
              })}
              </TableBody>
            
        <TableRow>
              <TableCell style ={{ fontWeight: 'bold', paddingBottom: 3, paddingTop: 3 }} colSpan={6} >Saldo: {financas.saldo}</TableCell>

        </TableRow>
      </Table>
 
        </>
    );
}

