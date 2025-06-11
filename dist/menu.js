"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
const readline = require("readline"); // Importa o módulo 'readline' do Node.js, usado para interagir com o console (entrada/saída).
// Cria uma interface de leitura de linha.
// `process.stdin` representa a entrada padrão (teclado).
// `process.stdout` representa a saída padrão (tela do terminal).
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});
/**
 * @function perguntar
 * @description
 * @param {string} pergunta - A string da pergunta a ser exibida no console.
 * @returns {Promise<string>} Uma Promise que resolve com a resposta do usuário.
 */
function perguntar(pergunta) {
    return new Promise(resolve => rl.question(pergunta, resolve));
}
/**
 * @function pausar
 * @description Pausa a execução do programa e espera o usuário pressionar Enter.
 * Útil para manter a saída de um exercício visível até o usuário decidir continuar.*/
function pausar() {
    return __awaiter(this, void 0, void 0, function* () {
        // `await` garante que a execução da função `pausar` só continue após a Promise de `perguntar` ser resolvida.
        yield perguntar('\nPressione Enter para voltar ao menu...');
    });
}
// --- Funções dos Exercícios ---
// 1. Soma de dois números
/**
 * @function somaDoisNumeros
 * @description Solicita dois números ao usuário, converte as entradas para tipo numérico e exibe a soma formatada.*/
function somaDoisNumeros() {
    return __awaiter(this, void 0, void 0, function* () {
        console.log('\nExercício 1: Soma de dois números');
        // `await perguntar(...)` espera a entrada do usuário.
        // `Number(...)` converte a string de entrada para um número.
        const a = Number(yield perguntar('Digite o primeiro número: '));
        const b = Number(yield perguntar('Digite o segundo número: '));
        // Usa template literals (crases ``) para facilitar a interpolação de variáveis na string.
        console.log(`Resultado: ${a + b}`);
        yield pausar(); // Chama a função para pausar a tela.
    });
}
// 2. Verificar par ou ímpar
/**
 * @function verificarParOuImpar
 * @description Pede um número ao usuário e determina se ele é par ou ímpar usando o operador de módulo.
 */
function verificarParOuImpar() {
    return __awaiter(this, void 0, void 0, function* () {
        console.log('\nExercício 2: Verificar par ou ímpar');
        const n = Number(yield perguntar('Digite um número: '));
        // Operador ternário: `condição ? valor_se_verdadeiro : valor_se_falso`
        // `n % 2 === 0` verifica se o resto da divisão por 2 é zero, indicando um número par.
        console.log(n % 2 === 0 ? "É par" : "É ímpar");
        console.log(`Usando função auxiliar: ${ParOuImpar(n)}`); // Movido o teste da função ParOuImpar para cá
        yield pausar();
    });
}
/**
 * @function ParOuImpar
 Fac
 * @description Função auxiliar para verificar se um número é par ou ímpar.
 */
function ParOuImpar(num) {
    return num % 2 === 0 ? "Par" : "Impar";
}
// 3. Calcular média de três notas
/**
 * @function mediaTresNotas
 * @description Solicita três notas e calcula sua média aritmética, exibindo o resultado formatado.
 */
function mediaTresNotas() {
    return __awaiter(this, void 0, void 0, function* () {
        console.log('\nExercício 3: Calcular média de três notas');
        const n1 = Number(yield perguntar('Nota 1: '));
        const n2 = Number(yield perguntar('Nota 2: '));
        const n3 = Number(yield perguntar('Nota 3: '));
        const media = (n1 + n2 + n3) / 3;
        // `toFixed(2)` formata o número para ter exatamente duas casas decimais.
        console.log(`Média: ${media.toFixed(2)}`);
        yield pausar();
    });
}
/**
 * @function media
 * @description Função auxiliar pura para calcular a média de três números.
 */
function media(nota1, nota2, nota3) {
    return (nota1 + nota2 + nota3) / 3;
} // Adicionada a chave de fechamento que estava faltando
// 4. Converter Celsius para Fahrenheit
/**
 * @function celsiusParaFahrenheit
 * @description Converte uma temperatura de Celsius para Fahrenheit.
 * @returns {Promise<void>} Não retorna nenhum valor explicitamente (função assíncrona que executa uma ação).
 */
