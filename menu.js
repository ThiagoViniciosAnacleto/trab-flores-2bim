"use strict";
// As linhas abaixo são geradas automaticamente pelo TypeScript/Babel ao compilar código assíncrono (async/await).
// Elas implementam o comportamento de `async`/`await` para ambientes que não o suportam nativamente
// ou para garantir compatibilidade. Em um ambiente moderno, você geralmente não as veria diretamente
// ou precisaria se preocupar com elas.
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g = Object.create((typeof Iterator === "function" ? Iterator : Object).prototype);
    return g.next = verb(0), g["throw"] = verb(1), g["return"] = verb(2), typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (g && (g = 0, op[0] && (_ = 0)), _) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
// Define que este arquivo é um módulo, o que é comum em TypeScript.
// Permite importar/exportar funcionalidades para outros arquivos.
Object.defineProperty(exports, "__esModule", { value: true });
// Importa o módulo 'readline' para interagir com a entrada e saída do console.
var readline = require("readline");
// Cria uma interface de leitura de linha para ler dados do `process.stdin` (entrada padrão)
// e escrever para `process.stdout` (saída padrão).
var rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});
/**
 * @function perguntar
 * @description Converte uma pergunta de readline em uma Promise, facilitando o uso com async/await.
 * @param {string} pergunta - A pergunta a ser exibida no console.
 * @returns {Promise<string>} Uma Promise que resolve com a resposta do usuário.
 */
function perguntar(pergunta) {
    return new Promise(function (resolve) { return rl.question(pergunta, resolve); });
}
/**
 * @function pausar
 * @description Pausa a execução do programa e espera o usuário pressionar Enter.
 * Útil para manter a saída de um exercício visível até o usuário desejar continuar.
 */
function pausar() {
    return __awaiter(this, void 0, void 0, function () {
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4 /*yield*/, perguntar('\nPressione Enter para voltar ao menu...')];
                case 1:
                    _a.sent();
                    return [2 /*return*/];
            }
        });
    });
}
// 1. Soma de dois números
/**
 * @function somaDoisNumeros
 * @description Pede dois números ao usuário e exibe a soma deles.
 * Inclui uma função auxiliar para garantir que a entrada seja numérica.
 */
async function somaDoisNumeros() {
    console.log('\nExercício 1: Soma de dois números');
    // Função auxiliar para validar entrada numérica
    // É uma boa prática encapsular a lógica de validação para reuso.
    const lerNumero = async (mensagem) => {
        while (true) {
            const input = await perguntar(mensagem);
            const numero = Number(input); // Tenta converter a entrada para número.
            if (!isNaN(numero))
                return numero; // Se for um número válido, retorna.
            console.log('Por favor, digite um número válido!'); // Caso contrário, exibe erro e tenta novamente.
        }
    };
    // Solicita os dois números usando a função `lerNumero` para garantir entradas válidas.
    const a = await lerNumero('Digite o primeiro número: ');
    const b = await lerNumero('Digite o segundo número: ');
    // Exibe o resultado formatado.
    console.log(`\n${a} + ${b} = ${a + b}\n`);
    await pausar();
}
// 2. Verificar par ou ímpar
/**
 * @function verificarParOuImpar
 * @description Pede um número ao usuário e informa se ele é par ou ímpar.
 */
async function verificarParOuImpar() {
    console.log('\nExercício 2: Verificar par ou ímpar');
    // Reutiliza a função `lerNumero` definida em `somaDoisNumeros`.
    // Poderia ser uma função global para evitar duplicação de código.
    const lerNumero = async (mensagem) => {
        while (true) {
            const input = await perguntar(mensagem);
            const numero = Number(input);
            if (!isNaN(numero))
                return numero;
            console.log('Valor inválido! Digite apenas números.');
        }
    };
    const numero = await lerNumero('Digite um número: ');
    // Usa o operador ternário para uma verificação concisa.
    console.log(`\nO número ${numero} é ${numero % 2 === 0 ? 'PAR' : 'ÍMPAR'}\n`);
    await pausar();
}
// 3. Calcular média de três notas
/**
 * @function mediaTresNotas
 * @description Pede três notas ao usuário, valida-as (entre 0 e 10) e calcula a média.
 */
