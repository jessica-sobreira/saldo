import { PayloadAction, createSlice } from "@reduxjs/toolkit";


export interface Transacao {
    descricao: string;
    tipo: "Entrada" | "Saída";
    valor: number;
}

export interface Conta {
    saldo: number;
    transacoes: Transacao[];
}

const initialState: Conta = {
    saldo: 50,
    transacoes: [
        {
        descricao: 'valor 1',
        tipo: 'Entrada',
        valor: 100
    },
    {
        descricao: 'valor 2',
        tipo: 'Saída',
        valor: 80
    }
]

} 


export const transacoesSlice = createSlice({
    name: 'conta',
    initialState: initialState,
    reducers: {
        adicionarTransacao: (state, action: PayloadAction<Transacao>) => {
            state.transacoes.push(action.payload);

            if(action.payload.tipo === 'Entrada') {
                state.saldo += action.payload.valor;
            } else {
                state.saldo -= action.payload.valor;
            }
        }
    },
}); 

export default transacoesSlice.reducer;

export const { adicionarTransacao } = transacoesSlice.actions;