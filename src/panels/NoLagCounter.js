import React from 'react';
import PropTypes from 'prop-types';
import {Panel, PanelHeader, HeaderButton, platform, IOS} from '@vkontakte/vkui';
import Icon28ChevronBack from '@vkontakte/icons/dist/28/chevron_back';
import Icon24Back from '@vkontakte/icons/dist/24/back';
import {connect} from "react-redux"

const osname = platform();

const NoLagCounter = props => (
	<Panel id={props.id}>
		<PanelHeader
			left={<HeaderButton onClick={props.go} data-to="home">
				{osname === IOS ? <Icon28ChevronBack/> : <Icon24Back/>}
			</HeaderButton>}
		>
			No lag
		</PanelHeader>
		<br/>
		<div>{props.count}</div>
	</Panel>
);

NoLagCounter.propTypes = {
	id: PropTypes.string.isRequired,
	go: PropTypes.func.isRequired,
};

function mapStateToProps(state) {
	return {
		count: state.Counter.value
	}
}


export default connect(mapStateToProps, {})(NoLagCounter)
