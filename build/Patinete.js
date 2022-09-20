"use strict";
/*ATIVIDADE 1
Crie uma classe patinete e apresente os atributos e métodos referentes a esta classe,
em seguida crie um objeto patinete, defina as instâncias deste objeto e apresente as informações deste objeto no console.*/
Object.defineProperty(exports, "__esModule", { value: true });
exports.Patinete = void 0;
var Patinete = /** @class */ (function () {
    function Patinete(_a) {
        var cor = _a.cor, modelo = _a.modelo, anoLancemento = _a.anoLancemento;
        this.cor = cor;
        this.modelo = modelo;
        this.anoLancemento = anoLancemento;
    }
    return Patinete;
}());
exports.Patinete = Patinete;
