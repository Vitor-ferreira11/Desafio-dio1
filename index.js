function nivelPorXp(xp) {
    if (!Number.isSafeInteger(xp) || xp < 0) throw new RangeError('XP deve ser um inteiro não negativo.');
    if (xp <= 1000) return 'Ferro';
    if (xp <= 2000) return 'Bronze';
    if (xp <= 5000) return 'Prata';
    if (xp <= 7000) return 'Ouro';
    if (xp <= 8000) return 'Platina';
    if (xp <= 9000) return 'Ascendente';
    if (xp <= 10000) return 'Imortal';
    return 'Radiante';
}
if (require.main === module) {
    const rl = require('node:readline').createInterface({ input: process.stdin, output: process.stdout });
    rl.question('Digite o nome do herói: ', (nome) => {
        rl.question('Digite a quantidade de experiência (XP) do herói: ', (entrada) => {
            try {
                if (!nome.trim()) throw new Error('Informe o nome do herói.');
                if (!/^\d+$/.test(entrada.trim())) throw new Error('XP deve ser um inteiro não negativo.');
                console.log('O Herói de nome ' + nome.trim() + ' está no nível de ' + nivelPorXp(Number(entrada)));
            } catch (error) {
                console.error(error.message);
                process.exitCode = 1;
            } finally { rl.close(); }
        });
    });
}
module.exports = { nivelPorXp };
