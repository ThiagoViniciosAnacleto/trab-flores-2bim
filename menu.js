"use strict";
// As linhas abaixo são geradas automaticamente pelo TypeScript/Babel ao compilar código assíncrono (async/await).
// Elas implementam o comportamento de `async`/`await` para ambientes que não o suportam nativamente
// (como navegadores ou versões mais antigas do Node.js) ou para garantir compatibilidade e otimizações.
// Em um ambiente de desenvolvimento moderno, trabalhando com TypeScript puro (.ts), você geralmente não as veria diretamente
// no seu código-fonte, pois são um resultado da transpilação (conversão de um código para outro).
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    // `adopt` é uma função auxiliar que garante que o valor retornado seja uma Promise.
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    // Retorna uma nova Promise que encapsula a lógica do gerador.
    return new (P || (P = Promise))(function (resolve, reject) {
        // `fulfilled` e `rejected` são callbacks para o sucesso e falha do gerador.
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        // `step` avança o gerador. Se `result.done` for true, a Promise é resolvida; caso contrário,
        // a Promise é encadeada com a próxima etapa do gerador.
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        // Inicia a execução do gerador.
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    // `_` é um objeto que armazena o estado do gerador, incluindo label (onde estamos), sent (último valor enviado),
    // trys (blocos try para tratamento de erros) e ops (operações do gerador).
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g = Object.create((typeof Iterator === "function" ? Iterator : Object).prototype);
    // Define os métodos `next`, `throw` e `return` para o objeto gerador.
    return g.next = verb(0), g["throw"] = verb(1), g["return"] = verb(2), typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    // `verb` cria funções para avançar o gerador com diferentes tipos de operação.
    function verb(n) { return function (v) { return step([n, v]); }; }
    // `step` é a função central que controla o fluxo do gerador.
    function step(op) {
        if (f) throw new TypeError("Generator is already executing."); // Garante que o gerador não seja executado simultaneamente.
        // Loop principal do gerador.
        while (g && (g = 0, op[0] && (_ = 0)), _) try {
            // Lógica para lidar com diferentes tipos de operações do gerador (yield, throw, return).
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done)
                return t;
            if (y = 0, t)
                op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0:
                case 1:
                    t = op;
                    break;
                case 4:
                    _.label++;
                    return { value: op[1], done: false }; // Representa um `yield`.
                case 5:
                    _.label++;
                    y = op[1];
                    op = [0];
                    continue;
                case 7:
                    op = _.ops.pop();
                    _.trys.pop();
                    continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) {
                        _ = 0;
                        continue;
                    }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) {
                        _.label = op[1];
                        break;
                    }
                    if (op[0] === 6 && _.label < t[1]) {
                        _.label = t[1];
                        t = op;
                        break;
                    }
                    if (t && _.label < t[2]) {
                        _.label = t[2];
                        _.ops.push(op);
                        break;
                    }
                    if (t[2])
                        _.ops.pop();
                    _.trys.pop();
                    continue;
            }
            op = body.call(thisArg, _);
        }
        catch (e) {
            op = [6, e];
            y = 0;
        } finally {
            f = t = 0;
        }
        if (op[0] & 5)
            throw op[1];
        return { value: op[0] ? op[1] : void 0, done: true }; // Finaliza a execução do gerador.
    }
};
// Define que este arquivo é um módulo, o que é comum em TypeScript.
// Permite importar/exportar funcionalidades para outros arquivos, seguindo o padrão ES Modules.
Object.defineProperty(exports, "__esModule", { value: true });
// Importa o módulo 'readline' do Node.js, que fornece uma interface para ler dados de um stream de entrada
// (como o teclado) uma linha por vez.
var readline = require("readline");
// Cria uma instância da interface `readline`, configurando-a para usar a entrada padrão (`process.stdin`)
// e a saída padrão (`process.stdout`) do processo.
var rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});
/**
 * @function perguntar
 * @description Converte uma função de pergunta baseada em callback do `readline` em uma **Promise**.
 * Isso é essencial para poder usar `async/await` com as interações do usuário, tornando o código
 * sequencial e mais legível.
 * @param {string} pergunta - A string da pergunta a ser exibida para o usuário no console.
 * @returns {Promise<string>} Uma Promise que será resolvida com a resposta do usuário (string)
 * quando ele pressionar Enter.
 */
function perguntar(pergunta) {
    // Retorna uma nova Promise que, quando criada, executa `rl.question`.
    // O `resolve` da Promise é passado como callback para `rl.question`, então a resposta
    // do usuário diretamente resolve a Promise.
    return new Promise(function (resolve) { return rl.question(pergunta, resolve); });
}
/**
 * @function pausar
 * @description Uma função utilitária para pausar a execução do programa no console até que
 * o usuário pressione a tecla Enter. Isso é útil para que os resultados dos exercícios
 * permaneçam visíveis na tela antes de o menu ser exibido novamente.
 */
