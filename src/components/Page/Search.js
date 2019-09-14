import React from 'react'

const Search = () => {
    let categories = [{ link: "index2.html", title: "فا" }, { link: "index1.html", title: "En" }];
    return (
        <div className="container courses-browse popular">
            <div className="row toolbar">
                <div className="col-md-4 col-sm-6 col-xs-12 select-categories">
                    <select className="jquery-select">
                        <option>choose a category</option>
                        <option value="1">Category 1</option>
                        <option value="2">Category 2</option>
                        <option value="3">Category 3</option>
                    </select>
                </div>
                <div className="col-md-4 col-sm-6 col-xs-12 select-numofvids">
                    <select className="jquery-select">
                        <option>choose a teacher</option>
                        <option value="1">Teacher 1</option>
                        <option value="2">Teacher 2</option>
                        <option value="3">Teacher 3</option>
                    </select>
                </div>
                <div className="col-md-4 col-sm-6 col-xs-12 select-name">
                    <select className="jquery-select">
                        <option>sort by</option>
                        <option value="1">sort by 1</option>
                        <option value="2">sort by 2</option>
                        <option value="3">sort by 3</option>
                    </select>
                </div>
                <div className="col-sm-6 col-xs-12 text-keywords">
                    <input className="keywords" name="keywords" type="text" placeholder="keywords" />
                </div>
                <div className="col-sm-6 col-xs-12 search-button">
                    <button className="search-teachers">SEARCH</button>
                </div>
            </div>
        </div>
    );
}

export default Search;