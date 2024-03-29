let taskId = 1
function workLoop(deadline) {
  // 当前周期所剩余时间（毫秒）deadline.timeRemaining()
  taskId++
  let shouldYield = false
  while (!shouldYield) {
    shouldYield = deadline.timeRemaining() < 1
    // 渲染dom
    console.log(`taskId: ${taskId} runing`)
  }
  requestIdleCallback(workLoop)
}

requestIdleCallback(workLoop)