class Producto {
    static contadorProducto = 0;

    constructor(nombre, precio) {
        this._idProducto = ++Producto.contadorProducto;
        this._nombre = nombre;
        this._precio = precio;
    }

    get idProducto(){return this._idProducto}
    get nombre(){return this._nombre}
    set nombre(nombre){this._nombre = nombre}
    get precio(){return this._precio}
    set precio(precio){this._precio = precio}

    toString(){return `Producto: ${this._idProducto} ${this._nombre} | Precio: $${this._precio}`}
}

class Orden {
    static contadorOrden = 0;
    static get MAX_PRODUCTOS(){return 5}

    constructor(){
        this._idOrden = ++ Orden.contadorOrden;
        this._productos = [];
        this._contadorProductosAgregados = 0;
    }

    get idOrden(){return this._idOrden}
    
    agregarProducto(producto){
        if(this._productos.length < Orden.MAX_PRODUCTOS){
            this._productos.push(producto);
        } else {
            console.log('No es posible agregar mas productos')
        }
    }

    calcularTotal(){
        let totalVenta = 0;
            //Forma propuesta en el curso
        // for(let producto of this._productos){
        //     totalVenta += producto.precio;
        // }
            // Forma simplificada utilizada
        this._productos.forEach(p => totalVenta += p.precio);
        return `Total Venta: $${totalVenta}`;
    }

    mostrarOrden(){
        let orden = `${this.calcularTotal()} ==>> `;
        this._productos.forEach(p => orden += `\n|#| ${p.toString()} `);
        return orden;
    }
}



let prod1 = new Producto('Pantalon', 8500);
let prod2 = new Producto('Camisa', 7400);
console.log(prod1.toString());
console.log(prod2.toString());

let pedido = new Orden();
pedido.agregarProducto(prod1);
pedido.agregarProducto(prod1);
pedido.agregarProducto(prod1);
pedido.agregarProducto(prod2);
console.log(pedido._productos);

console.log(pedido.calcularTotal());
console.log(pedido.mostrarOrden());
