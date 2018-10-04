Vue.component('info-parqueadero',{
    props:['trapp_li_nav'],
    template:
    `<div>
    <div >
     <trapp-nav-mobile :trapp_li_nav="trapp_li_nav"><trapp-nav-mobile> 
     </div>
    <div class="container-fluid infop">
    <hr>
    <div>
    <h1 class="Nombre">Nombre del Praqueadero</h1>
    </div>
    <hr>

  
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

<br>
<br>

    <div class="infomacion">
        <div class="par"><h5>
        <i class="fas fa-phone"></i>Telefono:</h5>
        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Optio, quod, fugit consectetur nobis, fugiat modi voluptatum debitis ipsum dolorem dolorum veniam. Reprehenderit nostrum enim a ad natus sed unde at.</p>
        <hr></div>
        <div class="par">        
        <h5><i class="fas fa-map-marker-alt"></i>Ubicacion:</h5>
        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Optio, quod, fugit consectetur nobis, fugiat modi voluptatum debitis ipsum dolorem dolorum veniam. Reprehenderit nostrum enim a ad natus sed unde at.</p>
        <hr></div>
        <div class="par">        
        <h5><strong>#</strong>Cupos:</h5>
        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Optio, quod, fugit consectetur nobis, fugiat modi voluptatum debitis ipsum dolorem dolorum veniam. Reprehenderit nostrum enim a ad natus sed unde at.</p>
        <hr></div>
        <div class="par">        
        <h5><i class="fas fa-dollar-sign"></i>Tarifas:</h5>
        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Optio, quod, fugit consectetur nobis, fugiat modi voluptatum debitis ipsum dolorem dolorum veniam. Reprehenderit nostrum enim a ad natus sed unde at.</p>
        <hr></div>
        <div class="par">        
        <h5><strong> +</strong>Extras:</h5>
        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Optio, quod, fugit consectetur nobis, fugiat modi voluptatum debitis ipsum dolorem dolorum veniam. Reprehenderit nostrum enim a ad natus sed unde at.</p>
        <hr></div>
        
        <div class="boton">
        <button class="reservar">Reservar</button>
        </div>
        <br>
    </div>

  </div>
    </div>`
})  