import React, {useContext, useState} from 'react';
import {Profile} from './Profile/Profile'
import {Auth} from "./Auth/Auth";
import {Maps} from "./Maps/Maps";
import {Login} from "./Login/Login";
import {Header} from "./Header/Header";
import {AuthContext} from "./AuthContext";

export const App = () => {
  const [page, setPage] = useState('login')
  const {isLoggedIn} = useContext(AuthContext)

  const navigateTo = (currentPage) => {
    isLoggedIn ? setPage(currentPage) : setPage('login')
  }

  const PAGES = {
    login: <Login navigateTo={navigateTo}/>,
    auth: <Auth navigateTo={navigateTo}/>,
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

