const tutorialApi = {
    getList: (from) => {
        let limit = 12;
        let page= from ==1 ? from : Math.floor(from/limit)+1;
        return fetch(`http://localhost:4000/tutorials?_page=${page}&_limit=${limit}`)
            .then(response => response.json())
            .then(json => json.list)
    },

    getById: (id) =>{
        return fetch(`http://localhost:4000/tutorial?id=${id}`)
        .then(response => response.json())
        .then(json => json)
    }
};

export default tutorialApi;

