Vue.component('prin-cipal', {
  props: ['trapp_li_nav', 'trapp_header'],
  template:
    `<div>
    <trapp-header-pc :trapp_header="trapp_header"></trapp-header-pc>
  <trapp-nav-mobile :trapp_li_nav="trapp_li_nav"><trapp-nav-mobile>
  <br>
 
    </div>`
}) 