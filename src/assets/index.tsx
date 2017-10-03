import * as React from 'react'
import {render} from 'react-dom'
import { connect, Provider } from 'react-redux'
import { createStore } from 'redux'
import { connect as io } from 'socket.io-client'

const socket = io()

function reducers(state = [], action) {
  switch (action.type) {
    case 'ADD_INDEX':
      return {
        index: action.index,
      }
    default:
      return state
  }
}
const store = createStore(reducers, {})

socket.on('data', (a) => {
  store.dispatch({
    index: a.payload.index,
    type: 'ADD_INDEX',
  })
})

interface IProps {
  index?: number
}

class App extends React.Component<IProps> {
  public render() {
    return (<p> Hello world! {this.props.index}</p>)
  }
}

const App1 = connect(
  (state) => {
    return {
      index: state.index || 0,
    }
  })(App)

render(
  <Provider store={store}>
    <App1 />
  </Provider>,
  document.getElementById('app-container'),
)
