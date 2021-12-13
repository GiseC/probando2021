let datos = {
    nom: "",
    ap: "",
    email: "",
    cant: "",
    categ: ""
}
let nom = document.querySelector('#inputNombre');
let ap = document.querySelector('#inputApellido');
let email = document.querySelector('#inputEmail');
let cant = document.querySelector('#inputCant');
let categ = document.querySelector('#inputCategoria');
let form1 = document.querySelector("#form3");

nom.addEventListener('input', leerTexto);
ap.addEventListener('input', leerTexto);
email.addEventListener('input', leerTexto);
cant.addEventListener('input', leerTexto);
categ.addEventListener('change', leerTexto);

form1.addEventListener('submit', function(event) {
    event.preventDefault();
    let {nom, ap, email, cant, categ } = datos;
    /*if (nom === "" || ap === "" || email === "" || cant === "") {
        mostrarMensaje("Alguno de los campos esta incompleto.", true);
        return;
    } else if (esNumerico(nombre)){
        console.log("es un numero");
        return;
    }*/
    mostrarMensaje("Los datos se ingresaron correctamente.", false);
    let precio = calcular(datos.cant, datos.categ);
    let pago = document.querySelector('#calprecio');
    pago.textContent = `Total a pagar: \${precio}`;

    //let precio = document.querySelector('#calPrecio');
    //console.log(precio);

});

function calcular(cant2, desc2){
    let valor;
    let entrada3 = 200;
    switch (desc2) {
        case "Estudiantes":
            valor = 0.8;
            break;
        case "Trainee":
            valor = 0.5;
            break;
        case "Junior":
            valor = 0.15;
            break;
        default:
            valor = 0;
            break;            
    }
    let cal1 =  entrada3 - (entrada3 * valor);
    return calcular = cant2 * cal1;
}

function leerTexto(e){
    datos[e.target.id] = e.target.value;
}

function mostrarMensaje(mensaje, error = false) {
    const alerta = document.createElement('P');
    alerta.textContent = mensaje;

    if (error) {
        alerta.classList.add('error');
    } else {
        alerta.classList.add('correcto');
    }

    form1.appendChild(alerta);
    setTimeout(() => {
        alerta.remove();
    }, 5000);
}

function esNumerico(variable){
    let result = 0;
    try{
        result = variable/2;
    }
    catch(Error){
        return false;
    }
    return true;
}

