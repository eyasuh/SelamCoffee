import React from "react";
import './SearchBar.css';

let sortByOptions = {
    'Best Match': 'best_match',
    'Highest Rated': 'rating',
    'Most Reviewed': 'review_count'
}
function SearchBar() {

    function renderSortByOptions() {
        return Object.keys(sortByOptions).map(sortByOption => {
            let sortByOptionValue = sortByOptions[sortByOption];
            return <li key={sortByOptionValue}>{sortByOption}</li>
        });
    };

    return (
        <div className="SearchBar">
            <div className="SearchBar-sort-options">
                <ul>
                    {/* .renderSortByOptions() to sort the businesses by their options --> */}
                    {renderSortByOptions}
                </ul>
            </div>
            <div className="SearchBar-fields">
                {/* <input placeholder="Search Businesses" />
                <input placeholder="Where?" /> */}
            </div>
            <div className="about-paragraph">
                <p>Economy Walta, Buna Buna</p>
            </div>
            <div className="SearchBar-submit">
                <a>Shop</a>
            </div>
        </div>
    )
}

export default SearchBar; 