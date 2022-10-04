// const poner = () => {
//     document.getElementById('mainContent').innerHTML = '';
//     document.getElementById('nav').innerHTML += '<h2 class="nav-logo">GABOW</h2><ul class="nav-links"><li class="nav-item"><a href="index.html" class="nav-link">Inicio</a></li><li class="nav-item"><a href="mapa.html" class="nav-link">Mapas</a></li><li class="nav-item"><a href="ruta.html" class="nav-link">Ruta</a></li><li class="nav-item"><a href="favoritos.html" class="nav-link">Favoritos</a></li><li class="nav-item"><a href="registro.html" class="nav-link">Iniciar Sesion</a></li></ul><a href="#nav" class="nav-ham"><img src="./assets/menu.svg" class="nav-icon"></a><a href="#" class="nav-close"><img src="./assets/close.svg" class="nav-icon"></a>';
//     document.getElementById('containerIni').innerHTML += '<form class="contacto"><section><div class="form-group"><input class="input" type="text" placeholder="Tu Nombre:" /><label class="form-label">Tu Nombre:</label></div><div class="form-group"><input class="input" type="text" placeholder="Tu Email:" /><label class="form-label">Tu Email:</label></div><div class="form-group"><input class="input" type="text" placeholder="Asunto:" /><label class="form-label">Asunto:</label></div><div class="form-group"><textarea class="input" rows="6" placeholder="Mensaje:"></textarea><label class="form-label">Mensaje:</label></div></section><div><button class="button">Enviar</button></div></form>';
//     document.getElementById('pies').innerHTML += '<footer><div class="footer"><div class="row"><a target="_blank" href="prox.html"><i class="fa fa-facebook"></i></a><a target="_blank" href="prox.html"><i class="fa fa-instagram"></i></a><a target="_blank" href="prox.html"><i class="fa fa-twitter"></i></a></div><div class="row"><ul><li><a href="#">Contactanos</a></li><li><a href="terminos.html">Terminos y Condiciones</a></li></ul></div><div class="row">GABOW Copyright © 2022 - All rights reserved || Designed By: Moises</div></div></footer>';
// }

window.onload=()=>{
    const nav=document.getElementById("nav");
    const pies = document.getElementById('pies');
    const button=document.getElementById("divContent");
    const content=document.getElementById("content");
    const container=document.getElementById("mainContent");
    const infoDiv=document.getElementById("content2");
    button.onclick=()=>{
        button.style.animation="opacar 0.5s"
        document.body.style.animation="opacar 0.5s";
        setTimeout(()=>{
            document.body.style.animation="desopacar 1s";
            container.removeChild(button);
            nav.style.animation="desopacar 1s";
            nav.innerHTML += '<h2 class="nav-logo">GABOW</h2><ul class="nav-links"><li class="nav-item"><a href="index.html" class="nav-link">Inicio</a></li><li class="nav-item"><a href="mapa.html" class="nav-link">Mapas</a></li><li class="nav-item"><a href="ruta.html" class="nav-link">Ruta</a></li><li class="nav-item"><a href="favoritos.html" class="nav-link">Favoritos</a></li><li class="nav-item"><a href="registro.html" class="nav-link">Iniciar Sesion</a></li></ul><a href="#nav" class="nav-ham"><img src="./assets/menu.svg" class="nav-icon"></a><a href="#" class="nav-close"><img src="./assets/close.svg" class="nav-icon"></a>';
            setTimeout(()=>{
                content.style.animation="desopacar 0.5s"
                content.innerHTML += `<div class="container-fluid p-5 bg-primary text-white text-center"><h1 class="display-1">Sobre Gabow</h1><p>Developed by Qu Ex</p></div>`;
                setTimeout(()=>{
                    infoDiv.style.animation="desopacar 0.5s";
                    infoDiv.innerHTML +=`
                    <ul class="list-group">
                        <li class="list-group-item active"><h4>¡Consulta Interiores!</h4></li>
                        <li class="list-group-item">
                            <h2>¡Ya no busques los mapas fisicos! Lo de hoy es Gabow.</h2>
                            Dejate sorprender por nuestro avanzado sistema de <span class="badge bg-secondary">Mapas</span></h1> que podrás
                            utilizar en todo momento.
                            <br>
                            Con gabow podrás consultar la siguiente información por cada establecimiento:
                            <ul>
                                <li>Distribucion Interna</li>
                                <li>Espacios Actualizados</li>
                                <li>Salidas de Emergencia</li>
                                <li>Elementos contra siniestros</li>
                            </ul>
                            Todo esto al alcance de tu mano.
                        </li>
                    </ul>
                    <br>
                    <ul class="list-group">
                        <li class="list-group-item active"><h4>¿Perdido?</h4></li>
                        <li class="list-group-item">
                            No hay problema. Hemos desarrollado un sistema de rutas con el que podras
                            desplazarte sin miedo a perderte de nuevo.
                            <br>
                            <h2>¡Contamos con una precisión del 99% a la hora de calcular distancias!</h2>
                            A cuantos no nos ha pasado que visitamos un nuevo centro comercial y lo primero que hacemos
                            es observar que tiendas hay. Eso ahora lo podrás hacer desde antes de llegar al establecimiento consultando
                            su distribución interna. Una vez hecho esto podrás orientarte facilmente.
                        </li>
                    </ul>
                    <br>
                    <ul class="list-group">
                        <li class="list-group-item active"><h4>¡Todo en uno!</h4></li>
                        <li class="list-group-item">
                            Cuando visites otro lugar publico como lo son centros comerciales no tendras que buscar su pagina, dirigirte al directorio y
                            consultar su interior.
                            <h2>¡Gabow te facilita eso!</h2>
                            A medida que el proyecto vaya creciendo, consigo tambien ira nuesto compilado de lugares publicos.
                        </li>
                    </ul>
                    <br>
                    <div class="card">
                        <div class="card-body">
                            <h4 class="card-title">Qu Ex</h4>
                            <p class="card-text">
                                “Hello To The New World”
                            </p>
                            <h4>Mision</h4>
                            <p class="card-text">
                                Qu Ex es una empresa mexicana dedicada al desarrollo de software que asiste por medios digitales y proporciona herramientas de apoyo en situaciones de la vida cotidiana a un público general; con el fin de automatizarlas en cuestión de tiempo y logística.​
                            </p>
                            <h4>Vision</h4>
                            <p class="card-text">
                                Apoyar a las personas automatizar procesos que impliquen el uso de las tecnologías de la información a un nivel local (misma casa, colonia o barrio), pensando de manera empática y teniendo en mente la responsabilidad social que implica. Teniendo en la mira expandir nuestras tecnologías a un nivel poblacional más grande.​
                            </p> 
                        </div>
                    </div>`
                    setTimeout(()=>{
                        pies.style.animation="desopacar 0.5s";
                        pies.innerHTML += '<footer><div class="footer"><div class="row"><a target="_blank" href="prox.html"><i class="fa fa-facebook"></i></a><a target="_blank" href="prox.html"><i class="fa fa-instagram"></i></a><a target="_blank" href="prox.html"><i class="fa fa-twitter"></i></a></div><div class="row"><ul><li><a href="#">Contactanos</a></li><li><a href="terminos.html">Terminos y Condiciones</a></li></ul></div><div class="row">GABOW Copyright © 2022 - All rights reserved || Designed By: Moises</div></div></footer>';
                    },500)
                },500)
            },500)
        },500)
    }
}