async function mediaTresNotas() { // Função pra calcular a media
    console.log('\nExercício 3: Calcular média de três notas');
    // Para evitar duplicação, o ideal seria ter `lerNumero` globalmente acessível
    // ou passá-la como argumento se fosse uma dependência.
    // Aqui, a função `lerNumero` está sendo redefinida, o que não é o ideal em um código maior.
    const lerNumero = async (mensagem) => {
        while (true) {
            const input = await perguntar(mensagem);
            const numero = Number(input);
            if (!isNaN(numero))
                return numero;
            console.log('Por favor, digite um número válido!');
        }
    };
    // Declara, chama e atribui a função
    const n1 = await lerNumero('Nota 1: ');
    const n2 = await lerNumero('Nota 2: ');
    const n3 = await lerNumero('Nota 3: ');
    // Adiciona validação extra para notas entre 0 e 10
    // O método `some` verifica se *alguma* nota no array não está entre 0 e 10.
    if ([n1, n2, n3].some(nota => nota < 0 || nota > 10)) {
        console.log('\nErro: As notas devem estar entre 0 e 10.\n');
    }
    else {
        const media = (n1 + n2 + n3) / 3;
        // `toFixed(2)` formata a média para duas casas decimais.
        console.log(`\nMédia: ${media.toFixed(2)}\n`);
    }
    await pausar();
}
// 4. Converter Celsius para Fahrenheit
/**
 * @function celsiusParaFahrenheit
 * @description Converte uma temperatura de Celsius para Fahrenheit.
 */
function celsiusParaFahrenheit() {
    // Estas linhas são geradas pelo compilador TypeScript para suportar async/await em ambientes mais antigos.
    // O código original em TypeScript seria mais limpo, sem `_a`, `_b`, etc.
    return __awaiter(this, void 0, void 0, function () {
        var celsius, _a, fahrenheit; //declarando as variáveis com _a para auxiliar na conversão
        return __generator(this, function (_b) {
            switch (_b.label) {
                case 0:
                    console.log('\nExercício 4: Converter Celsius para Fahrenheit');
                    _a = Number; // prepara a conversão a variável
                    return [4 /*yield*/, perguntar('A temperatura em Celsius é: ')]; // mostra a saída
                case 1:
                    celsius = _a.apply(void 0, [_b.sent()]);
                    fahrenheit = (celsius * 9 / 5) + 32; // operação padrão para calcular a conversão
                    console.log("Fahrenheit: ".concat(fahrenheit.toFixed(2)));
                    return [4 /*yield*/, pausar()]; // pausa para mostrar o resultado na saída
                case 2:
                    _b.sent();
                    return [2 /*return*/]; // encerra a operação
            }
        });
    });
}
// 5. Exibir números pares de 1 a 20
/**
 * @function exibirPares
 * @description Exibe todos os números pares de 1 a 20.
 */
function exibirPares() { // função para exibir os números pares
    // Novamente, boilerplate de async/await.
    return __awaiter(this, void 0, void 0, function () {
        var pares, i; // declarando as variáveis
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    console.log('\nExercício 5: Exibir números pares de 1 a 20');
                    pares = [];
                    // Loop de 1 a 20.
                    for (i = 1; i <= 20; i++) {
                        if (i % 2 === 0) // Verifica se o número é par usando o operador módulo.
                            pares.push(i); // Adiciona o número par ao array.
                    }
                    // Junta os números pares com ", " para uma saída legível.
                    console.log("Pares de 1 a 20:", pares.join(", "));
                    return [4 /*yield*/, pausar()];
                case 1:
                    _a.sent();
                    return [2 /*return*/];
            }
        });
    });
}
// 6. Ler 5 números e armazenar em array
/**
 * @function lerNumerosEmArray
 * @description Pede 5 números ao usuário e os armazena em um array, exibindo-o no final.
 */
