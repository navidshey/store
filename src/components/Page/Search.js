import React from 'react'

const Search = () => {
    let categories = [{ value: "1", title: "Category 1" }, { value: "2", title: "Category 2" }, { value: "3", title: "Category 3" }];
    let teachers = [{ value: "1", title: "Teacher 1" }, { value: "2", title: "Teacher 2" }, { value: "3", title: "Teacher 3" }];
    let sortBy = [{ value: "1", title: "Sort by 1" }, { value: "2", title: "Sort by 2" }, { value: "3", title: "Sort by 3" }];

    return (

        <div className="row toolbar">
            <div className="col-md-4 col-sm-6 col-xs-12 select-categories">
                <select className="jquery-select">
                    <option>choose a category</option>
                    {
                        categories.map(category => {
                            return (
                                <option value={categories.value}>{category.title}</option>
                            )
                        })
                    }
                </select>
            </div>
            <div className="col-md-4 col-sm-6 col-xs-12 select-numofvids">
                <select className="jquery-select">
                    <option>choose a teacher</option>
                    {
                        teachers.map(teacher => {
                            return (
                                <option value={teacher.value}>{teacher.title}</option>
                            )
                        })
                    }
                </select>
            </div>
            <div className="col-md-4 col-sm-6 col-xs-12 select-name">
                <select className="jquery-select">
                    <option>sort by</option>
                    {
                        sortBy.map(sort => {
                            return (
                                <option value={sort.value}>{sort.title}</option>
                            )
                        })
                    }
                </select>
            </div>
            <div className="col-sm-6 col-xs-12 text-keywords">
                <input className="keywords" name="keywords" type="text" placeholder="keywords" />
            </div>
            <div className="col-sm-6 col-xs-12 search-button">
                <button className="search-teachers">SEARCH</button>
            </div>
        </div>

    );
}

export default Search;