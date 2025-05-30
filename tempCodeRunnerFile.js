// 1. Soma de dois números
function somaDoisNumeros() { // Função para realizar a soma
    return __awaiter(this, void 0, void 0, function () {
        var a, _a, b, _b; // Declara as variáveis (_a e _b auxilia para a conversão e Number, enquanto a,b armazena a variável)
        return __generator(this, function (_c) { // __generator vai controlar o fluxo assíncrono (simula async/await)
            switch (_c.label) {
                case 0:
                    console.log('\nExercício 1: Soma de dois números');
                    _a = Number; // prepara a conversão da primeira var
                    return [4 /*yield*/, perguntar('Digite o primeiro número: ')]; // o yield aguarda a entrada das variáveis
                case 1:
                    a = _a.apply(void 0, [_c.sent()]); // aqui o codigo converte a entrada para número e armazena nessa var
                    _b = Number; //prepara a conversão da segunda var 
                    return [4 /*yield*/, perguntar('Digite o segundo número: ')];
                case 2:
                    b = _b.apply(void 0, [_c.sent()]);
                    console.log(`\nO resultado da soma dos dois números é: ${a + b}\n`);  
                    
                    return [4 /*yield*/, pausar()];
                case 3:
                    _c.sent(); //finaliza a pausa 
                    return [2 /*return*/]; //encerra a função 
            }
        });
    });
}