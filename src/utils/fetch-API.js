async function getData(uri) {
  const res = await fetch(`https://quiz-app-server.up.railway.app/${uri}`)
  return await res.json()
}


async function postData(obj, uri) {
  const res = await fetch(`https://quiz-app-server.up.railway.app/${uri}`, {
    method: 'POST', 
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json'
    }, 
    body: JSON.stringify(obj)
  })
  return await res.json()
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

export { getData, postData, postDataTest, getDataTest } 