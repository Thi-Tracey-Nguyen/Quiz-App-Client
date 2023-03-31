const URL = 'https://quiz-app-server.up.railway.app/'

async function getData(uri) {
  const res = await fetch(`${URL.concat(uri)}`)
  return res
}

async function getDataWithToken(uri, token) {
  const res = await fetch(`${URL.concat(uri)}`, {
    headers: { 'Authorization': token }
  })
  return res
}

async function postDataWithObj(obj, uri) {
  const res = await fetch(`${URL.concat(uri)}`, {
    method: 'POST', 
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

// using during testing
async function getDataTest(uri) {
  const res = await fetch(`http://localhost:4001/${uri}`)
  return await res.json()
}


async function postDataTest(obj, uri) {
  const res = await fetch(`http://localhost:4001/${uri}`, {
    method: 'POST', 
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json'
    }, 
    body: JSON.stringify(obj)
  })
  return await res.json()
}

export { getData, postData, postDataWithObj, getDataWithToken } 