function pausar() {
    // `__awaiter` e `__generator` são a implementação gerada de `async/await`.
    // Em um código TypeScript original, seria simplesmente: `async function pausar() { ... }`
    return __awaiter(this, void 0, void 0, function () {
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    // Usa `await perguntar` para esperar pela entrada do usuário.
                    return [4 /*yield*/, perguntar('\nPressione Enter para voltar ao menu...')];
                case 1:
                    _a.sent(); // O valor retornado (a string "Enter") é ignorado.
                    return [2 /*return*/];
            }
        });
    });
}
// ---
// ## 1. Soma de dois números
/**
 * @function somaDoisNumeros
 * @description Pede dois números inteiros ou decimais ao usuário, valida a entrada
 * para garantir que são realmente números, e então exibe a soma dos dois.
 */
async function somaDoisNumeros() {
    console.log('\nExercício 1: Soma de dois números');
    // Função auxiliar aninhada para validar entrada numérica.
    // É uma **ótima prática** encapsular a lógica de validação de entrada,
    // embora para reutilização em várias funções, seria ainda melhor
    // declará-la fora de cada função de exercício (por exemplo, como uma função global ou auxiliar).
    const lerNumero = async (mensagem) => {
        while (true) { // Loop infinito para continuar pedindo a entrada até que seja válida.
            const input = await perguntar(mensagem); // Pede a entrada ao usuário.
            const numero = Number(input); // Tenta converter a string de entrada para um número.
            if (!isNaN(numero)) { // `isNaN` (is Not a Number) verifica se a conversão resultou em um número inválido.
                return numero; // Se for um número válido, retorna-o.
            }
            console.log('Por favor, digite um número válido!'); // Mensagem de erro para entrada inválida.
        }
    };
    // Solicita o primeiro e o segundo número usando a função `lerNumero` para garantir entradas válidas.
    const a = await lerNumero('Digite o primeiro número: ');
    const b = await lerNumero('Digite o segundo número: ');
    // Exibe o resultado da soma usando template literals (crases ` `) para formatação fácil.
    console.log(`\n${a} + ${b} = ${a + b}\n`);
    await pausar(); // Pausa para o usuário ver o resultado.
}
// ---
// ## 2. Verificar par ou ímpar
/**
 * @function verificarParOuImpar
 * @description Pede um número ao usuário e, em seguida, determina e informa se o número
 * digitado é par ou ímpar.
 */
async function verificarParOuImpar() {
    console.log('\nExercício 2: Verificar par ou ímpar');
    // **Refatoração recomendada**: Em vez de duplicar esta função `lerNumero` em cada exercício,
    // seria mais eficiente declará-la uma única vez no escopo global ou em um módulo separado
    // e importá-la/reutilizá-la. Isso evita a repetição de código (DRY - Don't Repeat Yourself).
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
    // Usa o **operador ternário** (`condição ? valorSeVerdadeiro : valorSeFalso`) para uma
    // verificação concisa e atribuição direta da string de saída.
    // O operador `%` (módulo) retorna o resto da divisão. Se o resto da divisão por 2 for 0, o número é par.
    console.log(`\nO número ${numero} é ${numero % 2 === 0 ? 'PAR' : 'ÍMPAR'}\n`);
    await pausar();
}
// ---
// ## 3. Calcular média de três notas
/**
 * @function mediaTresNotas
 * @description Solicita três notas ao usuário, com validação para que estejam entre 0 e 10,
 * e então calcula e exibe a média aritmética dessas notas.
 */
async function mediaTresNotas() { // Função principal para calcular a média
    console.log('\nExercício 3: Calcular média de três notas');
    // A função `lerNumero` é novamente duplicada aqui. Para um código mais limpo e manutenível,
    // considere movê-la para um escopo superior para ser reutilizada.
    const lerNumero = async (mensagem) => {
        while (true) {
            const input = await perguntar(mensagem);
            const numero = Number(input);
            if (!isNaN(numero))
                return numero;
            console.log('Por favor, digite um número válido!');
        }
    };
    // Chama a função `lerNumero` para obter cada uma das três notas.
    const n1 = await lerNumero('Nota 1: ');
    const n2 = await lerNumero('Nota 2: ');
    const n3 = await lerNumero('Nota 3: ');
    // Adiciona uma validação específica para as notas, garantindo que estejam no intervalo de 0 a 10.
    // O método `.some()` verifica se **pelo menos um** elemento no array satisfaz a condição.
    if ([n1, n2, n3].some(nota => nota < 0 || nota > 10)) {
        console.log('\nErro: As notas devem estar entre 0 e 10.\n');
    }
    else {
        const media = (n1 + n2 + n3) / 3; // Calcula a média.
        // `toFixed(2)` é usado para formatar a média com exatamente duas casas decimais,
        // o que é comum em cálculos de média para exibir um valor mais limpo.
        console.log(`\nMédia: ${media.toFixed(2)}\n`);
    }
    await pausar();
}
// ---
// ## 4. Converter Celsius para Fahrenheit
/**
 * @function celsiusParaFahrenheit
 * @description Realiza a conversão de uma temperatura fornecida em graus Celsius
 * para a escala Fahrenheit, exibindo o resultado formatado.
 */
