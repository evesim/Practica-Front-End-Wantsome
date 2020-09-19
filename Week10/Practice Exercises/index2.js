//1 Adaugati un tag script pentru a face legatura
// intre fisierul js si html

//2
//adaugati un event listener pentru buton care apeleaza
// o functie postTheGossip cand este apasat

//3
// In aceasta functie luati toate valorile fieldurilor
// si faceti un story din ele
// ex "Xulescu este innebunit dupa bere neagra"

/*
<ul>
      <li>Nume: <input type="text" id="name" /></li>
      <li>Adjectiv: <input type="text" id="adjective" /></li>
      <li>Cuvant random: <input type="text" id="random-word" /></li>
    </ul>
*/

const postTheGossip = () => {
    const nameInput = document.getElementById("#name");
    const adjectiveInput = document.getElementById("#adjective");
    const randomWindowInput = document.getElementById("#random-word");

    alert(nameInput.value + " " + randomWindowInput.value + " " + adjectiveInput.value);
}

const myBtn = document.querySelector("#exButton");
myBtn.addEventListener("click", postTheGossip);