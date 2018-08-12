<template>
  <div>
    <h1 class="header-font">Work and academic experience</h1>
    <el-container class="timeline-bg ctr">
      <timeline class="timeline-content" timeline-theme="lightblue">
        <timeline-title>{{ new Date().toLocaleString().split(',')[0] }}</timeline-title>
        <timeline-item bg-color="#9dd8e0">Maybe your company!</timeline-item>
        <timeline-title>2018</timeline-title>
        <timeline-item bg-color="#9dd8e0">It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less</timeline-item>
        <timeline-item bg-color="#9dd8e0">It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less</timeline-item>
        <timeline-title bg-color="#f2d7e1">2017</timeline-title>
        <timeline-item>
          <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p>
          <p class="append">A tool to create a lovely resume just with a config file.</p>
        </timeline-item>
        <timeline-item line-color="#a6ade4">
          <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.

          </p>
          <p class="append">A cute emoticon and emoji keyboard which can generate random emoticon or emoji and no xss.</p>
        </timeline-item>
      </timeline>
    </el-container>
  </div>
</template>


<script>
import { Timeline, TimelineItem, TimelineTitle } from "vue-cute-timeline";

export default {
  name: "Experience",
  props: {
    msg: String
  },
  mounted: function() {},
  components: {
    Timeline,
    TimelineItem,
    TimelineTitle
  },
  methods: {},
  data: function() {
    return {};
  }
};
</script>
<style global>
.timeline-bg {
  background: rgba(255, 255, 255, 0.2);
  padding: 5%;
  border-radius: 10px;
}
.timeline-content {
  text-align: left;
  margin: auto auto;
}
</style>