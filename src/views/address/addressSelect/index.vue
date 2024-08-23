<template>
  <div >
      <!-- <el-form :inline="true" :model="listQuery" class="demo-form-inline">
          <el-form-item label="地名">
              <el-input v-model="listQuery.filter" placeholder="资源名称"></el-input>
          </el-form-item>
          <el-form-item>
              <el-button class="filter-item" type="primary" icon="el-icon-search">
                  搜索
              </el-button>
          </el-form-item>
      </el-form> -->
      <div class="amap-page-container">
          <el-amap :zoom="zoom" :center="center" class="amap-demo">
              <el-amap-marker :position="componentMarker.position" :visible="componentMarker.visible"
                  :draggable="componentMarker.draggable" @init="markerInit" @click="clickMarker">
                  <div style="padding: 5px 10px;white-space: nowrap;background: blue;color: #fff;">{{
                      componentMarker.text }}</div>
              </el-amap-marker>
              <el-amap-marker v-for="(marker, index) in markers" :key="index" :position="marker.position"
                  @click="(e) => { clickArrayMarker(marker, e) }"></el-amap-marker>
          </el-amap>
      </div>
  </div>
</template>


<script>
module.exports = {
  name: 'amap-page',
  data() {
      return {
          listQuery: {},
          zoom: 14,
          center: [121.5273285, 31.21515044],
          markers: [
              {
                  position: [121.5273285, 31.21515044],
                  id: 1
              },
              {
                  position: [131.5273285, 31.21515044],
                  id:2
              },
              {
                  position: [121.5263285, 31.31515044],
                  id: 3
              },
              {
                  position: [121.5273285, 31.31515044],
                  id: 4
              },
          ],
          componentMarker: {
              position: [121.5273285, 31.21315058],
              visible: true,
              draggable: false,
              text: '当前位置'
          },
      };
  },
  methods: {
      changePosition() {
          let position = this.componentMarker.position;
          this.componentMarker.position = [position[0] + 0.002, position[1] - 0.002];
      },
      changeDraggable() {
          this.componentMarker.draggable = !this.componentMarker.draggable;
      },
      changeText() {
          this.componentMarker.text = new Date().toLocaleString();
      },
      toggleVisible() {
          this.componentMarker.visible = !this.componentMarker.visible;
      },
      addMarker() {
          let marker = {
              position: [121.5273285 + (Math.random() - 0.5) * 0.02, 31.21515044 + (Math.random() - 0.5) * 0.02],
              id: new Date().getTime()
          };
          this.markers.push(marker);
      },
      removeMarker() {
          if (!this.markers.length) return;
          this.markers.splice(this.markers.length - 1, 1);
      },
      markerInit(e) {
          console.log('marker init: ', e);
      },
      clickMarker() {
          alert('点击了标号')
      },
      clickArrayMarker(marker) {
          alert('点击了标号,标号ID： ' + marker.id)
      }
  }
};
</script>
<style>
.amap-demo {
  height: 85vh;
}
</style>