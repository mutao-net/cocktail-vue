
<template>
      <el-table :data="location" style="width: 100%">
        <el-table-column prop="id" label="id" width="100"></el-table-column>
        <el-table-column prop="name" label="name"></el-table-column>
        <el-table-column prop="country" label="country" width="180"></el-table-column>
        <el-table-column prop="metro" label="metro" width="180"></el-table-column>
        <el-table-column prop="market" label="market" width="180"></el-table-column>
        <el-table-column prop="status" label="status" width="180"></el-table-column>
      </el-table>
</template>

<script>
  export default {
    data() {
      return {
        location: [
            {id: 1, name: 'Site1', country: 'USA', metro: 'San Jose', market: 'US', status: 'Active'},
            {id: 2, name: 'Site2', country: 'USA', metro: 'San Mateo', market: 'US', status: 'Active'},
            {id: 3, name: 'Site3', country: 'USA', metro: 'San Rafael', market: 'US', status: 'Active'}
            ]
        }
    },
    methods: {
      submitForm(formName) {
        this.$refs[formName].validate((valid) => {
          if (valid) {
            alert('submit!');
          } else {
            console.log('error submit!!');
            return false;
          }
        });
      },
      resetForm(formName) {
        this.$refs[formName].resetFields();
      }
    }
  }
</script>