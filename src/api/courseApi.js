const courseApi = {
 loadCourseList : ()=> {
        return fetch('https://conduit.productionready.io/api/articles/' + this.props.match.params.id)
            .then(response => response.json())
            .then(json => json.article)
}
}

export default courseApi;
