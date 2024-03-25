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



function createTextNode(text) {
  return {
    type: 'TEXT_ELEMENT',
    props: {
      nodeValue: text,
      children: []
    }
  }
}

function createButtonNode(type, props, text) {
  return {
    type,
    props: {
      ...props,
      textContent: text,
      children: []
    }
  }
}

function createElemet(type, props, ...children) {
  return {
    type,
    props: {
      ...props,
      children: children.map(child => {
        return typeof child === 'string' ? createTextNode(child) : child
      })
    }
  }
}


function render(el, container) {
  const dom = el.type === 'TEXT_ELEMENT' ? document.createTextNode('') : document.createElement(el.type)
  Object.keys(el.props).forEach(key => {
    if (key !== 'children') {
      dom[key] = el.props[key]
    }
  })
  const children = el.props.children
  children.map(child => render(child, dom))
  container.append(dom)
}


const textEl = createTextNode('app')
const buttonEl = createButtonNode('button', null, '按钮')


// render(App, document.querySelector('#root'))

const React = {
  createElemet(container) {
    return {
      render(App) {
        render(App, container)
      }
    }
  }
}


const App = createElemet('div', {id: 'id'}, 'hi ', 'mini-react', buttonEl)
console.log(App)
React.createElemet(document.querySelector('#root')).render(App)