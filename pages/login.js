const Login = {
    template: 
    `<div class="loginBox">
        <img src="Assets/perfil.jpg" class="user">  
        <h2>Iniciar Sesión</h2>
                    <!-- trapp-input :item="Strings.trapp_input['Usuario']"></trapp-input>
                    <trapp-input :item="Strings.trapp_input['Contraseña']"></trapp-input-->
        <form>
        <i class="fas fa-user"></i>
        <label>Usuario</label>
        <input type="text" name="" placeholder="Ingrese su nombre de usuario">
        <i class="fas fa-unlock"></i>
        <label>Contraseña</label>
        <input type="password" name="" placeholder="Ingrese su contraseña">
        </form>
        <input type="submit" name="" value="Ingreasar">
        <a href="#">Registrarme</a> 
        <a href="#">Olvidé mi contraseña</a>
    </div>`
}