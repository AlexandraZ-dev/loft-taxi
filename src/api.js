
export const serverLogin = async (email, password) => {
  return fetch('https://loft-taxi.glitch.me/auth',
    {
      method: "POST",
      headers: {"Content-Type": "application/json"},
      body: JSON.stringify({ email, password })
    }
  ).then(res => res.json()).then(data => data.success)
}

export const serverCard = async (cardNumber, expiryDate, cardName, cvc, token) => {
  return fetch(
    `https://loft-taxi.glitch.me/card?cardNumber=${cardNumber}&expiryDate=${expiryDate}&cardName=${cardName}&cvc=${cvc}&token=${token}`
  ).then(res => res.json()).then(data => data.success)
}


