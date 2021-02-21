import React from 'react'

export const Profile = ({navigateTo}) => {
  return (
    <>
      <h1>Профиль</h1>
      <p>Введите платежные данные</p>
      <form>
        <input id='name' type='text' name='name' size='58' placeholder='Имя владельца*'/>
        <br/>
        <br/>
        <input id='numberCard' type='text' name='numberCard' size='58' placeholder='Номер карты*'/>
        <br/>
        <br/>
        <input id='date' type='text' name='date' size='28' placeholder='MM/YY*'/>
        <input id='cvc' type='text' name='cvc' size='28' placeholder='CVC*'/>
        <br/>
        <br/>
        <button onClick={()=> navigateTo('maps')}>Сохранить</button>
      </form>
    </>
  )
}
