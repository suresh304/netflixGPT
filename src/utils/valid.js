export const checkValidData = (email,password)=>{
    console.log(email,password)
    console.log("validation called")
    const isEmailValid = /^([a-zA-Z0-9._%-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,})$/.test(email)
    const isPasswordvalid =/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/.test(password)
    console.log(isEmailValid,isPasswordvalid)
    
    if(!isEmailValid)
    {
        return "invalid email Id"
    }
    if(!isPasswordvalid)
    {
        return "invalid password"
    }
    

    return null

}