function celsiusParaFahrenheit() {
    return __awaiter(this, void 0, void 0, function* () {
        console.log('\nExercício 4: Converter Celsius para Fahrenheit');
        // `: number` é uma anotação de tipo TypeScript, garantindo que `celsius` seja um número.
        const celsius = Number(yield perguntar('Temperatura em Celsius: '));
        // Fórmula de conversão de Celsius para Fahrenheit.
        const fahrenheit = (celsius * 9 / 5) + 32;
        console.log(`Fahrenheit: ${fahrenheit.toFixed(2)}`);
        yield pausar();
    });
}
// 5. Exibir números pares de 1 a 20
/**
 * @function exibirPares
 * @description Percorre os números de 1 a 20, identifica os pares e os exibe.
 */
function exibirPares() {
    return __awaiter(this, void 0, void 0, function* () {
        console.log('\nExercício 5: Exibir números pares de 1 a 20');
        let pares = []; // Array para armazenar os números pares encontrados.
        for (let i = 1; i <= 20; i++) { // Loop que itera de 1 a 20.
            if (i % 2 === 0) { // Verifica se o número é par (resto da divisão por 2 é zero).
                pares.push(i); // Adiciona o número par ao array.
            }
        }
        // `join(", ")` converte o array `[2, 4, 6, ...]` em uma string "2, 4, 6, ...".
        console.log("Pares de 1 a 20:", pares.join(", "));
        yield pausar();
    });
}
// 6. Ler 5 números e armazenar em array
/**
 * @function lerNumerosEmArray
 * @description Solicita 5 números ao usuário e os armazena em um array, exibindo o array final.
 */
function lerNumerosEmArray() {
    return __awaiter(this, void 0, void 0, function* () {
        console.log('\nExercício 6: Ler 5 números e armazenar em array');
        // `: number[]` anota o array como contendo apenas números.
        const numeros = [];
        for (let i = 0; i < 5; i++) { // Loop para solicitar 5 números.
            const num = Number(yield perguntar(`Digite o número ${i + 1}: `));
            numeros.push(num); // Adiciona o número lido (e convertido) ao array.
        }
        console.log("Números digitados:", numeros);
        yield pausar();
    });
}
// 7. Encontrar maior número em um array
/**
 * @function maiorNumeroArray
 * @description Pede uma sequência de números separados por espaço, converte-os em um array
 * e encontra o maior valor usando `Math.max`.
 */
function maiorNumeroArray() {
    return __awaiter(this, void 0, void 0, function* () {
        console.log('\nExercício 7: Encontrar maior número em um array');
        const numsStr = yield perguntar("Digite números separados por espaço: ");
        // `split(' ')` divide a string em um array de substrings.
        // `map(Number)` converte cada substring para um número.
        const nums = numsStr.split(' ').map(Number);
        // Operador spread (`...`): "expande" os elementos do array `nums` como argumentos individuais
        // para a função `Math.max`, que espera múltiplos argumentos (`Math.max(num1, num2, ...) `).
        const maior = Math.max(...nums);
        console.log(`Maior número: ${maior}`);
        yield pausar();
    });
}
// 8. Contar vogais em uma string
/**
 * @function contarVogais
 * @description Conta o número de vogais (incluindo acentuadas e ignorando maiúsculas/minúsculas)
 * em uma string fornecida pelo usuário.
 */
function contarVogais() {
    return __awaiter(this, void 0, void 0, function* () {
        console.log('\nExercício 8: Contar vogais em uma string');
        const texto = yield perguntar("Digite uma string: ");
        const vogais = texto.match(/[iaeouáéíóúâêîôûãõ]/gi);
        console.log(`Quantidade de vogais: ${vogais ? vogais.length : 0}`);
        yield pausar();
    });
}
// 9. Calculadora simples
/**
 * @function calculadoraSimples
 * @description Implementa uma calculadora básica que realiza adição, subtração,
 * multiplicação ou divisão com base na operação escolhida pelo usuário.
 */
