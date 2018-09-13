Vue.component('trapp-nav-mobile', {
    props:['trapp_li_nav'],
  template:
    `<div>
    <nav  class="nav1 container-fluid navbar  navbar-expand-md navbar-light bg-light  sidebarNavigation"nav1 data-sidebarClass="navbar-light bg-light">
        <a class="navbar-brand" href="#">Menu</a>
        <button class="navbar-toggler leftNavbarToggler" type="button" data-toggle="collapse" data-target="#navbarsExampleDefault"
            aria-controls="navbarsExampleDefault" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collage collapse navbar-collapse" id="navbarsExampleDefault">
            <ul class="navbar-nav mr-auto">
                <li class="nav-item list1" v-for="item in trapp_li_nav">
                   <a class="nav-link" href="#"><trapp-li-nav :texto="item.texto" :icono="item.icono" ></trapp-li-nav></a>
                </li>
            </ul>
        </div>
    </nav>
    </div>`
})