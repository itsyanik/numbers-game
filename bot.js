/* GG Easy */

function bot (estate) {
let botClicks = 0
let isOn = estate

  if(isOn){
    for(let i=0; i < exibir; i++) {
      if(nums[i].id == botClicks) {
        nums[i].click()
        setTimeout( () => {
          botClicks += 1
        }, 100)
      }
    }
  }
}

setInterval(bot, 500)