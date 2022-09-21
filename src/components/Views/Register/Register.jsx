import React from "react";
import "./Register.css";
import { useFormik } from "formik";

export const Register = () => {

    const initialValues = {
        userName: "",
        userPass: "",
        userEmail: "",
        userRole: ""
    }

    const validate = (values) => {
        const errors = {};

        if(!values.userName) errors.userName = "Se debe ingresar un usuario";
        if(!values.userPass) errors.userPass = "Se debe ingresar una contraseña";
        if(!values.userEmail) errors.userEmail = "Se debe ingresar un correo";

        return errors;
    }

    const onSubmit = () => {
        localStorage.setItem("user", "si");
    };
    
    const formik = useFormik({initialValues, validate, onSubmit});

    const {handleSubmit, handleChange, handleBlur, values, errors} = formik;

    return( 
        <form className="login" onSubmit={ handleSubmit }>
            <h1>Register</h1>
            <div className="agrupador">
                <label>Usuario</label>
                <input 
                type="text" 
                id="userName" 
                value={ values.userName }
                onBlur={ handleBlur }
                onChange={ handleChange }
                />
            </div>
            {errors.userName && <div className="notification">{errors.userName}</div>}

            <div className="agrupador">
                <label>Correo</label>
                <input 
                type="email" 
                id="userEmail" 
                onBlur={ handleBlur }
                value={ values.userEmail } 
                onChange={ handleChange }
                />
            </div>
            {errors.userEmail && <div className="notification">{errors.userEmail}</div>}

            <div className="agrupador">
                <label>Rol</label>
                <select 
                type="email" 
                id="userRole" 
                onBlur={ handleBlur }
                value={ values.userRole } 
                onChange={ handleChange }
                >
                    <option name="lider">Líder</option>
                    <option name="miembro">Miembro</option>
                    <option name="moderador">Moderador</option>
                </select>
            </div>
            {errors.userEmail && <div className="notification">{errors.userEmail}</div>}

            <div className="agrupador">
                <label>Contraseña</label>
                <input 
                type="password" 
                id="userPass" 
                onBlur={ handleBlur }
                value={ values.userPass } 
                onChange={ handleChange }
                />
            </div>
            {errors.userPass && <div className="notification">{errors.userPass}</div>}
            <button type="submit">Registrarse</button>
        </form>
    );
}