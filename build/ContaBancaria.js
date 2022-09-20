"use strict";
/*ATIVIDADE 2
Crie uma classe conta bancária e apresente os atributos e métodos referentes a esta classe,
em seguida crie um objeto conta bancária, defina as instâncias deste objeto e apresente as informações deste objeto no console.*/
Object.defineProperty(exports, "__esModule", { value: true });
exports.ContaBancaria = void 0;
var ContaBancaria = /** @class */ (function () {
    function ContaBancaria(saldo, id) {
        this.saldo = saldo;
        this.id = id;
    }
    return ContaBancaria;
}());
exports.ContaBancaria = ContaBancaria;
