var meses = new Array ("nulo","Enero","Febrero","Marzo","Abril","Mayo","Junio","Julio","Agosto","Septiembre","Octubre","Noviembre","Diciembre");
esta = new Array();
dir = new Array();
estaf = new Array();
vali = new Array();
dirimg = new Array("http://www.mexienergi.com/aplicacion/imgsta/aero.jpg","http://www.mexienergi.com/aplicacion/imgsta/campa.jpg","http://www.mexienergi.com/aplicacion/imgsta/epig.jpg","http://www.mexienergi.com/aplicacion/imgsta/northm.jpg","http://www.mexienergi.com/aplicacion/imgsta/sjr.jpg","http://www.mexienergi.com/aplicacion/imgsta/tlaco.jpg");
dirlog = new Array("http://www.mexienergi.com/aplicacion/logos/iconaeropuerto.png","http://www.mexienergi.com/aplicacion/logos/icontlacote.png","http://www.mexienergi.com/aplicacion/logos/iconmacias.png","http://www.mexienergi.com/aplicacion/logos/iconarcangel.png","http://www.mexienergi.com/aplicacion/logos/iconepigmenio.png","http://www.mexienergi.com/aplicacion/logos/iconnorthm.png", "http://www.mexienergi.com/aplicacion/logos/iconproxr.png");/*"http://www.mexienergi.com/aplicacion/logos/iconprox.png"*/
/*datos = new Array();*/
/*var permiso;
var estacions;*/

/*SOLO ES MODAL*/
function verModal(tipo, texto, textoBtn, parrafo) { //MODAL DE ALERTA
    bgNegro = document.getElementById('bg-negro');
    modal = document.getElementById('modal');

    bgNegro.classList.add('verModal');
    modal.classList.add('verModal');

    if (tipo == 'chico') {
        parrafo = ""
    } else {
        parrafo = parrafo;
    }

    modal.innerHTML = "<h1>" + texto + "</h1>" +
        "<p>" + parrafo + "</p>" +
        "<div class='div3'></div>" +
        "<button style='color:white;' onclick='cerrar()' class='div3 menta'>" + textoBtn + "</button>";

    modal.classList.add(tipo);

    tipo = tipo;
}

function cerrar() { //BOTON QUE SE CREA
    bgNegro.classList.remove('verModal');
    modal.classList.remove('verModal');

    if (modal.classList.contains('chico')) {
        modal.classList.remove('chico');
    } else {
        modal.classList.remove('grande');
    }
}
/*expr = /^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/; // caracteres que se van a evaluar al input
                                    if (expr.test(mai)){}else{alert();}//validacion del campo con el formato ejemplo@servicio.com*/
function verAlerta(tipo, texto, parrafo) { //MODAL DE ALERTA
    bgNegro = document.getElementById('bg-negro');
    modal = document.getElementById('modal');

    bgNegro.classList.add('verModal');
    modal.classList.add('verModal');

    if (tipo == 'chico') {
        parrafo = ""
    } else {
        parrafo = parrafo;
    }

    modal.innerHTML = "<h1>" + texto + "</h1>" +
        "<p>" + parrafo + "</p>" +
        "<div class='div3'></div>";

    modal.classList.add(tipo);

    tipo = tipo;
}

function cerrarm() { //BOTON QUE SE CREA
    bgNegro.classList.remove('verModal');
    menu.classList.remove('verModal');

    if (menu.classList.contains('lateral')) {
        menu.classList.remove('lateral');
    } else {
        menu.classList.remove('grande');
    }
}


/*PARA INDEX*/
function entrar(form) { //se recibe completo el form - id de form login
    mailG = document.getElementById("username").value; //EVALUA LOS INPUTS
    pass = document.getElementById("userpassword").value; //EVALUA LOS INPUTS
    flag = "inicioSes";
    mail = mailG.toLowerCase();

    enviar = new XMLHttpRequest;
    /*enviar.open('POST', 'datos.php');*/
    enviar.open('POST', 'http://www.mexienergi.com/aplicacion/datoslocal.php'); //link que hace contacto con el servidor para empaquetar
    enviar.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
    enviar.send('correo=' + mail + '&contrasena=' + pass + '&flag=' + flag);//datos que le manda al php que esta en el server
    enviar.onreadystatechange = function () {
        if (enviar.readyState == 4 && enviar.status == 200) {
            //AQUI ESTA LA RESPUESTA DEL PHP
            respuesta = enviar.responseText;
            /*alert(respuesta);*/
            desg = respuesta.split('*');//toda la respuesta es dividida por *
            acceso = desg[0]; //aqui es guardada en localstorage
            if (acceso == "Ingreso Correcto") {
                psem = desg[1];
                /*alert(p);*/
                sessionStorage.setItem("pers", psem);
                esem = desg[2];
                /*alert(e);*/
                sessionStorage.setItem("ess", esem);
                pfc = desg[3];
                sessionStorage.setItem("perc", pfc);
                efc = desg[4];
                sessionStorage.setItem("esc", efc);
                if (psem == "1" && pfc == "0") { //SOLO VE LOS SEMAFOROS
                    location.href = "menu.html";
                }
                if (pfc == "1" && psem == "0") { //SOLO VE LAS FINANZAS
                    location.href = "menu.html";
                }
                if (psem == "1" && pfc == "1") { //VE TODO
                    location.href = "menu.html";
                }
            }
            if (acceso == "Datos Incorrectos") {
                verModal('grande', '', 'Ok', "Datos Incorrectos");/*ESTE CAMBIA POR UN MODAL QUE EL TENGA*/
                sessionStorage.clear();
                document.getElementById("contra").value = "";
                document.getElementById("correo").value = "";
            }
            /*else{
                            verModal('grande','','Ok', "Algo a salido mal"+respuesta);
                            document.getElementById("contra").value = "";
                            document.getElementById("correo").value = "";
                        } */
        }
    }
}

