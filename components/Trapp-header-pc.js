Vue.component('trapp-header-pc',{
    props:['icono','texto'],
    template:
    `<div>
    <div class="encabezado">
    <div class="container">
    <div class="row justify-content-center  ">
        <div class="col1 col  col-6">
           <a class="tituloencabezado" href="#"><h1>{{texto}}</h1></a>
        </div>
        <div class="col2 col col-6">
        <a href="?principal"><img :src="icono" ></a>        
        </div>
    </div>
</div>
    </div>
    </div>`
})