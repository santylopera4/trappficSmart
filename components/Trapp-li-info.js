Vue.component('trapp-li-info',{
	props: ['nombre' , 'telefono' , 'correo'],
    template:
    `<div>
          <!--i class="nombre"></i>
          <p> nombre: <strong> {{nombre}} </strong> </p>-->

          <i class="fas fa-user"></i>
          <p> nombre: <strong> {{nombre}} </strong> </p>

          <i class="fas fa-phone"></i>
          <p> telefono: <strong> {{telefono}} </strong> </p>

          <i class="fas fa-at"></i>
          <p> correo: <strong> {{correo}} </strong> </p>
    </div>`
})