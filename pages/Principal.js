Vue.component('prin-cipal',{
    props:['item'],
    template:
    `<div>
    <nav  class=" container-fluid navbar  navbar-expand-md navbar-dark bg-dark  sidebarNavigation"  data-sidebarClass="nav1 navbar-dark bg-dark " >
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