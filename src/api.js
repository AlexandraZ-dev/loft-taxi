export const serverLogin = async (email, password) => {
  return fetch(
    `https://loft-taxi.glitch.me/auth?username=${email}&password=${password}`
  ).then(res => res.json()).then(data => console.log(data))
  // ).then(res => res.json()).then(data => data.success)
}

export const serverProfile = async (cardNumber, expiryDate, cardName, cvc, token) => {
  return fetch(
    `https://loft-taxi.glitch.me/card?cardNumber=${cardNumber}&expiryDate=${expiryDate}&cardName=${cardName}&cvc=${cvc}&token=${token}`
  ).then(res => res.json()).then(data => data.success)
}


