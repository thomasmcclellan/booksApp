import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import Header from './Header';
import BookForm from './bookForm';

ReactDOM.render(
	<div className='row'>
		<App>
			<Header />
			<BookForm />
		</App>
	</div>,
	document.getElementById('root')
);