function celsiusParaFahrenheit() {
    // As linhas geradas pelo TypeScript (`__awaiter`, `__generator`, `_a`, `_b`, etc.)
    // são a forma como o compilador transforma o código `async/await` para ser compatível
    // com versões mais antigas do JavaScript (ex: ES5). No TypeScript original, seria:
    // async function celsiusParaFahrenheit() {
    //     console.log('\nExercício 4: Converter Celsius para Fahrenheit');
    //     const celsiusInput = await perguntar('A temperatura em Celsius é: ');
    //     const celsius = Number(celsiusInput);
    //     const fahrenheit = (celsius * 9 / 5) + 32;
    //     console.log(`Fahrenheit: ${fahrenheit.toFixed(2)}`);
    //     await pausar();
    // }
    return __awaiter(this, void 0, void 0, function () {
        var celsius, _a, fahrenheit; // Declarando as variáveis. `_a` é um identificador gerado pelo compilador.
        return __generator(this, function (_b) {
            switch (_b.label) {
                case 0:
                    console.log('\nExercício 4: Converter Celsius para Fahrenheit');
                    _a = Number; // Prepara a função Number para conversão.
                    // Aguarda a entrada do usuário para a temperatura em Celsius.
                    return [4 /*yield*/, perguntar('A temperatura em Celsius é: ')];
                case 1:
                    celsius = _a.apply(void 0, [_b.sent()]); // Converte a entrada para número e atribui a `celsius`.
                    fahrenheit = (celsius * 9 / 5) + 32; // Fórmula padrão de conversão.
                    // Exibe o resultado em Fahrenheit, formatado com duas casas decimais.
                    console.log("Fahrenheit: ".concat(fahrenheit.toFixed(2)));
                    return [4 /*yield*/, pausar()]; // Pausa para o usuário.
                case 2:
                    _b.sent();
                    return [2 /*return*/]; // Encerra a execução da função.
            }
        });
    });
}
// ---
// ## 5. Exibir números pares de 1 a 20
/**
 * @function exibirPares
 * @description Percorre o intervalo de 1 a 20 e identifica e exibe todos os números pares
 * encontrados, apresentando-os em uma lista separada por vírgulas.
 */
function exibirPares() { // Função para exibir os números pares
    // Boilerplate gerado pelo TypeScript para async/await.
    return __awaiter(this, void 0, void 0, function () {
        var pares, i; // `pares` armazenará os números pares; `i` é o contador do loop.
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    console.log('\nExercício 5: Exibir números pares de 1 a 20');
                    pares = []; // Inicializa um array vazio para guardar os números pares.
                    // Loop `for` que itera de 1 a 20.
                    for (i = 1; i <= 20; i++) {
                        if (i % 2 === 0) // Condição para verificar se o número é par: o resto da divisão por 2 deve ser 0.
                            pares.push(i); // Adiciona o número par ao array `pares`.
                    }
                    // Exibe o array de números pares. `join(", ")` converte o array em uma string
                    // onde os elementos são separados por ", ".
                    console.log("Pares de 1 a 20:", pares.join(", "));
                    return [4 /*yield*/, pausar()];
                case 1:
                    _a.sent();
                    return [2 /*return*/];
            }
        });
    });
}
// ---
// ## 6. Ler 5 números e armazenar em array
/**
 * @function lerNumerosEmArray
 * @description Solicita ao usuário que digite cinco números individualmente e os armazena
 * em uma estrutura de dados de array, exibindo o array completo no final.
 */