function lerNumerosEmArray() {
    return __awaiter(this, void 0, void 0, function () {
        var numeros, i, num, _a;
        return __generator(this, function (_b) {
            switch (_b.label) {
                case 0:
                    console.log('\nExercício 6: Ler 5 números e armazenar em array');
                    numeros = [];
                    i = 0;
                    _b.label = 1;
                case 1:
                    if (!(i < 5))
                        return [3 /*break*/, 4]; // Loop para ler 5 números.
                    _a = Number;
                    return [4 /*yield*/, perguntar("Digite o n\u00FAmero ".concat(i + 1, ": "))];
                case 2:
                    num = _a.apply(void 0, [_b.sent()]); // Converte a entrada para número.
                    numeros.push(num); // Adiciona o número ao array.
                    _b.label = 3;
                case 3:
                    i++;
                    return [3 /*break*/, 1];
                case 4:
                    console.log("Números digitados:", numeros);
                    return [4 /*yield*/, pausar()];
                case 5:
                    _b.sent();
                    return [2 /*return*/];
            }
        });
    });
}
// 7. Encontrar maior número em um array
/**
 * @function maiorNumeroArray
 * @description Pede uma série de números separados por espaço, os converte para um array
 * e encontra o maior número.
 */
function maiorNumeroArray() {
    return __awaiter(this, void 0, void 0, function () {
        var numsStr, nums, maior;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    console.log('\nExercício 7: Encontrar maior número em um array');
                    return [4 /*yield*/, perguntar("Digite números separados por espaço: ")];
                case 1:
                    numsStr = _a.sent();
                    // Divide a string por espaços e converte cada parte para número.
                    // `map(Number)` é uma forma concisa de fazer a conversão.
                    nums = numsStr.split(' ').map(Number);
                    // `Math.max.apply(Math, nums)` é uma forma de passar um array de números
                    // para `Math.max` que espera argumentos individuais.
                    maior = Math.max.apply(Math, nums);
                    console.log("Maior n\u00FAmero: ".concat(maior));
                    return [4 /*yield*/, pausar()];
                case 2:
                    _a.sent();
                    return [2 /*return*/];
            }
        });
    });
}
// 8. Contar vogais em uma string
/**
 * @function contarVogais
 * @description Pede uma string ao usuário e conta o número de vogais (incluindo acentuadas).
 */
function contarVogais() {
    return __awaiter(this, void 0, void 0, function () {
        var texto, vogais;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    console.log('\nExercício 8: Contar vogais em uma string');
                    return [4 /*yield*/, perguntar("Digite uma string: ")];
                case 1:
                    texto = _a.sent();
                    // Usa uma expressão regular para encontrar todas as vogais (maiúsculas e minúsculas, com e sem acento).
                    // `g` para todas as ocorrências, `i` para ignorar case.
                    // O `?` após `vogais` (operador de encadeamento opcional) lida com o caso de não haver vogais.
                    vogais = texto.match(/[aeiouáéíóúâêîôûãõ]/gi);
                    console.log("Quantidade de vogais: ".concat(vogais ? vogais.length : 0));
                    return [4 /*yield*/, pausar()];
                case 2:
                    _a.sent();
                    return [2 /*return*/];
            }
        });
    });
}
// 9. Calculadora simples
/**
 * @function calculadoraSimples
 * @description Implementa uma calculadora básica que aceita dois números e uma operação (+, -, *, /).
 */
