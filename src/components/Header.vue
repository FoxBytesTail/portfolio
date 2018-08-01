<template>
    <div class="hello">
        <el-container>
            <el-header class="header">
                <el-row type="flex" class="row-bg" justify="start">
                    <el-col :span="4" :offset="6" >
                        <div class="grid-content bg-trans">
                            <a href="/">
                            <img src="../assets/logo.png" id="logo">
                            <h1 id="logoText">Yml</h1>
                            <div class="sky-banner"></div>
                            </a>
                        </div>
                    </el-col>
                    <el-col :span="11">
                        <div class="grid-content bg-trans">
                            <el-container>
                                <el-menu :default-active="activeIndex" class="menu" mode="horizontal" @select="handleSelect" background-color="#fff0" text-color="#fff" active-text-color="#fff">
                                    <el-menu-item index="1">Home</el-menu-item>
                                    <el-menu-item index="2">Experience</el-menu-item>
                                    <el-menu-item index="3">Portfolio</el-menu-item>
                                    <el-menu-item index="4">Contact</el-menu-item>
                                </el-menu>
                            </el-container>
                        </div>
                    </el-col>
                    <!-- <el-col :span="7">
                        <div class="grid-content bg-trans"></div>
                    </el-col> -->
                </el-row>
            </el-header>
        </el-container>

        <el-container>
            <el-main class="main-cnt">
                <div>
                    <div class="banner">
                        <div class="banner-sky"></div>
                        <img src="data:image/png;base64,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gAABAgQIECBAgAABAnkUSG8c+N6/0mbz3aSWNnsVGELvF/Yt/PFicnyj137bCBAgQIAAAQIECBCorkD7xTqT137z3onXf/fe16uroPO8C2y9uNVX7p7/Yqte/25Wa229h6/Qm/flUx8BAgQIECBAgACB2QmE0HvmrQvP1FrZ10IVjST580s/eu7D2VVkZgK9BR6+lUrY9fcDy//svPIr9PYGs5UAAQIECORJIPzSmX1wbin769nFPNWlFgIEyi/QHXpDx5tZ9owrv+Vf+yJ2uHXFNxYfrvxuNupHv/ToI39ye3NUMRIgQIAAgfwJhF861y+tLNXT9IlQXWOueS355ulb+atURQQIlFHgl29dOJw0W9/u1dtcPf3DT3747J1e+2wjMAuBzwXfWRRhTgIECBAgQGA0ge7QG58t/EYJIwECkxZo/xxKX/vt+8tJ2vzMHSetVmP15ZMnrkx6fucnMIrA1q3OozzJsQQIECBAgMCMBf52bjFe6e2sZHO9vpRdfGVf5zaPCRAgMAmBJElaP3vxxPmsVd+600TonYS0c45DQPAdh6JzECBAgACBaQsc/vAfrXrz393Ttt+g8KPk+M/Xurf7mgABApMQ6Ay/Qu8khJ1zXAJudR6XpPMQIECAAIEpC2TZL9KND756NG3WD4apH4beb/30oymXYToCBAjUwp9ftD8yFATyKiD45nVl1EWAAAECBIYQiOH3kbS+lgi9Q4g5hAABAgQIECBAgAABAgQKJxCutBSuaAUTIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAAIGJC2RZll67dm354sWLhyY+mQkqIZBWoktNEiBAgAABAgQIECBQCIEQeldXV5dbrdaX0zQVfguxavkvMsl/iSokQIDA7gTCP6DhDEmStHZ3Js8mQIAAAQIEJikQQ2878C7GeTY3N7N2CD5//Pjxm3GbkcCoAoLvqGKOJ0CgUALhH9C3L90+Fop+4anHLwu/hVo+xRIgQIBAhQR6hd7YvvAbJYw7FRB8dyrneQQI5F4ght72dd7HQrHt6753hN/cL5sCCRAgQKCCAoNCb+QQfqOEcScCgu9O1DyHAIHcC3SH3liw8BsljAQIECBAIB8Cw4TeWKnwGyWMowp4catRxRxPgEDuBfqF3lB4uPobbn0Ox+S+EQUSIECAAIEKCFy9enVP+9/lfcO02mg0kvn5+QPDHOsYAp0CfvHr1PCYAAECBAgQIECAAIGpChw5cmR9bm7unWaz+Z/tJm4fs7q0tLS63XH2E+gWcKtzt4ivCRAohUC/q75udS7F8mqCAAECBEoocP369fn19fXn6/X6Qq/2Qug9duzYlV77bCOwnYDgu52Q/QQIFFagO/wKvYVdSoUTIECAQEUE+oVfobci3wATbFPwnSCuUxMgMHuBGH5DJV7RefbroQICBAgQILCdQHf4FXq3E7N/GAHBdxglxxAgUGiBEH5DA97Dt9DLqHgCBAgQqJBADL/tlm+4vblCC69VAgQIECBAgAABAgQIVEmg/R/XjSr1q1cCBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECuxPIsizZ3Rk8mwABAvkTSPNXkooIECBAgAABAgRmIdAOvel/V1a+c/fVlaOzmN+cBAgQmJSA/9GblKzzEiBAgAABAgQKJPBp6F3ONmuLoexmK1k98PKpKwVqQakECBDoKyD49qWxgwABAgQIECBQDYHu0Bu7Fn6jhJEAgaILuNW56CuofgIECBAgQIDALgT6hd5wynqaPXl3xW3Pu+D1VAIEciLgim9OFkIZBAgQIECAAIFpCwwKvZ21NPe0b3s+5bbnThOPCRAoloArvsVaL9USIECAAAECBMYm8MkbbzwX/6Z30EnrD7In7585tzToGPsIECCQZwHBN8+rozYCBAgQIECAwAQFsvvpx82slW03RZYk63MH997a7jj7CRAgkFcBtzrndWXURYAAAQIECBCYgsDaK7861EofLNeTtOfvhSH0Lhzc/05y8uTaFMoxBQECBCYi0PMH3ERmclICBAgQIECAAIFcCvQLv0JvLpdLUQQI7EBA8N0BmqcQIECAAAECBMom0B1+hd6yrbB+CFRbQPCt9vrrngABAgQIECCwJRDDb5rWN9zevMXiAQECBAgQIECAAAECBAiUSWDt7NnF7M0395WpJ70QIEDgf01Qh63gZYluAAAAAElFTkSuQmCC" class="banner-stars">
                        <div>
                            <el-row type="flex" class="row-bg" justify="start" style="text-align:left">
                                <el-col :span="8" :offset="6" id="greeting-text">
                                    <h2 style="margin-bottom: 0">Hi there, my name is Youngmin!</h2>
                                </el-col>
                            </el-row>
                            <el-row type="flex" class="row-bg" justify="start" style="text-align:left">
                                <el-col :span="8" :offset="6" id="greeting-text">
                                    <p style="font-size:20px">Let's work together on <transition name="slide-fade" mode="out-in"> <span :key="something">{{ something }}</span></transition></p>
                                </el-col>
                            </el-row>
                        </div>
                    </div>>
                </div>
            </el-main>
        </el-container>
    </div>
