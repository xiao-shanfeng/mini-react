/* v01
// 1.首先创建dom节点，
const dom = document.createElement('div')
dom.id = 'id'
document.querySelector('#root').append(dom)
// 2.再创建子级节点
const textEl = document.createTextNode('')
textEl.nodeValue = 'app'
dom.append(textEl)

const buttonEl = document.createElement('button')
buttonEl.textContent = '按钮'
dom.append(buttonEl) */

// v02 vdom  -> 对象
// type prop children
/* const btnEl = {
  type: 'button',
  prop: {
    textContent: '按钮',
    children: []
  }
} */

/* const tEl = {
  type: 'TEXT_ELEMENT',
  prop: {
    nodeValue: 'app',
    children: []
  }
} */


/* const el = {
  type: 'div',
  prop: {
    id: 'id',
    children: [
      tEl,
      btnEl,
    ]
  }
} */




/* // 1.首先创建dom节点，
const dom = document.createElement(App.type)
dom.id = App.props.id
document.querySelector('#root').append(dom)
// 2.再创建子级节点
const textNode = document.createTextNode('')
textNode.nodeValue = textEl.props.nodeValue
dom.append(textNode)

const buttonDom = document.createElement(buttonEl.type)
buttonDom.textContent = buttonEl.props.textContent
dom.append(buttonDom) */







// render(App, document.querySelector('#root'))

import ReactDom from './core/ReactDom.js'
import App from './App.js'

ReactDom.createElemet(document.querySelector('#root')).render(App)