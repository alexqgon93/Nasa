<template>
  <div v-if=" mars_photos != null">
    <h1>Welcome to the pictures of the mars rover</h1>
    <div v-for="(id, index) in mars_photos" :key="index">
      <v-img
        :src="id.img_src"
        class="mars_rover"
      ></v-img>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      mars_photos: null,
      url:
        "https://api.nasa.gov/mars-photos/api/v1/rovers/opportunity/photos?sol=1&page=1&camera=PANCAM&api_key="
    };
  },
  methods: {
    getData() {
      fetch(this.url + "CpOCSUpd1nY7lphH0kgr0xweoNBQ7cGKrFia1cTy")
        .then(r => r.json())
        .then(json => {
          this.mars_photos = json.photos;
          this.mars_url=json.photos.img_src;
          });
    }
  },
  created() {
    this.getData();
  }
};
</script>

<style>
.mars_rover{
  width: 20%;
  margin-left: 20%
}
</style>
