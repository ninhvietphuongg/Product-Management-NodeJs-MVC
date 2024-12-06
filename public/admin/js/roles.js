// Update permision
const buttonSubmitPermissions = document.querySelector("[button-submit-permissions]");
if(buttonSubmitPermissions){
    let permissions = [];
    const tablePermissions = document.querySelector("[table-permissions]");
    buttonSubmitPermissions.addEventListener("click", () => {
        const rows = tablePermissions.querySelectorAll("tbody tr[data-name]");
        rows.forEach(input => {
            const name = input.getAttribute("data-name");
            const inputs = input.querySelectorAll("input")
            if(name == "id"){
                inputs.forEach(input => {
                    const id = input.value;
                    permissions.push({
                        id: id,
                        permissions: []
                    })
                })
            }else{
                inputs.forEach((input, index) => {
                    const check = input.checked
                    if(check){
                        permissions[index].permissions.push(name)
                    }
                })
            }
        })
        if(permissions.length > 0){
            const formChangePermission = document.querySelector("[form-change-permissions]")
            const inputPermissions = formChangePermission.querySelector("input[name='roles']");
            inputPermissions.value = JSON.stringify(permissions);
            formChangePermission.submit();
        }
    })
}
// End update permission
// Checked button permission
const dataRecords = document.querySelector("[data-records]");
const tablePermissions = document.querySelector("[table-permissions]");
if(dataRecords){
    const records = JSON.parse(dataRecords.getAttribute("data-records"));
    console.log(records)
    records.forEach((record, index) => {
        const permisions = record.permissions
        permisions.forEach(permision => {
            const row = tablePermissions.querySelector(`[data-name=${permision}]`);
            const input = row.querySelectorAll("input")[index];
            input.checked = true;
        })
    })
}
// End checked button permission
