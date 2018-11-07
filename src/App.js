import React from 'react'
import {HeaderButton, IOS, Panel, PanelHeader, platform, View} from '@vkontakte/vkui'
import '@vkontakte/vkui/dist/vkui.css'

import Home from './panels/Home'
import NoLagCounter from './panels/NoLagCounter'
import {connect} from "react-redux"
import Icon28ChevronBack from "@vkontakte/icons/dist/28/chevron_back"
import Icon24Back from "@vkontakte/icons/dist/24/back"

const osname = platform();

class App extends React.Component {
	constructor(props) {
		super(props)

		this.state = {
			activePanel: 'home',
			fetchedUser: null,
		}
	}

	go = (e) => {
		this.setState({activePanel: e.currentTarget.dataset.to})
	}

	render() {
		return (
			<View activePanel={this.state.activePanel}>
				<Home id="home" fetchedUser={this.state.fetchedUser} go={this.go}/>
				{/*Работает хорошо*/}
				<NoLagCounter id="no-lag" go={this.go}/>
				{/*Работает плохо*/}
				<Panel id="lag">
					<PanelHeader
						left={<HeaderButton onClick={this.go} data-to="home">
							{osname === IOS ? <Icon28ChevronBack/> : <Icon24Back/>}
						</HeaderButton>}
					>
						Lag
					</PanelHeader>
					<br/>
					<div>{this.props.count}</div>
				</Panel>
			</View>
		)
	}
}

function mapStateToProps(state) {
	return {
		count: state.Counter.value
	}
}


export default connect(mapStateToProps, {})(App)