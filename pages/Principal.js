Vue.component('prin-cipal', {
  props: ['trapp_li_nav', 'trapp_header'],
  template:
    `<div>
 
  <trapp-nav-mobile :trapp_li_nav="trapp_li_nav"></trapp-nav-mobile>
  <br>
  <div id="mapid"></div>
    </div>`
}) 