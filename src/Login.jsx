import React from 'react'

export const Login = ({singIn, auth}) => {
  return (
    <>
      <h1>Войти</h1>
      <form>
        <input id='email' type='email' name='email' size='58' placeholder='Имя пользователя*'/>
        <br/>
        <br/>
        <input id='password' type='password' name='password' size='58' placeholder='Пароль*'/>
        <br/>
        <br/>
        <button onClick={singIn}>Войти</button>
      </form>
      <br/>
      <br/>
      <p>Новый пользователь? <button type='button' onClick={auth}>Зарегистрируйтесь</button></p>
    </>
  )
}
