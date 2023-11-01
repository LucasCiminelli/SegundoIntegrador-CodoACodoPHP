const categoria = document.getElementById("categoria");
const cantidad = document.getElementById("cantidad");
const total = document.getElementById("total");
const borrar = document.getElementById("borrar");
const resumen = document.getElementById("resumen");

let valorTicket = 200;

cantidad.addEventListener("input", () => {
  const selectedCategory = categoria.value;

  if (selectedCategory === "estudiante" && cantidad.value !== 0) {
    const descuento = 0.2;
    const cantidadValue = parseInt(cantidad.value) || 0;
    const totalPagar = valorTicket * descuento * cantidadValue;
    total.textContent = `Total a pagar: $${totalPagar || ""}`;
  }
  if (selectedCategory === "trainee" && cantidad.value !== 0) {
    const descuento = 0.5;
    const cantidadValue = parseInt(cantidad.value) || 0;
    const totalPagar = valorTicket * descuento * cantidadValue;
    total.textContent = `Total a pagar: $${totalPagar || ""}`;
  }
  if (selectedCategory === "junior" && cantidad.value !== 0) {
    const descuento = 0.85;
    const cantidadValue = parseInt(cantidad.value) || 0;
    const totalPagar = valorTicket * descuento * cantidadValue;
    total.textContent = `Total a pagar: $${totalPagar || ""}`;
  }
});

categoria.addEventListener("change", () => {
  const selectedCategory = categoria.value;

  if (cantidad === "") {
    categoria.style = "disabled";
  }

  if (selectedCategory === "estudiante") {
    const descuento = 0.2;
    const cantidadValue = parseInt(cantidad.value) || 0;
    const totalPagar = valorTicket * descuento * cantidadValue;
    total.innerHTML = "";
    total.innerHTML = `Total a pagar: $ ${totalPagar}`;
  }

  if (selectedCategory === "trainee") {
    const descuento = 0.5;
    const cantidadValue = parseInt(cantidad.value) || 0;
    const totalPagar = valorTicket * descuento * cantidadValue;
    total.innerHTML = "";
    total.innerHTML = `Total a pagar: $ ${totalPagar}`;
  }
  if (selectedCategory === "junior") {
    const descuento = 0.85;
    const cantidadValue = parseInt(cantidad.value) || 0;
    const totalPagar = valorTicket * descuento * cantidadValue;
    total.innerHTML = "";
    total.innerHTML = `Total a pagar: $ ${totalPagar}`;
  }
});

borrar.addEventListener("click", () => {
  total.innerHTML = "Total a pagar: $";
  categoria.value = "";
  cantidad.value = "";
  total.style.height = "";
});

resumen.addEventListener("click", () => {
  const selectedCategory = categoria.value;
  const cantidadValue = parseInt(cantidad.value) || 0;
  let descuento = 1;

  if (selectedCategory === "estudiante") {
    descuento = 0.2;
  } else if (selectedCategory === "trainee") {
    descuento = 0.15;
  } else if (selectedCategory === "junior") {
    descuento = 0.1;
  }

  const totalPagar = valorTicket * descuento * cantidadValue;
  total.style.height = "100px";
  total.innerHTML = `
  Total a pagar: $${totalPagar} <br/>
  Cantidad de tickets: ${cantidadValue} <br/>
  Categoría: ${selectedCategory}`;
});
