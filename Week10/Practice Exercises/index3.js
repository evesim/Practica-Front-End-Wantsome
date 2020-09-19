//1
//adaugati un tag script si adaugati urmatoarele functii
// sqrNum, halfNum, percentNum si areaCircle

function sqrNum() {
    // <input type="number" id="square" size="2" />
    // <div id="sol"></div>
    const squareInputValue = document.getElementById("square").value;
    const solutionDiv = document.getElementById("sol");
    solutionDiv.textContent = squareInputValue * squareInputValue;

}

function halfNum() {
    // <input type="number" id="half" size="2" />
    const halfInputValue = document.getElementById("half").value;
    const solutionDiv = document.getElementById("sol");
    solutionDiv.textContent = halfInputValue / 2;
}

function percentNum() {
    //<input type="number" id="percent1" size="2" />
    //<input type="number" id="percent2" size="2" />
    const percent1InputValue = document.getElementById("percent1").value;
    const percent2InputValue = document.getElementById("percent2").value;
    const solutionDiv = document.getElementById("sol");
    solutionDiv.textContent = percent1InputValue * percent2InputValue / 100;

}

function areaCircle() {
    //<input type="number" id="area" size="2" />
    //pi*r^2
    const areaInputValue = document.getElementById("area").value;
    const solutionDiv = document.getElementById("sol");
    solutionDiv.textContent = Math.PI * areaInputValue * areaInputValue;
}

//2 pentru fiecare button aveeti de adaugat un event listner
// care atunci cand este clickuit sa gaseasca valoarea inputului
// si sa afiseze rezultatul solutiei

// <button id="sqr-btn">Calculate</button>
// <button id="half-btn">Calculate</button>
// <button id="prc-btn">Calculate</button>
// <button id="area-btn">Calculate</button>

const squareBtn = document.getElementById("#sqr-btn").addEventListener("click", sqrNum);
const halfBtn = document.getElementById("#half-btn").addEventListener("click", halfNum);
const percentBtn = document.getElementById("#prc-btn").addEventListener("click", percentNum);
const areBtn = document.getElementById("area-btn").addEventListener("click", areaCircle);



//3
// Bonus: faceti sa functioneze si la key press pe langa click
squareBtn.addEventListener("keydown", sqrNum);
halfBtn.addEventListener("keydown", halfNum);
percentBtn.addEventListener("keydown", percentNum);
areBtn.addEventListener("keydown", areaCircle);