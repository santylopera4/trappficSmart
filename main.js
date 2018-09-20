const routes = {
    '?InfoParqueadero': InfoParqueadero, 
    '?Creditos': Creditos,
    '?Login': Login,
    '?NotFound': NotFound,
    '?Perfil': Perfil,
    '?Principal': Principal,
    '?RecuperarContraseña': RecuperarContraseña,
    '?Registro': Registro,
    '':Login
    }
var app = new Vue(
    {
        el:"#app",
        data:{
            Strings:JsonTrapp,
            currentRoute: window.location.search
        },
        computed: {
            ViewComponent () {
            console.log(this.currentRoute);
            return routes[this.currentRoute] || NotFound
            }
        },
            render (h) { return h(this.ViewComponent) }
        }) 