/*function registrar() { //muestra el menu para registrar el correo    YA NO EXISTE
    paginaInicio = document.querySelector("#formulario");
    paginaRegis = document.querySelector("#formreg");
    paginaInicio.classList.add("rde");
    paginaInicio.classList.remove("riz");
    paginaRegis.classList.add("riz");
    paginaRegis.classList.remove("rde");
}

function regresar(){ //regresa al menu de inicio      YA NO EXISTE
    paginaInicio = document.querySelector("#formulario");
    paginaRegis = document.querySelector("#formreg");
    paginaInicio.classList.remove("rde");
    paginaInicio.classList.add("riz");
    paginaRegis.classList.remove("riz");
    paginaRegis.classList.add("rde");
}*/

/*PARA REGISTRO*/
/*function conseguir(form) {
    mailG = form.correo.value;
    if(mailG != ""){
        enviar = new XMLHttpRequest;
        enviar.open('POST', 'datos.php');
        enviar.open('POST', 'http://www.mexienergi.com/aplicacion/agregarcorreo.php'); //para empaquetar
        enviar.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
        enviar.send('correo=' + mailG);
        enviar.onreadystatechange = function () {
            if (enviar.readyState == 4 && enviar.status == 200) {
                respuesta = enviar.responseText;
                if(respuesta == "OK"){
                    verModal('grande', '', 'Ok', "Se han mando correctamente tu correo.");
                    regresar();
                }else{
                    verModal('grande', '', 'Ok', "Algo a salido mal al enviar.");
                }
            }
        }
    }
    if(mailG == ""){
        verModal('grande', '', 'Ok', "Hay algun error detro de tu correo.");
    }
}*/

/*PARA inicio.html*/
function vald(){ // PARA VALIDAR QUE VEN SEGUN LOS PERMISOS.
    s = sessionStorage.getItem("pers");
    e = sessionStorage.getItem("perc");
    if( s == 1 && e == 0){
        document.querySelector("#usernormal").style.display ="block";
        document.querySelector("#usermaestro").style.display ="none";
        document.querySelector("#usercorte").style.display ="none";
    }if(e == 1 && s == 0){
       document.querySelector("#usercorte").style.display ="block";
       document.querySelector("#usernormal").style.display ="none";
       document.querySelector("#usermaestro").style.display ="none";
    }if(e == 1 && s ==1){
        document.querySelector("#usermaestro").style.display ="block";
        document.querySelector("#usercorte").style.display ="none";
        document.querySelector("#usernormal").style.display ="none";
    }
}

/*function progres(){
    verModal('grande', '', 'Ok', "En construcción...");
}*/

/*PARA semaforo.html*/
function llenado() { // llena el select de los servidores
    estaci = sessionStorage.getItem("ess");
    mostrar = sessionStorage.getItem("truco");
    flag = "inicioSer";
    if(mostrar == 1){
        document.querySelector(".header").style.display = "none";
        document.querySelector(".user").style.display = "block"
    }
    enviar = new XMLHttpRequest;
    /*enviar.open('POST', 'datos.php')*/
    enviar.open('POST', 'http://www.mexienergi.com/aplicacion/datoslocal.php'); //para empaquetar
    enviar.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
    enviar.send('est=' + estaci + '&flag=' + flag);
    enviar.onreadystatechange = function () {
        if (enviar.readyState == 4 && enviar.status == 200) {
            respuesta = enviar.responseText;
            /*alert(respuesta);*/
            sessionStorage.setItem("semsta", respuesta);
            sepa = respuesta.split("*");
            numero = (sepa.length) - 1;
            /*alert(numero);*/
            num = numero/2; //se divide por que es la cant. de estaciones y no de datos que se necesita.
            j = 0;
            k = 0;
            for (i = 0; i < numero; i++) {
                if (i % 2 == 0) {
                    esta[j] = sepa[i];
                    j++;
                } else {
                    dir[k] = sepa[i];
                    k++;
                }
            }
            
            select = document.getElementById("selec");
            for (index = 0; index < num; index++) {
                select.options[select.options.length] = new Option(esta[index], dir[index]);
                if(esta[0] == "AEROPUERTO"){
                    document.getElementById("imagenb").innerHTML = "<img style='width:99%; height:99%; margin-left:.5%;' id='imgsem' src='"+dirimg[0]+"'>"
                }if(esta[0] == "MACIAS"){
                    document.getElementById("imagenb").innerHTML = "<img style='width:99%; height:99%; margin-left:.5%;' id='imgsem' src='"+dirimg[4]+"'>"
                }if(esta[0] == "TLACOTE"){
                    document.getElementById("imagenb").innerHTML = "<img style='width:99%; height:99%; margin-left:.5%;' id='imgsem' src='"+dirimg[5]+"'>"
                }if(esta[0] == "ARCANGEL"){
                    document.getElementById("imagenb").innerHTML = "<img style='width:99%; height:99%; margin-left:.5%;' id='imgsem' src='"+dirimg[1]+"'>"
                }if(esta[0] == "EPIGMENIO"){
                    document.getElementById("imagenb").innerHTML = "<img style='width:99%; height:99%; margin-left:.5%;' id='imgsem' src='"+dirimg[2]+"'>"
                }if(esta[0] == "NORTHM"){
                    document.getElementById("imagenb").innerHTML = "<img style='width:99%; height:99%; margin-left:.5%;' id='imgsem' src='"+dirimg[3]+"'>"
                }
                /*=========================== VA A CAMBIAR ES DECIR HAY QUE AGREGAR TODOS LOS CASOS QUE SEAN LA PRIMERA Y UNICA ESTACION======================*/
            }
        }
    }
}