function calculadoraSimples() {
    return __awaiter(this, void 0, void 0, function () {
        var a, _a, op, b, _b, resultado, _c;
        return __generator(this, function (_d) {
            switch (_d.label) {
                case 0:
                    console.log('\nExercício 9: Calculadora simples');
                    _a = Number;
                    return [4 /*yield*/, perguntar("Valor A: ")];
                case 1:
                    a = _a.apply(void 0, [_d.sent()]);
                    return [4 /*yield*/, perguntar("Operação (+ - * /): ")];
                case 2:
                    op = _d.sent();
                    _b = Number;
                    return [4 /*yield*/, perguntar("Valor B: ")];
                case 3:
                    b = _b.apply(void 0, [_d.sent()]);
                    _c = op;
                    switch (_c) {
                        case '+':
                            return [3 /*break*/, 4];
                        case '-':
                            return [3 /*break*/, 5];
                        case '*':
                            return [3 /*break*/, 6];
                        case '/':
                            return [3 /*break*/, 7];
                    }
                    return [3 /*break*/, 8];
                case 4:
                    resultado = a + b;
                    return [3 /*break*/, 10];
                case 5:
                    resultado = a - b;
                    return [3 /*break*/, 10];
                case 6:
                    resultado = a * b;
                    return [3 /*break*/, 10];
                case 7:
                    // Tratamento para divisão por zero. Retorna NaN (Not a Number) se o divisor for zero.
                    resultado = b !== 0 ? a / b : NaN;
                    return [3 /*break*/, 10];
                case 8:
                    console.log("Operação inválida.");
                    return [4 /*yield*/, pausar()];
                case 9:
                    _d.sent();
                    return [2 /*return*/];
                case 10:
                    console.log("Resultado: ".concat(resultado));
                    return [4 /*yield*/, pausar()];
                case 11:
                    _d.sent();
                    return [2 /*return*/];
            }
        });
    });
}
// 10. Ordenar array em ordem crescente
/**
 * @function ordenarArray
 * @description Pede uma série de números separados por espaço e os exibe em ordem crescente.
 */
function ordenarArray() {
    return __awaiter(this, void 0, void 0, function () {
        var entrada, numeros;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    console.log('\nExercício 10: Ordenar array em ordem crescente');
                    return [4 /*yield*/, perguntar("Digite números separados por espaço: ")];
                case 1:
                    entrada = _a.sent();
                    // Divide a entrada, converte para números e então usa o método `sort`.
                    // A função `(a, b) => a - b` garante uma ordenação numérica crescente.
                    numeros = entrada.split(" ").map(Number).sort(function (a, b) { return a - b; });
                    console.log("Ordenado:", numeros);
                    return [4 /*yield*/, pausar()];
                case 2:
                    _a.sent();
                    return [2 /*return*/];
            }
        });
    });
}
// 11. Classe Pessoa
/**
 * @function classePessoa
 * @description Demonstra a criação e uso de uma classe `Pessoa` com propriedades `nome` e `idade`,
 * e um método `apresentar`.
 */
function classePessoa() {
    return __awaiter(this, void 0, void 0, function () {
        var Pessoa, nome, idade, _a, p;
        return __generator(this, function (_b) {
            switch (_b.label) {
                case 0:
                    console.log('\nExercício 11: Classe Pessoa');
                    // Definição da classe Pessoa.
                    // Em um arquivo .ts, você escreveria `class Pessoa { ... }`.
                    // A sintaxe `/** @class */ (function () { ... }())` é o que o TypeScript compila para ES5.
                    Pessoa = /** @class */ (function () {
                        function Pessoa(nome, idade) {
                            this.nome = nome;
                            this.idade = idade;
                        }
                        Pessoa.prototype.apresentar = function () {
                            console.log("Ol\u00E1, meu nome \u00E9 ".concat(this.nome, " e tenho ").concat(this.idade, " anos."));
                        };
                        return Pessoa;
                    }());
                    return [4 /*yield*/, perguntar('Nome: ')];
                case 1:
                    nome = _b.sent();
                    _a = Number;
                    return [4 /*yield*/, perguntar('Idade: ')];
                case 2:
                    idade = _a.apply(void 0, [_b.sent()]);
                    // Instancia a classe Pessoa.
                    p = new Pessoa(nome, idade);
                    // Chama o método `apresentar`.
                    p.apresentar();
                    return [4 /*yield*/, pausar()];
                case 3:
                    _b.sent();
                    return [2 /*return*/];
            }
        });
    });
}
// 12. Classe Aluno
/**
 * @function classeAluno
 * @description Demonstra uma classe `Aluno` que herda (implicitamente, aqui está aninhada)
 * características de uma "pessoa" (nome) e adiciona notas para calcular a média.
 */
