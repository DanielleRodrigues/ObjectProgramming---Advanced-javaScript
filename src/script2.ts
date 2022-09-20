import PromptSync = require('prompt-sync');
import { ContaBancaria} from "./ContaBancaria";
const prompt = PromptSync();


const saldo = Number(prompt('Digite o saldo: '));
const  id = Number(prompt('Digite o id: '));


console.log(`A conta bancaria ${id} tem  R$: ${saldo} de saldo.`);

