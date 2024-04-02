import * as elements from "./elements.js"
import * as audios from "./audios.js"
import * as timer from "./timer.js"

export const timerControl = (activeButton) => {
  if (activeButton.id == "button-play") {
    togglePlayStart()
    elements.timerDisplay.classList.add("running")
    timer.countdown()
  } else if (activeButton.id == "button-pause") {
    togglePlayStart()
    elements.timerDisplay.classList.remove("running")
  }
  if (activeButton.id == "button-stop") {
    toggleStop(activeButton)
  }
}

export const togglePlayStart = () => {
  elements.timerPlayButton.classList.toggle("secondary")
  elements.timerPauseButton.classList.toggle("secondary")
  elements.timerPauseButton.classList.toggle("active")

  if (elements.timerButtonStop.classList.contains("active")) {
    elements.timerButtonStop.classList.remove("active")
  }
}

const toggleStop = (activeButton) => {
  if (elements.timerDisplay.classList.contains("running")) {
    if (elements.timerPauseButton.classList.contains("active")) {
      togglePlayStart()
    }

    activeButton.classList.toggle("active")
    resetTimerApp()
    setTimeout(() => {
      activeButton.classList.toggle("active")
    }, 500)
  }
}

export const toggleButtonMusicActive = (activeButton) => {
  activeButton.classList.toggle("active")

  elements.timerDisplayButtonsSongs.forEach((button) => {
    if (button.id != activeButton.id) {
      button.classList.remove("active")
    }
  })
}

export const controlAudios = (activeButton) => {
  if (
    activeButton.id == "button-forest" &&
    activeButton.classList.contains("active")
  ) {
    audios.forestSong.play()
  } else {
    audios.forestSong.pause()
  }

  if (
    activeButton.id == "button-rain" &&
    activeButton.classList.contains("active")
  ) {
    audios.rainSong.play()
  } else {
    audios.rainSong.pause()
  }

  if (
    activeButton.id == "button-coffe-shop" &&
    activeButton.classList.contains("active")
  ) {
    audios.coffeShopSong.play()
  } else {
    audios.coffeShopSong.pause()
  }

  if (
    activeButton.id == "button-fireplace" &&
    activeButton.classList.contains("active")
  ) {
    audios.firePlaceSong.play()
  } else {
    audios.firePlaceSong.pause()
  }
}

export const plusTime = () => {
  if (elements.timerDisplay.classList.contains("running")) {
    return
  } else {
    let minutes = Number(elements.minutes.textContent)
    let seconds = Number(elements.seconds.textContent)

    if (minutes < 60) {
      elements.plusTimeButton.classList.add("active")
      minutes += 5
    }

    timer.updateDisplay(minutes, seconds)
    setTimeout(() => {
      elements.plusTimeButton.classList.remove("active")
    }, 200)
  }
}

export const minusTime = () => {
  if (elements.timerDisplay.classList.contains("running")) {
    return
  } else {
    let minutes = Number(elements.minutes.textContent)
    let seconds = Number(elements.seconds.textContent)

    if (minutes > 0) {
      elements.minusTimeButton.classList.add("active")
      minutes -= 5
    }

    timer.updateDisplay(minutes, seconds)
    setTimeout(() => {
      elements.minusTimeButton.classList.remove("active")
    }, 200)
  }
}

export const resetTimerApp = () => {
  elements.timerDisplay.classList.remove("running")
  timer.updateDisplay(25, 0)
}
