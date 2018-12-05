import React from 'react'
import { Link } from "react-router-dom";
import classes from './BookShelf.css'

const bookShelf = (props) => (
    <div className="classes.App">
        <div className={classes.booksList}>
            <div className={classes.BooksListTitle}>
                <h1>MyReads</h1>
            </div>
            <div className={classes.BooksListContent}>
                <div className={classes.Bookshelf}>
                    <h2 className={classes.BookshelfTitle}>Currently Reading</h2>
                    <div className={classes.BookshelfBooks}>
                        <ol className={classes.BooksGrid}>
                        </ol>
                    </div>
                </div>
                <div className={classes.Bookshelf}>
                    <h2 className={classes.BookshelfTitle}>Want to Reading</h2>
                    <div className={classes.BookshelfBooks}>
                        <ol className={classes.BooksGrid}>
                        </ol>
                    </div>
                </div>
                <div className={classes.Bookshelf}>
                    <h2 className={classes.BookshelfTitle}>Read</h2>
                    <div className={classes.BookshelfBooks}>
                        <ol className={classes.BooksGrid}>
                        </ol>
                    </div>
                </div>
          </div>
        </div>
        <div className={classes.OpenSearch}>
            <Link to="/search">Add a book</Link>
        </div>
    </div>
);

export default bookShelf;