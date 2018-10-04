Vue.component('info-parqueadero',{
    props:['trapp_li_nav'],
    template:
    `<div>
    <div>
     <trapp-nav-mobile :trapp_li_nav="trapp_li_nav"><trapp-nav-mobile> 
     </div>
    <div class="container-fluid infop">
    <hr>
    <div>
    <h1 class="Nombre">Nombre del Parqueadero</h1>
    </div>
    <hr>
    <div class="row justify-content-md-center">
     <div class="cl1 col col-12 col-sm-12 col-md-12 col-gl-6 col-xl-6 ">
    <div id="carouselExampleIndicators" class="carousel slide" data-ride="carousel">
  <ol class="carousel-indicators">
    <li data-target="#carouselExampleIndicators" data-slide-to="0" class="active"></li>
    <li data-target="#carouselExampleIndicators" data-slide-to="1"></li>
    <li data-target="#carouselExampleIndicators" data-slide-to="2"></li>
  </ol>
  <div class="carousel-inner">
    <div class="carousel-item active">
      <img class="imagenes d-block w-100" src="Assets/image1slidebar.jpg" alt="First slide">
    </div>
    <div class="carousel-item">
      <img class="imagenes d-block w-100" src="Assets/image2slidebar.jpg" alt="Second slide">
    </div>
    <div class="carousel-item">
      <img class="imagenes d-block w-100" src="Assets/image3slidebar.jpg" alt="Third slide">
    </div>
  </div>
  <a class="carousel-control-prev" href="#carouselExampleIndicators" role="button" data-slide="prev">
    <span class="carousel-control-prev-icon" aria-hidden="true"></span>
    <span class="sr-only">Previous</span>
  </a>
  <a class="carousel-control-next" href="#carouselExampleIndicators" role="button" data-slide="next">
    <span class="carousel-control-next-icon" aria-hidden="true"></span>
    <span class="sr-only">Next</span>
  </a>
</div>
 </div>
<br>
<br>

    <div class="cl2 col col-12 col-sm-12 col-md-12 col-lg-6 col-xl-6   infomacion">
     
        <div class="row">

        <div class="col col-12 col-md-12 col-sm-12 col-lg-6 col-xl-6 par">
        <h5><i class="fas fa-phone"></i>Telefono:</h5>
        <p>2344553553.</p>
        </div>

        <div class="col col-12 col-md-12 col-sm-12  col-lg-6 col-xl-6 par">        
        <h5><i class="fas fa-map-marker-alt"></i>Ubicacion:</h5>
        <p>khhhhjgj</p>
        </div>

        </div>
        <div class="row">

        <div class="col col-12 col-md-12 col-sm-12 col-lg-6 col-xl-6 par">        
        <h5><strong>#</strong>Cupos:</h5>
        <p>wqwqwqwjbe.</p>
        </div>

        <div class="col col-12 col-md-12 col-sm-12 col-lg-6 col-xl-6 par">        
        <h5><i class="fas fa-dollar-sign"></i>Tarifas:</h5>
        <p>qwekjbqwkejbqe</p>
        </div>

        </div>
        <div class="row">

        <div class="col col-12 col-md-12 col-sm-12 col-lg-6 col-xl-6 par">        
        <h5><strong> +</strong>Extras:</h5>
        <p>kahsiadhadndjadj</p>
        </div>

        </div>
        
        <!--
        <div class="boton">
        <button class="reservar">Reservar</button>
        </div>
        <br>
        -->
    </div>
   </div> 
   <br>
   <br>
   <br>
  </div> 
    </div>`
})  