function reinicio() { // Cuando hace el cambio de estaciones en el semaforo regresa los botones a su default
    p = document.getElementById("selec");
    selecsta = p.options[p.selectedIndex].text;

    if(selecsta == "AEROPUERTO"){
        image = document.getElementById("imgsem");
        image.src = dirimg[0];
    }if(selecsta == "TLACOTE"){
        image = document.getElementById("imgsem");
        image.src = dirimg[5];
    }if(selecsta == "MACIAS"){
        image = document.getElementById("imgsem");
        image.src = dirimg[4];
    }if(selecsta == "ARCANGEL"){
        image = document.getElementById("imgsem");
        image.src = dirimg[1];
    }if(selecsta == "EPIGMENIO"){
        image = document.getElementById("imgsem");
        image.src = dirimg[2];
    }if(selecsta == "NORTHM"){
        image = document.getElementById("imgsem");
        image.src = dirimg[3];
    }

    image = document.getElementById("botono");
    image.src = "img/lightn.png";
    document.getElementById("estado").style.backgroundColor = "rgba(35,125,69,.8)";
    document.getElementById("estado").style.border = "rgba(35,125,69,.8)";
    document.getElementById("estado").disabled = false;

    document.getElementById("dstado").innerHTML = "Status";

    document.getElementById("cambio").style.backgroundColor = "grey";
    document.getElementById("cambio").border = "grey";
    document.getElementById("cambio").disabled = true;
}

function enviarS(form) { //pregunta el status de el servidor
    pedir = "Status"
    dire = form.selec.value;
    division = dire.split(":");
    puerto = division[2].split("/");
    /*alert(puerto[0]);*/

    if (dire != 0) {
        enviar = new XMLHttpRequest;
        /*enviar.open('POST', '../../datosgas/datosws.php');*/
        enviar.open('POST', 'http://www.mexienergi.com/aplicacion/datosws.php'); //para empaquetar
        enviar.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
        enviar.send('estado=' + pedir + '&direcion=' + dire +'&p='+puerto[0]);
        verAlerta('Chico', 'Procesando...',''); //COMO HACER QUE SE ESCRIBA UNA UNICA VEZ
        enviar.onreadystatechange = function () {
            if (enviar.readyState == 4 && enviar.status == 200) {
                verModal('grande', '', 'Ok', 'Proceso Finalizado'); //NO LOS MUESTRA POR QUE LA RESPUESTA ES INMEDIATA...
                document.getElementById("estado").disabled = true;
                document.getElementById("cambio").disabled = true;
                document.getElementById("estado").style.backgroundColor = "grey";
                document.getElementById("estado").style.border = "grey";
                document.getElementById("cambio").style.backgroundColor = "grey";
                document.getElementById("cambio").style.border = "grey";

                respuesta = enviar.responseText;
                desg = respuesta.split('"');
                estado = desg[3];
                /*alert(estado);*/
                /*estado = "apagado";*/
                sessionStorage.setItem("state", estado);
                if (estado == "Prendido" || estado == "Apagado") { //aqui se debe poner las dos respuestas que deben regresar si son diferentes error
                    /*vermodal();*/
                    /*alert("El Status del *** es: "+estado);*/
                    document.getElementById("dstado").innerHTML = estado;
                    verModal('grande', '', 'Ok', "El status es: " + estado);
                    if (estado == "Prendido") {
                        image = document.getElementById("botono");
                        image.src = "img/lightv.png";
                        document.getElementById("estado").style.backgroundColor = "grey";
                        document.getElementById("estado").style.border = "grey";
                        document.getElementById("estado").disabled = true;



                        document.getElementById("cambio").style.backgroundColor = "rgba(35,125,69,.8)";
                        document.getElementById("cambio").border = "rgba(35,125,69,.8)";
                        document.getElementById("cambio").disabled = false;
                    }
                    if (estado == "Apagado") {
                        image = document.getElementById("botono");
                        image.src = "img/lightr.png";
                        document.getElementById("estado").style.backgroundColor = "grey";
                        document.getElementById("estado").style.border = "grey";
                        document.getElementById("estado").disabled = true;



                        document.getElementById("cambio").style.backgroundColor = "rgba(35,125,69,.8)";
                        document.getElementById("cambio").border = "rgba(35,125,69,.8)";
                        document.getElementById("cambio").disabled = false;
                    }

                } else {
                    verModal('grande', '', 'Ok', "Hay un error en el servidor, favor de reportar");
                    document.getElementById("estado").style.backgroundColor = "rgba(35,125,69,.8)";
                    document.getElementById("estado").style.border = "rgba(35,125,69,.8)";
                    document.getElementById("estado").disabled = false;

                    document.getElementById("dstado").innerHTML = "Status";

                    document.getElementById("cambio").style.backgroundColor = "grey";
                    document.getElementById("cambio").border = "grey";
                    document.getElementById("cambio").disabled = true;
                    /*AQUI SE DEBE AGREGAR EL MODAL... ARRIBA SOLO LA BARRA O UN MODAL DE VERDAD... COMO EL QUE SE HACE*/
                }
            }
        }
    } else {
        verModal('grande', '', 'Ok', "Selecciona una Estación");
    }
}

