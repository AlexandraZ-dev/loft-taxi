import React, {Component} from 'react';
import {Profile} from './Profile/Profile'
import {Auth} from "./Auth/Auth";
import {Maps} from "./Maps/Maps";
import {Login} from "./Login/Login";
import {Header} from "./Header/Header";

class App extends Component {
  state = {currentPage: 'login'}

  navigateTo = (page) => {
    this.setState({currentPage: page})
  }

  PAGES = {
    login: <Login navigateTo={this.navigateTo} />,
    auth: <Auth navigateTo={this.navigateTo}/>,
    maps: <Maps/>,
    profile: <Profile navigateTo={this.navigateTo}/>
  }

  render() {
    return (<>
      <Header navigateTo={this.navigateTo}/>
      <main>
        <section>{this.PAGES[this.state.currentPage]}</section>
      </main>
    </>)
  }
}

export default App
