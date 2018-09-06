Vue.component('trapp-li-nav', {
    props: ['icono', 'texto'],
    template:
        `<div class="container opcion">
    <a class="nav-link li-nav" href="#" >
    <i class="fas fa-home"></i>
    <p class="text1">
        inicio
    </p>
    </a>
    <a class="nav-link li-nav" href="#">
    <i class="fas fa-user-circle"></i>
    <p class="text1">
        Perfil
    </p>
    </a>
    <a class="nav-link li-nav" href="#">
    <i class="fas fa-parking"></i>
    <p class="text1">
        Parqueadero
    </p>
    </a>
         <a class="nav-link li-nav" href="#">
         <i class="fas fa-question-circle"></i>
         <p class="text1">
             Ayuda
         </p>
         </a>
    
    
         <a class="nav-link li-nav" href="#">
          <i class="fas fa-question-circle"></i>
          <p class="text1">
              Cerrar Sesion
          </p>
          </a>

         
 </div>`
})