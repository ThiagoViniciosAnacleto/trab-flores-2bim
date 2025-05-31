import * as readline from 'readline';

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

function perguntar(pergunta: string): Promise<string> {
    return new Promise(resolve => rl.question(pergunta, resolve));
}

async function pausar() {
    await perguntar('\nPressione Enter para voltar ao menu...');
}

// 1. Soma de dois números
async function somaDoisNumeros() {
    console.log('\nExercício 1: Soma de dois números');
    const a = Number(await perguntar('Digite o primeiro número: '));
    const b = Number(await perguntar('Digite o segundo número: '));
    console.log(`Resultado: ${a + b}`);
    await pausar();
}

// 2. Verificar par ou ímpar
async function verificarParOuImpar() {
    console.log('\nExercício 2: Verificar par ou ímpar');
    const n = Number(await perguntar('Digite um número: '));
    console.log(n % 2 === 0 ? "É par" : "É ímpar");
    await pausar();
}

// 3. Calcular média de três notas
async function mediaTresNotas() {
    console.log('\nExercício 3: Calcular média de três notas');
    const n1 = Number(await perguntar('Nota 1: '));
    const n2 = Number(await perguntar('Nota 2: '));
    const n3 = Number(await perguntar('Nota 3: '));
    const media = (n1 + n2 + n3) / 3;
    console.log(`Média: ${media.toFixed(2)}`);
    await pausar();
}

function media(nota1: number, nota2: number, nota3: number): number{
    return (nota1 + nota2 + nota3) / 3;

console.log(media(7, 8, 9).toFixed(2));

}
// 4. Converter Celsius para Fahrenheit
async function celsiusParaFahrenheit(): Promise<void> {
    console.log('\nExercício 4: Converter Celsius para Fahrenheit');
    const celsius: number = Number(await perguntar('Temperatura em Celsius: '));
    const fahrenheit: number = (celsius * 9 / 5) + 32;
    console.log(`Fahrenheit: ${fahrenheit.toFixed(2)}`);
    await pausar();
}

// 5. Exibir números pares de 1 a 20
async function exibirPares() {
    console.log('\nExercício 5: Exibir números pares de 1 a 20');
    let pares = [];
    for (let i = 1; i <= 20; i++) {
    if (i % 2 === 0) pares.push(i);
    }
    console.log("Pares de 1 a 20:", pares.join(", "));
    await pausar();
}

// 6. Ler 5 números e armazenar em array
async function lerNumerosEmArray() {
    console.log('\nExercício 6: Ler 5 números e armazenar em array');
    const numeros: number[] = [];
    for (let i = 0; i < 5; i++) {
    const num = Number(await perguntar(`Digite o número ${i + 1}: `));
    numeros.push(num);
    }
    console.log("Números digitados:", numeros);
    await pausar();
}

// 7. Encontrar maior número em um array
async function maiorNumeroArray() {
    console.log('\nExercício 7: Encontrar maior número em um array');
    const numsStr = await perguntar("Digite números separados por espaço: ");
    const nums = numsStr.split(' ').map(Number);
    const maior = Math.max(...nums);
    console.log(`Maior número: ${maior}`);
    await pausar();
}

// 8. Contar vogais em uma string
async function contarVogais() {
    console.log('\nExercício 8: Contar vogais em uma string');
    const texto = await perguntar("Digite uma string: ");
    const vogais = texto.match(/[aeiouáéíóúâêîôûãõ]/gi);
    console.log(`Quantidade de vogais: ${vogais ? vogais.length : 0}`);
    await pausar();
}

// 9. Calculadora simples
async function calculadoraSimples() {
    console.log('\nExercício 9: Calculadora simples');
    const a = Number(await perguntar("Valor A: "));
    const op = await perguntar("Operação (+ - * /): ");
    const b = Number(await perguntar("Valor B: "));
    let resultado: number;

    switch (op) {
    case '+': resultado = a + b; break;
    case '-': resultado = a - b; break;
    case '*': resultado = a * b; break;
    case '/': resultado = b !== 0 ? a / b : NaN; break;
    default: console.log("Operação inválida."); await pausar(); return;
    }

    console.log(`Resultado: ${resultado}`);
    await pausar();
}

// 10. Ordenar array em ordem crescente
async function ordenarArray() {
    console.log('\nExercício 10: Ordenar array em ordem crescente');
    const entrada = await perguntar("Digite números separados por espaço: ");
    const numeros = entrada.split(" ").map(Number).sort((a, b) => a - b);
    console.log("Ordenado:", numeros);
    await pausar();
}

// 11. Classe Pessoa
async function classePessoa() {
    console.log('\nExercício 11: Classe Pessoa');
    class Pessoa {
        constructor(public nome: string, public idade: number) {}
        apresentar() {
        console.log(`Olá, meu nome é ${this.nome} e tenho ${this.idade} anos.`);
        }
    }
    const nome = await perguntar('Nome: ');
    const idade = Number(await perguntar('Idade: '));
    const p = new Pessoa(nome, idade);
    p.apresentar();
    await pausar();
}

