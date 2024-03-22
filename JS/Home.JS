document.getElementById("imageminicio").addEventListener("mouseenter", ShowMessage)
document.getElementById("imageminicio").addEventListener("mouseleave", HideMessage)

function ShowMessage(){
    var text = document.getElementById("message")
    var sombra = document.getElementById("sombreado")

    text.style.visibility = "visible"
    sombra.style.visibility = "visible"
}

function HideMessage(){
    var text = document.getElementById("message")
    var sombra = document.getElementById("sombreado")

    text.style.visibility = "hidden"
    sombra.style.visibility = "hidden"
}

document.getElementById("menu_lateral_icon").addEventListener("click", ShowSidebar)

function ShowSidebar() {
    var sidebar = document.getElementById("sidebar")

    sidebar.style.right = "0"
}

document.getElementById("voltaside").addEventListener("click", HideSidebar)

function HideSidebar(){
    var sidebar = document.getElementById("sidebar")

    sidebar.style.right = "-40vw"
}

document.getElementById("sublistmaker").addEventListener("click", ShowSubList)

function ShowSubList() {
    var sublist = document.querySelector("#sublist")

    var estilocompuitado = window.getComputedStyle(sublist)

    var display = estilocompuitado.getPropertyValue('display')

    var seta = document.getElementById("chevri") 

    switch (display) {
        case "none":
            sublist.style.display = "block"
            seta.innerHTML = "<span class='material-symbols-outlined' id='chevri'>expand_more</span>"
        break;
    
        case "block":
            sublist.style.display = "none"
            seta.innerHTML = "<span class='material-symbols-outlined' id='chevri'>chevron_right</span>"
        break;

    }
}