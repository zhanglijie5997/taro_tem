import Tabs from '@components/base/tabs';
import React, { Component, useEffect } from 'react';
import { Provider } from 'react-redux';
import configStore from './store';

const store = configStore()

interface AppType {
  children: Component
}

const App = (props: AppType) => {
  useEffect(() => {
    console.log(props);
  }, [])
  return (
    <Provider store={store}>
      { props.children }
    </Provider>
  )
}

// class App extends Component {
//   componentDidMount () {}

//   componentDidShow () {}

//   componentDidHide () {}

//   componentDidCatchError () {}

//   // 在 App 类中的 render() 函数没有实际作用
//   // 请勿修改此函数
//   render () {
//     return (
//       <Provider store={store}>
//         {this.props.children}
//       </Provider>
//     )
//   }
// }

export default App
