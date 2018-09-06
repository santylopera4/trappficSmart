Vue.component('trapp-li-nav', {
    props: ['icono', 'texto'],
    template:
        `<div class="container">
        <div class="row">
            <a href="#" class="nav-link">
                <div class="col">
                <i :class='icono'></i>
                    {{texto}}
                </div>
            </a>
        </div>
    </div>`
})