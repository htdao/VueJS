<template>
  <div class="container">
    <div id="calculation">{{calc || 0}}</div>
    <div class="calculation">
      <table>
        <tr>
          <td>
            <button class="btn color1" @click="destroyAll">AC</button>
          </td>
          <td>
            <button class="btn color1" @click="destroy">Del</button>
          </td>
          <td>
            <button class="btn color1" @click="percent" value="%">%</button>
          </td>
          <td>
            <button @click="btnValue('/')" class="btn color2" value="/">/</button>
          </td>
        </tr>
        <tr>
          <td>
            <button @click="btnValue('7')" class="btn" value="7">7</button>
          </td>
          <td>
            <button @click="btnValue('8')" class="btn" value="8">8</button>
          </td>
          <td>
            <button @click="btnValue('9')" class="btn" value="9">9</button>
          </td>
          <td>
            <button @click="btnValue('*')" class="btn color2" value="">*</button>
          </td>
        </tr>
        <tr>
          <td>
            <button @click="btnValue('4')" class="btn" value="4">4</button>
          </td>
          <td>
            <button @click="btnValue('5')" class="btn" value="5">5</button>
          </td>
          <td>
            <button @click="btnValue('6')" class="btn" value="6">6</button>
          </td>
          <td>
            <button @click="btnValue('-')" class="btn color2" value="-">-</button>
          </td>
        </tr>
        <tr>
          <td>
            <button @click="btnValue('1')" class="btn" value="1">1</button>
          </td>
          <td>
            <button @click="btnValue('2')" class="btn" value="2">2</button>
          </td>
          <td>
            <button @click="btnValue('3')" class="btn" value="3">3</button>
          </td>
          <td>
            <button @click="btnValue('+')" class="btn color2" value="+">+</button>
          </td>
        </tr>
        <tr>
          <td colspan="2">
            <button @click="btnValue('0')" class="btn bouble" value="0">0</button>
          </td>
          <td>
            <button @click="btnValue('.')" class="btn" value=".">.</button>
          </td>
          <td>
            <button class="btn color2" @click="result">=</button>
          </td>
        </tr>
      </table>
    </div>
  </div>
</template>
<script>
export default {
  name: "Ex02",
  data() {
    return {
      calc: '0',
      list : ['+','-','*','/','%','.'],
    }
  },
  methods: {
    percent () {
      if (this.calc !== 'Lỗi') {
        var point = -1
        var test = false
        var calc = '0'
        var text = this.calc
        for (var i = 0; i < text.length; i++){
          this.list.forEach((value) => {
            if (text[i] == value){
              point = i
            }
            if (text.charAt(text.length - 1) == value){
              test = true
            }
          })
        }
        if (point !== -1) {
          if (!test) {
            calc = text.slice(point+1, text.length)
            calc = String(calc/100)
            this.calc = text.substring(0, point+1) + calc
          }
        } else {
          calc = text.slice(0, text.length)
          calc = String(calc/100)
          this.calc = calc
        }
      }
    },
    destroy() {
        if (this.calc.length > 1) {
          this.calc = this.calc.substring(0, this.calc.length - 1)
        } else {
          this.calc = '0'
        }
    },
    destroyAll() {
      this.calc = '0'
    },
    btnValue(calc) {
        var text = this.calc
        var pointK = false
        var pointC = false
        this.list.forEach((value) => {
          if (calc == value) {
            pointK = true
          }
          if (text.charAt(text.length - 1) == value) {
            pointC = true
          }
        })
        if (text.length == 1 && text.charAt(0) == '0') {
          if (pointK) {
            this.calc += calc
          } else {
            this.calc = calc
          }
        } else if (pointK && pointC) {
          this.calc = this.calc.substring(0, this.calc.length - 1) + calc
        }
        else if (text.length > 1 && pointC) {
          if (!pointK) {
            this.calc += calc
          }
        } else {
          this.calc += calc
        }
    },
    result() {
      if (this.calc !== 'Lỗi') {
        var test = 1
        this.list.forEach((value) => {
          if (this.calc.charAt(this.calc.length-1) == value) {
            test = 0
          }
        })
        if (test) {
          this.calc = String(eval(this.calc))
        }
      }
    },
  }
}
</script>

<style scoped lang="scss">
.container {
  width: 300px;
  margin: 100px auto;
  height: 330px;
  background: #2c2c2c;
  border: 1px solid #2c2c2c;
  border-radius: 15px;

  #calculation {
    height: 60px;
    line-height: 60px;
    padding-right: 15px;
    text-align: right;
    font-size: 20px;
    color: white;
  }

  .calculation {
    background:  #2f2f31;

    table{
      width: 100%;

      tr {
        .btn {
          border: 1px solid #2f2f31;
          border-radius: 5px;
          width: 71px;
          padding: 10px;
          font-size: 20px;
          color: white;
          background: #616163;
          outline: none;
          cursor: pointer;
        }
        .bouble {
          width: 100%;
        }
        .color1 {
          background: #424345;
        }
        .color2 {
          background: #f49e3f;
        }
        .btn:hover {
          opacity: 0.5;
          cursor: pointer;
        }
      }
    }
  }
}
</style>