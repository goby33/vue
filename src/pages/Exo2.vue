<template>
  <section>
    <h2>Conversion</h2>
    <input type="number" v-model="value">
    <select name="pets" id="pet-select" v-model="unit">
      <option  v-for="unit in ValueUnits" :key="unit.name">{{unit.name}}</option>
    </select>
    <div class="result">{{ conversion}}</div>
  </section>
</template>

<script>
export default {
  name: "Exo2",
  data() {
    return {
      value: 0,
      unit: '',
      ValueUnits: [
        {
          name: 'km',
          multiplicator: 100
        },
        {
          name: 'm',
          multiplicator: 10
        },
        {
          name: 'cm',
          multiplicator: 0.10
        },
        {
          name: 'mm',
          multiplicator: 0.100
        }
      ]
    }
  },
  computed: {
    number: function () {
      return parseInt(this.value)
    },
    conversion: function () {
      if (!isNaN(this.number) && this.unit !== '') {
        return this.number * (this.ValueUnits.find(element => element.name === this.unit)).multiplicator;
      }
      return 2
    }
  }
}
</script>

<style scoped lang="scss">
section {
  margin: auto;
  width: 50%;
  border:1px solid red;
  input {
    width: 200px;
    height: 30px;
    border-radius: 20px;
    border:1px solid #D4E09B;
    text-align: center;
  }
}

</style>
