Vue.component('log-in',{
    props:['item'],
    template:
    `<div class="d-flex login justify-content-center">
        <div class="loginBox align-self-center">
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
            <a href="file:///C:/Users/Lenovo/Documents/GitHub/trappficSmart/index.html?Registro">Registrarme</a> 
            <a href="file:///C:/Users/Lenovo/Documents/GitHub/trappficSmart/index.html?RecuperarContrase%C3%B1a">Olvidé mi contraseña</a>
        </div>
    </div>`
})