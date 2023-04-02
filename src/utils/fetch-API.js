const URL = 'https://quiz-app-server.up.railway.app/'

async function getData(uri) {
  const res = await fetch(`${URL.concat(uri)}`)
  return res
}

async function getDataWithToken(uri) {

  const token = localStorage.getItem('token')
  const res = await fetch(`${URL.concat(uri)}`, {
    headers: { 'Authorization': token }
  })
  return res
}

async function postDataWithObj(obj, uri, method) {
  const res = await fetch(`${URL.concat(uri)}`, {
    method: method, 
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json'
    }, 
    credentials: 'include',
    body: JSON.stringify(obj)
  })
  return res
}

async function postData(uri) {
  const res = await fetch(`${URL.concat(uri)}`, {
    method: 'POST', 
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json'
    }, 
    credentials: 'include',
  })
  return res
}


export { getData, postData, postDataWithObj, getDataWithToken } 