const N = 23;
const TASA_EQUIPO = (N % 5 + 5) / 100; // (23 % 5) + 5 = 8% = 0.08

function calcularTotalCompra(subtotal) {
  let descuento = 0;
  if (subtotal >= 100000) {
    descuento += 0.10;
  }
  if (subtotal > 200000) {
    descuento += TASA_EQUIPO;
  }
  return subtotal * (1 - descuento);
}

function esMontoValido(monto) {
  return typeof monto === 'number' && Number.isFinite(monto) && monto >= 0;
}

module.exports = {
  calcularTotalCompra,
  esMontoValido,
  TASA_EQUIPO
};