function cambiarS(form) { //genera una peticion para el cambio de status
    res = sessionStorage.getItem("state");
    dire = form.selec.value;
    division = dire.split(":");
    puerto = division[2].split("/");
    /*alert(res);*/
    if (res == "Prendido") {
        /*alert(dire);*/
        res = "Apagado";
        /*alert(res+"CAMBIO DE STATUS");*/
        direccion = "";
        enviar = new XMLHttpRequest;
        /*enviar.open('POST', 'datows.php');*/
        enviar.open('POST', 'http://www.mexienergi.com/aplicacion/datows.php'); //para empaquetar
        enviar.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
        enviar.send('cambiar=' + res + '&direcion=' + dire +'&p='+puerto[0]);
        
        verAlerta('Chico', 'Procesando...','');
        enviar.onreadystatechange = function () {
            if (enviar.readyState == 4 && enviar.status == 200) {
                verModal('grande', '', 'Ok', 'Proceso Finalizado');
                /*alert("entro al ready");*/
                respuesta = enviar.responseText;
                /*alert(respuesta+"ESTA ES LA RESPUESTA");*/
                desg = respuesta.split('"');
                estador = desg[3];

                if (estador == "Apagado Correcto") {
                    estado = "Apagado";
                    sessionStorage.setItem("state", estado);
                    document.getElementById("dstado").innerHTML = estado;
                    verModal('grande', '', 'Ok', "El status es: " + estado);
                    image = document.getElementById("botono");
                    image.src = "img/lightr.png";
                    document.getElementById("estado").style.backgroundColor = "grey";
                    document.getElementById("estado").style.border = "grey";
                    document.getElementById("estado").disabled = true;

                    document.getElementById("cambio").style.backgroundColor = "rgba(35,125,69,.8)";
                    document.getElementById("cambio").border = "rgba(35,125,69,.8)";
                    document.getElementById("cambio").disabled = false;
                }

            } //ERROR DE NO HACAR NADA!
        }
    } else {
        /*alert("entro al else");*/
        /*alert(dire);*/
        res = "Prendido";
        /*alert(res);*/
        direccion = "";
        enviar = new XMLHttpRequest;
        /*enviar.open('POST', 'datows.php');*/
        enviar.open('POST', 'http://www.mexienergi.com/aplicacion/datows.php'); //para empaquetar
        enviar.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
        enviar.send('cambiar=' + res + '&direcion=' + dire +'&p='+puerto[0]);
       verAlerta('Chico', 'Procesando...','');
        enviar.onreadystatechange = function () {
            if (enviar.readyState == 4 && enviar.status == 200) {
                /*alert("entro al ready");*/
                verModal('grande', '', 'Ok', 'Proceso Finalizado');
                respuesta = enviar.responseText;
                /*alert(respuesta);*/
                desg = respuesta.split('"');
                estador = desg[3];

                if (estador == "Prendido Correcto") {
                    estado = "Prendido";
                    sessionStorage.setItem("state", estado);
                    document.getElementById("dstado").innerHTML = estado;
                    verModal('grande', '', 'Ok', "El status es: " + estado);
                    image = document.getElementById("botono");
                    image.src = "img/lightv.png";
                    document.getElementById("estado").style.backgroundColor = "grey";
                    document.getElementById("estado").style.border = "grey";
                    document.getElementById("estado").disabled = true;

                    document.getElementById("cambio").style.backgroundColor = "rgba(35,125,69,.8)";
                    document.getElementById("cambio").border = "rgba(35,125,69,.8)";
                    document.getElementById("cambio").disabled = false;
                }
            }
        }
    }
}



