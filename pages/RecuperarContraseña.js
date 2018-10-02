Vue.component('recuperar-contrasena',{
    props:[''],
    template:
    `<div class="container">
       <h1>Recuperar Contraseña</h1><br><br>
       <p>
            Para recuperar tu contraseña coloca tu correo y envia el código de identificación a tu cuenta, despues ponlo en 
            la parte de ingresar código.
       </p>
       <label for="correo">Ingresa Tu Correo</label>
       <input type="email" placeholder="ingrese correo" id="correo">
       <button><strong>Enviar</strong></button><br><br>
       
       <label for="correo">Ingrese el código</label>
       <input type="Texto" placeholder="ingrese código" id="código">
       <button><strong>Ingresar</strong></button><br><br>
    </div>`
}) 