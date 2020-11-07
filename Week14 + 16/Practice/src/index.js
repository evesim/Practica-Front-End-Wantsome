import ProductPage from '.js/ProductPage';
const rootApp = document.getElementById("root-app");

const productPage = new ProductPage();
rootApp.appendChild(productPage.getDomElement());

fetch('URL json').then(function (response) {
    return response.json();
}).then(function (jsonResponse) {
    productPage.insertProducts(jsonResponse)
});

