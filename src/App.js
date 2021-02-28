import React, {useState} from 'react';
import {Profile} from './Profile/Profile'
import {Auth} from "./Auth/Auth";
import {Maps} from "./Maps/Maps";
import {Login} from "./Login/Login";
import {Header} from "./Header/Header";

export const App =() => {
const [page, setPage] = useState('login')

  const navigateTo = (currentPage) => {
    setPage(currentPage)
  }

  const PAGES = {
    login: <Login navigateTo={navigateTo} />,
    auth: <Auth navigateTo={navigateTo}/>,
    maps: <Maps/>,
    profile: <Profile navigateTo={navigateTo}/>
  }

    return (<>
      <Header navigateTo={navigateTo}/>
      <main>
        <section>{PAGES[page]}</section>
      </main>
    </>)
}

