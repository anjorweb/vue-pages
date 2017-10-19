<template>
  <div class="page_editor">
    显示页
  </div>
</template>

<script>
  export default {
      name: 'show',
      data () {
        return {
            lightValue:'1',
            AmbientLightDefaultValue:50,
            AmbientLightDefaultPos:180
        }
      },
      methods: {
          AmbientLightHideFormat (value) {
              return null;
          }
      },
      created:function () {

      },
  }
</script>
<style lang="less">
  html, body { height:100%;}
</style>
