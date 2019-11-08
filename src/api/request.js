
export default function request (url) {
  return fetch(url)
    .then((response) => {
      console.log(response)
      response.json()
    })
    // .then(json => json)
}
