// function getAjaxInfoTextDocument() {
//     var xhttp = new XMLHttpRequest(); // initializarea unei noi instante a obiectului
//     xhttp.onreadystatechange = function() { // declararea functiei care trateaza raspunsul
//     if (this.readyState == 4 && this.status == 200) { // verificarea starii - cazul OK
//    document.getElementById("demo").innerHTML = this.responseText; // popularea cu date
//     }
//     };
//     xhttp.open("GET", "ajax_info.txt", true); // specificarea metodei si a locatiei server-ului
//     xhttp.send(); // trimiterea request-ului
//    }

const addContent = () => {
    var xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = () => {
        if (xhttp.readyState === 4 && xhttp === 200) {
            console.log(xhttp);
            renderResponseIntoDOM(xhttp.responseText)
        } else if (xhttp.readyState === 4 && xhttp === 404) {
            console.log("Pagina cautata nu exista");
        }

    }
    xhttp.open("GET", "http://127.0.0.1:5500/Week10/Practice%20AJAX/info.txt", true);
    xhttp.send();
}

const renderResponseIntoDOM = (content) => {
    document.getElementById("content").innerHTML = content;
}
document.getElementById("addContentBtn").addEventListener("click", addContent);