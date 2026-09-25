
function lagHtmlTabell(tab) {
    let str = '<table border="1">';
    str += "<tr>";

    for (let attributt in tab[0]) {
        str += "<th>" + attributt + "</th>";
    }

    str += "</tr>";

    for (let rad of tab) {
        str += "<tr>";
        for (let attributt in rad) {
            str += "<td>" + rad[attributt] + "</td>";
        }
        str += "</tr>";
    }

    str += "</table>";
    return str;
}

fetch("varer.json")
    .then(function (svar) {
        return svar.json();
    })
    .then(function (tab) {
        document.querySelector("#varetabell").innerHTML = lagHtmlTabell(tab);
    })
    .catch(function (feil) {
        document.querySelector("#varetabell").textContent =
            "Kunne ikke laste JSON-dataene.";
        console.error(feil);
    });




/*
const knapp = dokument.querySelector("#Knapptilleg")
knapp.addEventListener("click", Knapptilleg );

function slettAvsnitt(e){
    alert("sletter");
    e.target.remove();
}

function Knapptilleg(e){
    let listeelementer = dokument.querySelector("#inputtbox");
    let teksten = listeelementer.value;
    alert(test);

    const kroppen = document.body;
    let avsnitt = document.createElement("p");
    let tekstnode = document.createTextNode(teksten);
    avsnitt.appendChild(tekstnode);
    kroppen.appendChild(avsnitt);
    avsnitt.addEventListener("click", slettAvsnitt);
}
*/

function håndterLukking(event) {
    event.currentTarget.remove();
}


function nyttElement(e) {
  // Lager et nytt listeelement (li):
  let li = document.createElement("li");

  // Henter det brukeren skrev i inndata-feltet:
  let oppg = document.querySelector("#inputtbox");
  let indata = oppg.value;
    if (indata === ""){
        let melding = document.querySelector("#error");
        melding.innerHTML = "skriv inn noe tekst...";
    }
    else {
        let t = document.createTextNode(indata);
        li.appendChild(t);
        li.addEventListener("click", håndterLukking);

        // Legger det nye listeelementet (li) inn i listen (ul):
        document.querySelector("#listeelementer").appendChild(li);

        // Tømmer inndata-feltet og setter fokus dit:
        //oppg.value = "";
        //oppg.focus();
    }

}

function test(e){
    
    let ny = document.querySelector("#Knapptilleg");
    ny.addEventListener("click", nyttElement);

    let listeelementer = document.querySelectorAll("#listeelementer li");
    listeelementer.forEach(function (li) {
        li.addEventListener("click", håndterLukking);
    });
}


window.addEventListener("load", test); 