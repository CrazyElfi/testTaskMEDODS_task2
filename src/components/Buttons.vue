<template>
  <div class="simon">
    <div class="btns-wrapper">
      <button v-for = "btnItem in btnsArr"
              :key="btnItem.id"
              class="btn"
              :class= "btnItem.class"
              :id="btnItem.id"></button>

<!--      <button class="btn blue" id="2"></button>-->
<!--      <button class="btn yellow" id="3"></button>-->
<!--      <button class="btn green" id="4"></button>-->
    </div>
    <div class="game-info">
      <h1>Simon The Game</h1>
      <h2>Round: <span>{{ round }}</span></h2>
      <button id="btn-start" @click="startGame">Start!</button>
      {{ randomArr }}
    </div>
  </div>
</template>

<script>
export default {
  name: 'Buttons',
  props: {
    msg: String
  },
  data () {
    return {
      round: '1',
      btnsArr: [
        {id: '1', class: 'red'},
        {id: '2', class: 'blue'},
        {id: '3', class: 'yellow'},
        {id: '4', class: 'green'}
      ],
      randomArr: [], // sequence
      //уровень сложности
    }
  },
  methods: {
    async startGame () {
      console.log('start')
      this.randomArr.push(this.getRandomNumberFromArr(this.btnsArr))
      // this.randomArr.push(this.getRandomNumberFromArr(this.btnsArr))
      // this.randomArr.push(this.getRandomNumberFromArr(this.btnsArr))
      await this.showHighlightRowBtn(this.randomArr)
      console.log('end')
    },
    async showHighlightRowBtn(array) {
      for (const id of array) {
        console.log(id)
        this.highlightBtn(id)
        await this.sleep(1000)
        this.removeHighlight(id)
      }
      console.log('Done!');
    },
    getRandomNumberFromArr (arr) {
      return Math.floor(Math.random() * arr.length + 1)
    },
    showHighlightRowBtn2() {
      // for(let i = 0; i < this.randomArr.length; i++) {
      //   let id = this.randomArr[i]
      //   this.highlightBtn(id)
      //   console.log('dsds')
      //
      //   const date = new Date()
      //   console.log(date.getMilliseconds())
      //   setTimeout(() => {
      //     this.removeHighlight(id)
      //     console.log('removeHighlight'+id)
      //
      //     const date = new Date()
      //     console.log(date.getMilliseconds())
      //   },1000)
      // }

    },

    sleep(ms) {
        return new Promise(resolve => setTimeout(resolve, ms))
    },
    highlightBtn(id) {
      let btn = document.getElementById(id)
      btn.classList.add("highlight")
    },
    removeHighlight (id) {
      let btn = document.getElementById(id)
      btn.classList.remove("highlight")
    }

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
  /*justify-content: center;*/
  /*align-items: center;*/
  /*margin: 0 auto;*/
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
  opacity: 0.7;
  border: #333333;
}
.hide-hightlight {
  opacity: 1;
  border: 2px solid #276a2b
}
</style>
