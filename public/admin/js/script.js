const listButtonStatus = document.querySelectorAll("[button-status]");
if(listButtonStatus.length > 0){
    listButtonStatus.forEach(button => {
        button.addEventListener("click", () => {
            const status = button.getAttribute("button-status");
            console.log(status);
        })
    })
}