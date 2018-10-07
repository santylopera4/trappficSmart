Vue.component('trapp-header-pc',{
    props:['icono','texto'],
    template:
    `<div>
    <div class="encabezado">
    <div class="container">
    <div class="row justify-content(center) d-flex-center  ">
        <div class="col1 col align-self-center col-6">
           <a href="#"><h1>{{texto}}</h1></a>
        </div>
        <div class="col2 col align-self-center col-6">
        <a href="#"><img :src="icono" ></a>        
        </div>
    </div>
</div>
    </div>
    </div>`
})