

const req = async (url, method = "GET", body = null, headers = { "Content-Type": "application/json" }) => { 
   const res = await fetch(url, { method, body, headers })
   if (!res.ok) {
      throw new Error(`${res.status} ${res.statusText}`)
   }
   return await res.json()
}

module.exports = req;