/*PARA BIENVENIDA.HTML*/
function mostrarcorte() {
    flag = "inicioFin";
    mostrar = sessionStorage.getItem("truco");
    if(mostrar == 1){
        document.querySelector(".header").style.display = "none";
        document.querySelector(".user").style.display = "block"
    }

    enviar = new XMLHttpRequest;
    /*enviar.open('POST', 'datos.php');*/
    enviar.open('POST', 'http://www.mexienergi.com/aplicacion/datoslocal.php'); //para empaquetar
    enviar.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
    enviar.send('flag=' + flag);
    enviar.onreadystatechange = function () {
        if (enviar.readyState == 4 && enviar.status == 200) {
            respuesta = enviar.responseText;
            sessionStorage.setItem("sta", respuesta);
            separar = respuesta.split("*");
            numero = (separar.length) - 1;
            m = 0; //posicion de los id
            j = 1; //poscion de nombre
            k = 2; //direccion de imagen
            l=0;
            for (i = 0; i <= numero; i++) {
                if (separar[m] == 1 || separar[m] == 2 || separar[m] == 3 || separar[m] == 4 || separar[m] == 5 || separar[m] == 6 ){
                    /*document.getElementById("menusta").innerHTML += "<div class='divestacion' onclick='vercorte(this.id)' id='"+separar[m]+"'>"+"<div class='div1'>"+" <div class='div20'> <img src='"+dirlog[l]+"' id='iconesta'> </div> <div class='div80'><p>"+separar[j]+"</p></div>"+"</div>"+"</div>";*/
                    document.getElementById("iniciolistado").innerHTML += "<li class='listado_gas' onclick='vercorte(this.id)' id='"+separar[m]+"'><div style='float: left; width: 15%;'><img src='http://www.mexienergi.com/aplicacion/imgsta/mexi.png' style='width: 40px'></div> <div style='float: left; width: 85%'><a href='#' class='btn btn-lg btn-block boton_listado'>"+separar[j]+"</a></div><div style='clear:both'></div>";
                }
                if (separar[m] == 7 || separar[m] == 9 || separar[m] == 10 ){
                    /*document.getElementById("menusta").innerHTML += "<div class='divestacion' onclick='' id='"+separar[m]+"'>"+"<div class='div1'>"+" <div class='div20'> <img src='"+dirlog[6]+"' id='iconesta'> </div> <div class='div80'><p>"+separar[j]+"</p></div>"+"</div>"+"</div>";*/
                    document.getElementById("iniciolistado").innerHTML += "<li class='listado_gas' onclick='vercorte(this.id)' id='"+separar[m]+"'><div style='float: left; width: 15%;'><img src='http://www.mexienergi.com/aplicacion/imgsta/mexi.png' style='width: 40px'></div> <div style='float: left; width: 85%'><a href='#' class='btn btn-lg btn-block boton_listado'>"+separar[j]+"</a></div><div style='clear:both'></div>";
                }
                if (separar[m] == 8){
                    /*document.getElementById("menusta").innerHTML += "<div class='divestacion' id='"+separar[m]+"'>"+"<div class='div1'>"+" <div class='div20'> <img src='"+dirlog[6]+"' id='iconesta'> </div> <div class='div80'><p style='font-size:1.5em'>"+separar[j]+"</p></div>"+"</div>"+"</div>";*/
                    document.getElementById("iniciolistado").innerHTML += "<li class='listado_gas' onclick='vercorte(this.id)' id='"+separar[m]+"'><div style='float: left; width: 15%;'><img src='http://www.mexienergi.com/aplicacion/imgsta/mexi.png' style='width: 40px'></div> <div style='float: left; width: 85%'><a href='#' class='btn btn-lg btn-block boton_listado'>"+separar[j]+"</a></div><div style='clear:both'></div>";
                }

                j = j + 3;
                m = m + 3;
                k = k + 3;
                l++;
                if(separar[m] > 10){ break;}
            }
            //COMO VALIDAR LOS DATOS DE LA RESPUESTA...
        }
    }
}

function vercorte(id) {
    respdat2 = sessionStorage.getItem("sta");
    perm = sessionStorage.getItem("esc");
    //alert(respdat2); CORRECTA
    seperador = respdat2.split("*");
    numero = (seperador.length) - 1;
    separador2 = perm.split(",");
    numero2 = (separador2.length) - 1;
    /*alert(numero); //CORRECTO
    alert(numero2); //CORRECTO*/
    for (i = 0; i <= numero; i++) {
        estaf[i] = seperador[i];
    }
    for (l = 0; l <= numero2; l++) {
        vali[l] = separador2[l];
    }
    /*alert(estaf);alert(vali);*/
    k = 0;
    for (j = 0; j <= numero2; j++) {
        if (vali[j] == "1") {
            vali[j] = estaf[k];
            k = k + 3;
        } else {
            k = k + 3;
        }
    }
    /*alert(vali);*/
    estacions = id;
    estacions = estacions.toUpperCase();
    for (m = 0; m <= numero2; m++) {
        if (estacions == vali[m]) {
            sessionStorage.setItem("staact", estacions);
            location.href = "estacion.html";
        }
    }
}

