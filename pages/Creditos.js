Vue.component('cre-ditos', {
    props: ['array', 'trapp_li_nav','trapp_header', 'icono', 'texto'],
    template:
        `<div>
        <div>
            <trapp-header-pc :icono="trapp_header.icono" :texto="trapp_li_nav[2].texto"></trapp-header-pc> 
            <trapp-nav-mobile :trapp_li_nav="trapp_li_nav" ></trapp-nav-mobile>
        </div>
        <div class = "container1"><br>
            <h1 class="credi">Creditos</h1>
            <p class="rol1">
            Esta página web está desarrollada por un excelente grupo, conformado por los instructores Cristian Marín 
            y Jose Arango, que pudieron enseñar a los estudiantes a comprender el lenguaje de programación HTML, css y javascript, los estudiantes 
            Daniel Lopera, Laura Escobar, Santiago Lopera y Alejandro Gallego son el grupo de
            programadores que le dieron cuerpo y estilo a la página web, y otro de los integrantes importantes de este grupo es el profesor Jaime Echavarría,
            su papel fue guiar a los estudiantes para el desarrollo de las páginas web,además de que él es el Docente enlace que tiene el grupo de 
            estudiantes.
            </p>
            <br>
            <h1 class="credi">Miembros:</h1><br>
            <trapp-member v-for="item in array" :icono="item.icono" :miembro="item.miembro" :rol="item.rol"></trapp-member>
            <br><br><br><br><br><br><br><br>
            </div>
            </div>` 
})
