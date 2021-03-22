
export const serverLogin = async (email, password) => {
  return fetch('https://loft-taxi.glitch.me/auth',
    {
      method: "POST",
      headers: {"Content-Type": "application/json"},
      body: JSON.stringify({ email, password })
    }
  ).then(res => res.json())
}

export const serverCard = async (cardNumber, expiryDate, cardName, cvc, token) => {
  return fetch(
    `https://loft-taxi.glitch.me/card`,
    {
      method: "POST",
      headers: {"Content-Type": "application/json"},
      body: JSON.stringify({ cardNumber, expiryDate, cardName, cvc, token })
    }
  ).then(res => res.json())
}

export const serverRegister = async (email, password, name, surname) => {
  return fetch('https://loft-taxi.glitch.me/register',
    {
      method: "POST",
      headers: {"Content-Type": "application/json"},
      body: JSON.stringify({ email, password, name, surname })
    }
  ).then(res => res.json())
}
  export const serverAddressList = async () => {
    return fetch('https://loft-taxi.glitch.me/addressList',
      {
        method: "GET",
      }
    ).then(res => res.json())
  }



