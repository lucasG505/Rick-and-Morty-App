
const regexEmail = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
const regexPassword = /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{6,10}$/;
export const validate = (data)=>{
    let errors={};
    if(!data.username){
        errors.username="Escriba un Email";
    }else if(!regexEmail.test(data.username)){
        errors.username="Escriba un Email valido";
    }else if(data.username.length>35){
        errors.username="El Usuario supera la cantidad de caracteres permitidos (35)"
    }
    if(!regexPassword.test(data.password)){
        errors.password="La contraseña debe contener al menos un numero y entre 6 y 10 caracteres"
    }
    return errors;
}