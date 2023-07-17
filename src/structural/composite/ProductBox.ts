import Product from "./Product";

export default class ProductBox implements Product {
    private products: Product[] = [];
    add(product: Product) {
        this.products.push(product);
    }
    remove(index: number) {
        this.products.splice(index, 1);
    }
    getProducts() {
        return this.products;
    }
    getPrice(): number {
        let price = 0;
        for (let product of this.products) {
            price += product.getPrice();
        }
        return price;
    }
}
