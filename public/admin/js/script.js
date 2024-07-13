// List Button Status
const listButtonStatus = document.querySelectorAll("[button-status]");
if (listButtonStatus.length > 0) {
    let url = new URL(window.location.href)
    listButtonStatus.forEach(button => {
        button.addEventListener("click", () => {
            const status = button.getAttribute("button-status");
            if (status) {
                url.searchParams.set("status", status)
                window.location.href = url.href
            } else {
                url.searchParams.delete("status")
                window.location.href = url.href
            }
        })
    })
}
// End List Button Status
// Form Search Keyword
const formSearch = document.querySelector("#form-search");
if (formSearch) {
    let url = new URL(window.location.href);
    formSearch.addEventListener("submit", (event) => {
        event.preventDefault();
        const keyword = event.target.elements.keyword.value;
        if (keyword) {
            url.searchParams.set("keyword", keyword);
        } else {
            url.searchParams.delete("keyword");
        }
        window.location.href = url.href;

    })
}
// End Form Search Keyword
// Button pagination
const buttonPagination = document.querySelectorAll("[button-pagination]");
if (buttonPagination) {
    const url = new URL(window.location.href);
    buttonPagination.forEach(input => {
        input.addEventListener("click", () => {
            const attributeButton = input.getAttribute("button-pagination");
            url.searchParams.set("page", attributeButton);
            window.location.href = url.href;
        })
    })
}
// End button pagination
// Change status
const dataChangeStatus = document.querySelectorAll("[data-change-status]");
if (dataChangeStatus) {
    const formChangeStatus = document.querySelector("[form-change-status]");

    dataChangeStatus.forEach(button => {
        button.addEventListener("click", () => {
            const path = formChangeStatus.getAttribute("path");
            const dataId = button.getAttribute("data-id");
            const dataChangeStatus = button.getAttribute("data-change-status");
            const action = path + `/${dataChangeStatus}/${dataId}?_method=PATCH`;
            formChangeStatus.action = action;
            formChangeStatus.submit();

        })
    })
}
// End change status
// Button delete
const buttonDeleteStatus = document.querySelectorAll("[button-delete-status]");
if (buttonDeleteStatus) {
    buttonDeleteStatus.forEach(button => {
        button.addEventListener("click", () => {
            const isConfirm = confirm("Bạn muốn xóa dữ liệu này chứ ?");
            if (isConfirm) {
                const formDeleteStatus = document.querySelector("[form-delete-status]");
                const dataId = button.getAttribute("data-id");
                const path = formDeleteStatus.getAttribute("path");
                const action = `${path}/${dataId}?_method=DELETE`;
                formDeleteStatus.action = action;
                formDeleteStatus.submit();
            }
        })
    })
}
// End button delete
// Multi Check Table
const multiCheckTable = document.querySelector("[multi-check-table]");
if (multiCheckTable) {
    const checkBox = multiCheckTable.querySelectorAll("input[name = check-box-data]");
    const checkBoxAll = multiCheckTable.querySelector("input[name = checkbox-all]");
    checkBoxAll.addEventListener("click", () => {
        if (checkBoxAll.checked == true) {
            checkBox.forEach(input => {
                input.checked = true;
            })
        } else {
            checkBox.forEach(input => {
                input.checked = false;
            })
        }
    })
    checkBox.forEach(input => {
        input.addEventListener("click", () => {
            const countInput = multiCheckTable.querySelectorAll("input[name = check-box-data]:checked");
            if (checkBox.length == countInput.length) {
                checkBoxAll.checked = true;
            } else {
                checkBoxAll.checked = false;

            }
        })
    })
    const formSubmitMultiTabe = document.querySelector("[form-change-multi]");
    if (formSubmitMultiTabe) {
        formSubmitMultiTabe.addEventListener("submit", (event) => {
            event.preventDefault();
            const type = event.target.elements.type.value;
            const inputsChecked = multiCheckTable.querySelectorAll("input[name ='check-box-data']:checked");
            if (inputsChecked.length > 0) {
                let ids = [];
                const inputIds = document.querySelector("input[name = 'ids']");
                inputsChecked.forEach(input => {
                    const id = input.value;
                    if (type == "change-position") {
                        const position = input.closest("tr").querySelector("input[name='position']").value;
                        ids.push(`${id} - ${position}`);
                    } else {
                        ids.push(id)
                    }
                })
                inputIds.value = ids.join(",");
                formSubmitMultiTabe.submit();

            } else {
                alert("Vui lòng chọn ít nhất 1 bản ghi !");
            }
        })
    }
}
// End CheckBox Multi
// Preview upload image
const uploadImage = document.querySelector("[upload-image]");
if (uploadImage) {
    const uploadImageInput = document.querySelector("[upload-image-input]");
    const uploadImagePreview = document.querySelector("[upload-image-preview]");
    uploadImageInput.addEventListener("change", (e) => {
        const file = e.target.files[0];
        if (file) {
            uploadImagePreview.src = URL.createObjectURL(file);
        }
    })
}
// End preview upload image
// Close alert
const showAlert = document.querySelector("[show-alert]");
if (showAlert) {
    let time = showAlert.getAttribute("data-time");
    time = parseInt(time);
    setTimeout(() => {
        showAlert.classList.add("alert-hidden");
    }, time)
    const closeAlert = showAlert.querySelector("[close-alert]");
    closeAlert.addEventListener("click", () => {
        showAlert.classList.add("alert-hidden");
    })
}
// End close alert