<template>
  <div class="page_editor">
    编辑页
  </div>
</template>

<script>
  export default {
      name: 'editor',
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
  .page_editor {
    width:100%; height:100%; position: relative;
    .top_bar {
      height:70px; background-color:#ffffff;
      .right { float:right; margin-top:20px; padding-right:15px; }
      button { margin:0 5px; }
    }
    h1 { color:#000000; line-height: 70px; padding-left:20px; }
    .editor_box { position: absolute; left:0; right:370px; top:70px; bottom:0; background: #cccccc;}
    .editor_config { position: absolute; width:370px; right:0; top:70px; bottom:0; background: #ffffff; }
    #threeCanvas { width:100%; height:100%; position: relative; }
    .slider_box {
      position: relative;
      .slider { padding-right:70px; height:40px; }
      .slider_value {
        position: absolute; right:0; top:19px; line-height: 30px;
        p { border:1px solid #cccccc; width:50px; border-radius:5px; text-align: center; }
      }
    }
  }
</style>
