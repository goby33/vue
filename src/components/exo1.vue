<template>
  <div>
    <label>Text: <input v-model="text"></label>
    <p v-if="showText">{{ text }}</p>
    <ul v-if="showArray">
      <li v-for="item in array" :key="item.id">{{ item.name }}</li>
    </ul>
    <button @click="showText = !showText">Afficher texte</button>
    <button @click="showArray = !showArray">Afficher tableau</button>
  </div>
</template>

<script>
export default {
  name: "exo1",
  data() {
    return {
      text: '',
      showText: false,
      array: [
        {
          id: 0,
          name: 'my name'
        },
        {
          id: 1,
          name: 'etrvdf'
        },
      ],
      showArray: false
    }
  }
}
</script>

<style scoped>

</style>
