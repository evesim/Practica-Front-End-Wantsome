const xhttp = new XMLHttpRequest();

const populateHeader = (info) => {
    const domH1 = document.createElement("h1");
    const domH2 = document.createElement("p");
    const headerEl = document.getElementById("header");

    domH1.innerText = info.squadName;
    domH1.id = "IDTEST"
    domH2.innerText = `Hometown: ${info.homeTown} // Formed: ${info.formed}`;

    headerEl.appendChild(domH1);
    headerEl.appendChild(domH2);

}

const populateContent = (members) => {
    members.forEach(member => {
        const divEl = document.createElement("div");
        const domH1 = document.createElement("h2");
        const p1 = document.createElement("p");
        const p2 = document.createElement("p");
        const ulEl = document.createElement("ul");
        const contentEl = document.getElementById("content");

        divEl.classList.add("superheroItem");
        domH1.innerText = member.name;
        p1.innerText = `Secret identity: ${member.secretIdentity}`;
        p2.innerText = `Age: ${member.age}`;
        ulEl.innerText = "Superpowers: ";
        
        member.powers.forEach(power => {
            const liEL = document.createElement("li");
            liEL.innerText = power;
            ulEl.appendChild(liEL);
        })

        divEl.appendChild(domH1);
        divEl.appendChild(p2);
        divEl.appendChild(ulEl);
        divEl.appendChild(p1);
        contentEl.appendChild(divEl);
    });
}

xhttp.onreadystatechange = () => {
    if(xhttp.readyState === 4 && xhttp.status === 200) {
        const responseToJSON = JSON.parse(xhttp.responseText);
        populateHeader(responseToJSON);
        populateContent(responseToJSON.members);
    }
}
//xhttp.open("GET", "https://mdn.github.io/learning-area/javascript/oojs/json/superheroes.json", true);
xhttp.open("GET", "./example.json", true);
xhttp.send();