import React, { Component } from 'react'

class PostForm extends Component {

	render(){
		return(
			<form>
				<label for='title'>Title</label> <br/>
				<input type='text' name='title'/><br/>
				<label for='body'>Body</label> <br/>
				<textarea name='body'/><br/>
				<button type='submit'>submit</button>
			</form>
		);
	}

}


export default PostForm;