function classeAluno() {
    return __awaiter(this, void 0, void 0, function () {
        var Aluno, nome, notas, i, _a, _b, _c, a;
        return __generator(this, function (_d) {
            switch (_d.label) {
                case 0:
                    console.log('\nExercício 12: Classe Aluno');
                    // Definição da classe Aluno.
                    Aluno = /** @class */ (function () {
                        function Aluno(nome, notas) {
                            this.nome = nome;
                            this.notas = notas;
                        }
                        Aluno.prototype.media = function () {
                            // Calcula a soma das notas usando `reduce` e divide pelo número de notas.
                            var m = this.notas.reduce(function (a, b) { return a + b; }, 0) / this.notas.length;
                            console.log("".concat(this.nome, " tem m\u00E9dia ").concat(m.toFixed(2)));
                        };
                        return Aluno;
                    }());
                    return [4 /*yield*/, perguntar('Nome: ')];
                case 1:
                    nome = _d.sent();
                    notas = [];
                    i = 0;
                    _d.label = 2;
                case 2:
                    if (!(i < 3))
                        return [3 /*break*/, 5]; // Loop para ler 3 notas.
                    _b = (_a = notas).push;
                    _c = Number;
                    return [4 /*yield*/, perguntar("Nota ".concat(i + 1, ": "))];
                case 3:
                    _b.apply(_a, [_c.apply(void 0, [_d.sent()])]); // Adiciona a nota ao array.
                    _d.label = 4;
                case 4:
                    i++;
                    return [3 /*break*/, 2];
                case 5:
                    a = new Aluno(nome, notas);
                    a.media();
                    return [4 /*yield*/, pausar()];
                case 6:
                    _d.sent();
                    return [2 /*return*/];
            }
        });
    });
}
// 13. Classe Carro
/**
 * @function classeCarro
 * @description Demonstra a criação e uso de uma classe `Carro` com propriedades `modelo` e `ano`,
 * e um método `exibir`.
 */
function classeCarro() {
    return __awaiter(this, void 0, void 0, function () {
        var Carro, modelo, ano, _a, c;
        return __generator(this, function (_b) {
            switch (_b.label) {
                case 0:
                    console.log('\nExercício 13: Classe Carro');
                    // Definição da classe Carro.
                    Carro = /** @class */ (function () {
                        function Carro(modelo, ano) {
                            this.modelo = modelo;
                            this.ano = ano;
                        }
                        Carro.prototype.exibir = function () {
                            console.log("Carro: ".concat(this.modelo, ", Ano: ").concat(this.ano));
                        };
                        return Carro;
                    }());
                    return [4 /*yield*/, perguntar('Modelo: ')];
                case 1:
                    modelo = _b.sent();
                    _a = Number;
                    return [4 /*yield*/, perguntar('Ano: ')];
                case 2:
                    ano = _a.apply(void 0, [_b.sent()]);
                    c = new Carro(modelo, ano);
                    c.exibir();
                    return [4 /*yield*/, pausar()];
                case 3:
                    _b.sent();
                    return [2 /*return*/];
            }
        });
    });
}
// 14. Tabuada
/**
 * @function tabuada
 * @description Calcula e exibe a tabuada de um número fornecido pelo usuário (de 1 a 10).
 */
