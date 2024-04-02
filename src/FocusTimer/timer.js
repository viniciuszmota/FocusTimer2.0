import * as elements from "./elements.js"
import * as actions from "./actions.js"

export const updateDisplay = (minutes, seconds) => {
  elements.minutes.textContent = String(minutes).padStart(2, 0)
  elements.seconds.textContent = String(seconds).padStart(2, 0)
}

let countdownId = null
export const countdown = () => {
  clearTimeout(countdownId)

  if (!elements.timerDisplay.classList.contains("running")) {
    return
  }

  let minutes = Number(elements.minutes.textContent)
  let seconds = Number(elements.seconds.textContent)

  seconds--
  if (seconds < 0) {
    minutes--
    seconds = 59
  }

  if (minutes < 0) {
    actions.togglePlayStart()
    actions.resetTimerApp()
    return
  }

  updateDisplay(minutes, seconds)
  countdownId = setTimeout(() => countdown(), 1000)
}
