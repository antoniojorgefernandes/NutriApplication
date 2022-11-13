import {Refeicao} from "../alimentos/alimentos.model";
import {Moment} from "moment";

export enum ObjectivoEnum {
    MANUTENCAO = "Manutenção",
    PERDER_PESO_OU_DEFINICAO = "Perder Peso/Definição",
    HIPERTROFIA = "Hipertrofia"
}

export enum SexoEnum {
    MALE = "Masculino",
    FEMALE = "Feminino"
}


export interface ICliente {
    id: number;
    nome: string
    objectivo: ObjectivoEnum;
    frequencia_ex: string;
    doencas: string;
    medicacao: string;
    analises: string;
    intolerancias_e_alergias: string;
    suplementos: string;
    observacoes: string;
    anamnese: Anamnese;
    dados_Antropometricos: DadosAntropometricos[];
    plano: Refeicao[];
}

export class Cliente implements ICliente {
    constructor(
        public id: number,
        public nome: string,
        public objectivo: ObjectivoEnum,
        public frequencia_ex: string,
        public doencas: string,
        public medicacao: string,
        public analises: string,
        public intolerancias_e_alergias: string,
        public suplementos: string,
        public observacoes: string,
        public anamnese: Anamnese,
        public dados_Antropometricos: DadosAntropometricos[],
        public plano: Refeicao[]
    ){}
}

export interface IAnamnese {
    id: number;
    pequeno_almoco: string;
    meio_manha: string;
    almoco: string;
    lanche1: string;
    lanche2: string;
    jantar: string;
    ceia: string;
}

export class Anamnese implements IAnamnese {
    constructor(
        public id: number,
        public pequeno_almoco: string,
        public meio_manha: string,
        public almoco: string,
        public lanche1: string,
        public lanche2: string,
        public jantar: string,
        public ceia: string,
    ){}
}



export interface IDadosAntropometricos {
    id: number;
    data: Moment,
    sexo: SexoEnum;
    idade: number;
    peso: number;
    imc: number;
    imc_magro: number;
    altura: number;
    mg: number;
    mm: number;
    mo: number;
    h2o: number;
    gv: number;
    metBasal: number;
    medicoes: Medicoes;
}

export class DadosAntropometricos implements IDadosAntropometricos{
    constructor(
        public altura: number,
        public data: Moment,
        public gv: number,
        public h2o: number,
        public id: number,
        public idade: number,
        public imc: number,
        public imc_magro: number,
        public medicoes: Medicoes,
        public metBasal: number,
        public mg: number,
        public mm: number,
        public mo: number,
        public peso: number,
        public sexo: SexoEnum,
    ) {}
}
export interface IMedicoes {
    id: number;
    idade_metabolica: number;
    perimetro_peito: number;
    perimetro_abdominal: number;
    perimetro_braco: number;
    perimetro_coxa: number;
    prega_tricipete: number[];
    prega_abdominal: number[];
    prega_suprailiaca: number[];
    prega_subescapular: number[];
    prega_peitoral: number[];
    prega_axilar: number[];
    prega_coxa: number[];
}

export class Medicoes implements IMedicoes{
    constructor(
        public id: number,
        public idade_metabolica: number,
        public perimetro_peito: number,
        public perimetro_abdominal: number,
        public perimetro_braco: number,
        public perimetro_coxa: number,
        public prega_tricipete: number[],
        public prega_abdominal: number[],
        public prega_suprailiaca: number[],
        public prega_subescapular: number[],
        public prega_peitoral: number[],
        public prega_axilar: number[],
        public prega_coxa: number[],
    ) {
    }
}