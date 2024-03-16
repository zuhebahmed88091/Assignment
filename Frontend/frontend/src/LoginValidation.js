function validateLogin(values) {
    let errors = {};
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    const passwordPattern = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[a-zA-Z\d]{8,}$/;

    if (values.email === "") {
        errors.email = "Name should not be empty";
    } else if (!emailPattern.test(values.email)) {
        errors.email = "Email did not match";
    } else {
        errors.email = "";
    }

    if (values.password === "") {
        errors.password = "Password should not be empty";
    }else if (!passwordPattern.test(values.password)) {
        errors.password = "Password did not match";
    } else {
        errors.password = "";
    }
    return errors;
}

export default validateLogin;