function calculadoraSimples() {
    return __awaiter(this, void 0, void 0, function* () {
        console.log('\nExercício 9: Calculadora simples');
        const a = Number(yield perguntar("Valor A: "));
        const op = yield perguntar("Operação (+ - * /): ");
        const b = Number(yield perguntar("Valor B: "));
        let resultado; // Declara `resultado` sem inicializar, será atribuído no switch.
        switch (op) { // O `switch` é usado para executar diferentes blocos de código com base no valor de `op`.
            case '+':
                resultado = a + b;
                break; // `break` sai do `switch` para evitar a "queda" para o próximo `case`.
            case '-':
                resultado = a - b;
                break;
            case '*':
                resultado = a * b;
                break;
            case '/':
                // Trata a divisão por zero: se `b` for 0, o resultado é `NaN` (Not a Number).
                resultado = b !== 0 ? a / b : NaN;
                break;
            default: // Se nenhuma operação válida for correspondida.
                console.log("Operação inválida.");
                yield pausar();
                return; // `return` sai da função `calculadoraSimples` completamente.
        }
        console.log(`Resultado: ${resultado}`);
        yield pausar();
    });
}
// 10. Ordenar array em ordem crescente
/**
 * @function ordenarArray
 * @description Pede uma lista de números separados por espaço, os organiza em ordem
 * crescente e exibe o array ordenado.
 */
function ordenarArray() {
    return __awaiter(this, void 0, void 0, function* () {
        console.log('\nExercício 10: Ordenar array em ordem crescente');
        const entrada = yield perguntar("Digite números separados por espaço: ");
        // `split(" ")`: Divide a string por espaços.
        // `map(Number)`: Converte cada parte para número.
        // `.sort((a, b) => a - b)`: Método `sort` com uma função de comparação para ordenar números em ordem crescente.
        // Se `a - b` for negativo, `a` vem antes de `b`. Se for positivo, `b` vem antes de `a`.
        const numeros = entrada.split(" ").map(Number).sort((a, b) => a - b);
        console.log("Ordenado:", numeros);
        yield pausar();
    });
}
// 11. Classe Pessoa
/**
 * @function classePessoa
 * @description Demonstra a criação e uso de uma `class` (Pessoa) com propriedades e um método.*/
function classePessoa() {
    return __awaiter(this, void 0, void 0, function* () {
        console.log('\nExercício 11: Classe Pessoa');
        // Definição da classe `Pessoa`.
        class Pessoa {
            // `public` nos parâmetros do `constructor` é um atalho do TypeScript.
            // Ele automaticamente cria propriedades `nome` e `idade` na classe
            // e as inicializa com os valores passados ao construtor.
            constructor(nome, idade) {
                this.nome = nome;
                this.idade = idade;
            }
            // Método da classe `Pessoa`.
            apresentar() {
                console.log(`Olá, meu nome é ${this.nome} e tenho ${this.idade} anos.`);
            }
        }
        const nome = yield perguntar('Nome: ');
        const idade = Number(yield perguntar('Idade: '));
        // Instanciação (criação de um novo objeto) da classe `Pessoa`.
        const p = new Pessoa(nome, idade);
        p.apresentar(); // Chama o método `apresentar` do objeto `p`.
        yield pausar();
    });
}
// 12. Classe Aluno
/**
 * @function classeAluno
 * @description Demonstra uma classe `Aluno` que gerencia o nome e as notas de um aluno,
 * incluindo um método para calcular sua média.
 */
function classeAluno() {
    return __awaiter(this, void 0, void 0, function* () {
        console.log('\nExercício 12: Classe Aluno');
        class Aluno {
            // `public` nos parâmetros do construtor para criar e inicializar propriedades `nome` e `notas`.
            // `notas: number[]` tipa `notas` como um array de números.
            constructor(nome, notas) {
                this.nome = nome;
                this.notas = notas;
            }
            media() {
                // `reduce()`: Método de array que executa uma função `reducer` (a, b => a + b)
                // em cada elemento, resultando em um único valor (a soma das notas).
                // `0` é o valor inicial do acumulador `a`.
                const m = this.notas.reduce((a, b) => a + b, 0) / this.notas.length;
                console.log(`${this.nome} tem média ${m.toFixed(2)}`);
            }
        }
        const nome = yield perguntar('Nome: ');
        const notas = []; // Inicializa um array vazio para coletar as notas.
        for (let i = 0; i < 3; i++) { // Loop para solicitar 3 notas.
            notas.push(Number(yield perguntar(`Nota ${i + 1}: `)));
        }
        const a = new Aluno(nome, notas); // Cria uma nova instância de Aluno.
        a.media(); // Chama o método `media` para exibir a média.
        yield pausar();
    });
}
// 13. Classe Carro
/**
 * @function classeCarro
 * @description Demonstra uma classe `Carro` para representar um veículo, com propriedades
 * como modelo e ano, e um método para exibir seus detalhes.
 */