function muestrae() {
    estacione = sessionStorage.getItem("staact");
    /*alert("CARGA DE LA ESTACION PARA MOSTRAR EL DIV CORRECTO CON EL ID EXACTO"+estacione);*/
    flag = "cargaFin";

    enviar = new XMLHttpRequest;
    /*enviar.open('POST', 'datos.php');*/
    enviar.open('POST', 'http://www.mexienergi.com/aplicacion/datoslocal.php'); //para empaquetar
    enviar.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
    enviar.send('idesta=' + estacione + '&flag=' + flag);
    enviar.onreadystatechange = function () {
        if (enviar.readyState == 4 && enviar.status == 200) {
            respuesta = enviar.responseText;
            /*alert(respuesta);*/
            datos = respuesta.split("*");
            fecha = datos[2];
            sessionStorage.setItem("fecha", fecha);
            document.getElementById("nombre").innerHTML = datos[0];
            if(datos[0] == "AEROPUERTO"){
                image = document.querySelector("#bannersta");
                image.style.backgroundImage = 'url('+dirimg[0]+')';
            }if(datos[0] == "TLACOTE"){
                image = document.querySelector("#bannersta");
                image.style.backgroundImage = 'url('+dirimg[5]+')';
            }if(datos[0] == "MACIAS"){
                image = document.querySelector("#bannersta");
                image.style.backgroundImage = 'url('+dirimg[4]+')';
            }if(datos[0] == "ARCANGEL"){
                image = document.querySelector("#bannersta");
                image.style.backgroundImage = 'url('+dirimg[1]+')';
            }if(datos[0] == "EPIGMENIO"){
                image = document.querySelector("#bannersta");
                image.style.backgroundImage = 'url('+dirimg[2]+')';
            }if(datos[0] == "NORTHM"){
                image = document.querySelector("#bannersta");
                image.style.backgroundImage = 'url('+dirimg[3]+')';
            }
            document.getElementById("fecha").innerHTML = "Fecha de corte: "+fecha;
            document.getElementById("preciom").innerHTML = "$" + datos[3];
            document.getElementById("preciop").innerHTML = "$" + datos[4];
            document.getElementById("preciod").innerHTML = "$" + datos[5];
            document.getElementById("vendidom").innerHTML = datos[6]+"lts";
            document.getElementById("vendidop").innerHTML = datos[7]+"lts";
            document.getElementById("vendidod").innerHTML = datos[8]+"lts";
            document.getElementById("pm").innerHTML = datos[10]+"%";
            document.getElementById("pp").innerHTML = datos[11]+"%";
            document.getElementById("pd").innerHTML = datos[12]+"%";
            document.getElementById("totalv").innerHTML = "$"+datos[1];
            document.getElementById("totalts").innerHTML = datos[9]+"lts";
        }
    }
}

function pormes() { //ventas hasta el dia actual del mes
    estacione = sessionStorage.getItem("staact");

    flag = "ventaFin";
    enviar = new XMLHttpRequest;
    /*enviar.open('POST', '../../datosgas/datos.php');*/
    enviar.open('POST', 'http://www.mexienergi.com/aplicacion/datoslocal.php'); //para empaquetar
    enviar.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
    enviar.send('idesta=' + estacione + '&flag=' + flag);
    enviar.onreadystatechange = function () {
        if (enviar.readyState == 4 && enviar.status == 200) {
            respuesta = enviar.responseText;
            /*alert(respuesta);*/
            fecha = sessionStorage.getItem("fecha");
            fechas = fecha.split("/");
            rango = respuesta.split("*");
            document.getElementById("totalv2").innerHTML = "$" + rango[3];
            document.getElementById("totalts2").innerHTML = rango[7] + " lts";
            document.getElementById("fecha2").innerHTML = meses[parseInt(fechas[1])]+" "+fechas[2];
            document.getElementById("preciom2").innerHTML = "$" + rango[11];
            document.getElementById("preciop2").innerHTML = "$" + rango[12];
            document.getElementById("preciod2").innerHTML = "$" + rango[13];
            document.getElementById("litrosm2").innerHTML = rango[4]+"lts";
            document.getElementById("litrosp2").innerHTML = rango[5]+"lts";
            document.getElementById("litrosd2").innerHTML = rango[6]+"lts";
            document.getElementById("vendidom2").innerHTML = "$" + rango[0];
            document.getElementById("vendidop2").innerHTML = "$" + rango[1];
            document.getElementById("vendidod2").innerHTML = "$" + rango[2];
            document.getElementById("pm2").innerHTML = rango[8]+"%";
            document.getElementById("pp2").innerHTML = rango[9]+"%";
            document.getElementById("pd2").innerHTML = rango[10]+"%";
        }
    }
}

