"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var PromptSync = require("prompt-sync");
var Patinete_1 = require("./Patinete");
var prompt = PromptSync();
var anoLancemento = Number(prompt('Digite o ano de lançamento: '));
var modelo = prompt('Digite o modelo : ');
var cor = prompt('Digite a cor: ');
var patinete = new Patinete_1.Patinete({
    cor: cor,
    modelo: modelo,
    anoLancemento: anoLancemento,
});
console.log("O patinete ".concat(modelo, " da cor ").concat(cor, " foi lancado em ").concat(anoLancemento));
