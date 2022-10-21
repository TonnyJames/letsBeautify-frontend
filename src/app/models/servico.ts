import { Cliente } from './cliente';
export interface Servico {
    id?: any;
    categoria: string;
    nmNegocio: string;
    nrInsc: string; //cpf ou cnpj
    telefone: string;
    email: string;
    senha: string;
    perfis: string[];
    dataCriacao: any;
    responsavel: Cliente
}