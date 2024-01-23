class ProductManager {
  constructor(title, description, price, thumbnail, code, stock) {
    this.title = title;
    this.description = description;
    this.price = price;
    this.thumbnail = thumbnail;
    this.code = code;
    this.stock = stock;
  }

  addProducts() {}

  getProducts() {}

  getProductById() {}
}

const producto1 = new ProductManager(
  "producto prueba",
  "Este es un producto prueba",
  200,
  "Sin Imagen",
  "abc123",
  25
);
const productos = [];
productos.push(producto1);
console.log(producto1);
