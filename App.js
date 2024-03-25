import React from './core/React.js'
const buttonEl = React.createButtonNode('button', null, '按钮')

const App = React.createElement('div', {id: 'id'}, 'hi ', 'mini-react', buttonEl)

export default App