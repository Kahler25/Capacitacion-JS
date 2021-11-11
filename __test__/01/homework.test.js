const { it, expect, describe } = require('@jest/globals');
const { 
    esPikachu,
    contieneCero,
    esMayorDeEdad,
    nombreFrase,
    numerosIguales,
    perimetroHexagonoRegular,
    esPositivo,
    calificación,
    unCaracter
 } = require('../../src/01/homework')

describe('esPikachu', () => {
    it('Debería devolver un booleano', () => {
        expect(esPikachu("Pikachu")).toBe(true);
        expect(esPikachu("Squirtle").toBe(false));
    })
})

describe('contieneCero', () => {
    it('Deberia devolver un booleano', () => {
        expect(contieneCero([0, 5, 3, 2])).toBe(true);
        expect(contieneCero([1, 2, 3])).toBe(false);
    })
})

describe('esMayorDeEdad', () => {
    it('Debería verificar si es mayor de edad', () => {
        expect(esMayorDeEdad(21)).toBe(21);
        expect(esMayorDeEdad(18)).toBe(18);
        expect(esMayorDeEdad(15)).toBe(15);
    })
})

describe('nombreFrase', () => {
    it('Deberia retornar la frase con el nombre', () => {
        expect(nombreFrase("Gabriel")).toBe("¡Hola Gabriel! Bienvenido.");
    })
})

describe('numerosIguales', () => {
    it('Deberia verificar si dos números son iguales.', () => {
        expect(numerosIguales(5, 5)).toBe(true);
        expect(numerosIguales(5, 4)).toBe(false);
    })
})

describe('perimetroHexagonoRegular', () => {
    it('Debería verificar el perímetro del hexágono regular.', () => {
        expect(perimetroHexagonoRegular(2)).toBe(12);
    })
})

describe('esPositivo', () => {
    it('Debería verificar si el número es positivo', () => {
        expect(esPositivo(5)).toBe(true);
        expect(esPositivo(-2)).toBe(false);
        expect(esPositivo(0)).toBe(0);
    })
})

describe('calificacion', () => {
    it('Debería devolver la calificación.', () => {
        expect(calificación(0)).toBe("Muy insuficiente");
        expect(calificacion(1)).toBe("Muy insuficiente");
        expect(calificacion(2)).toBe("Muy insuficiente");
        expect(calificacion(3)).toBe("Insuficiente");
        expect(calificacion(4)).toBe("Insuficiente");
        expect(calificacion(5)).toBe("Insuficiente");
        expect(calificacion(6)).toBe("Suficiente");
        expect(calificacion(7)).toBe("Suficiente");
        expect(calificacion(8)).toBe("Bien");
        expect(calificacion(9)).toBe("Bien");
        expect(calificacion(10)).toBe("Sobresaliente");
    })
})

describe('unCaracter', () => {
    it('Debería verificar si el string por parámetro contiene un solo caracter', () => {
        expect(unCaracter('a').toBe(true));
        expect(unCaracter("aaaa")).toBe("ERROR");
    })
})