Vue.component('trapp-member',{
    props:['icono', 'miembro', 'rol'],
    template:
    `<div class = "container">
    	<div class = "row">
    		<div class = "col-xs-12 col-sm-2 col-md-2 col-lg-1">
                <img class = miembros :src="{{icono}}"/> 
            </div>
            <div class = "col-xs-12 col-sm-10 col-md-10 col-lg-11">
                <div class = "row">
                    <h6 class = "titulo" > {{miembro}}</h6>
                </div>
                <div class = "row">
                <p>{{rol}}</p>
                </div>
            </div>
    	</div>
    </div>`
})