import React,{ Component } from 'react';

class Demo extends Component {
    //构造函数
  constructor(props,context) {
      super(props,context)
      this.state = {
          //定义state
      }
  }
  //组件将要挂载,constructor之后，render之前
componentWillMount () {
}
//组件渲染完成
componentDidMount () {
}
//在接收父组件props改变后
componentWillReceiveProps (nextProps) {
}
//state改变后重新渲染
shouldComponentUpdate (nextProps,nextState) {
}
//shouldComponentUpdate返回true以后，组件进入重新渲染的流程，进入componentWillUpdate
componentWillUpdate (nextProps,nextState) {
}
//组件更新完毕后调用
componentDidUpdate (prevProps,prevState) {
}
render () {
    return (
        <div></div>
    )
}
//组件销毁时调用
componentWillUnmount () {
}
}
export default Demo;
