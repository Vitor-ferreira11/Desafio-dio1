const { test } = require('node:test');
const assert = require('node:assert/strict');
const { nivelPorXp } = require('./index');
test('limites sem lacunas', () => {
    const casos = [[0,'Ferro'],[999,'Ferro'],[1000,'Ferro'],[1001,'Bronze'],[2000,'Bronze'],[2001,'Prata'],[5000,'Prata'],[5001,'Ouro'],[7000,'Ouro'],[7001,'Platina'],[8000,'Platina'],[8001,'Ascendente'],[9000,'Ascendente'],[9001,'Imortal'],[10000,'Imortal'],[10001,'Radiante']];
    for (const [xp,nivel] of casos) assert.equal(nivelPorXp(xp), nivel);
});
test('XP inválida', () => {
    for (const xp of [-1,NaN,Infinity,1.5,'1000',Number.MAX_SAFE_INTEGER+1]) assert.throws(() => nivelPorXp(xp), RangeError);
});
