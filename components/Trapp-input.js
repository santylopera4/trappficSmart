Vue.component('trapp-input',{
    props:['item'],
    template:
    `<div>
        
    <label v-text="item.label" :for="item.label"></label>
    <br>
    <i :class="item.icono"></i>
	<input type="text" :placeholder="item.texto" maxlength="50" :name="item.label">
    </div>`
})