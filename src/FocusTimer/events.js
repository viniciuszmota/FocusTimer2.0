import * as elements from "./elements.js"
import * as actions from "./actions.js"

elements.timerDisplayButtonsSongs.forEach((activeButton) => {
  activeButton.addEventListener("click", (event) => {
    actions.toggleButtonMusicActive(activeButton)
    actions.controlAudios(activeButton)
  })
})

elements.timerButtons.forEach((activeButton) => {
  activeButton.addEventListener("click", (event) => {
    actions.timerControl(activeButton)
  })
})

elements.plusTimeButton.addEventListener("click", () => {
  actions.plusTime()
})

elements.minusTimeButton.addEventListener("click", () => {
  actions.minusTime()
})