function promdmes() { //promedios del mes
    estacione = sessionStorage.getItem("staact");
    flag = "promedioFin";
    enviar = new XMLHttpRequest;
    /*enviar.open('POST', '../../datosgas/datos.php');*/
    enviar.open('POST', 'http://www.mexienergi.com/aplicacion/datoslocal.php'); //para empaquetar
    enviar.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
    enviar.send('idesta=' + estacione + '&flag=' + flag);
    enviar.onreadystatechange = function () {
        if (enviar.readyState == 4 && enviar.status == 200) {
            respuesta = enviar.responseText;
            /*alert(respuesta);*/
            fecha = sessionStorage.getItem("fecha");
            fechas = fecha.split("/");
            rango = respuesta.split("*");
            document.getElementById("totalv3").innerHTML = "$" + rango[3];
            document.getElementById("totalts3").innerHTML = rango[7] + " lts";
            document.getElementById("fecha3").innerHTML = "Promedio de "+meses[parseInt(fechas[1])]+" "+fechas[2];
            document.getElementById("preciom3").innerHTML = "$" + datos[3];
            document.getElementById("preciop3").innerHTML = "$" + datos[4];
            document.getElementById("preciod3").innerHTML = "$" + datos[5];
            document.getElementById("litrosm3").innerHTML = rango[4]+"lts";
            document.getElementById("litrosp3").innerHTML = rango[5]+"lts";
            document.getElementById("litrosd3").innerHTML = rango[6]+"lts";
            document.getElementById("vendidom3").innerHTML = "$" + rango[0];
            document.getElementById("vendidop3").innerHTML = "$" + rango[1];
            document.getElementById("vendidod3").innerHTML = "$" + rango[2];
            document.getElementById("pm3").innerHTML = rango[8]+"%";
            document.getElementById("pp3").innerHTML = rango[9]+"%";
            document.getElementById("pd3").innerHTML = rango[10]+"%";
        }
    }
}

function porfecha() { //carga la fecha actual en la seccion de rango, 
    estacione = sessionStorage.getItem("staact");
    finicio = sessionStorage.getItem("fecha");
    ffin = sessionStorage.getItem("fecha");
    ffalsa = sessionStorage.getItem("fecha");
    flag = "fechaFin";
    enviar = new XMLHttpRequest;
    /*enviar.open('POST', 'datos.php');*/
    enviar.open('POST', 'http://www.mexienergi.com/aplicacion/datoslocal.php'); //para empaquetar
    enviar.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
    enviar.send('idesta=' + estacione + '&fecini=' + finicio + '&fecfin=' + ffin + '&flag=' + flag);
    enviar.onreadystatechange = function () {
        if (enviar.readyState == 4 && enviar.status == 200) {
            respuesta = enviar.responseText;
            /*alert(respuesta);*/
            rango = respuesta.split("*");
            document.getElementById("totalv4").innerHTML = "$" + rango[3];
            document.getElementById("totalts4").innerHTML = rango[7] + " lts";
            /*document.getElementById("fecha").innerHTML = ffalsa + " a " + ffalsa;*/
            document.getElementById("preciom4").innerHTML = "$" + rango[11];
            document.getElementById("preciop4").innerHTML = "$" + rango[12];
            document.getElementById("preciod4").innerHTML = "$" + rango[13];
            document.getElementById("vendidom4").innerHTML = rango[4]+"lts";
            document.getElementById("vendidop4").innerHTML = rango[5]+"lts";
            document.getElementById("vendidod4").innerHTML = rango[6]+"lts";
            document.getElementById("vtm4").innerHTML = "$" + rango[0];
            document.getElementById("vtp4").innerHTML = "$" + rango[1];
            document.getElementById("vtd4").innerHTML = "$" + rango[2];
            document.getElementById("pm4").innerHTML = rango[8]+"%";
            document.getElementById("pp4").innerHTML = rango[9]+"%";
            document.getElementById("pd4").innerHTML = rango[10]+"%";
            fecha = finicio.split('/').reverse().join('-');
            document.getElementById("fechai").value =fecha;
            document.getElementById("fechaf").value =fecha;
        }
    }
}

