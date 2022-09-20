/*ATIVIDADE 2
Crie uma classe conta bancária e apresente os atributos e métodos referentes a esta classe, 
em seguida crie um objeto conta bancária, defina as instâncias deste objeto e apresente as informações deste objeto no console.*/

class ContaBancaria {

    
   private saldo: number;
   private  id: number;


   constructor (saldo: number, id: number){
    this.saldo = saldo;
    this.id = id; 
   }
}

export {ContaBancaria}; 
