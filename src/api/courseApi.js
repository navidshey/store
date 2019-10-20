const courseApi = {
    getTitles : (id)=>{
        return fetch(`http://localhost:4000/courseContent?id=${id}`)
        .then(response => response.json())
        .then(json => json)
    }
}

export default courseApi;
