import React from 'react'

export const Auth = ({auth, login}) => {
  return (
    <>
      <h1>Регистрация</h1>
      <form>
        <input id='email' type='email' name='email' size='58' placeholder='Адрес электронной почты*'/>
        <br/>
        <br/>
        <input id='name' type='text' name='name' size='28' placeholder='Имя*'/>
        <input id='lastName' type='text' name='lastName' size='28' placeholder='Фамилия*'/>
        <br/>
        <br/>
        <input id='password' type='password' name='password' size='58' placeholder='Пароль*'/>
        <br/>
        <br/>
        <button onClick={auth}>Зарегистрироваться</button>
      </form>
      <br/>
      <br/>
      <p>Уже зарегистрован? <button type='button' onClick={login}>Войти</button></p>
    </>
  )
}
