<template>
  <div>
    <h1 class="header-font">Projects on Github</h1>
    <div v-for="repo in repos" v-bind:key="repo.id">
      <el-card style="background: rgba(255, 255, 255, .4)">
        <div style="padding: 14px;">
          <span style="color: #000; font-weight: bold"><img src="../assets/github.png" width="16" height="16"> {{ repo.name }}</span>
          <div v-if="repo.description"><br>
            <small>{{ repo.description }}</small>
          </div>
          <div class="bottom clearfix">
            <span class="notation-right">{{ repo.language }}</span>
          </div>
        </div>
      </el-card><br>
    </div>
  </div>
</template>

<script>
export default {
  name: "GithubRepoCards",
  props: {
    msg: String
  },
  mounted: function() {
    this.getRepos();
  },
  components: {},
  methods: {
    getRepos: function() {
      let t = this;
      fetch(`https://api.github.com/users/${this.ghUsername}/repos`)
        .then(function(response) {
          return response.json();
        })
        .then(function(d) {
          t.repos = d;
          t.repos.sort(
            (a, b) => a.updated_at - b.updated_at
          );
        })
        .catch(function(e) {
          console.log(e);
        });
    }
  },
  data: function() {
    return {
      repos: {},
      ghUsername: "foxbytestail"
    };
  }
};
</script>
<style scoped>
.notation-right {
  float: right;
  display: block;
  color: #666;
}
</style>

<style global>
@font-face {
  font-family: "DISKOPIA2.0 Black";
  src: url(../assets/DISKOPIA2_0.woff);
}
</style>