Vue.component('log-in',{
    props:['item'],
    template:
    `<div class="loginBox">
        <img src="Assets/perfil.jpg" class="user">  
        <h2>Iniciar Sesión</h2>

        <form>
        <i class="fas fa-user"></i>
        <label>Usuario</label>
        <input type="text" name="" placeholder="Ingrese su nombre de usuario">
        <i class="fas fa-unlock"></i>
        <label>Contraseña</label>
        <input type="password" name="" placeholder="Ingrese su contraseña">
        </form>
        <input type="submit" name="" value="Ingresar">
        <a href="index.html?registro">Registrarme</a> 
        <a href="index.html?recuperarcontrasena">Olvidé mi contraseña</a>
    </div>`
})