function lerNumerosEmArray() {
    return __awaiter(this, void 0, void 0, function () {
        var numeros, i, num, _a;
        return __generator(this, function (_b) {
            switch (_b.label) {
                case 0:
                    console.log('\nExercício 6: Ler 5 números e armazenar em array');
                    numeros = []; // Inicializa um array vazio para armazenar os números.
                    i = 0; // Inicializa o contador do loop.
                    _b.label = 1;
                case 1:
                    if (!(i < 5))
                        return [3 /*break*/, 4]; // O loop continuará por 5 iterações (para ler 5 números).
                    _a = Number; // Prepara para converter a entrada para número.
                    // Pede o número atual ao usuário (ex: "Digite o número 1:", "Digite o número 2:", etc.).
                    return [4 /*yield*/, perguntar("Digite o n\u00FAmero ".concat(i + 1, ": "))];
                case 2:
                    num = _a.apply(void 0, [_b.sent()]); // Converte a entrada para número e a armazena em `num`.
                    numeros.push(num); // Adiciona o número lido ao final do array `numeros`.
                    _b.label = 3;
                case 3:
                    i++; // Incrementa o contador para a próxima iteração.
                    return [3 /*break*/, 1]; // Volta para o início do loop `while`.
                case 4:
                    console.log("Números digitados:", numeros); // Exibe o array completo de números digitados.
                    return [4 /*yield*/, pausar()];
                case 5:
                    _b.sent();
                    return [2 /*return*/];
            }
        });
    });
}
// ---
// ## 7. Encontrar maior número em um array
/**
 * @function maiorNumeroArray
 * @description Solicita ao usuário uma sequência de números separados por espaço,
 * converte-os em um array de números e então encontra e exibe o maior valor presente no array.
 */
function maiorNumeroArray() {
    return __awaiter(this, void 0, void 0, function () {
        var numsStr, nums, maior;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    console.log('\nExercício 7: Encontrar maior número em um array');
                    // Pede uma string de números separados por espaço.
                    return [4 /*yield*/, perguntar("Digite números separados por espaço: ")];
                case 1:
                    numsStr = _a.sent();
                    // Converte a string de entrada em um array de números:
                    // 1. `split(' ')` divide a string em um array de strings usando o espaço como delimitador.
                    // 2. `.map(Number)` itera sobre cada string no array e a converte para um tipo Number.
                    nums = numsStr.split(' ').map(Number);
                    // `Math.max()` é uma função JavaScript que retorna o maior de zero ou mais números.
                    // `apply(Math, nums)` é usado aqui porque `Math.max` espera argumentos individuais
                    // (ex: `Math.max(1, 5, 3)`), não um array. `apply` permite passar um array como argumentos.
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
// ---
// ## 8. Contar vogais em uma string
/**
 * @function contarVogais
 * @description Pede ao usuário que digite uma frase ou palavra e então conta o número total
 * de vogais (incluindo as acentuadas e considerando maiúsculas e minúsculas) presentes na string.
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
                    // Usa uma **expressão regular** (`RegExp`) para encontrar todas as vogais.
                    // `/[aeiouáéíóúâêîôûãõ]/` : Padrão que corresponde a qualquer uma das vogais listadas, incluindo acentuadas.
                    // `g` (global flag): Encontra todas as ocorrências na string, não apenas a primeira.
                    // `i` (case-insensitive flag): Ignora a diferença entre maiúsculas e minúsculas (A é igual a a).
                    // `texto.match(...)` retorna um array de todas as correspondências ou `null` se nenhuma for encontrada.
                    vogais = texto.match(/[aeiouáéíóúâêîôûãõ]/gi);
                    // Exibe a contagem de vogais. Se `vogais` for `null` (nenhuma vogal encontrada),
                    // usa 0; caso contrário, usa o `length` do array de vogais.
                    console.log("Quantidade de vogais: ".concat(vogais ? vogais.length : 0));
                    return [4 /*yield*/, pausar()];
                case 2:
                    _a.sent();
                    return [2 /*return*/];
            }
        });
    });
}
// ---
// ## 9. Calculadora simples
/**
 * @function calculadoraSimples
 * @description Implementa uma calculadora básica que aceita dois valores numéricos
 * e uma operação matemática (+, -, *, /) para realizar o cálculo e exibir o resultado.
 */
