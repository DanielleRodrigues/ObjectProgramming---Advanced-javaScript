/*ATIVIDADE 1
Crie uma classe patinete e apresente os atributos e métodos referentes a esta classe, 
em seguida crie um objeto patinete, defina as instâncias deste objeto e apresente as informações deste objeto no console.*/



interface newPatinete {
    cor: string;
    modelo: string;
    anoLancemento: number;
}


class Patinete {

    private cor: string;
    private modelo: string;
    private anoLancemento: number;

    constructor({ cor, modelo, anoLancemento}: newPatinete) {
        this.cor = cor;
        this.modelo = modelo;
        this.anoLancemento = anoLancemento;
    }
}

export { Patinete }; 