class ProductView {
    constructor() {
        const mainDiv = document.createElement('div');
        const productImage = document.createElement('img');
        const productTitle = document.createElement('h6');
        const productName = document.createElement('h4');
        const ratingDivEl = document.createElement('div');
        const ratingReviewNumbers = document.createElement('h6');
        const ratingUserType = document.createElement('p');


        productImage.setAttribute('src', 'https://picsum.photos/300/200');
        productTitle.innerText = 'My title';
        productName.innerHTML = 'Product name';
        this.addRatingStart(ratingDivEl);
        ratingReviewNumbers.innerText = '566';
        ratingUserType.innerText = 'Superhost'
        ratingDivEl.appendChild(ratingReviewNumbers);
        ratingDivEl.appendChild(ratingUserType);



        mainDiv.appendChild(productImage);
        mainDiv.appendChild(productTitle);
        mainDiv.appendChild(productName);
        mainDiv.appendChild(ratingDivEl);


        return mainDiv;
    }

    addRatingStart(parentEl) {
        for (let i = 0; i < 5; i++) {
            const ratingImgEl = document.createElement('img');
            ratingImgEl.setAttribute('src', 'https://picsum.photos/15/15');
            parentEl.appendChild(ratingImgEl);
        }
    }
}


export default ProductView;