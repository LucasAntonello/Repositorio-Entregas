class Product {
    contructor(nombre, precio, stock){
        this.nombre = nombre;
        this.precio = precio;
        this.stock = stock;
    }
}

class ArticuloCarro {
    contructor(producto, cantidad){
        this.producto = producto;
        this.cantidad = cantidad;
    }
}

//Funciones:

function arrayNombre(array){
    let nombres = [];
                        
        for (const el of productos) {
            let nombreYStock = `${el.nombre} - Stock: ${el.stock}`;
            nombres.push(nombreYStock);
        }
    
    return nombres;
}

//Array de productos:
const productos = [
    new Product("Café", 120, 10),
    new Product("Azucar", 40, 20),
    new Product("Leche", 55, 25),
    new Product("Galletas Al Agua", 78, 26),
    new Product("Galletas Oreo", 88, 17),
    new Product("Alfajor Triple", 34, 3),
    new Product("Sal", 130, 10),
    new Product("Pan", 79, 45),
    new Product("Dulce de Leche", 200, 7),
    new Product("Salsa 1L", 122, 13),
];

//variables:
let salir = true;
let productosCarro = [];

//Inicio Programa:

while(salir){

    let opcion = parseInt(prompt(`
    Seleccione una opción:
    1- Comprar
    2- Salir`
));

    switch (opcion) {
        case 1:
            let salirComprar = true;
            
            while(salirComprar){

                let opcion = parseInt(prompt(`
                Seleccione una opción:.
                1- Ver articulos.
                2- Agregar articulo al carrito.
                3- Ver carrito.
                4- Volver.`
            ));
            
                switch (opcion) {
                    case 1:
                        const nombres = arrayNombre(productos);

                        alert(nombres.join("\n"));
                        break;
                    case 2:
                        const nombreArticulo = prompt("Ingrese nombre del ariculo a agregar: ");
                        
                        let articulo = productos.filter((el) => el.nombre === nombreArticulo);
                        let cantidad = parseInt(prompt("Ingrese la cantidad"));

                        const articuloCarro = new ArticuloCarro(articulo, cantidad);

                        productosCarro.push(articuloCarro);
                        break;
                    case 3:
                        const nombresCarro = arrayNombre(productosCarro);

                        alert(nombresCarro.join("\n"));
                        break;
                    case 4:
                        salirComprar = false;
                        break;
                    default:
                        break;
                }
            }

            break;
        case 2:
            salir = false;
            break;
    
        default:
            break;
    }
}