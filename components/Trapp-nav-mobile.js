Vue.component('trapp-nav-mobile', {
  template:
    `<div class=" container">
    <nav class="navbar navbar-expand-md navbar-dark bg-dark sidebarNavigation" data-sidebarClass="navbar-dark bg-dark">
        <a class="navbar-brand" href="#">Navbar</a>
        <button class="navbar-toggler leftNavbarToggler" type="button" data-toggle="collapse" data-target="#navbarsExampleDefault"
            aria-controls="navbarsExampleDefault" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
        </button>

        <div class="collapse navbar-collapse" id="navbarsExampleDefault">
            <ul class="navbar-nav mr-auto">
                <li class="nav-item active">
                    <a class="nav-link" href="#">Home
                        <span class="sr-only">(current)</span>
                    </a>
                </li>
                <li class="nav-item">
                    <a class="nav-link" href="#">Link</a>
                </li>
                <li class="nav-item">
                    <a class="nav-link disabled" href="#">Disabled</a>
                </li>
                <li class="nav-item dropdown">
                    <a class="nav-link dropdown-toggle" href="https://example.com" id="dropdown01" data-toggle="dropdown" aria-haspopup="true"
                        aria-expanded="false">Dropdown</a>
                    <div class="dropdown-menu" aria-labelledby="dropdown01">
                        <a class="dropdown-item" href="#">Action</a>
                        <a class="dropdown-item" href="#">Another action</a>
                        <a class="dropdown-item" href="#">Something else here</a>
                    </div>
                </li>
            </ul>
    
        <form class="form-inline my-2 my-lg-0">
                <input class="form-control mr-sm-2" type="text" placeholder="Search" aria-label="Search">
                <button class="btn btn-outline-success my-2 my-sm-0" type="submit">Search</button>
            </form>
        </div>
    </nav>

    <script>
    window.onload = function () {
    if (window.jQuery) {
        $(document).ready(function () { $(".sidebarNavigation .navbar-collapse").hide().clone().appendTo("body").removeAttr("class").addClass("sideMenu").show(); $("body").append("<div class='overlay'></div>"); $(".navbar-toggle, .navbar-toggler").on("click", function () { $(".sideMenu").addClass($(".sidebarNavigation").attr("data-sidebarClass")); $(".sideMenu, .overlay").toggleClass("open"); $(".overlay").on("click", function () { $(this).removeClass("open"); $(".sideMenu").removeClass("open") }) }); $("body").on("click", ".sideMenu.open .nav-item", function () { if (!$(this).hasClass("dropdown")) { $(".sideMenu, .overlay").toggleClass("open") } }); $(window).resize(function () { if ($(".navbar-toggler").is(":hidden")) { $(".sideMenu, .overlay").hide() } else { $(".sideMenu, .overlay").show() } }) })
    } else { console.log("sidebarNavigation Requires jQuery") }
}
    </script>
    </div>`
})