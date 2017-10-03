import React, { Component } from 'react';
import axios from 'axios';
import { API_BASE } from './constants';

class BookShelf extends Component {
	constructor(props) {
		super(props)
		this.state = { books: [] };
	}

	componentWillReceiveProps(nextProps) {
		this.setState({ friends: nextProps.props })
	}

	renderBooks() {
		if (this.state.books) {
			return this.state.books.map(book =>
				<div key={ book.id }>
					<li className='list-group-item'>
						<b>Title: </b>
							{ book.title }
						<br />
						<b>Author: </b>
							{ book.author }
						<button 
							onClick={ () => { this.removeBook(this, book) } }
							className='btn btn-danger trash'>
							<span className='glyphicon glyphicon-trash'></span>
						</button>
					</li>
				</div>
			);
		} else {
			return (
				<div>
					<h1>Waiting for Books!</h1>
				</div>
			);
		}
	}

	removeBook(event, book) {
		let id = book.id;
		let tempBooks = this.state.books;
		axios.delete(`${ API_BASE }/${ id }`)
			.then(response => {
				let deleteBook = tempBooks.indexOf(book);
				tempBooks.splice(deleteBook, 1);
				this.setState({ books: tempBooks });
			});
	}

	render() {
		return (
			<div>
				<div className='col-xs-2'>
				</div>
				<div className='col-xs-6'>
					<h3>Your BookShelf</h3>
					<ul className='list-group'>
						{ this.renderBooks() }
					</ul>
				</div>
			</div>
		);
	}
}

export default BookShelf;




















