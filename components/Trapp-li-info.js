Vue.component('trapp-li-info',{
	props: ['nombre' , 'telefono' , 'correo'],
    template:
    `<div>
          <i class="fas fa-user"></i>
          <label> <strong> Nombre: </strong>{{nombre}} </label>
          <br>
          <i class="fas fa-phone"></i>
          <label> <strong> Telefono: </strong> {{telefono}} </label>
          <br>
          <i class="fas fa-at"></i>
          <label> <strong> Correo: </strong> {{correo}} </label>
    </div>`
})