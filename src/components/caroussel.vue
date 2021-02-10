<template>
<section>
  <div class="containImg">
    <img
        :src="require('../assets/imageCaroussel/'+images[imageId])"
        height="333" width="500" alt="img"/>
  </div>
  <button @click="previous" >previous</button>
  <button @click="next">next</button>
</section>
</template>

<script>
export default {
  name: "caroussel",
  props: {
    images: {type: Array, required:true}
  },
  data() {
    return {
      imageId:0,
    }
  },
  methods: {
    next() {
      if (this.imageId + 1 >= this.images.length) this.imageId = 0
      else this.imageId += 1
    },
    previous() {
      if (this.imageId - 1 === -1) this.imageId = this.images.length - 1
      else this.imageId -= 1
    }
  }
}
</script>
<style scoped lang="scss">
button {
  width: 100px;
  height: 30px;
  border:1px solid #F19C79;
  margin-right: 20px;
  border-radius: 20px;
  cursor: pointer;
}
</style>
