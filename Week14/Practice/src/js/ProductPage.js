import ProductView from "./ProductView"

class ProductPage {
    constructor() {
        const headerEl = document.createElement('h1');
        const productPageEl = document.createElement('div');
        headerEl.innerHTML = "Homes around the world";

        productPageEl.appendChild(headerEl);
        this.addProducts(5, productPageEl);

        return productPageEl;
    }

    addProducts(productsNumber, parentEl) {
        for (let i = 0; i < productsNumber; i++) {
            parentEl.appendChild(new ProductView());
        }
    }
}

export default ProductPage;