function tabuada() {
    return __awaiter(this, void 0, void 0, function () {
        var n, _a, i;
        return __generator(this, function (_b) {
            switch (_b.label) {
                case 0:
                    console.log('\nExercício 14: Tabuada');
                    _a = Number;
                    return [4 /*yield*/, perguntar("Digite um número: ")];
                case 1:
                    n = _a.apply(void 0, [_b.sent()]);
                    for (i = 1; i <= 10; i++) { // Loop para multiplicar de 1 a 10.
                        console.log("".concat(n, " x ").concat(i, " = ").concat(n * i));
                    }
                    return [4 /*yield*/, pausar()];
                case 2:
                    _b.sent();
                    return [2 /*return*/];
            }
        });
    });
}
// 15. Calculadora de IMC
/**
 * @function calcularIMC
 * @description Calcula o Índice de Massa Corporal (IMC) com base no peso e altura do usuário
 * e fornece uma classificação.
 */
function calcularIMC() {
    return __awaiter(this, void 0, void 0, function () {
        var peso, _a, altura, _b, imc, classificacao;
        return __generator(this, function (_c) {
            switch (_c.label) {
                case 0:
                    console.log('\nExercício 15: Calculadora de IMC');
                    _a = Number;
                    return [4 /*yield*/, perguntar("Peso (kg): ")];
                case 1:
                    peso = _a.apply(void 0, [_c.sent()]);
                    _b = Number;
                    return [4 /*yield*/, perguntar("Altura (m): ")];
                case 2:
                    altura = _b.apply(void 0, [_c.sent()]);
                    imc = peso / (altura * altura); // Fórmula do IMC.
                    classificacao = "";
                    // Lógica para classificar o IMC.
                    if (imc < 18.5)
                        classificacao = "Abaixo do peso";
                    else if (imc < 24.9)
                        classificacao = "Peso normal";
                    else if (imc < 29.9)
                        classificacao = "Sobrepeso";
                    else
                        classificacao = "Obesidade";
                    console.log("IMC: ".concat(imc.toFixed(2), " - ").concat(classificacao));
                    return [4 /*yield*/, pausar()];
                case 3:
                    _c.sent();
                    return [2 /*return*/];
            }
        });
    });
}
// 16. Validar senha
/**
 * @function validarSenha
 * @description Verifica se uma senha digitada é "forte" com base em critérios simples:
 * comprimento mínimo e presença de letras maiúsculas e números.
 */
function validarSenha() {
    return __awaiter(this, void 0, void 0, function () {
        var senha, forte;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    console.log('\nExercício 16: Validar senha');
                    return [4 /*yield*/, perguntar("Digite uma senha: ")];
                case 1:
                    senha = _a.sent();
                    // `test()` de regex verifica se a string contém o padrão.
                    forte = senha.length >= 8 && /[A-Z]/.test(senha) && /[0-9]/.test(senha);
                    console.log(forte ? "Senha forte!" : "Senha fraca! Use letras maiúsculas, números e pelo menos 8 caracteres.");
                    return [4 /*yield*/, pausar()];
                case 2:
                    _a.sent();
                    return [2 /*return*/];
            }
        });
    });
}
// 17. Jogo de adivinhação
/**
 * @function jogoAdivinhacao
 * @description Um jogo simples onde o usuário tenta adivinhar um número secreto entre 1 e 100.
 */
