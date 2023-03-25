import moment from 'moment'

function setLocalStorageItems(jwt) {
  if (jwt !== null) {
    localStorage.setItem('token', jwt === null ? '' : jwt.token) 
    localStorage.setItem('username', jwt === null ? '' : jwt.user.username) 
    localStorage.setItem('userId', jwt === null ? '' : jwt.user._id)
    localStorage.setItem('isAdmin', jwt === null ? '' : jwt.user.isAdmin)

    const expires = moment().add(jwt.expiresIn)
    localStorage.setItem('expires', JSON.stringify(expires.valueOf()))
  }
}

function removeLocalStorageItems() {
  localStorage.removeItem('token')
  localStorage.removeItem('username')
  localStorage.removeItem('userId')
  localStorage.removeItem('isAdmin')
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