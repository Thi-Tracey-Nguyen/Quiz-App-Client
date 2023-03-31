import moment from 'moment'

function setLocalStorageItems(data) {
  if (data) {
    localStorage.setItem('token', data.token) 

    const expires = moment().add(data.expiresIn)
    localStorage.setItem('expires', JSON.stringify(expires.valueOf()))
  }
}

function removeLocalStorageItems() {
  localStorage.removeItem('token')
  localStorage.removeItem('userId')
  localStorage.removeItem('expires')
}

function isLoggedIn() {
  const expiration = getExpiration()
  return moment().isBefore(expiration)
}

function isLoggedOut() {
  return !isLoggedIn()
}

function getExpiration() {
  const expiration = localStorage.getItem('expires')
  const expiresAt = JSON.parse(expiration)
  return moment(expiresAt)
}

export {setLocalStorageItems, removeLocalStorageItems, isLoggedIn, isLoggedOut}