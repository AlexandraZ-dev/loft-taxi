import React, {useContext, useState} from 'react';
import {Profile} from './Profile/Profile'
import {SingUp} from "./SingUp/SingUp";
import {Maps} from "./Maps/Maps";
import {Login} from "./Login/Login";
import {Header} from "./Header/Header";
import {AuthContext} from "./AuthContext";

export const App = () => {
  const [page, setPage] = useState('login')
  const {isLoggedIn} = useContext(AuthContext)

  const navigateToWhenIsLoggedOut = (currentPage) => {
    !isLoggedIn && setPage(currentPage)
  }

  const navigateTo = (currentPage) => {
    isLoggedIn && setPage(currentPage)
  }

  const PAGES = {
    login: <Login navigateTo={navigateTo} navigateToWhenIsLoggedOut={navigateToWhenIsLoggedOut}/>,
    singUp: <SingUp navigateTo={navigateTo} navigateToWhenIsLoggedOut={navigateToWhenIsLoggedOut}/>,
    maps: <Maps/>,
    profile: <Profile navigateTo={navigateTo}/>
  }

  return (
    <>
      {isLoggedIn && <Header navigateTo={navigateTo}/>}
      <main>
        <section>{PAGES[page]}</section>
      </main>
    </>)
}

