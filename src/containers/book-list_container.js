import React, {Component} from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

import { selectBook } from '../actions/index';

class BookList extends Component {
	renderList(){
		return this.props.books.map((book)=>{
			return (
				<li
					onClick={ ()=> this.props.selectBook(book) } 
					key={ book.title } 
					className="list-groupe-item">
					{ book.title }</li> 
			);
		});
	}
	
	render() {
		return (
			<ul className="list-groupe col-sm-4">
				{ this.renderList() }
			</ul>
		);
	}
}

function mapStateToProps (state) {
	return {
		books: state.books
	};
}

function mapDispatchToProps (dispatch){
	return bindActionCreators({selectBook}, dispatch);
}
	

export default connect(mapStateToProps, mapDispatchToProps)(BookList);