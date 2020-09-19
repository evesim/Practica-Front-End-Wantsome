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

//create custom new event
const changeDivBgColor =(event)=>{
    let color;
    if(event.detail){
        color = event.detail
    }else{
        color = Math.floor(Math.random()*16777215).toString(16);

    }
    const formContainer = document.getElementById("formContainer");
    formContainer.style.backgroundColor = `#${color}`;
}

const formContainer = document.getElementById("formContainer");
formContainer.addEventListener("practiceChangeBgColor", changeDivBgColor);

const myEvent = new Event("practiceChangeBgColor");
const myEventWithParams = new CustomEvent("practiceChangeColorWithParams",{
    detail: "FF0000"
})

setInterval(() => {
    const formContainer = document.getElementById("formContainer");
    formContainer.dispatchEvent(myEvent);
},2000);

//basics of creating a new custom event
//const myEvent = new Event("numefunctie");
//object.addEventListener("numefunctie", functiacaresaexecute);
//object.dispatchEvent(myEvent);
