module.exports.createPost = (req, res, next) => {
    const re = /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;
    const password = 
    /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@.#$!%*?&])[A-Za-z\d@.#$!%*?&]{8,15}$/;
    const regexPhoneNumber = /(84|0[3|5|7|8|9])+([0-9]{8})\b/g;
    if (!req.body.fullName) {
        req.flash("error", "Vui lòng nhập tiêu đề");
        return res.redirect("back");
        return;
    }

    if (!req.body.email) {
        req.flash("error", "Vui lòng nhập địa chỉ email");
        return res.redirect("back"); 
        return;
    } else if (!re.test(req.body.email)) {
        req.flash("error", "Địa chỉ email không hợp lệ");
        return res.redirect("back");
        return;
    }
    if(!req.body.email){
        req.flash("error", "Vui lòng nhập mật khẩu");
        return res.redirect("back");
        return;
    }else if(!password.test(req.body.password)){
        req.flash("error", "Vui lòng nhập mật khẩu dài hơn");
        res.redirect("back");
        return;
    }
    if(!req.body.phone){
        req.flash("error", "Vui lòng nhập số điện thoại");
        res.redirect("back");
        return;
    }else if(!regexPhoneNumber.test(req.body.phone)){
        req.flash("error", "Vui lòng nhập đúng định dạng sdt Việt Nam");
        res.redirect("back");
        return;
    }
    next();
}