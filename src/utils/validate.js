const emailRegex = /^[0-9a-zA-Z]([-.\w]*[0-9a-zA-Z_+])*@(([0-9a-zA-Z][-\w]*\.)+[a-zA-Z]{2,9})$/
const passwordRegex = /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/
const nameRegex= /^[A-Za-z\d]*/

const checkValidData = (name, email, password, isSignIn) => {
    if(!isSignIn && (!name || !nameRegex.test(name))) {
        return "Please Enter a valid Name"
    } else if(!emailRegex.test(email)) {
        return "Please Enter a valid email address"
    } else if (!isSignIn && !passwordRegex.test(password)) {
        return "Password should have minimum 8 letters with at least one letter and one number"
    }

    return;
}

export default checkValidData;