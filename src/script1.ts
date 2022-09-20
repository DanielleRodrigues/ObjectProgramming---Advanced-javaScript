import PromptSync = require('prompt-sync');
import { Patinete} from "./Patinete";
const prompt = PromptSync();


const anoLancemento = Number(prompt('Digite o ano de lançamento: '));
const modelo = prompt('Digite o modelo : ');
const cor = prompt('Digite a cor: ');

const patinete = new Patinete({
    cor,
    modelo,
    anoLancemento,
});

console.log(`O patinete ${modelo} da cor ${cor} foi lancado em ${anoLancemento}`);