function calculadoraSimples() {
    return __awaiter(this, void 0, void 0, function () {
        var a, _a, op, b, _b, resultado, _c;
        return __generator(this, function (_d) {
            switch (_d.label) {
                case 0:
                    console.log('\nExercício 9: Calculadora simples');
                    _a = Number; // Prepara para a conversão do primeiro operando.
                    return [4 /*yield*/, perguntar("Valor A: ")];
                case 1:
                    a = _a.apply(void 0, [_d.sent()]); // Lê e converte o primeiro número.
                    return [4 /*yield*/, perguntar("Operação (+ - * /): ")];
                case 2:
                    op = _d.sent(); // Lê o operador como uma string.
                    _b = Number; // Prepara para a conversão do segundo operando.
                    return [4 /*yield*/, perguntar("Valor B: ")];
                case 3:
                    b = _b.apply(void 0, [_d.sent()]); // Lê e converte o segundo número.
                    _c = op; // Usa o operador para decidir qual caso do `switch` executar.
                    switch (_c) {
                        case '+':
                            return [3 /*break*/, 4]; // Se a operação for '+', vai para o case 4.
                        case '-':
                            return [3 /*break*/, 5]; // Se a operação for '-', vai para o case 5.
                        case '*':
                            return [3 /*break*/, 6]; // Se a operação for '*', vai para o case 6.
                        case '/':
                            return [3 /*break*/, 7]; // Se a operação for '/', vai para o case 7.
                    }
                    return [3 /*break*/, 8]; // Se nenhuma das operações válidas for encontrada, vai para o default (case 8).
                case 4:
                    resultado = a + b; // Realiza a soma.
                    return [3 /*break*/, 10]; // Sai do switch.
                case 5:
                    resultado = a - b; // Realiza a subtração.
                    return [3 /*break*/, 10];
                case 6:
                    resultado = a * b; // Realiza a multiplicação.
                    return [3 /*break*/, 10];
                case 7:
                    // Tratamento para evitar divisão por zero:
                    // Se `b` (o divisor) não for zero, realiza a divisão; caso contrário, atribui `NaN` (Not a Number).
                    resultado = b !== 0 ? a / b : NaN;
                    return [3 /*break*/, 10];
                case 8:
                    console.log("Operação inválida."); // Mensagem de erro para operação não reconhecida.
                    return [4 /*yield*/, pausar()]; // Pausa e retorna para o menu.
                case 9:
                    _d.sent();
                    return [2 /*return*/];
                case 10:
                    console.log("Resultado: ".concat(resultado)); // Exibe o resultado do cálculo.
                    return [4 /*yield*/, pausar()];
                case 11:
                    _d.sent();
                    return [2 /*return*/];
            }
        });
    });
}
// ---
// ## 10. Ordenar array em ordem crescente
/**
 * @function ordenarArray
 * @description Pede ao usuário uma sequência de números (separados por espaço),
 * converte-os em um array e então os organiza em ordem crescente antes de exibi-los.
 */
function ordenarArray() {
    return __awaiter(this, void 0, void 0, function () {
        var entrada, numeros;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    console.log('\nExercício 10: Ordenar array em ordem crescente');
                    // Solicita ao usuário a entrada de números separados por espaço.
                    return [4 /*yield*/, perguntar("Digite números separados por espaço: ")];
                case 1:
                    entrada = _a.sent();
                    // Processamento da entrada:
                    // 1. `split(" ")`: Divide a string de entrada em um array de substrings (números como strings).
                    // 2. `.map(Number)`: Converte cada substring do array para um número.
                    // 3. `.sort(function (a, b) { return a - b; })`: Ordena o array numericamente.
                    //    - A função de comparação `(a, b) => a - b` é padrão para ordenar números em ordem crescente.
                    //    - Se `a - b` for negativo, `a` vem antes de `b`.
                    //    - Se for positivo, `b` vem antes de `a`.
                    //    - Se for zero, a ordem relativa não muda.
                    numeros = entrada.split(" ").map(Number).sort(function (a, b) { return a - b; });
                    console.log("Ordenado:", numeros); // Exibe o array ordenado.
                    return [4 /*yield*/, pausar()];
                case 2:
                    _a.sent();
                    return [2 /*return*/];
            }
        });
    });
}
// ---
// ## 11. Classe Pessoa
/**
 * @function classePessoa
 * @description Demonstra o conceito de **Programação Orientada a Objetos (POO)** com a criação
 * e uso de uma classe `Pessoa`. A classe possui propriedades (`nome`, `idade`) e um método
 * (`apresentar`) para descrever uma pessoa.
 */
