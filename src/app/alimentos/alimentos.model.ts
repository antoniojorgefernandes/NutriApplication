export interface IAlimento {
     id: number;
     vitaminas: IVitaminas;
     minerais: IMinerais;
     nome: string;
     quantidade: number;
     unidade: string;
     infoNutricional: IInfoNutricional;
     refeicao: IRefericao[];
     comentarios: string;
     preco_Por_Serving: number;
     preco_pago: number;
     number_of_Servings: number;
     type: string;
}

export class Alimento implements IAlimento {
     constructor(
         public id: number,
         public vitaminas: IVitaminas,
         public  minerais: IMinerais,
         public nome: string,
         public quantidade: number,
         public unidade: string,
         public infoNutricional: IInfoNutricional,
         public refeicao: IRefericao[],
         public comentarios: string,
         public preco_Por_Serving: number,
         public preco_pago: number,
         public number_of_Servings: number,
         public type: string
     ){}
}
export interface IVitaminas {
     id: number;
     vit_A_IU: number;
     vit_B1: number;
     vit_B2: number;
     vit_B3: number;
     vit_B5: number;
     vit_B6: number;
     vit_B9: number;
     vit_B12: number;
     vit_C: number;
     vit_D_IU: number;
     vit_E: number;
     vit_K: number
}

export class Vitaminas implements IVitaminas{
     constructor(
          public id: number,
          public vit_A_IU: number,
          public vit_B1: number,
          public vit_B2: number,
          public vit_B3: number,
          public vit_B5: number,
          public vit_B6: number,
          public vit_B9: number,
          public vit_B12: number,
          public vit_C: number,
          public vit_D_IU: number,
          public vit_E: number,
          public vit_K: number
     )
     {}
}

export interface IMinerais {
     id: number;
     colina: number;
     calcio: number;
     cobre: number;
     ferro: number;
     magnesio: number;
     manganesio: number;
     fosforo: number;
     potassio: number;
     selenio: number;
     sodio: number;
     zinco: number
}

export class Minerais implements IMinerais {
     constructor(
          public id: number,
          public colina: number,
          public calcio: number,
          public cobre: number,
          public ferro: number,
          public magnesio: number,
          public manganesio: number,
          public fosforo: number,
          public potassio: number,
          public selenio: number,
          public sodio: number,
          public zinco: number
     )
     {}
}

export interface IInfoNutricional {
     id: number;
     proteina_g: number;
     carbs_g: number;
     gordura_g: number;
     agua_g: number;
     fibra_g: number;
     colesterol_mg: number;
     gord_saturadas_g: number;
     gord_Monoinsaturadas_g: number;
     gord_Polinsaturadas_g: number;
     acucares_g: number;
     kcal: number;
     indice_Glicemico: number
}

export class InfoNutricional implements IInfoNutricional {
     constructor(
         public id: number,
         public proteina_g: number,
         public carbs_g: number,
         public gordura_g: number,
         public agua_g: number,
         public fibra_g: number,
         public colesterol_mg: number,
         public gord_saturadas_g: number,
         public gord_Monoinsaturadas_g: number,
         public gord_Polinsaturadas_g: number,
         public acucares_g: number,
         public kcal: number,
         public indice_Glicemico: number
     )
     {}
}

export interface IRefericao {
     id: number;
     hora: string;
     tipo: string;
     detalhes: string;
}

export class Refeicao implements IRefericao {
     constructor(
         public id: number,
         public hora: string,
         public tipo: string,
         public detalhes: string,)
     {}
}