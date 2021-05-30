<template>
  <div class="simon">
    <div class="btns-wrapper">
      <button v-for="btnItem in btnsArr"
              :key="btnItem.id"
              v-on:click="listenerStepUser"
              class="btn"
              :sound="btnItem.sound"
              :class="btnItem.class"
              :id="btnItem.id"></button>
    </div>
    <div class="game-info">
      <h1>Simon The Game</h1>
      <h2>Round: <span>{{ round }}</span></h2>
      <button id="btn-start"
              :disabled='isDisabledBtnStart'
              @click="newGame">Start!
      </button>

      <div class="game-options">
        <h2>Game Options:</h2>
        <div class="lvl-wrapper"
             v-for="level in levels"
             :key="level.id">

          <input type="radio"
                 :disabled='isDisabledBtnStart'
                 name="mode"
                 v-model="selectedLevelID"
                 :value="level.id"
                 :id="level.id"
          >
          <label for="level.id">{{ level.name }}</label>
        </div>

      </div>
    </div>
  </div>
</template>

<script>
let levels = [
  {
    id: "lvl_1",
    value: "easy",
    name: "Easy level",
    timeBreak: 1500,
  },
  {id: "lvl_2", value: "middle", name: "Middle level", timeBreak: 1000},
  {id: "lvl_3", value: "hard", name: "Hard level", timeBreak: 400},
];

export default {
  name: 'Buttons',
  props: {
    msg: String
  },
  data() {
    return {
      round: 1,
      btnsArr: [
        {id: 1, class: 'red', sound: require('@/assets/sounds/1.mp3')},
        {id: 2, class: 'blue', sound: require('@/assets/sounds/2.mp3')},
        {id: 3, class: 'yellow', sound: require('@/assets/sounds/3.mp3')},
        {id: 4, class: 'green', sound: require('@/assets/sounds/4.mp3')}
      ],
      step: 0,
      isDisabledBtnStart: false,
      randomArr: [], // sequence

      selectedLevelTime: 1500,
      selectedLevelID: "lvl_1",
      levels,
    }
  },
  computed: {
    selectedLevel() {
      return this.levels.find((level) => level.id === this.selectedLevelID);
    },
  },
  methods: {
    async newGame() {
      this.isDisabledBtnStart = true
      await this.sleep(1000)
      this.randomArr.push(this.getRandomNumberFromArr(this.btnsArr))
      await this.showHighlightRowBtn(this.randomArr)
    },
    async showHighlightRowBtn(array) {
      for (const id of array) {
        this.highlightBtn(id)

        //sound
        await this.playSound(id)

        await this.sleep(this.selectedLevel.timeBreak)
        this.removeHighlight(id)
        await this.sleep(700)
      }
    },
    getRandomNumberFromArr(arr) {
      return Math.floor(Math.random() * arr.length + 1)
    },
    sleep(ms) {
      return new Promise(resolve => setTimeout(resolve, ms))
    },
    highlightBtn(id) {
      let btn = document.getElementById(id)
      btn.classList.add("highlight")
    },
    removeHighlight(id) {
      let btn = document.getElementById(id)
      btn.classList.remove("highlight")
    },
    async listenerStepUser(e) {
      if(this.isDisabledBtnStart) {
        let clickId = Number(e.target.id)

        await this.playSound(clickId)

        if (clickId === this.randomArr[this.step]) {
          this.step++
        } else {
          alert('Game over! =(')
          this.isDisabledBtnStart = false
          this.round = 1
          this.randomArr = []
        }

        if (this.step === this.randomArr.length) {
          this.round++
          this.step = 0
          this.newGame()
        }
      }

    },
    async playSound(id) {
      let index = id - 1
      let sound = this.btnsArr[index].sound

      if (sound) {
        let audio = new Audio(sound);
        await audio.play();
      }
    },
  }
}
</script>

<style lang="css" scoped>
body {
  margin: 0;
  padding: 0;
}

.simon {
  height: 98vh;
  background-color: #cccccc;
  margin: 0 auto;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
}

.btns-wrapper {
  width: 500px;
  display: flex;
  flex-wrap: wrap;
}

.btn {
  width: 200px;
  height: 200px;
  border: 2px solid #276a2b
}

.btn:hover {
  opacity: 0.7;
}

.red {
  background-color: #ff4a36;
}

.blue {
  background: #1488ff;
}

.yellow {
  background-color: #ffee24;
}

.green {
  background: #9eff15;
}

#btn-start {
  width: 200px;
  padding: 10px 30px;
  background: #65de6f;
  color: #ffffff;
  font-weight: bold;
  font-size: 20px;
  text-align: center;
  border: 2px solid #276a2b;
}

#btn-start:hover {
  opacity: 0.8;
  background: #7aea82;
}

.highlight {
  opacity: 0.5;
  border: 4px solid #000000;
}

.game-options {
  font-size: 18px;
}

.lvl-wrapper {
}

input[type='radio'] {
  width: 20px;
  height: 20px;
}

.hiden {
  display: none;
}

#btn-start:disabled {
  background: #ccc;
}
</style>
