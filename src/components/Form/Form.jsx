import { useState } from "react";
import style from './Form.module.css'

const Form = ({logIn}) => {

    const [form, setForm] = useState({
        email:"",
        password:""
    })

    const [errors, setErrors] = useState({
        email:"",
        password:""
    })

    const validate = (form,setErrors,errors,property) => {
        if(property === "email"){
        if(!form.email){
            setErrors({...errors, email:"No text"})
        } else if(!/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{3})+$/.test(form.email)){
            setErrors({...errors, email: "Invalid email"});
        } else{
            setErrors({...errors, email:""})
        }
        }

        if(property === "password"){
        if(form.password.length < 6){
            setErrors({...errors,password:"passwords needs +6 characters"})
        } else if(form.password.length > 10){
            setErrors({...errors, password:"password needs to have less than 10 characters"})
        } else if(!/\d/.test(form.password)){
            setErrors({...errors, password:"password needs to include at least one number"})
        } else{
            setErrors({...errors, password:""})
        }
        }
    }

    const HandleChange = (event) => {
        const property = event.target.name;
        const value = event.target.value;

        setForm({...form, [property]:value})

        validate({...form, [property]:value},setErrors,errors,property)
    }
    

    const SubmitHandler = (event,form) => {
        event.preventDefault();
        logIn(form);
        alert('Login exitoso');
    }

    return(
        <div>
            <form onSubmit={SubmitHandler}>
                <div>
                   
                    <label htmlFor="email">email:</label>
                    <input type="text" name="email" onChange={HandleChange} className={errors.email ? style.error : style.success}/>
                    <span>{errors.email}</span>
                </div>
                <hr />
                <div>
                    <label htmlFor="password">password:</label>
                    <input type="text" name="password" onChange={HandleChange} className={errors.password ? style.error : style.success}/>
                    <span>{errors.password}</span>
                </div>
                <button onClick={SubmitHandler} type="submit">Log In</button>
            </form>
        </div>
    )
}

export default Form;