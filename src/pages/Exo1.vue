<template>
  <section>
    <h2>Calculatrice</h2>
    <div class="container-calculatrice">
      <input type="number" alt="chiffre1" placeholder="number 1" v-model="number[0]">
      <input type="text" alt="chiffre1" placeholder="operation" v-model="operation">
      <input type="number" alt="chiffre2" placeholder="number 2" v-model="number[1]">
    </div>
    <div class="result">{{ resultOperation}}</div>
  </section>
</template>

<script>
export default {
name: "exo1",
  data() {
  return{
    number: [0, 0],
    operation: '+'
    }
  },
  computed: {
    number1: function (){
      return parseInt(this.number[0])
    },
    number2: function () {
      return parseInt(this.number[1])
    },
    resultOperation: function () {
      if (!isNaN(this.number1) && !isNaN(this.number2)) {
        switch (this.operation) {
          case '+':
            return this.number1 + this.number2
          case '*':
            return this.number1 * this.number2
          case '-':
            return this.number1 - this.number2
          case '/':
            return this.number1 / this.number2
        }
      }
      return 0
    }
  }
}
</script>

<style scoped lang="scss">
section {
  display: flex;
  flex-direction: column;
  align-items: center;
  .container-calculatrice {
    width: 60%;
    display: flex;
    justify-content: space-around;
    input {
      width: 200px;
      height: 30px;
      border-radius: 20px;
      border:1px solid #D4E09B;
      text-align: center;
    }
  }
  .result {
    margin-top: 50px;
    width: 10%;
    border:1px solid #A44A3F;
    font-size: 30px;
    padding: 2px;
  }
}

</style>
