Vue.component('log-in', {
    props: ['item'],
    template:
        `<div class="d-flex login justify-content-center">
        <div class="loginBox align-self-center">
            <img src="Assets/blank-profile-picture.png" class="user">  
            <h2>Iniciar Sesión</h2>

        <i class="fas fa-user"></i>
        <label for="email">Usuario</label>
        <input type="text"  name="email" id="txtEmail" placeholder="Ingrese su nombre de usuario">
        <i class="fas fa-unlock"></i>
        <label for="password">Contraseña</label>
        <input type="password"  name="password" id="txtpassword" placeholder="Ingrese su contraseña">
        <input type="submit" id="btnLogin" v-on:click="loginpp" name="ingrear" value="Ingresar">
        <input type="submit" id="btnSiginUp" v-on:click="registro" name="ingrear" value="Registrarse">

        </div> 
    </div>`,
    data: function () {
        return {
            loginpp: function () {
                const txtEmail = document.getElementById('txtEmail');
                const txtpassword = document.getElementById('txtpassword');
                const btnLogin = document.getElementById('btnLogin');
                const btnSiginUp = document.getElementById('btnSiginUp');



                const email = txtEmail.value;
                const pass = txtpassword.value;
                const auth = firebase.auth();

                const promise = auth.signInWithEmailAndPassword(email, pass);
                promise.then(e => window.location.href="?principal");
                
                promise.catch(e => alert("verifica que el coreo y la contraseña esten bien escritas"));

            },
            registro: function () {

                const txtEmail = document.getElementById('txtEmail');
                const txtpassword = document.getElementById('txtpassword');
                const btnLogin = document.getElementById('btnLogin');
                const btnSiginUp = document.getElementById('btnSiginUp');


                const email = txtEmail.value;
                const pass = txtpassword.value;
                const auth = firebase.auth();

                const promise = auth.createUserWithEmailAndPassword(email, pass);
                promise.then(e => alert("el correo se registro correctamente, por favor logeate para verificar tu correo "));
                
                promise.catch(e => alert("El usuario y la contraseña ya exixten"));

            }
        }
    }})  