function tipoCorte(cambio) {
    opcion = cambio;
    diac = document.querySelector("#corte");
    porm = document.querySelector("#mes");
    prom = document.querySelector("#promedio");
    ranf = document.querySelector("#rango");
    if (opcion == "corte") {
        diac.style.display = "block";
        document.querySelector("#titulo").style.display="block";
        document.querySelector("#tcor").style.display="block";

        porm.style.display = "none";
        document.querySelector("#titulo2").style.display="none";
        document.querySelector("#tmes").style.display="none";
        prom.style.display = "none";
        document.querySelector("#titulo3").style.display="none";
        document.querySelector("#tprom").style.display="none";
        ranf.style.display = "none"
        document.querySelector("#titulo4").style.display="none";
        document.querySelector("#tper").style.display="none";
    }
    if (opcion == "pmes") {
        porm.style.display = "block";
        document.querySelector("#titulo2").style.display="block";
        document.querySelector("#tmes").style.display="block";
        diac.style.display = "none";
        document.querySelector("#titulo").style.display="none";
        document.querySelector("#tcor").style.display="none";
        prom.style.display = "none";
        document.querySelector("#titulo3").style.display="none";
        document.querySelector("#tprom").style.display="none";
        ranf.style.display = "none";
        document.querySelector("#titulo4").style.display="none";
        document.querySelector("#tper").style.display="none";
        pormes();
    }
    if (opcion == "promedio") {
        prom.style.display = "block";
        document.querySelector("#titulo3").style.display="block";
        document.querySelector("#tprom").style.display="block";
        diac.style.display = "none";
        document.querySelector("#titulo").style.display="none";
        document.querySelector("#tcor").style.display="none";
        porm.style.display = "none";
        document.querySelector("#titulo2").style.display="none";
        document.querySelector("#tmes").style.display="none";
        ranf.style.display = "none";
        document.querySelector("#titulo4").style.display="none";
        document.querySelector("#tper").style.display="none";
        promdmes();
    }
    if (opcion == "rfecha") {
        ranf.style.display = "block";
        document.querySelector("#titulo4").style.display="block";
        document.querySelector("#tper").style.display="block";
        diac.style.display = "none";
        document.querySelector("#titulo").style.display="none";
        document.querySelector("#tcor").style.display="none";
        porm.style.display = "none";
        document.querySelector("#titulo2").style.display="none";
        document.querySelector("#tmes").style.display="none";
        prom.style.display = "none";
        document.querySelector("#titulo3").style.display="none";
        document.querySelector("#tprom").style.display="none";
        porfecha();
    }
}

function enviarF(form) { //rango de fecha se acciona con el boton
    estacione = sessionStorage.getItem("staact");
    finicio = form.fechai.value;
    ffin = form.fechaf.value;
    /*alert("CARGA DE LA ESTACION PARA MOSTRAR EL DIV CORRECTO CON EL ID EXACTO"+estacione);*/
    flag = "fechaFin";
    finicio = finicio.split('-').reverse().join('/');
    ffin = ffin.split('-').reverse().join('/');

    if (finicio != "") {
        if (ffin != "") {
            /*alert(finicio);alert(ffin);*/
            valorinicio = finicio.split("/");
            valorfin = ffin.split("/");
            diainicio = new Date(valorinicio[2],(valorinicio[1]-1),valorinicio[0]);
            diafin = new Date(valorfin[2],(valorfin[1]-1),valorfin[0]);
            if(diafin >= diainicio){
                enviar = new XMLHttpRequest;
                /*enviar.open('POST', 'datos.php');*/
                enviar.open('POST', 'http://www.mexienergi.com/aplicacion/datoslocal.php'); //para empaquetar
                enviar.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
                enviar.send('idesta=' + estacione + '&fecini=' + finicio + '&fecfin=' + ffin + '&flag=' + flag);
                enviar.onreadystatechange = function () {
                    if (enviar.readyState == 4 && enviar.status == 200) {
                        respuesta = enviar.responseText;
                        /*alert(respuesta);*/
                        rango = respuesta.split("*");
                        document.getElementById("totalv4").innerHTML = "$" + rango[3];
                        document.getElementById("totalts4").innerHTML = rango[7] + " lts";
                        /*document.getElementById("fecha").innerHTML = ffalsa + " a " + ffalsa;*/
                        document.getElementById("preciom4").innerHTML = "$" + rango[11];
                        document.getElementById("preciop4").innerHTML = "$" + rango[12];
                        document.getElementById("preciod4").innerHTML = "$" + rango[13];
                        document.getElementById("vendidom4").innerHTML = rango[4]+"lts";
                        document.getElementById("vendidop4").innerHTML = rango[5]+"lts";
                        document.getElementById("vendidod4").innerHTML = rango[6]+"lts";
                        document.getElementById("vtm4").innerHTML = "$" + rango[0];
                        document.getElementById("vtp4").innerHTML = "$" + rango[1];
                        document.getElementById("vtd4").innerHTML = "$" + rango[2];
                        document.getElementById("pm4").innerHTML = rango[8]+"%";
                        document.getElementById("pp4").innerHTML = rango[9]+"%";
                        document.getElementById("pd4").innerHTML = rango[10]+"%";

                    }
                }
            }else{
                verModal('grande', '', 'Ok', 'Verifica las fechas, rango incorrecto.');
            }
        } else {
            verModal('grande', '', 'Ok', 'Selecciona correctamente las fechas.');
        }
    } else {
        verModal('grande', '', 'Ok', 'Selecciona correctamente las fechas.');
    }
}

function salir() { // Finaliza la sesión ademas de que borra los datos
    pagina = "index.html";
    sessionStorage.clear();
    window.location.assign(pagina);
}
    
//YA NO SIRVE 
/*function pagina(pagina) { // cambia de paginas
    if(pagina == "semaforo.html"){
        sessionStorage.setItem("truco", 1);
        window.location.assign(pagina);        
    }
    if(pagina == "corte.html"){
        window.location.assign(pagina);
        sessionStorage.setItem("truco", 1);
    }if(pagina == "cortes.html"){
        pagina = "corte.html";
        window.location.assign(pagina);
    }else if((pagina != "semaforo.html" ) && (pagina != "corte.html")){
        window.location.assign(pagina);
        sessionStorage.setItem("truco", 0);
    }    
}*/
