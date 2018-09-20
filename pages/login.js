const Login = {
    template: 
    `<div class="loginBox">
        <img src="Assets.perfil.jpg" class="user">  
        <h2>Log In</h2>
        <trapp-input :item="Strings.trapp_input['Usuario']"></trapp-input>
        <trapp-input :item="Strings.trapp_input['Contraseña']"></trapp-input>
        <input type="submit" name="" value="Ingreasar">
        <a href="#">Registrarme</a>
        <a href="#">Olvidé mi contraseña</a>
    </div>`
}