function classeCarro() {
    return __awaiter(this, void 0, void 0, function* () {
        console.log('\nExercício 13: Classe Carro');
        class Carro {
            constructor(modelo, ano) {
                this.modelo = modelo;
                this.ano = ano;
            }
            exibir() {
                console.log(`Carro: ${this.modelo}, Ano: ${this.ano}`);
            }
        }
        const modelo = yield perguntar('Modelo: ');
        const ano = Number(yield perguntar('Ano: '));
        const c = new Carro(modelo, ano); // Cria uma nova instância de Carro.
        c.exibir(); // Chama o método `exibir`.
        yield pausar();
    });
}
// 14. Tabuada
/**
 * @function tabuada
 * @description Calcula e exibe a tabuada de um número de 1 a 10.
 */
function tabuada() {
    return __awaiter(this, void 0, void 0, function* () {
        console.log('\nExercício 14: Tabuada');
        const n = Number(yield perguntar("Digite um número: "));
        for (let i = 1; i <= 10; i++) { // Loop de 1 a 10 para as multiplicações.
            console.log(`${n} x ${i} = ${n * i}`); // Exibe cada linha da tabuada.
        }
        yield pausar();
    });
}
// 15. Calculadora de IMC
/**
 * @function calcularIMC
 * @description Calcula o Índice de Massa Corporal (IMC) e fornece uma classificação
 * com base no peso (kg) e altura (m) do usuário.
 */
function calcularIMC() {
    return __awaiter(this, void 0, void 0, function* () {
        console.log('\nExercício 15: Calculadora de IMC');
        const peso = Number(yield perguntar("Peso (kg): "));
        const altura = Number(yield perguntar("Altura (m): "));
        // Fórmula do IMC: peso / (altura * altura)
        const imc = peso / (altura * altura);
        let classificacao = ""; // Variável para armazenar a classificação do IMC.
        // Estrutura condicional `if-else if-else` para determinar a classificação do IMC.
        if (imc < 18.5) {
            classificacao = "Abaixo do peso";
        }
        else if (imc < 24.9) {
            classificacao = "Peso normal";
        }
        else if (imc < 29.9) {
            classificacao = "Sobrepeso";
        }
        else {
            classificacao = "Obesidade";
        }
        console.log(`IMC: ${imc.toFixed(2)} - ${classificacao}`);
        yield pausar();
    });
}
// 16. Validar senha
/**
 * @function validarSenha
 * @description Verifica a "força" de uma senha com base em critérios como comprimento
 * mínimo e presença de letras maiúsculas e números.
 */
function validarSenha() {
    return __awaiter(this, void 0, void 0, function* () {
        console.log('\nExercício 16: Validar senha');
        const senha = yield perguntar("Digite uma senha: ");
        // Validação da senha:
        // `senha.length >= 8`: Pelo menos 8 caracteres.
        // `/[A-Z]/.test(senha)`: Contém pelo menos uma letra maiúscula (usa RegExp `test`).
        // `/[0-9]/.test(senha)`: Contém pelo menos um número.
        // `&&` (AND lógico): Todas as condições devem ser verdadeiras para a senha ser forte.
        const forte = senha.length >= 8 && /[A-Z]/.test(senha) && /[0-9]/.test(senha);
        // Exibe a mensagem apropriada usando o operador ternário.
        console.log(forte ? "Senha forte!" : "Senha fraca! Use letras maiúsculas, números e pelo menos 8 caracteres.");
        yield pausar();
    });
}
// 17. Jogo de adivinhação
/**
 * @function jogoAdivinhacao
 * @description Um jogo onde o usuário tenta adivinhar um número secreto entre 1 e 100,
 * recebendo dicas de "Mais!" ou "Menos!".
 */
