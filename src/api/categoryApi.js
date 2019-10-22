const categoryApi = {
  getSearchItem: () => {
    return fetch('http://localhost:4000/categoryTitles')
      .then(response => response.json())
      .then(json => json.list)
  }
}

export default categoryApi
