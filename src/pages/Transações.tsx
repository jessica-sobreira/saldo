import { Button, TextField, Box, InputLabel, Select, MenuItem, FormControl } from '@mui/material';
import { useNavigate } from 'react-router-dom';

export function Transacoes() {
    const navigate = useNavigate();
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
        <TextField  id="descricao" label="Descrição" name="descricao" variant="outlined" ></TextField>
        <br />
        <br />
        <FormControl fullWidth>
          <InputLabel id="demo-simple-select-label">Tipo</InputLabel>
            <Select
                labelId="demo-simple-select-label"
                id="demo-simple-select"
                // value={tipo}
                label="Tipo"
                // onChange={handleChange}
            >
                <MenuItem value={'Entrada'}>Entrada</MenuItem>
                <MenuItem value={'Saída'}>Saída</MenuItem>
               
              </Select>
          </FormControl>
        <br />
        <br />
        <TextField  id="valor" label="Valor" name="valor" variant="outlined" ></TextField>
        <br />
        <br />
        <div style={{display: 'flex', justifyContent: 'center', alignItems: 'center'}}>
        <Button variant="contained" style = 
        {{color: 'white', fontWeight: 'bold', backgroundColor: 'darkgreen'}}>Enviar</Button>
        </div>

        </Box>


        </>
    )
}