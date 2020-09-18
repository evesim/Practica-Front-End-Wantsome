const thirdDivE1 = document.querySelectorAll('.thirdDiv');
const firstDivE1 = document.querySelectorAll('.firstDiv');
const allDivs = [thirdDivE1, firstDivE1];

onDivClick = (event) => {
    console.log(event.currentTarget.classList);
    event.stopPropagation();
}


allDivs.forEach(div => div.addEventListener('click', onDivClick));