function jogoAdivinhacao() {
    return __awaiter(this, void 0, void 0, function* () {
        console.log('\nExercício 17: Jogo de adivinhação');
        // `Math.random()` gera um número entre 0 (inclusive) e 1 (exclusive).
        // `* 100` escala para 0 a 99.99...
        // `Math.floor()` arredonda para baixo para um número inteiro (0 a 99).
        // `+ 1` ajusta a faixa para 1 a 100.
        const segredo = Math.floor(Math.random() * 100) + 1;
        let tentativas = 0, acertou = false; // Variáveis para controlar o jogo.
        while (!acertou) { // Loop `while` continua enquanto `acertou` for `false`.
            tentativas++; // Incrementa o contador de tentativas.
            const chute = Number(yield perguntar("Adivinhe um número entre 1 e 100: "));
            if (chute === segredo) { // Condição de vitória.
                console.log(`Parabéns! Você acertou em ${tentativas} tentativas.`);
                acertou = true; // Define `acertou` como `true` para sair do loop.
            }
            else if (chute < segredo) { // Dica se o chute for muito baixo.
                console.log("Mais!");
            }
            else { // Dica se o chute for muito alto.
                console.log("Menos!");
            }
        }
        yield pausar();
    });
}
// 18. Contar palavras em uma string
/**
 * @function contarPalavras
 * @description Conta o número de palavras em uma frase fornecida pelo usuário.
 * Lida com espaços extras e múltiplos espaços entre palavras.
 */
function contarPalavras() {
    return __awaiter(this, void 0, void 0, function* () {
        console.log('\nExercício 18: Contar palavras em uma string');
        const frase = yield perguntar("Digite uma frase: ");
        // `trim()`: Remove espaços em branco do início e do fim da string.
        // `split(/\s+/)`: Divide a string em um array de "palavras".
        // `\s+` é uma expressão regular que significa "um ou mais caracteres de espaço em branco" (espaço, tab, etc.).
        // Isso garante que múltiplos espaços entre palavras sejam tratados como um único delimitador e
        // que strings vazias não sejam criadas no array se houver espaços extras.
        const palavras = frase.trim().split(/\s+/);
        console.log(`Total de palavras: ${palavras.length}`);
        yield pausar();
    });
}
// ================= MENU PRINCIPAL ===================
/**
 * @function exibirMenu
 * @description Função principal que exibe um menu interativo de exercícios.
 * Permite ao usuário escolher e executar diferentes funcionalidades até decidir sair.
 */
function exibirMenu() {
    return __awaiter(this, void 0, void 0, function* () {
        let opcao; // Declara a variável `opcao` com tipo `string`.
        do { // Loop `do-while`: O bloco de código é executado pelo menos uma vez, e depois a condição é verificada.
            // Exibe o título do menu e todas as opções de exercícios.
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
            opcao = yield perguntar("Escolha uma opção (0-18): "); // Solicita a escolha do usuário.
            switch (opcao) { // Usa `switch` para chamar a função de exercício correspondente.
                case '1':
                    yield somaDoisNumeros();
                    break;
                case '2':
                    yield verificarParOuImpar();
                    break;
                case '3':
                    yield mediaTresNotas();
                    break;
                case '4':
                    yield celsiusParaFahrenheit();
                    break;
                case '5':
                    yield exibirPares();
                    break;
                case '6':
                    yield lerNumerosEmArray();
                    break;
                case '7':
                    yield maiorNumeroArray();
                    break;
                case '8':
                    yield contarVogais();
                    break;
                case '9':
                    yield calculadoraSimples();
                    break;
                case '10':
                    yield ordenarArray();
                    break;
                case '11':
                    yield classePessoa();
                    break;
                case '12':
                    yield classeAluno();
                    break;
                case '13':
                    yield classeCarro();
                    break;
                case '14':
                    yield tabuada();
                    break;
                case '15':
                    yield calcularIMC();
                    break;
                case '16':
                    yield validarSenha();
                    break;
                case '17':
                    yield jogoAdivinhacao();
                    break;
                case '18':
                    yield contarPalavras();
                    break;
                case '0':
                    console.log("Saindo...");
                    break; // Mensagem de saída.
                default: console.log("Opção inválida!"); // Caso a opção não seja reconhecida.
            }
        } while (opcao !== '0'); // O loop continua enquanto a opção não for '0'.
        rl.close(); // Fecha a interface `readline`, liberando os recursos do terminal.
    });
}
// --- Ponto de Entrada do Programa ---
// Esta linha chama a função `exibirMenu()`, que inicia toda a aplicação.
// É o primeiro código a ser executado quando o script é iniciado.
exibirMenu();
