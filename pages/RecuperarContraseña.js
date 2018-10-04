Vue.component('recuperar-contrasena',{
    props:[''],
    template:
    `<div class="container1">
       <h1><strong>Recuperar Contraseña</strong></h1><br><br>
       <p>
            Para recuperar tu contraseña coloca tu correo y envia el código de identificación a tu cuenta, despues ponlo en 
            la parte de ingresar código.
       </p>
       <label for="correo"><strong>Ingresa Tu Correo</strong></label><br>
       <input type="email" name="" placeholder="Ingrese su correo" id="correo">
       <button><strong>Enviar</strong></button><br><br>
       
       <label for="correo"><strong>Ingrese el código</strong></label><br>
       <input type="Texto" placeholder="ingrese código" id="código">
       <button><strong>Ingresar</strong></button><br><br>
    </div>`
}) 