</template>

<script>
export default {
  name: "Header",
  props: {
    msg: String
  },
  mounted: function() {
    let that = this;
    setInterval(function() {
      let things = ["something", "somepony"]
      that.something = things[Math.floor(Math.random() * things.length)]
    }, 1111);
  },
  components: {},
  methods: {
    handleSelect(key, keyPath) {
      console.log(key, keyPath);
    }
  },
  data: function() {
    return {
      something: "somepony",
      activeIndex: "1",
      activeIndex2: "1"
    };
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style global>
@font-face {
  font-family: "DISKOPIA2.0 Black";
  src: url(../assets/DISKOPIA2_0.woff);
}

.slide-fade-enter-active {
  transition: all .3s ease;
}
.slide-fade-leave-active {
  transition: all .8s cubic-bezier(1.0, 0.5, 0.8, 1.0);
}
.slide-fade-enter, .slide-fade-leave-to
/* .slide-fade-leave-active for <2.1.8 */ {
  transform: translateX(10px);
  opacity: 0;
}
body {
  margin: 0px;
}
</style>
<style scoped>
div {
  display: block;
}

h2 {
  font-size: 50px;
}

.el-header,
.el-footer {
  color: #333;
  z-index: 1;
  text-align: center;
  line-height: 60px;
  border-radius: 10px;
}

/* .el-aside {
    background-color: #D3DCE6;
    color: #333;
    text-align: center;
    line-height: 200px;
  } */

/* #logo {
        background-image: url("../assets/logo.png");
        background-repeat: no-repeat;
        /* float: right; 
        display: inline-block;
        background-size: 150px;
        /* border-bottom: 2px solid white;
    } */

.el-header {
  /*border-bottom: 2px solid white;*/
}

.el-menu {
  padding-left: 30px;
  margin-top: 0px;
  border: none;
  font-family: "DISKOPIA2.0 Black";
  font-size: 1.5rem;
}

.el-menu-item {
  font-size: 1rem;
}

.el-container {
  -webkit-box-direction: normal;
  min-width: 200px;
  width: auto !important;
}

.el-col {
  border-radius: 4px;
}

.bg-trans {
  background: #fff0;
}

.grid-content {
  border-radius: 4px;
  min-height: 60px;
}

.menu {
  margin: auto auto;
}

#logo {
  width: 125px;
  float: left;
}

#logoText {
  font-family: "DISKOPIA2.0 Black";
  font-size: 2rem;
  display: inline-block;
  float: left;
  margin-top: 0px;
  padding-left: 10px;
  color: #d1c4e9;
  padding-right: 10px;
}

.main-cnt {
  margin-top: -80px;
  padding: 80px 0 120px;
  box-sizing: border-box;
  min-height: 100%;
  overflow-x: hidden;
}

.banner {
  position: relative;
  height: 420px;
  color: #fff;
  margin-bottom: 130px;
  width: 100%;
}

.banner-sky {
  z-index: 0;
  position: absolute;
  width: 100%;
  top: -150px;
  bottom: -15px;
  margin-top: -140px;
  transform: skewY(-5deg);
  transform-origin: center;
  background-image: linear-gradient(180deg, #0d1a44 13%, #3c4f91 56%, #5fc1e4);
}

.banner img {
  position: absolute;
  top: 15px;
  right: -10px;
}

.banner-stars {
  top: -10px;
  left: 50%;
  transform: translateX(-50%);
}

.actor {
  position: relative;
  min-height: 65px;
  font-size: 30px;
}

.actor:after {
  content: "";
  width: 6px;
  height: 50px;
  vertical-align: -8px;
  margin-left: 5px;
  background-color: #fff;
  display: inline-block;
  animation: blink 0.4s infinite alternate;
}

/* @media(max-width:1140px) .banner img {
        right: 0;
    } */

@media (max-width: 50em) {
  img {
    display: none;
  }
}

.text-color {
  color: white;
}
</style>