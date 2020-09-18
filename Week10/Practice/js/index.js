// Change the value of an element
const onInputChange = () => {
    const userWelcomeE1 = document.getElementById("userWelcome");
    const userNameE1 = document.querySelector("#userName");

    userWelcomeE1.textContent = `Welcome ${userNameE1.value}`;
}

const onLogOut = () => {
    const userWelcomeE1 = document.getElementById("userWelcome");
    userWelcomeE1.textContent = `Salut`;
}

// Will change when you hover over
const onElementMouseOver = () => {
    const userWelcomeE1 = document.getElementById("userWelcome");
    userWelcomeE1.classList.add("over");
}

const onElementMouseOut = () => {
    const userWelcomeE1 = document.getElementById("userWelcome");
    userWelcomeE1.classList.remove("over");
}

const onPageLoad = () => {
    console.log(document.getElementById("userWelcome"));
}

const logOutBtnE1 = document.getElementById("logOutBtn");
logOutBtnE1.addEventListener("click", onLogOut); //??