// 12. Classe Aluno
async function classeAluno() {
    console.log('\nExercício 12: Classe Aluno');
    class Aluno {
        constructor(public nome: string, public notas: number[]) {}
        media() {
        const m = this.notas.reduce((a, b) => a + b, 0) / this.notas.length;
        console.log(`${this.nome} tem média ${m.toFixed(2)}`);
        }
    }
    const nome = await perguntar('Nome: ');
    const notas = [];
    for (let i = 0; i < 3; i++) {
        notas.push(Number(await perguntar(`Nota ${i+1}: `)));
    }
    const a = new Aluno(nome, notas);
    a.media();
    await pausar();
}

// 13. Classe Carro
async function classeCarro() {
    console.log('\nExercício 13: Classe Carro');
    class Carro {
    constructor(public modelo: string, public ano: number) {}
    exibir() {
        console.log(`Carro: ${this.modelo}, Ano: ${this.ano}`);
        }
    }
    const modelo = await perguntar('Modelo: ');
    const ano = Number(await perguntar('Ano: '));
    const c = new Carro(modelo, ano);
    c.exibir();
    await pausar();
}

// 14. Tabuada
async function tabuada() {
    console.log('\nExercício 14: Tabuada');
    const n = Number(await perguntar("Digite um número: "));
    for (let i = 1; i <= 10; i++) {
        console.log(`${n} x ${i} = ${n * i}`);
    }
    await pausar();
}

// 15. Calculadora de IMC
async function calcularIMC() {
    console.log('\nExercício 15: Calculadora de IMC');
    const peso = Number(await perguntar("Peso (kg): "));
    const altura = Number(await perguntar("Altura (m): "));
    const imc = peso / (altura * altura);
    let classificacao = "";
    if (imc < 18.5) classificacao = "Abaixo do peso";
    else if (imc < 24.9) classificacao = "Peso normal";
    else if (imc < 29.9) classificacao = "Sobrepeso";
    else classificacao = "Obesidade";
    console.log(`IMC: ${imc.toFixed(2)} - ${classificacao}`);
    await pausar();
}

// 16. Validar senha
async function validarSenha() {
    console.log('\nExercício 16: Validar senha');
    const senha = await perguntar("Digite uma senha: ");
    const forte = senha.length >= 8 && /[A-Z]/.test(senha) && /[0-9]/.test(senha);
    console.log(forte ? "Senha forte!" : "Senha fraca! Use letras maiúsculas, números e pelo menos 8 caracteres.");
    await pausar();
}

// 17. Jogo de adivinhação
async function jogoAdivinhacao() {
    console.log('\nExercício 17: Jogo de adivinhação');
    const segredo = Math.floor(Math.random() * 100) + 1;
    let tentativas = 0, acertou = false;

    while (!acertou) {
        tentativas++;
        const chute = Number(await perguntar("Adivinhe um número entre 1 e 100: "));
            if (chute === segredo) {
        console.log(`Parabéns! Você acertou em ${tentativas} tentativas.`);
        acertou = true;
            } else if (chute < segredo) {
            console.log("Mais!");
            } else {
            console.log("Menos!");
            }
        }
    await pausar();
}

// 18. Contar palavras em uma string
async function contarPalavras() {
    console.log('\nExercício 18: Contar palavras em uma string');
    const frase = await perguntar("Digite uma frase: ");
    const palavras = frase.trim().split(/\s+/);
    console.log(`Total de palavras: ${palavras.length}`);
    await pausar();
}

// ================= MENU PRINCIPAL ===================

async function exibirMenu() {
    let opcao: string;

    do {
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

    opcao = await perguntar("Escolha uma opção (0-18): ");

    switch (opcao) {
        case '1': await somaDoisNumeros(); break;
        case '2': await verificarParOuImpar(); break;
        case '3': await mediaTresNotas(); break;
        case '4': await celsiusParaFahrenheit(); break;
        case '5': await exibirPares(); break;
        case '6': await lerNumerosEmArray(); break;
        case '7': await maiorNumeroArray(); break;
        case '8': await contarVogais(); break;
        case '9': await calculadoraSimples(); break;
        case '10': await ordenarArray(); break;
        case '11': await classePessoa(); break;
        case '12': await classeAluno(); break;
        case '13': await classeCarro(); break;
        case '14': await tabuada(); break;
        case '15': await calcularIMC(); break;
        case '16': await validarSenha(); break;
        case '17': await jogoAdivinhacao(); break;
        case '18': await contarPalavras(); break;
        case '0': console.log("Saindo..."); break;
        default: console.log("Opção inválida!");
        }
    } while (opcao !== '0');

    rl.close();
}

exibirMenu();
