Vue.component('log-in',{
    props:['item'],
    template:
    `<div class="d-flex login justify-content-center">
        <div class="loginBox align-self-center">
            <img src="Assets/perfil.jpg" class="user">  
            <h2>Iniciar Sesión</h2>

        <i class="fas fa-user"></i>
        <label for="email">Usuario</label>
        <input type="text" name="email" id="txtEmail" placeholder="Ingrese su nombre de usuario">
        <i class="fas fa-unlock"></i>
        <label for="password">Contraseña</label>
        <input type="password"  name="password" id="txtpassword" placeholder="Ingrese su contraseña">
        <input type="submit" id="btnLogin"  name="ingrear" value="Ingresar">
        <input type="submit" id="btnSiginUp" name="ingrear" value="registrarse">
              
        <a href="index.html?registro">Registrarme</a> 
        <a href="index.html?recuperarcontrasena">Olvidé mi contraseña</a>
        </div> 
    </div>`
})  