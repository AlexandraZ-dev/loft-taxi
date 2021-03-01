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

  const navigateTo = (currentPage) => {
    isLoggedIn ? setPage(currentPage) : (setPage('login')|| setPage('singUp'))
  }

  const PAGES = {
    login: <Login navigateTo={navigateTo}/>,
    singUp: <SingUp navigateTo={navigateTo}/>,
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

