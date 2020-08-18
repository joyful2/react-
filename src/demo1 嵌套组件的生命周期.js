import React from 'react';
import PropTypes from 'prop-types'

class App extends React.Component {
	getChildContext() {
		return { color: "purple" };
	}
	constructor(props) {
		super(props)
		this.state = {
			name: 'son'
		}
	}
	render() {
		console.log('App rerender')
		return (
			<div>
				{this.state.name && <Son name={this.state.name} />}
			</div>
		);
	}

	componentDidUpdate(prevProps, prevState) {
		console.log('App did update')
	}

	componentWillUpdate(prevProps, prevState) {
		console.log('App will update')
	}
	componentDidMount() {
		console.log('app mount')
		window.app = this
	}

}
App.childContextTypes = {
	color: PropTypes.string
}
class Son extends React.Component {
	render() {
		console.log('Son rerender')
		return (
			<div>
				{this.props.name && <GrandSon name={this.props.name + '-grand'} />}
			</div>
		);
	}
	componentWillUpdate(prevProps, prevState) {
		console.log('son will update')
	}
	componentDidUpdate(prevProps, prevState) {
		console.log('son did update')
	}
	componentDidMount() {
		console.log('son mount')
	}

	componentWillUnmount() {
		console.log('son unmount')
	}

}

class GrandSon extends React.Component {
	render() {
		console.log('GrandSon rerender')
		return (
			<div>
				{this.props.name} - {this.context.color}
			</div>
		);
	}
	componentWillUpdate(prevProps, prevState) {
		console.log('GrandSon will update')
	}
	componentDidUpdate(prevProps, prevState) {
		console.log('GrandSon did update')
	}
	componentDidMount() {
		console.log('grandson mount')
	}
	componentWillUnmount() {
		console.log('GrandSon unmount')
	}
}
GrandSon.contextTypes = {
	color: PropTypes.string
};
export default App;
