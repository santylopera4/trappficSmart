Vue.component('trapp-li-nav', {
    props: ['icono', 'texto'],
    template:
        `<div class="container li_nav">
        <div class="row">
            <a href="#" class="nav-link">
                <div class="lista col">
                <i :class='icono'></i>
                    {{texto}}
                </div>
            </a>
        </div>
    </div>`
})