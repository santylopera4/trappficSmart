Vue.component('trapp-member',{
    props:['icono', 'miembro', 'rol'],
    template:
    `<div class = "container">
    	<div class = "row">
    		<div class = "col-xs-12 col-sm-2 col-md-2 col-lg-0.5">
                <img class ="miembros" :src="icono"/> 
            </div>
            <div class = "col-xs-12 col-sm-10 col-md-10 col-lg-11.5">
                <div class = "row">
                    <h6 v-text="miembro" class="titulo"></h6>
                </div>
                <div class = "row">
                <p v-text="rol" class="rol"></p>
                </div><br>
                <hr>
            </div>
    	</div>
    </div>`
})