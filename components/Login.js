import React from 'react'
import StyleSheet from '../styles/Login.module.css'


function Login() {
  return (
    <div className={StyleSheet.techLogin}>
        <form className={StyleSheet.form}>
            <input type="text" placeholder="Nom d'utilisateur"  required/>
            <input type="password" placeholder="Mot de passe" required/>
            <button type="submit">Se connecter</button>
        </form>
      
    </div>
  )
}

export default Login