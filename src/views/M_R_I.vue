<template>
  <div class="exterior_1">
    <!--First the nav bar--->
    <v-toolbar>
      <v-toolbar-side-icon @click="drawer = !drawer"></v-toolbar-side-icon>
      <v-toolbar-title class="white--text">About Us</v-toolbar-title>
      <v-spacer></v-spacer>
      <v-btn icon>
        <v-img v-if="nameUser" :src="nameUser.photoURL"></v-img>
      </v-btn>
    </v-toolbar>
    <v-navigation-drawer v-model="drawer" absolute temporary>
      <v-list class="pa-0" dense>
        <router-link to="/home">
          <v-list-tile class="item">
            <v-list-tile-content>
              <v-list-tile-title>Home</v-list-tile-title>
            </v-list-tile-content>
          </v-list-tile>
        </router-link>
        <router-link to="/e_p">
          <v-list-tile class="item">
            <v-list-tile-content>
              <v-list-tile-title>Epic Earth Photos</v-list-tile-title>
            </v-list-tile-content>
          </v-list-tile>
        </router-link>
        <router-link to="/m_r_p">
          <v-list-tile class="item">
            <v-list-tile-content>
              <v-list-tile-title>Mars Rover Photos</v-list-tile-title>
            </v-list-tile-content>
          </v-list-tile>
        </router-link>
        <router-link to="/l">
          <v-list-tile class="item">
            <v-list-tile-content>
              <v-list-tile-title>Login</v-list-tile-title>
            </v-list-tile-content>
          </v-list-tile>
        </router-link>
        <router-link to="/about">
          <v-list-tile class="item">
            <v-list-tile-content>
              <v-list-tile-title>Gerenal Info</v-list-tile-title>
            </v-list-tile-content>
          </v-list-tile>
        </router-link>
      </v-list>
    </v-navigation-drawer>
    <h1 class="font">Mars Rover Info</h1>
    <v-container>
      <v-img src="opportunityrover.jpg" class="grey lighten-2" aspect-ratio="1">
        <template v-slot:placeholder>
          <v-layout fill-height align-center justify-center ma-0>
            <v-progress-circular indeterminate color="blue"></v-progress-circular>
          </v-layout>
        </template>
      </v-img>
    </v-container>
    <v-container>
      <h2 class="font">About Rover</h2>
      <p class="p_day_div">
        A Mars rover is a motor vehicle that travels across the surface of the planet Mars upon arrival.
        Rovers have several advantages over stationary landers: they examine more territory, they can be directed to interesting features, they can place themselves in sunny positions to weather winter months, and they can advance the knowledge of how to perform very remote robotic vehicle control.
        <br>
        <br>There have been four successful robotically operated Mars rovers, all managed by the Jet Propulsion Laboratory: Sojourner, Opportunity, Spirit and Curiosity.
        On January 24, 2016, NASA reported that current studies on Mars by Curiosity and Opportunity (the latter now defunct) would be searching for evidence of ancient life, including a biosphere based on autotrophic, chemotrophic or chemolithoautotrophic microorganisms, as well as ancient water, including fluvio-lacustrine environments (plains related to ancient rivers or lakes) that may have been habitable.
        <br>
        <br>The search for evidence of habitability, taphonomy (related to fossils), and organic carbon on Mars is now a primary NASA objective. In June 2018, Opportunity went out of contact after going into hibernation mode in a dust storm. NASA declared the Opportunity mission ended on February 13, 2019, after numerous failures to wake up the rover from the repeated signals.
        Mars 2, Mars 3 were physically tethered probes; Sojourner was dependent on the Mars Pathfinder base station for communication with Earth; MER-A & B and Curiosity were on their own. As of February 2019, Curiosity is still active, while Spirit, Opportunity, and Sojourner completed their missions before losing contact.
      </p>
    </v-container>
    <h1 class="font">Characteristics of the vehicle</h1>
    <v-container class="container_ep">
      <h2 class="font">Dimensions</h2>
      <p
        class="p_day_div"
      >The rovers are six-wheeled, solar-powered robots that stand 1.5 m (4.9 ft) high, 2.3 m (7.5 ft) wide and 1.6 m (5.2 ft) long. They weigh 180 kg (400 lb), 35 kg (77 lb) of which is the wheel and suspension system</p>
      <h2 class="font">Drive system</h2>
      <v-container>
        <v-img src="rover_wheel.jpg" class="grey lighten-2" aspect-ratio="1">
          <template v-slot:placeholder>
            <v-layout fill-height align-center justify-center ma-0>
              <v-progress-circular indeterminate color="blue"></v-progress-circular>
            </v-layout>
          </template>
        </v-img>
      </v-container>
      <p class="p_day_div">
        Each rover has six wheels mounted on a rocker-bogie suspension system that ensures wheels remain on the ground while driving over rough terrain. The design reduces the range of motion of the rover body by half, and allows the rover to go over obstacles or through holes that are more than a wheel diameter (250 millimeters (9.8 in)) in size. The rover wheels are designed with integral compliant flexures which provide shock absorption during movement.[53] Additionally, the wheels have cleats which provide grip for climbing in soft sand and scrambling over rocks.
        <br>Each wheel has its own drive motor. The two front and two rear wheels each have individual steering motors. This allows the vehicle to turn in place, a full revolution, and to swerve and curve, making arching turns. The motors for the rovers have been designed by the Swiss company Maxon Motor.[54] The rover is designed to withstand a tilt of 45 degrees in any direction without overturning. However, the rover is programmed through its "fault protection limits" in its hazard avoidance software to avoid exceeding tilts of 30 degrees.
        <br>Each rover can spin one of its front wheels in place to grind deep into the terrain. It is to remain motionless while the digging wheel is spinning. The rovers have a top speed on flat hard ground of 50 mm/s (2 in/s). The average speed is 10 mm/s, because its hazard avoidance software causes it to stop every 10 seconds for 20 seconds to observe and understand the terrain into which it has driven.
        <br>
      </p>
      <h2 class="font">Power and electronic systems</h2>
      <p class="p_day_div">
        When fully illuminated, the rover triplejunction[55] solar arrays generate about 140 watts for up to four hours per Martian day (sol). The rover needs about 100 watts to drive. Its power system includes two rechargeable lithium ion batteries weighing 7.15 kg (15.8 lb) each, that provide energy when the sun is not shining, especially at night. Over time, the batteries will degrade and will not be able to recharge to full capacity.
        <br>For comparison, the Mars Science Laboratory's power system is composed of a Multi-Mission Radioisotope Thermoelectric Generator (MMRTG) produced by Boeing. The MMRTG is designed to provide 125W of electrical power at the start of the mission, falling to 100W after 14 years of service. It is used to power the MSL's many systems and instruments. Solar panels were also considered for the MSL, but RTGs provide constant power, regardless of the time of day, and thus the versatility to work in dark environments and high latitudes where solar energy is not readily available. The MSL generates 2.5 kilowatt hours per day, compared to the Mars Exploration Rovers, which can generate about 0.6 kilowatt hours per day.
        <br>It was thought that by the end of the 90-sol mission, the capability of the solar arrays to generate power would likely be reduced to about 50 watts. This was due to anticipated dust coverage on the solar arrays, and the change in season. Over three Earth years later, however, the rovers' power supplies hovered between 300 watt-hours and 900 watt-hours per day, depending on dust coverage. Cleaning events (dust removal by wind) have occurred more often than NASA expected, keeping the arrays relatively free of dust and extending the life of the mission. During a 2007 global dust storm on Mars, both rovers experienced some of the lowest power of the mission; Opportunity dipped to 128 watt-hours. In November 2008, Spirit had overtaken this low-energy record with a production of 89 watt-hours, due to dust storms in the region of Gusev crater.
        <br>The rovers run a VxWorks embedded operating system on a radiation-hardened 20 MHz RAD6000 CPU with 128 MB of DRAM with error detection and correction and 3 MB of EEPROM. Each rover also has 256 MB of flash memory. To survive during the various mission phases, the rover's vital instruments must stay within a temperature of −40 °C to +40 °C (−40 °F to 104 °F). At night, the rovers are heated by eight radioisotope heater units (RHU), which each continuously generate 1 W of thermal energy from the decay of radioisotopes, along with electrical heaters that operate only when necessary. A sputtered gold film and a layer of silica aerogel are used for insulation.
      </p>
      <h2 class="font">Communication</h2>
      <v-container>
        <v-img src="rover_cam.jpg" class="grey lighten-2" aspect-ratio="1">
          <template v-slot:placeholder>
            <v-layout fill-height align-center justify-center ma-0>
              <v-progress-circular indeterminate color="blue"></v-progress-circular>
            </v-layout>
          </template>
        </v-img>
      </v-container>
      <p class="p_day_div">
        The rover has an X band low-gain and an X band high-gain antenna for communications to and from the Earth, as well as an ultra high frequency monopole antenna for relay communications. The low-gain antenna is omnidirectional, and transmits data at a low rate to Deep Space Network (DSN) antennas on Earth. The high-gain antenna is directional and steerable, and can transmit data to Earth at a higher rate. The rovers use the UHF monopole and its CE505 radio to communicate with spacecraft orbiting Mars, the Mars Odyssey and (before its failure) the Mars Global Surveyor (already more than 7.6 terabits of data were transferred using its Mars Relay antenna and Mars Orbiter Camera's memory buffer of 12 MB).[60] Since MRO went into orbit around Mars, the landers have also used it as a relay asset. Most of the lander data is relayed to Earth through Odyssey and MRO. The orbiters can receive rover signals at a much higher data rate than the Deep Space Network can, due to the much shorter distances from rover to orbiter. The orbiters then quickly relay the rover data to the Earth using their large and high-powered antennas.
        <br>Each rover has nine cameras, which produce 1024-pixel by 1024-pixel images at 12 bits per pixel,[61] but most navigation camera images and image thumbnails are truncated to 8 bits per pixel to conserve memory and transmission time. All images are then compressed using ICER before being stored and sent to Earth. Navigation, thumbnail, and many other image types are compressed to approximately 0.8 to 1.1 bits/pixel. Lower bit rates (less than 0.5-bit/pixel) are used for certain wavelengths of multi-color panoramic images.
        <br>ICER is based on wavelets, and was designed specifically for deep-space applications. It produces progressive compression, both lossless and lossy, and incorporates an error-containment scheme to limit the effects of data loss on the deep-space channel. It outperforms the lossy JPEG image compressor and the lossless Rice compressor used by the Mars Pathfinder mission.
      </p>
    </v-container>
    <v-footer height="auto" color="primary lighten-1" class="footer_div">
      <v-layout justify-center row wrap>
        <v-flex primary lighten-2 py-3 text-xs-center white--text xs12>
          &copy;2019 —
          <strong>NAEGSA</strong>
        </v-flex>
      </v-layout>
    </v-footer>
  </div>
</template>


<script>
export default {
  data() {
    return {
      selected: "",
      drawer: false
    };
  },
  computed: {
    nameUser() {
      return this.$store.getters.getUser;
    }
  }
};
</script>
<style>
.exterior_1 {
  background-image: url("/uniphoto.jpg");
  max-width: 100%;
  background-size: cover;
  position: relative;
  background-attachment: fixed;
  background-repeat: no-repeat;
  height: 100%;
}
.p_day_div {
  color: white;
  text-align: justify;
}
.font {
  color: white;
  text-align: center;
}
.v-list.theme--dark {
  background-color: lightsteelblue;
  color: black;
}
.pa-0 {
  margin-top: 10%;
}
.v-list__tile__title {
  font-size: 25px;
}
.item {
  margin-bottom: 10%;
  font-size: 5%;
  color: white;
}
aside.v-navigation-drawer.v-navigation-drawer--absolute.v-navigation-drawer--open.v-navigation-drawer--temporary.theme--light {
  background-color: darkgrey;
}
nav.v-toolbar.theme--light {
  background-color: darkgray;
}
a.router-link-active {
  text-decoration: none;
}
.footer_div {
  position: absolute;
  bottom: 0;
  width: 100%;
}
</style>

