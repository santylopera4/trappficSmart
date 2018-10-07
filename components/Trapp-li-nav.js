Vue.component('trapp-li-nav', {
    props: ['icono', 'texto','link'],
    template:
        `<div class="container li_nav">
        <div class="row">
            <a :href="link" class="nav-link">
                <div class="lista col">
                <i :class='icono'></i>
                    {{texto}}
                </div>
            </a>
        </div>
    </div>` 
})