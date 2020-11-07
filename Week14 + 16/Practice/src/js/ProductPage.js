import ProductView from "./ProductView"

class ProductPage {
    constructor() {
        const headerEl = document.createElement('h1');
        this.productPageEl = document.createElement('div');
        headerEl.innerHTML = "Homes around the world";

        this.productPageEl.appendChild(headerEl);
        return this;
    }

    getDomElement() {
        return this.productsPageEl;
    }

    addProducts(productsNumber, parentEl) {
        for (let i = 0; i < productsNumber; i++) {
            parentEl.appendChild(new ProductView());
        }
    }

    insertProducts(products) {
        const productsList = products.proprietiesForRent;
        const productContainer = document.createElement('div');

        productContainer.classList.add("productContainer");
        productContainer.classList.add("test1");
        productContainer.classList.add("test2");
        for (i = 0; i < productsList.length; i = i + 1) {
            this.parentEl.appendChild(new ProductView(productsList[i]));
        }
    }
}

export default ProductPage;