function classePessoa() {
    return __awaiter(this, void 0, void 0, function () {
        var Pessoa, nome, idade, _a, p;
        return __generator(this, function (_b) {
            switch (_b.label) {
                case 0:
                    console.log('\nExercício 11: Classe Pessoa');
                    // Definição da classe Pessoa. Em um arquivo `.ts` (TypeScript puro), você escreveria:
                    // class Pessoa {
                    //     nome: string;
                    //     idade: number;
                    //     constructor(nome: string, idade: number) {
                    //         this.nome = nome;
                    //         this.idade = idade;
                    //     }
                    //     apresentar() {
                    //         console.log(`Olá, meu nome é ${this.nome} e tenho ${this.idade} anos.`);
                    //     }
                    // }
                    // A sintaxe `/** @class */ (function () { ... }())` é o código JavaScript gerado pelo TypeScript
                    // quando compilado para uma versão mais antiga (como ES5), garantindo a compatibilidade.
                    Pessoa = /** @class */ (function () {
                        // O `constructor` é um método especial que é chamado quando um novo objeto (instância) da classe é criado.
                        function Pessoa(nome, idade) {
                            this.nome = nome; // `this.nome` se refere à propriedade `nome` do objeto atual.
                            this.idade = idade; // `this.idade` se refere à propriedade `idade` do objeto atual.
                        }
                        // `Pessoa.prototype.apresentar` define o método `apresentar` para todos os objetos `Pessoa`.
                        Pessoa.prototype.apresentar = function () {
                            console.log("Ol\u00E1, meu nome \u00E9 ".concat(this.nome, " e tenho ").concat(this.idade, " anos."));
                        };
                        return Pessoa;
                    }());
                    return [4 /*yield*/, perguntar('Nome: ')];
                case 1:
                    nome = _b.sent(); // Solicita e armazena o nome da pessoa.
                    _a = Number;
                    return [4 /*yield*/, perguntar('Idade: ')];
                case 2:
                    idade = _a.apply(void 0, [_b.sent()]); // Solicita e armazena a idade da pessoa, convertendo para número.
                    // Cria uma nova instância da classe `Pessoa` usando a palavra-chave `new`.
                    p = new Pessoa(nome, idade);
                    // Chama o método `apresentar` do objeto `p` para que ele se apresente.
                    p.apresentar();
                    return [4 /*yield*/, pausar()];
                case 3:
                    _b.sent();
                    return [2 /*return*/];
            }
        });
    });
}
// ---
// ## 12. Classe Aluno
/**
 * @function classeAluno
 * @description Demonstra uma classe `Aluno` que estende o conceito de uma pessoa,
 * adicionando a capacidade de gerenciar notas e calcular a média dessas notas.
 * (Nota: Embora não haja herança explícita de `Pessoa` aqui, o conceito de ter
 * `nome` e adicionar `notas` simula uma especialização).
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
                            this.nome = nome; // Propriedade para armazenar o nome do aluno.
                            this.notas = notas; // Propriedade para armazenar um array de notas do aluno.
                        }
                        Aluno.prototype.media = function () {
                            // Calcula a média das notas usando o método `reduce()`.
                            // `reduce()` aplica uma função a um acumulador e a cada elemento do array
                            // (da esquerda para a direita) para reduzir o array a um único valor.
                            // Aqui, ele soma todas as notas, começando com 0.
                            var m = this.notas.reduce(function (a, b) { return a + b; }, 0) / this.notas.length;
                            console.log("".concat(this.nome, " tem m\u00E9dia ").concat(m.toFixed(2))); // Exibe a média formatada.
                        };
                        return Aluno;
                    }());
                    return [4 /*yield*/, perguntar('Nome: ')];
                case 1:
                    nome = _d.sent(); // Pede o nome do aluno.
                    notas = []; // Inicializa um array vazio para as notas.
                    i = 0;
                    _d.label = 2;
                case 2:
                    if (!(i < 3))
                        return [3 /*break*/, 5]; // Loop para ler 3 notas.
                    _b = (_a = notas).push; // Prepara para adicionar ao array `notas`.
                    _c = Number; // Prepara para converter a entrada para número.
                    return [4 /*yield*/, perguntar("Nota ".concat(i + 1, ": "))]; // Pede a nota atual.
                case 3:
                    _b.apply(_a, [_c.apply(void 0, [_d.sent()])]); // Adiciona a nota lida e convertida ao array.
                    _d.label = 4;
                case 4:
                    i++;
                    return [3 /*break*/, 2];
                case 5:
                    a = new Aluno(nome, notas); // Cria uma nova instância da classe `Aluno`.
                    a.media(); // Chama o método `media` para calcular e exibir a média.
                    return [4 /*yield*/, pausar()];
                case 6:
                    _d.sent();
                    return [2 /*return*/];
            }
        });
    });
}
// ---
// ## 13. Classe Carro
/**
 * @function classeCarro
 * @description Demonstra a criação e uso de uma classe `Carro` para representar informações
 * básicas de um veículo, como modelo e ano, e um método para exibir esses detalhes.
 */
