Vue.component('trapp-li-info',{
	props: ['nombre' , 'telefono' , 'correo'],
    template:
    `<div>
          <!--i class="nombre"></i>
          <p> nombre: <strong> {{nombre}} </strong> </p>-->

          <i class="fas fa-user"></i>
          <p> Nombre: <strong> {{nombre}} </strong> </p>

          <i class="fas fa-phone"></i>
          <p> Telefono: <strong> {{telefono}} </strong> </p>

          <i class="fas fa-at"></i>
          <p> Correo: <strong> {{correo}} </strong> </p>
         
    </div>`
})