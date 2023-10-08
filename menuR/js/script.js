function menushow() {
    let menumobile = document.querySelector(".mobile-menu")
    if (menumobile.classList.contains("open")){
        menumobile.classList.remove("open")
        document.querySelector("icon").src = "menuR/cssmenu_white_36dp.svg"
    }else{
        menumobile.classList.add("open")
        document.querySelector("icon").src = "menuR/css/close_white_36dp.svg"
    }

}