const listButtonStatus = document.querySelectorAll("[button-status]");
if(listButtonStatus.length > 0){
    let url = new URL(window.location.href)
    listButtonStatus.forEach(button => {
        button.addEventListener("click", () => {
            const status = button.getAttribute("button-status");
            if(status){
            url.searchParams.set("status", status)
            window.location.href = url.href
            }else{
            url.searchParams.delete("status")
            window.location.href = url.href
            }
        })
    })
}