function classeCarro() {
    return __awaiter(this, void 0, void 0, function () {
        var Carro, modelo, ano, _a, c;
        return __generator(this, function (_b) {
            switch (_b.label) {
                case 0:
                    console.log('\nExercício 13: Classe Carro');
                    // Definição da classe Carro, com propriedades `modelo` e `ano`.
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
                    modelo = _b.sent(); // Pede o modelo do carro.
                    _a = Number;
                    return [4 /*yield*/, perguntar('Ano: ')];
                case 2:
                    ano = _a.apply(void 0, [_b.sent()]); // Pede o ano do carro, convertendo para número.
                    c = new Carro(modelo, ano); // Cria uma nova instância de Carro.
                    c.exibir(); // Chama o método para exibir os detalhes do carro.
                    return [4 /*yield*/, pausar()];
                case 3:
                    _b.sent();
                    return [2 /*return*/];
            }
        });
    });
}
// ---
// ## 14. Tabuada
/**
 * @function tabuada
 * @description Calcula e exibe a tabuada de um número inteiro fornecido pelo usuário,
 * multiplicando-o de 1 a 10.
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
                    n = _a.apply(void 0, [_b.sent()]); // Lê o número e o converte para tipo numérico.
                    // Loop `for` que itera de 1 a 10 para calcular e exibir cada linha da tabuada.
                    for (i = 1; i <= 10; i++) {
                        console.log("".concat(n, " x ").concat(i, " = ").concat(n * i)); // Exibe a multiplicação formatada.
                    }
                    return [4 /*yield*/, pausar()];
                case 2:
                    _b.sent();
                    return [2 /*return*/];
            }
        });
    });
}
// ---
// ## 15. Calculadora de IMC
/**
 * @function calcularIMC
 * @description Calcula o Índice de Massa Corporal (IMC) de uma pessoa com base em seu peso
 * (em kg) e altura (em metros), e fornece uma classificação de saúde correspondente.
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
                    peso = _a.apply(void 0, [_c.sent()]); // Solicita e converte o peso.
                    _b = Number;
                    return [4 /*yield*/, perguntar("Altura (m): ")];
                case 2:
                    altura = _b.apply(void 0, [_c.sent()]); // Solicita e converte a altura.
                    imc = peso / (altura * altura); // Fórmula do IMC: peso / (altura * altura).
                    classificacao = ""; // Inicializa a variável para a classificação do IMC.
                    // Estrutura `if-else if-else` para classificar o IMC de acordo com faixas predefinidas.
                    if (imc < 18.5)
                        classificacao = "Abaixo do peso";
                    else if (imc < 24.9)
                        classificacao = "Peso normal";
                    else if (imc < 29.9)
                        classificacao = "Sobrepeso";
                    else
                        classificacao = "Obesidade";
                    // Exibe o valor do IMC (formatado com 2 casas decimais) e sua classificação.
                    console.log("IMC: ".concat(imc.toFixed(2), " - ").concat(classificacao));
                    return [4 /*yield*/, pausar()];
                case 3:
                    _c.sent();
                    return [2 /*return*/];
            }
        });
    });
}
// ---
// ## 16. Validar senha
/**
 * @function validarSenha
 * @description Implementa um verificador simples de força de senha. Ele checa se a senha
 * tem um comprimento mínimo e contém letras maiúsculas e números.
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
                    senha = _a.sent(); // Pede a senha ao usuário.
                    // Lógica para verificar a força da senha usando expressões regulares e comprimento:
                    // `senha.length >= 8`: A senha deve ter pelo menos 8 caracteres.
                    // `/[A-Z]/.test(senha)`: Verifica se a senha contém pelo menos uma letra maiúscula.
                    // `/[0-9]/.test(senha)`: Verifica se a senha contém pelo menos um número.
                    // Todas as condições devem ser verdadeiras (`&&`) para a senha ser considerada forte.
                    forte = senha.length >= 8 && /[A-Z]/.test(senha) && /[0-9]/.test(senha);
                    // Exibe a mensagem de acordo com a força da senha, usando o operador ternário.
                    console.log(forte ? "Senha forte!" : "Senha fraca! Use letras maiúsculas, números e pelo menos 8 caracteres.");
                    return [4 /*yield*/, pausar()];
                case 2:
                    _a.sent();
                    return [2 /*return*/];
            }
        });
    });
}
// ---
// ## 17. Jogo de adivinhação
/**
 * @function jogoAdivinhacao
 * @description Um jogo interativo onde o programa gera um número aleatório e o usuário
 * tenta adivinhá-lo. O programa fornece dicas ("Mais!" ou "Menos!") até o acerto.
 */
