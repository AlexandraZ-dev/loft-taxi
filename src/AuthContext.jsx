import React, {useState} from 'react'

export const AuthContext = React.createContext()

export const AuthProvider = ({children}) => {
  const [isLoggedIn, setIsLoggedIn] = useState(false)

  const logIn = (email, password) => {
    if (email !== 'test@test.com' || password !== '123123') {
      return
    }
    setIsLoggedIn(true)
  }

  const logOut = () => {
    setIsLoggedIn(false)
  }

  const value = {logIn, logOut, isLoggedIn}
  return (
    <AuthContext.Provider value={value}>
      {children}
    </AuthContext.Provider>
  )
}
