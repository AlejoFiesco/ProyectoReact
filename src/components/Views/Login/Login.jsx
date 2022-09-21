import React from "react";
import "./Login.css";
import { useFormik } from "formik";
import { useNavigate } from "react-router-dom/";

export const Login = () => {
    const navigate = useNavigate();

    const initialValues = {
        txtUser: "",
        txtPass: ""
    }

    const validate = (values) => {
        const errors = {};
        if(!values.txtUser){
            errors.txtUser = "User is required";
        }
        if(!values.txtPass){
            errors.txtPass = "Password is required";
        }
        return errors;
    }

    const onSubmit = () => {
        localStorage.setItem("user", values.txtUser);
        navigate("/", { replace: true});
    };
    
    const formik = useFormik({initialValues, validate, onSubmit});

    const {handleSubmit, handleChange, handleBlur, values, errors} = formik;

    return( 
        <form className="auth" onSubmit={ handleSubmit }>
            <h1>Login</h1>
            <div className="agrupador">
                <label>User</label>
                <input 
                type="text" 
                id="txtUser" 
                value={ values.txtUser }
                onBlur={ handleBlur }
                onChange={ handleChange }
                />
            </div>
            {errors.txtUser && <div className="notification">{errors.txtUser}</div>}

            <div className="agrupador">
                <label>Password</label>
                <input 
                type="password" 
                id="txtPass" 
                onBlur={ handleBlur }
                value={ values.txtPass } 
                onChange={ handleChange }
                />
            </div>
            {errors.txtPass && <div className="notification">{errors.txtPass}</div>}
            
            <button type="submit">Login</button>
        </form>
    );
}