function jogoAdivinhacao() {
    return __awaiter(this, void 0, void 0, function () {
        var segredo, tentativas, acertou, chute, _a;
        return __generator(this, function (_b) {
            switch (_b.label) {
                case 0:
                    console.log('\nExercício 17: Jogo de adivinhação');
                    // Gera um número inteiro aleatório entre 1 e 100.
                    segredo = Math.floor(Math.random() * 100) + 1;
                    tentativas = 0, acertou = false;
                    _b.label = 1;
                case 1:
                    if (!!acertou)
                        return [3 /*break*/, 3]; // Loop continua até o usuário acertar.
                    tentativas++;
                    _a = Number;
                    return [4 /*yield*/, perguntar("Adivinhe um número entre 1 e 100: ")];
                case 2:
                    chute = _a.apply(void 0, [_b.sent()]);
                    if (chute === segredo) {
                        console.log("Parab\u00E9ns! Voc\u00EA acertou em ".concat(tentativas, " tentativas."));
                        acertou = true; // Define como verdadeiro para sair do loop.
                    }
                    else if (chute < segredo) {
                        console.log("Mais!");
                    }
                    else {
                        console.log("Menos!");
                    }
                    return [3 /*break*/, 1];
                case 3: return [4 /*yield*/, pausar()];
                case 4:
                    _b.sent();
                    return [2 /*return*/];
            }
        });
    });
}
// 18. Contar palavras em uma string
/**
 * @function contarPalavras
 * @description Pede uma frase ao usuário e conta o número de palavras nela.
 */
function contarPalavras() {
    return __awaiter(this, void 0, void 0, function () {
        var frase, palavras;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    console.log('\nExercício 18: Contar palavras em uma string');
                    return [4 /*yield*/, perguntar("Digite uma frase: ")];
                case 1:
                    frase = _a.sent();
                    // `trim()` remove espaços em branco no início e fim.
                    // `split(/\s+/)` divide a string por um ou mais espaços em branco,
                    // lidando com múltiplos espaços entre palavras.
                    palavras = frase.trim().split(/\s+/);
                    console.log("Total de palavras: ".concat(palavras.length));
                    return [4 /*yield*/, pausar()];
                case 2:
                    _a.sent();
                    return [2 /*return*/];
            }
        });
    });
}
// ================= MENU PRINCIPAL ===================
/**
 * @function exibirMenu
 * @description Exibe um menu interativo de exercícios e chama a função correspondente
 * com base na escolha do usuário. Continua exibindo o menu até o usuário escolher sair (opção 0).
 */
