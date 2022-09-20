/*ATIVIDADE 1
Crie uma classe patinete e apresente os atributos e métodos referentes a esta classe,
em seguida crie um objeto patinete, defina as instâncias deste objeto e apresente as informações deste objeto no console.*/
System.register("Patinete", [], function (exports_1, context_1) {
    "use strict";
    var Patinete;
    var __moduleName = context_1 && context_1.id;
    return {
        setters: [],
        execute: function () {/*ATIVIDADE 1
            Crie uma classe patinete e apresente os atributos e métodos referentes a esta classe,
            em seguida crie um objeto patinete, defina as instâncias deste objeto e apresente as informações deste objeto no console.*/
            Patinete = /** @class */ (function () {
                function Patinete(_a) {
                    var cor = _a.cor, modelo = _a.modelo, anoLancemento = _a.anoLancemento;
                    this.cor = cor;
                    this.modelo = modelo;
                    this.anoLancemento = anoLancemento;
                }
                return Patinete;
            }());
            exports_1("Patinete", Patinete);
        }
    };
});
System.register("script", ["prompt-sync", "Patinete"], function (exports_2, context_2) {
    "use strict";
    var PromptSync, Patinete_1, prompt, anoLancemento, modelo, cor, patinete;
    var __moduleName = context_2 && context_2.id;
    return {
        setters: [
            function (PromptSync_1) {
                PromptSync = PromptSync_1;
            },
            function (Patinete_1_1) {
                Patinete_1 = Patinete_1_1;
            }
        ],
        execute: function () {
            prompt = PromptSync();
            anoLancemento = Number(prompt('Digite o ano de lançamento: '));
            modelo = prompt('Digite o modelo : ');
            cor = prompt('Digite a cor: ');
            patinete = new Patinete_1.Patinete({
                cor: cor,
                modelo: modelo,
                anoLancemento: anoLancemento
            });
            console.log("O patinete ".concat(modelo, " da cor ").concat(cor, " foi lancado em ").concat(anoLancemento));
        }
    };
});
