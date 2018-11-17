Vue.component('info-parqueadero', {
  props: ['trapp_li_nav', 'info_parqueadero', 'trapp_header', 'icono', 'texto'],
  template:
    `<div> 
        <div>   
                <trapp-header-pc :icono="trapp_header.icono" :texto="trapp_li_nav[1].texto"></trapp-header-pc> 

                  <trapp-nav-mobile :trapp_li_nav="trapp_li_nav"></trapp-nav-mobile> 
        </div>
        <div v-for="item in info_parqueadero" :id="item.id" >
          <div class="container-fluid infop">
                <hr>
                <div>
                <h1 class="Nombre" v-text="item.nombre"></h1>
                </div>
                <hr>
                  <div class="row justify-content-md-center">
                      <div class="cl1 col col-12 col-sm-12 col-md-6 col-gl-6 col-xl-6 ">

                      <div :id="item.idcarrusel" class="carousel slide" data-ride="carousel">
                      <ol class="carousel-indicators">
                        <li :data-target="'#' + item.idcarrusel" data-slide-to="0" class="active"></li>
                        <li :data-target="'#' + item.idcarrusel" data-slide-to="1"></li>
                        <li :data-target="'#' + item.idcarrusel" data-slide-to="2"></li>
                      </ol>
                      <div class="carousel-inner">
                        <div class="carousel-item active">
                          <img class="imagenes d-block w-100" :src="item.img1" alt="First slide">
                        </div>
                        <div class="carousel-item">
                          <img class="imagenes d-block w-100" :src="item.img2" alt="Second slide">
                        </div>
                        <div class="carousel-item">
                          <img class="imagenes d-block w-100" :src="item.img3" alt="Third slide">
                        </div>
                      </div>
                      <a class="carousel-control-prev" :href="'#' + item.idcarrusel" role="button" data-slide="prev">
                        <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                        <span class="sr-only">Previous</span>
                      </a>
                      <a class="carousel-control-next" :href="'#' + item.idcarrusel" role="button" data-slide="next">
                        <span class="carousel-control-next-icon" aria-hidden="true"></span>
                        <span class="sr-only">Next</span>
                      </a>
                    </div>

                      </div>
                      <br>
                      <br>

                      <div class="cl2 col col-12 col-sm-6 col-md-12 col-lg-6 col-xl-6   infomacion">
                        
                            <div class="row">

                            <div class="col col-12 col-md-12 col-sm-12 col-lg-6 col-xl-6 par">
                            <h5><i class="fas fa-phone"></i>Telefono:</h5>
                            <p v-text="item.telefono"></p>
                            </div>

                            <div class="col col-12 col-md-12 col-sm-12  col-lg-6 col-xl-6 par">        
                            <h5><i class="fas fa-map-marker-alt"></i>Ubicacion:</h5>
                            <p v-text="item.ubicacion"></p>
                            </div>

                            </div>
                            <div class="row">

                            <div class="col col-12 col-md-12 col-sm-12 col-lg-6 col-xl-6 par">        
                            <h5><strong>#</strong>Cupos:</h5>
                            <p><span v-text="item.cupos.motos"></span><br>  <span v-text="item.cupos.carros"></span></p>
                            </div>

                            <div class="col col-12 col-md-12 col-sm-12 col-lg-6 col-xl-6 par">        
                            <h5><i class="fas fa-dollar-sign"></i>Tarifas:</h5>
                            
                            <p><strong>Motos:</strong>    <strong>Carros:</strong><br><span v-text="item.tarifas.moto.hora"></span>    <span v-text="item.tarifas.carro.hora"></span></p>
                            <p><span v-text="item.tarifas.moto.rato"></span>    <span v-text="item.tarifas.carro.rato"></span></p>
                            <p><span v-text="item.tarifas.moto.dia"></span>   <span v-text="item.tarifas.carro.dia"></span></p>
                            <p><span v-text="item.tarifas.moto.noche"></span>    <span v-text="item.tarifas.carro.noche"></span></p>
                            <p><span v-text="item.tarifas.moto.mes"></span>   <span v-text="item.tarifas.carro.mes"></span></p>
                            </div>

                            </div>
                            <div class="row">

                            <div class="col col-12 col-md-12 col-sm-12 col-lg-6 col-xl-6 par">        
                            <h5><strong> +</strong>Extras:</h5>
                            <p v-text="item.extras"></p>
                            </div>

                            </div class= "row">
                              <div class="col-12 col-md-12 col-sm-12 col-lg-6 col-xl-6 boton">
                              <br>
                              <br><br><br>
                              <input class="reservar" type="button" value="Reservar" onclick="mostrarAlerta()"/>
                              </div>
                              <br>
                              
                      </div>
                </div> 
              <br>
              <br>
              <br>
          </div> 
      </div>
</div>`
})  