// JAVASCRIPT

function huiswerkMaken (vak, callback) {
    setTimeout( () => {
        console.log("ok, ok, ik ga nu mijn " + vak + " huiswerk maken");
        callback();
    }, 4000);

};

function klaarMetHuiswerk () {
console.log ("Kijk Paps/Mams, ik ben klaar met mijn huiswerk!");


};

huiswerkMaken("wiskunde", klaarMetHuiswerk());