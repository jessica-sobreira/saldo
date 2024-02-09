import { Button } from '@mui/material';
import { useNavigate } from 'react-router-dom';

export function Transacoes() {
    const navigate = useNavigate();
    return (
        <>
        <h1>Transacoes</h1>
        <Button variant="contained" onClick={() => navigate('/')}>Ver Transações</Button>
        </>
    )
}