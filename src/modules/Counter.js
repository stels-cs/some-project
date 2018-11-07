const SET_COUNT = "SET_COUNT"

const initState = {
	value: 0,
}

const Counter = (state = initState, action) => {
	switch (action.type) {
		case SET_COUNT:
			return {...state, value: action.value}
		default:
			return state
	}
}

export function StartCounter() {
	return dispatch => {
		let count = 0
		setInterval( () => {
			count++
			dispatch({type:SET_COUNT, value: count})
		}, 100 )
	}
}

export default Counter
