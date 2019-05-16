<template class="t">
  <div class="exterior">
    <div class="interior_1">
      <div>
        <img class="logos" max-width="100px" src="android-ios.png">
      </div>
    </div>
    <div class="interior_2">
      <!--Link the image to home--->
      <router-link to="/home">
        <v-img class="img" src="NASA-Logo.png" lazy-src="NASA-Logo.png"/>
      </router-link>
    </div>
    <footer class="foot">
      <v-img width="100px" src="space.png"/>
    </footer>
  </div>
</template>

<script>
export default {};
</script>

<style>
.interior_1 {
  margin-top: 2%;
  margin-left: auto;
}
.interior_2 {
  margin-top: 50%;
}
.img {
  margin: auto;
  max-width: 150%;
}
.exterior {
  background-image: url("/uniphoto.jpg");
  max-width: 100%;
  height: 100vh;
  background-size: cover;
  position: relative;
}
.copy {
  color: white;
}
.foot {
  position: absolute;
  bottom: 0%;
  margin-bottom: 2%;
  margin-left: 35%;
}
.logos {
  width: 25%;
  float: right;
  margin-right: 2%;
}
</style>
