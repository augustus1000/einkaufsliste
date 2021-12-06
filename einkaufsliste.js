console.log("verbunden");

const einkaufsliste = [];

function einkaufsliste_bearbeiten(produkt, menge){
    
    const tabelle = document.getElementById("show_einkaufsliste");
    
    if(produkt === ""){
        alert("Bitte Produkt eingeben");
    }else{
        if(menge === ""){
        menge = "1";
        }
        einkaufsliste.push([produkt, menge]);
        // tabelle.innerHTML += `<tr><td>${produkt}</td><td>${menge}</td></tr>`;
    }
    console.log(einkaufsliste);
    console.log(einkaufsliste.length);
    for(let i = 0;i < einkaufsliste.length; i++){
        console.log(i);
        if(i = einkaufsliste.length - 1){
        tabelle.innerHTML += `<tr><tl>${einkaufsliste[i][0]}</tl><tl>${einkaufsliste[i][1]}</tl></tr>`;
        }
    } 

}


