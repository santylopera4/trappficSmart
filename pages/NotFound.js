Vue.component('not-found',{
    props:[''],
    template:
    `<div>
    <input type="checkbox" id="cerrar" class="salir">
    <label for="cerrar" id="btn-cerrar">
            <div class="col col-12 justify-content-center">
                <div class="alert alert-dark" role="alert">            
            
            <button type="button" class="close boton1" data-dismiss="alert" aria-label="Close">
            <span aria-hidden="true">&times;</span>
            </button> 
                    <h4 class="alert-heading titulo">Lo sentimos!</h4>
                    <br>
                    <p class="texto1">En este momento la pagina no esta funcionando correctamente o tiene un error, por favor intentalo mas tarde o vuelve a recargar la pagina.</p>
                    <hr>
                    <p class="mb-0 texto2">Gracias por su atencion.</p>
                </div>
            </div>
    </label>
    </div>`
})