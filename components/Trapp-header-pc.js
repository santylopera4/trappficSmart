Vue.component('trapp-header-pc',{
    props:['icono','texto'],
    template:
    `<div class="encabezado">
    <div class="container">
    <div class="row justify-content(center) d-flex  ">
        <div class="col align-self">
            {{texto}}
        </div>
        <div class="col align-self-center col-6">
                <i :class='icono'></i>
        </div>
    </div>
</div>
    </div>`
})