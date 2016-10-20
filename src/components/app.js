import React, {Component} from 'react';

import BookList from 'containers/book-list_container.js';
import BookDetail from 'containers/book-detail_container';

class App extends Component {
	render () {
		return (
			<div>
				<BookList />
				<BookDetail />
			</div>
		);
	}
}


export default App;