function exibirMenu() {
    return __awaiter(this, void 0, void 0, function () {
        var opcao, _a;
        return __generator(this, function (_b) {
            switch (_b.label) {
                case 0:
                    console.log("\n=== MENU DE EXERCÍCIOS ===");
                    console.log("1 - Soma de dois números");
                    console.log("2 - Verificar par ou ímpar");
                    console.log("3 - Calcular média de três notas");
                    console.log("4 - Converter Celsius para Fahrenheit");
                    console.log("5 - Exibir números pares de 1 a 20");
                    console.log("6 - Ler 5 números e armazenar em array");
                    console.log("7 - Encontrar maior número em um array");
                    console.log("8 - Contar vogais em uma string");
                    console.log("9 - Calculadora simples");
                    console.log("10 - Ordenar array em ordem crescente");
                    console.log("11 - Classe Pessoa");
                    console.log("12 - Classe Aluno");
                    console.log("13 - Classe Carro");
                    console.log("14 - Tabuada");
                    console.log("15 - Calculadora de IMC");
                    console.log("16 - Validar senha");
                    console.log("17 - Jogo de adivinhação");
                    console.log("18 - Contar palavras em uma string");
                    console.log("0 - Sair");
                    return [4 /*yield*/, perguntar("Escolha uma opção (0-18): ")];
                case 1:
                    opcao = _b.sent();
                    _a = opcao;
                    switch (_a) {
                        case '1':
                            return [3 /*break*/, 2];
                        case '2':
                            return [3 /*break*/, 4];
                        case '3':
                            return [3 /*break*/, 6];
                        case '4':
                            return [3 /*break*/, 8];
                        case '5':
                            return [3 /*break*/, 10];
                        case '6':
                            return [3 /*break*/, 12];
                        case '7':
                            return [3 /*break*/, 14];
                        case '8':
                            return [3 /*break*/, 16];
                        case '9':
                            return [3 /*break*/, 18];
                        case '10':
                            return [3 /*break*/, 20];
                        case '11':
                            return [3 /*break*/, 22];
                        case '12':
                            return [3 /*break*/, 24];
                        case '13':
                            return [3 /*break*/, 26];
                        case '14':
                            return [3 /*break*/, 28];
                        case '15':
                            return [3 /*break*/, 30];
                        case '16':
                            return [3 /*break*/, 32];
                        case '17':
                            return [3 /*break*/, 34];
                        case '18':
                            return [3 /*break*/, 36];
                        case '0':
                            return [3 /*break*/, 38];
                    }
                    return [3 /*break*/, 39];
                case 2:
                    return [4 /*yield*/, somaDoisNumeros()];
                case 3:
                    _b.sent();
                    return [3 /*break*/, 40];
                case 4:
                    return [4 /*yield*/, verificarParOuImpar()];
                case 5:
                    _b.sent();
                    return [3 /*break*/, 40];
                case 6:
                    return [4 /*yield*/, mediaTresNotas()];
                case 7:
                    _b.sent();
                    return [3 /*break*/, 40];
                case 8:
                    return [4 /*yield*/, celsiusParaFahrenheit()];
                case 9:
                    _b.sent();
                    return [3 /*break*/, 40];
                case 10:
                    return [4 /*yield*/, exibirPares()];
                case 11:
                    _b.sent();
                    return [3 /*break*/, 40];
                case 12:
                    return [4 /*yield*/, lerNumerosEmArray()];
                case 13:
                    _b.sent();
                    return [3 /*break*/, 40];
                case 14:
                    return [4 /*yield*/, maiorNumeroArray()];
                case 15:
                    _b.sent();
                    return [3 /*break*/, 40];
                case 16:
                    return [4 /*yield*/, contarVogais()];
                case 17:
                    _b.sent();
                    return [3 /*break*/, 40];
                case 18:
                    return [4 /*yield*/, calculadoraSimples()];
                case 19:
                    _b.sent();
                    return [3 /*break*/, 40];
                case 20:
                    return [4 /*yield*/, ordenarArray()];
                case 21:
                    _b.sent();
                    return [3 /*break*/, 40];
                case 22:
                    return [4 /*yield*/, classePessoa()];
                case 23:
                    _b.sent();
                    return [3 /*break*/, 40];
                case 24:
                    return [4 /*yield*/, classeAluno()];
                case 25:
                    _b.sent();
                    return [3 /*break*/, 40];
                case 26:
                    return [4 /*yield*/, classeCarro()];
                case 27:
                    _b.sent();
                    return [3 /*break*/, 40];
                case 28:
                    return [4 /*yield*/, tabuada()];
                case 29:
                    _b.sent();
                    return [3 /*break*/, 40];
                case 30:
                    return [4 /*yield*/, calcularIMC()];
                case 31:
                    _b.sent();
                    return [3 /*break*/, 40];
                case 32:
                    return [4 /*yield*/, validarSenha()];
                case 33:
                    _b.sent();
                    return [3 /*break*/, 40];
                case 34:
                    return [4 /*yield*/, jogoAdivinhacao()];
                case 35:
                    _b.sent();
                    return [3 /*break*/, 40];
                case 36:
                    return [4 /*yield*/, contarPalavras()];
                case 37:
                    _b.sent();
                    return [3 /*break*/, 40];
                case 38:
                    console.log("Saindo...");
                    return [3 /*break*/, 40];
                case 39:
                    console.log("Opção inválida!");
                    _b.label = 40;
                case 40:
                    if (opcao !== '0')
                        return [3 /*break*/, 0]; // Continua o loop do menu até a opção '0' ser selecionada.
                    _b.label = 41;
                case 41:
                    rl.close(); // Fecha a interface readline quando o programa termina.
                    return [2 /*return*/];
            }
        });
    });
}
// Inicia a execução do menu principal.
exibirMenu();