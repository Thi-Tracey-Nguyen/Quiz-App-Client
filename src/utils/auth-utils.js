import moment from 'moment'

function setLocalStorageItems(jwt) {
  if (jwt !== null) {
    localStorage.setItem('token', jwt.token) 
    localStorage.setItem('userId', jwt.user._id)
    localStorage.setItem('isAdmin', jwt.user.isAdmin)

    const expires = moment().add(jwt.expiresIn)
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