function jogoAdivinhacao() {
    return __awaiter(this, void 0, void 0, function () {
        var segredo, tentativas, acertou, chute, _a;
        return __generator(this, function (_b) {
            switch (_b.label) {
                case 0:
                    console.log('\nExercício 17: Jogo de adivinhação');
                    // Gera um número inteiro aleatório entre 1 e 100.
                    // `Math.random()`: Gera um número entre 0 (inclusive) e 1 (exclusive).
                    // `* 100`: Amplia para a faixa de 0 a 99.99...
                    // `Math.floor()`: Arredonda para o número inteiro mais próximo para baixo (ex: 99.99 -> 99).
                    // `+ 1`: Ajusta a faixa para 1 a 100.
                    segredo = Math.floor(Math.random() * 100) + 1;
                    tentativas = 0, acertou = false; // Inicializa contador de tentativas e flag de acerto.
                    _b.label = 1;
                case 1:
                    if (!!acertou)
                        return [3 /*break*/, 3]; // Loop `while` que continua enquanto o usuário não acertar (`!acertou` é `true`).
                    tentativas++; // Incrementa o contador de tentativas a cada chute.
                    _a = Number;
                    return [4 /*yield*/, perguntar("Adivinhe um número entre 1 e 100: ")];
                case 2:
                    chute = _a.apply(void 0, [_b.sent()]); // Lê o chute do usuário e o converte para número.
                    if (chute === segredo) { // Se o chute for igual ao número secreto.
                        console.log("Parab\u00E9ns! Voc\u00EA acertou em ".concat(tentativas, " tentativas."));
                        acertou = true; // Define `acertou` como true para encerrar o loop na próxima iteração.
                    }
                    else if (chute < segredo) { // Se o chute for menor que o segredo.
                        console.log("Mais!"); // Dá a dica para o usuário.
                    }
                    else { // Se o chute for maior que o segredo.
                        console.log("Menos!"); // Dá a dica para o usuário.
                    }
                    return [3 /*break*/, 1]; // Volta para o início do loop.
                case 3: return [4 /*yield*/, pausar()];
                case 4:
                    _b.sent();
                    return [2 /*return*/];
            }
        });
    });
}
// ---
// ## 18. Contar palavras em uma string
/**
 * @function contarPalavras
 * @description Pede ao usuário que digite uma frase e, em seguida, conta o número de palavras
 * contidas nessa frase. Lida com múltiplos espaços entre as palavras e espaços no início/fim.
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
                    frase = _a.sent(); // Lê a frase digitada pelo usuário.
                    // Processamento da frase para contar palavras:
                    // 1. `frase.trim()`: Remove espaços em branco do início e do final da string. Isso é crucial
                    //    para evitar que espaços extras sejam contados como palavras vazias.
                    // 2. `split(/\s+/)`: Divide a string em um array de substrings (palavras) usando uma
                    //    expressão regular. `\s+` significa um ou mais caracteres de espaço em branco (espaços, tabs, etc.).
                    //    Isso garante que múltiplos espaços entre palavras sejam tratados como um único delimitador.
                    palavras = frase.trim().split(/\s+/);
                    // O número de palavras é o tamanho do array resultante.
                    console.log("Total de palavras: ".concat(palavras.length));
                    return [4 /*yield*/, pausar()];
                case 2:
                    _a.sent();
                    return [2 /*return*/];
            }
        });
    });
}
// ---
// ## ================= MENU PRINCIPAL ===================
/**
 * @function exibirMenu
 * @description Esta é a função principal que gerencia a interação do usuário.
 * Ela exibe um menu com diversas opções de exercícios, lê a escolha do usuário
 * e chama a função de exercício correspondente. O menu é exibido repetidamente
 * até que o usuário escolha a opção "0" (Sair).
 */
function exibirMenu() {
    return __awaiter(this, void 0, void 0, function () {
        var opcao, _a;
        return __generator(this, function (_b) {
            switch (_b.label) {
                case 0:
                    // Exibe o título do menu e todas as opções de exercícios disponíveis.
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
                    // Solicita ao usuário que escolha uma opção.
                    return [4 /*yield*/, perguntar("Escolha uma opção (0-18): ")];
                case 1:
                    opcao = _b.sent(); // Armazena a opção digitada pelo usuário.
                    _a = opcao; // Prepara para a estrutura de controle `switch`.
                    switch (_a) {
                        // Cada `case` corresponde a uma opção do menu.
                        // `return [3 /*break*/, X];` é o código gerado pelo TypeScript para o `break` do `switch`.
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
                            return [3 /*break*/, 38]; // Se a opção for '0', vai para o case de saída.
                    }
                    return [3 /*break*/, 39]; // Se a opção não for reconhecida, vai para o default.
                case 2:
                    return [4 /*yield*/, somaDoisNumeros()]; // Chama a função do exercício 1.
                case 3:
                    _b.sent();
                    return [3 /*break*/, 40]; // Volta para o final do switch.
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
                    console.log("Saindo..."); // Mensagem de saída do programa.
                    return [3 /*break*/, 40]; // Sai do switch e, consequentemente, do loop principal.
                case 39:
                    console.log("Opção inválida!"); // Mensagem para opções não reconhecidas.
                    _b.label = 40;
                case 40:
                    if (opcao !== '0')
                        return [3 /*break*/, 0]; // Continua o loop do menu (`while (opcao !== '0')`) até que a opção '0' seja selecionada.
                    _b.label = 41;
                case 41:
                    rl.close(); // Fecha a interface `readline`, liberando os recursos do console.
                    return [2 /*return*/];
            }
        });
    });
}
// ---
// ## Inicialização do Programa
// Esta linha final chama a função `exibirMenu()`, que inicia toda a aplicação do console.
// É o ponto de entrada da execução do script.
exibirMenu();