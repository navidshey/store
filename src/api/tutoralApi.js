const tutorialApi = {
    getList: () => {
        return fetch('http://localhost:4000/tutorials')
            .then(response => response.json())
            .then(json => json.list)

    }
};

export default tutorialApi;

