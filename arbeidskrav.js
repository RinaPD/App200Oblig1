
function sletting(e) {
    e.currentTarget.remove();
}



function leggTil(e) {
    let li = document.createElement("li");
    let msg = document.querySelector("#inputtbox");
    let input = msg.value;
    if (input === "") {
        let tomfelt = document.querySelector("#error");
        tomfelt.innerHTML = "legg til tekst i feltet";
    } 
    else {
        let tilegg = document.createTextNode(input);
        li.appendChild(tilegg);
        li.addEventListener("click", sletting);
        document.querySelector("#liste").appendChild(li);
    }
}



function lyttere(e){
    let ny = document.querySelector("#Knapptilleg");
    ny.addEventListener("click", leggTil);

    let slett = document.querySelectorAll(".sidebar li");
    slett.forEach(function (li) {
        li.addEventListener("click", sletting); 
    });
}

window.addEventListener("load", lyttere);