Vue.component('trapp-nav-mobile', {
    props:['trapp_li_nav'],
  template:
    `<div>
    <nav class="navbar navbar-expand-md navbar-dark bg-dark sidebarNavigation" data-sidebarClass="navbar-dark bg-dark">
        <a class="navbar-brand" href="#">Menu</a>
        <button class="navbar-toggler leftNavbarToggler" type="button" data-toggle="collapse" data-target="#navbarsExampleDefault"
            aria-controls="navbarsExampleDefault" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarsExampleDefault">
            <ul class="navbar-nav mr-auto">
                <li class="nav-item" v-for="item in trapp_li_nav">
                    <trapp-li-nav :texto="item.texto" :icono="item.icono" ></trapp-li-nav>
                </li>
            </ul>
        </div>
    </nav>

    </div>`
})