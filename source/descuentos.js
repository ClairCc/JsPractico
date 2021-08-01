function calcularPrecioConDescuento(precio, descuento) {
  const porcentajePrecioConDescuento = descuento * 0.01;
  const precioConDescuento = precio - precio * porcentajePrecioConDescuento;
  return precioConDescuento;
}
const cupon = ["Todo2020", "ConToda", "Prime"];
function PriceDiscount() {
  const inputPrice = document.getElementById("InputPrice");
  const priceValue = inputPrice.value;
  const inputDiscount = document.getElementById("InputDiscount");
  let discountValue = inputDiscount.value;
  const inputCupon = document.getElementById("Cupon");
  const cuponValue = inputCupon.value;
  switch (cuponValue) {
    case "Todo2020":
      discountValue = discountValue * 2;
      break;
    default:
      console.log("Hola");
  }
  const precioCondescuento = calcularPrecioConDescuento(
    priceValue,
    discountValue
  );

  const resultP = document.getElementById("ResultP");
  resultP.innerText = `${precioCondescuento}`;
  const ahorrado = document.getElementById("Ahorrado");
  ahorrado.innerText = ` ${priceValue - precioCondescuento}`;
}
