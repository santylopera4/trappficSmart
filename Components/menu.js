Vue.component('menu', {
    props: ['texto','link'],
    template:
        `<div class="container menu">
        <div class="row">
            <a :href="link" class="nav-link">
                <div class="lista col">
                    {{texto}}
                </div>
            </a>
        </div>
    </div>` 
})