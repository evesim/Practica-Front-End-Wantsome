const xhttp = new XMLHttpRequest();

const populateHeader = (info) => {
    const domH1 = document.createElement("h1");
    const domH2 = document.createElement("h2");
    const headerE1 = document.getElementById("header");

    domH1.innerHTML = info.squadName;
    domH2.innerHTML = `Hometown: ${info.homeTown} // Formed: ${info.formed}`;

    headerE1.appendChild(domH1);
    headerE1.appendChild(domH2);
}



const populateContent = (info) => {
    members.forEach(member => {
        const domH1 = document.createElement("h2");
        const p1 = document.createElement("p");
        const p2 = document.createElement("p");
        const ulEl = document.createElement("ul");
        const contentEl = document.getElementById("content")

        domH1.innerText = member.name;
        p1.innerText = `Secret Identity: ${member.secretIdentity}`;
        p2.innerText = `Age: ${member.age}`;
        ulEl.innerText = "Superpower: ";

        member.powers.forEach(power => {
            const liEl = document.createElement("li");
            liEl.innerText = power;
            ulEl.appendChild(liEl);
        });

        contentEl.appendChild(domH1);
        contentEl.appendChild(p2);
        contentEl.appendChild(ulEl);
        contentEl.appendChild(p1);
    })
}

xhttp.onreadystatechange = () => {
    if (xhttp.readyState === 4 && xhttp.status === 200) {
        const responseToJSON = JSON.parse(xhttp.responseText);
        populateHeader(responseToJSON);
        populateContent(responseToJSON.members);
    }
}
xhttp.open("GET", "https://mdn.github.io/learning-area/javascript/oojs/json/superheroes.json", true);
//xhttp.open("GET", "./example.json", true);
xhttp.send();

