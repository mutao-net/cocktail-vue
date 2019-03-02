<template>
  <div class="upload">
    <el-upload
      class="upload-file"
      action=""
      :auto-upload="false"
      :on-preview="handlePreview"
      :on-remove="handleRemove"
      :on-change="handleAdd"
      :before-remove="beforeRemove"
      multiple
      :limit="3"
      :on-exceed="handleExceed"
      :file-list="fileList">
      <el-button size="small" type="primary">Click to upload<i class="el-icon-upload el-icon-right"></i></el-button>
    </el-upload>
  </div>
</template>
<script>
  export default {
    data () {
      return {
        fileList: []
      }
    },
    methods: {
      handleRemove (file, fileList) {
        this.fileList = fileList
      },
      // added
      handleAdd (file, fileList) {
        this.fileList = fileList
      },
      // click event?
      handlePreview (file) {
        this.targetFile = file
      },
      handleExceed (files, fileList) {
        this.$message.warning(`The limit is 3, you selected ${files.length} files this time, add up to ${files.length + fileList.length} totally`)
      },
      beforeRemove (file, fileList) {
        return this.$confirm(`remove ${file.name} ?`)
      }
    }
  }
</script>

<style scoped lang="scss">
.upload {
  width: 100%;
  height: 150%;
}
.upload-file {
  width: 100%;
}

</style>