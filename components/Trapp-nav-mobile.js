Vue.component('trapp-nav-mobile', {
  template:
    `<div class=" container nav1">
    <header>
    <nav class="navbar navbar-expand-md navbar-dark bg-dark sidebarNavigation" data-sidebarClass="navbar-dark bg-dark">
    <a class="navbar-brand" href="#">Menu</a>
    <button class="navbar-toggler leftNavbarToggler" type="button" data-toggle="collapse" data-target="#navbarsExampleDefault"
        aria-controls="navbarsExampleDefault" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
    </button>

    <div class="collapse navbar-collapse" id="navbarsExampleDefault">
        <ul class="navbar-nav mr-auto">
            <li class="nav-item active list1">
                <a class="nav-link" href="#">
                <trapp-li-nav></trapp-li-nav>
                </a>
            </li>
        </ul>
    </div>
</nav>

    </header>

    </div>`
})