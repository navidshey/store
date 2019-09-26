const teacherApi = {
    getSearchItem: () => {
        return fetch('http://localhost:4000/teachersList')
            .then(response => response.json())
            .then(json => json.list)
    }
}

export default teacherApi;