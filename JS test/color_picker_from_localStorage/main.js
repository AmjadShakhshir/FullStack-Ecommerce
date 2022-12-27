let allLi = document.querySelectorAll("ul li");
let exp = document.querySelector(".experiment");


if(window.localStorage.getItem("color")){
    //change div background
    exp.style.backgroundColor = window.localStorage.getItem("color");
    //Remove Active Class from all li
    allLi.forEach((li) => {
        li.classList.remove("active");
    });
    // add Active Class To current Element
    document.querySelector(`[data-color = "${window.localStorage.getItem("color")}"]`).classList.add("active");
}else{
    console.log("No");
}


allLi.forEach((li) => {
    //Remove Active Class from all li
    li.addEventListener("click", (e) => {
        allLi.forEach((li) => {
        li.classList.remove("active");
    });
    // add Active Class To current Element
    e.currentTarget.classList.add("active");
    // Add Current Color To the Local Storage
    window.localStorage.setItem("color", e.currentTarget.dataset.color);
    //change div background
    exp.style.backgroundColor = window.localStorage.getItem("color");
    });
});
