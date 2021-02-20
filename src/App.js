import React, {Component} from 'react';
import {Profile} from './Profile'
import {Auth} from "./Auth";
import {Maps} from "./Maps";
import {Login} from "./Login";
import './App.css';

class App extends Component {
  state = {currentPage: 'login'}

  navigateTo = (page) => {
    this.setState({currentPage: page})
  }

  PAGES = {
    login: <Login singIn={() => {
      this.navigateTo('maps')}} auth={() => {
      this.navigateTo('auth')}}/>,
    auth: <Auth auth={() => {
      this.navigateTo('maps')}} login={() => {
      this.navigateTo('login')}}/>,
    maps: <Maps/>,
    profile: <Profile/>
  }

  render() {
    return (<>
      <header>
        <nav>
          <ul >
            <li>
              <button onClick={() => {
                this.navigateTo('auth')
              }}>Регистрация
              </button>
            </li>
            <li>
              <button onClick={() => {
                this.navigateTo('maps')
              }}>Maps
              </button>
            </li>
            <li>
              <button onClick={() => {
                this.navigateTo('profile')
              }}>Profile
              </button>
            </li>
          </ul>
        </nav>
      </header>
      <main>
        <section>{this.PAGES[this.state.currentPage]}</section>
      </main>
    </>)
  }
}

export default App
