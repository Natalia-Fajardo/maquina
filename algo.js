class Producto {
    constructor(objeto, precio) {
        this.objeto = objeto;
        this.precio = precio;
        this.cantidad = 0;
    }
}

let productos = [];
productos.push(new Producto("tornillo", 500));
productos.push(new Producto("tuerca", 200));
productos.push(new Producto("discos de corte", 2000));
productos.push(new Producto("soldadura", 10000));
productos.push(new Producto("arandelas", 10000));

let cuenta = [];
alert('Bienvenido a este simulador de facturas de nuestra tienda.');
while (true) {
    let selector = prompt(`Menú:\n1. tornillo ($500)\n2. tuerca ($200)\n3. discos de corte ($2000)\n4. soldadura ($10000)\n5. arandelas ($10000)\n\nSelecciona un producto (1-5) o escribe "PAGAR" para finalizar:`).toUpperCase();

    if (selector === "PAGAR") {
        break;
    }

    let opcion = parseInt(selector);
    if (opcion >= 1 && opcion <= 5) {
        let cantidad = parseInt(prompt(`Ingresa la cantidad de ${productos[opcion - 1].objeto} que deseas:`));
        if (cantidad > 0) {
            let found = false;
            for (const item of cuenta) {
                if (item.objeto === productos[opcion - 1].objeto) {
                    item.cantidad += cantidad;
                    found = true;
                    break;
                }
            }
            if (!found) {
                productos[opcion - 1].cantidad = cantidad;
                cuenta.push(productos[opcion - 1]);
            }
        } else {
            alert("Cantidad inválida.");
        }
    } else {
        alert("Opción inválida.");
    }
}

let subtotal = 0;
for (const item of cuenta) {
    subtotal += item.precio * item.cantidad;
}

let iva = subtotal * 0.19;
let total = subtotal + iva;

document.write("<h1>Productos seleccionados:</h1><br><hr><hr>");
for (const item of cuenta) {
    document.write(`${item.objeto} x${item.cantidad} - $${item.precio * item.cantidad}<br><hr>`);
}
document.write(`Subtotal: $${subtotal}<br><hr>`);
document.write(`Total a pagar: $${total}<br>`);