Vue.component('trapp-card',{
    props:['titulo','texto'],
    template:
    `<div class="card">
    <div class="card-body">
      <h6 class="card-title">{{titulo}}</h6>
      <p class="card-text">{{texto}}</p>
    </div>
  </div>`
}
)