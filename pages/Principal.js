Vue.component('prin-cipal', {
  props: ['trapp_li_nav', 'trapp_header', 'icono', 'texto'],
  template:
    `<div> 
          
      <trapp-header-pc :icono="trapp_header.icono" :texto="trapp_li_nav[0].texto"></trapp-header-pc> 
      <trapp-nav-mobile :trapp_li_nav="trapp_li_nav" ></trapp-nav-mobile>
      <br>
      <div id="mapid"></div>
      <br>
      <br>

    </div>`
}) 