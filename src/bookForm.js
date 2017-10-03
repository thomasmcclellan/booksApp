import React, { Component } from 'react';
import axios from 'axios';
import BookShelf from './bookShelf';
import { API_BASE } from './constants';

class BookForm extends Component {
	constructor(props) {
		super(props);
		this.state = { books: [] };
		axios.get(API_BASE)
			.then(response => {
				this.setState({ books: response.data });
				this.renderBookShelf(this.state.books);
			});
		this.handleSubmit = this.handleSubmit.bind(this);
	}

	handleSubmit(event) {
		event.preventDefault();

		let title = this.refs.title.value;
		let author = this.refs.author.value;
		let tempBooks = this.state.books;
		axios.post(API_BASE, { title, author })
			.then(response => {
				tempBooks.push(response.data);
				this.setState({ books: tempBooks });
				this.renderBookShelf(this.state.books);
				this.refs.title.value = '';
				this.refs.author.value = '';
			});
	}

	renderBookShelf() {
		return <BookShelf props={ this.state.books } />
	}

	render() {
		return (
			<div>
				<div className='col-xs-4'>
					<form onSubmit={ this.handleSubmit.bind(this) }>
						<h3>Find a Book!</h3>

						<fieldset className='form-group'>
							<label>Book Title: </label>
							<input 
								type='text'
								ref='title'
								name='title'
								className='form-control' />
						</fieldset>
						<fieldset className='form-group'>
							<label>Book Author: </label>
							<input 
								type='text'
								ref='author'
								name='author'
								className='form-control' />
						</fieldset>

						<button className='btn btn-success' type='submit'>Shelf Book</button>
					</form>
				</div>
				<div>
					{ this.renderBookShelf(this.state.books) }
				</div>
			</div>
		);
	}
}

export default BookForm;















