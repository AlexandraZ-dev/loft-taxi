import React from 'react';
import './Header.css';

export const Header = ({navigateTo}) => {

  return (
    <header>
      <nav>
        <ul>
          <li>
            <button onClick={() => navigateTo('auth')
            }>Регистрация
            </button>
          </li>
          <li>
            <button onClick={() => navigateTo('maps')
            }>Maps
            </button>
          </li>
          <li>
            <button onClick={() => navigateTo('profile')
            }>Profile
            </button>
          </li>
        </ul>
      </nav>
    </header>
  )

}

