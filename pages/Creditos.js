Vue.component('cre-ditos', {
    props: ['array', 'trapp_li_nav','trapp_header', 'icono', 'texto'],
    template:
        `<div>
        <div>
            <trapp-header-pc :icono="trapp_header.icono" :texto="trapp_li_nav[2].texto"></trapp-header-pc> 
            <trapp-nav-mobile :trapp_li_nav="trapp_li_nav" ></trapp-nav-mobile>
        </div>
        <div class = "container1"><br>
            <h1 class="credi">Créditos</h1>
            <p class="rol1">
            Este aplicativo web fue desarrollado con el objetivo de mejorar la movilidad vehicular en la malla vial. Para obtener estos resultados se creó el equipo llamado Trappfic Smart, conformado por el docente de enlace Jaime Echavarría, quien apoyó a los integrantes en todo el proceso, los mentores Cristian Marín y Jose Arango, los cuales tuvieron la capacidad de transmitir sus conocimientos a los estudiantes participantes del proyecto y los alumnos Daniel Lopera, Laura Escobar, Alejandro Gallego y Santiago Lopera, responsables de trabajar arduamente para culminar este propósito. 
            </p>
            <br>
            <h1 class="credi">Miembros</h1><br>
            <trapp-member v-for="item in array" :icono="item.icono" :miembro="item.miembro" :rol="item.rol"></trapp-member>
            <br><br><br><br><br><br><br><br>
            </div>
            </div>` 
})
