"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var PromptSync = require("prompt-sync");
var prompt = PromptSync();
var saldo = Number(prompt('Digite o saldo: '));
var id = Number(prompt('Digite o id: '));
console.log("A conta bancaria ".concat(id, " tem  R$: ").concat(saldo, " de saldo."));
