<template>
<div>
  <h2>Caroussel</h2>
  <caroussel :images="images"/>
</div>
</template>

<script>
import caroussel from "@/components/caroussel";
export default {
  name: "exo5",
  components: {
    'Caroussel': caroussel
  },
  data() {
    return {
      images: ['img.png','img_1.png','img_2.png','img_3.png','img_4.png']
    }
  }
}
</script>

<style scoped>

</style>
