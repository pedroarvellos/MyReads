import React, { Component } from "react";
import { Link } from "react-router-dom";
import classes from "./Search.css"

class Search extends Component {
    render() {
        return(
            <div className={classes.SearchBooks}>
                <div className={classes.SearchBooksBar}>
                <Link to="/" className={classes.CloseSearch}>
                    Close
                </Link>
                <div className={classes.SearchBooksInputWrapper}>
                    <input
                        type="text"
                        placeholder="Search by title or author"
                    />
                </div>
                </div>
                <div className={classes.SearchBooksResult}>
                    <ol className={classes.BooksGrid}>

                    </ol>
                </div>
            </div>
        );
    };
}

export default Search;