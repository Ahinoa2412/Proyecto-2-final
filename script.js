const list= document.querySelectorAll(".item");



list.forEach((it)=>{
        it.addEventListener("click",(e)=>{
        const activoItem=document.querySelector(".activo");
        e.target.classList.add("activo");
        activoItem.classList.remove("activo");
       
    })
});