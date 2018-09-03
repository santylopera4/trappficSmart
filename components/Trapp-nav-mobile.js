Vue.component('trapp-nav-mobile', {
  template:
    `<div class="nav1 container">
    <nav class="navbar navbar-light" style="background-color: #fad800;">
  <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#desplieguenavbar" aria-controls="desplieguenavbar" aria-expanded="false" aria-label="Toggle navigation">
    <span class="navbar-toggler-icon"></span>
  </button>
  <a class="navbar-brand" href="#">TrappFic Smart</a>
  <div class="collapse navbar-collapse" id="desplieguenavbar">
    <ul class="navbar-nav mr-auto mt-2 mt-lg-0">
    <li>
    <a class="nav-link" href="#">
    <trapp-li-nav></trapp-li-nav>
    </a>
    </li>
    </ul>
  </div>
</nav> 
    </div>`
})