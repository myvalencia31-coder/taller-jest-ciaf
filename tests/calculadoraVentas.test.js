const { calcularTotalCompra, esMontoValido, TASA_EQUIPO } = require('../src/calculadoraVentas');

describe('Calculadora de Ventas - Tienda Moda & Estilo', () => {

  test('Caso Normal 1 - Menor a 100.000: sin descuento', () => {
    const subtotal = 50000;
    expect(calcularTotalCompra(subtotal)).toBe(50000);
  });

  test('Caso Normal 2 - Igual a 100.000: aplica 10%', () => {
    const subtotal = 100000;
    expect(calcularTotalCompra(subtotal)).toBe(90000);
  });

  test('Caso Normal 3 - Mayor a 200.000: 10% + 8% tasaEquipo', () => {
  const subtotal = 300000;
  expect(TASA_EQUIPO).toBe(0.08);
  expect(calcularTotalCompra(subtotal)).toBeCloseTo(246000);
});

  test('Caso Borde 2 - Número negativo', () => {
    expect(calcularTotalCompra(-50000)).toBe(-50000);
  });

  test('Caso Borde 3 - Exactamente 200.000: sin tasa adicional', () => {
    expect(calcularTotalCompra(200000)).toBe(180000);
  });

  test('Validación: monto positivo es válido', () => {
    expect(esMontoValido(150000)).toBe(true);
  });

  test('Validación: texto no es válido', () => {
    expect(esMontoValido('1000')).toBe(false);
  });

  test('Validación: cero es válido', () => {
    expect(esMontoValido(0)).toBe(true);
  });

  test('Validación: número infinito no es válido', () => {
    expect(esMontoValido(Infinity)).toBe(false);
  });

  test('Validación: número negativo no es válido', () => {
    expect(esMontoValido(-1)).toBe(false);
  });

});
