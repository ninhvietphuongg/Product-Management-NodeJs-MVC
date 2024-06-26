// List Button Status
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
// End List Button Status
// Form Search Keyword
const formSearch = document.querySelector("#form-search");
if(formSearch){
    let url = new URL(window.location.href);
    const buttonFormSearch = formSearch.querySelector("[button-form-search]");
    formSearch.addEventListener("submit", (event) => {
        event.preventDefault();
        const keyword = event.target.elements.keyword.value;
        if(keyword){
        url.searchParams.set("keyword", keyword);
        }else{
        url.searchParams.delete("keyword");
        }
        window.location.href = url.href; 

    })
}
// End Form Search Keyword