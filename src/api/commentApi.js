const commentApi = {
    getCommentList: (courseId) => {
        return fetch('http://localhost:4000/commentList')
            .then(response => response.json())
            .then(json => json.list)
    }
}

export default commentApi;