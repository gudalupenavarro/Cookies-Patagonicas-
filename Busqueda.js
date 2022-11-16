function showSearch(){
    let input = documet.getElementById("input");
    input.classList.toggle("show");

}


let btn =document.getElementById("btn");
let click = false;

btn.addEventListener("click", () => {
    if (!click){
        click= true;
        btn.innerHTML = `<img src="IMAGENES/cookieFav2.png">`;

    }else{
        click  = false;
        btn.innerHTML = `<img src="IMAGENES/cookieFav3.png">`;

    }
})