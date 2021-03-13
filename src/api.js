
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


