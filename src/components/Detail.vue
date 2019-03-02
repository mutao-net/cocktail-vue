<template>
  <el-row>
    <el-col :span="8" v-for="(drink, index) in list.drinks">
      <el-card :body-style="{ padding: '0px' }">
        <img :src="drink.strDrinkThumb" class="image">
        <div style="padding: 14px;">
          <div class="link">{{ drink.strDrink }}</div>
          <div class="clearfix" style="padding-top: 25px;">
            <div v-for="strIngredient in strIngredients">
              {{ strIngredient }}
            </div>
          </div>
        </div>
      </el-card>
    </el-col>
  </el-row>
</template>

<style>
.time {
  font-size: 13px;
  color: #999;
}

.bottom {
  margin-top: 13px;
  line-height: 12px;
  font-size: 15px;
}

.button {
  padding: 0;
  color: rgb(42, 41, 41);
}

.image {
  width: 100%;
  display: block;
}

.clearfix:before,
.clearfix:after {
  display: table;
  content: "";
}

.clearfix:after {
  clear: both
}

.link {
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
  color: rgb(42, 41, 41);
}

.el-row {
  display: flex;
  justify-content: center
}
</style>

<script>
import axios from 'axios'
import Router from 'vue-router'
export default {
  data() {
    return {
      list: [],
      strIngredients: []
    }
  },
  created(){
    axios
      .get('https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i=' + this.$route.params.id)
      .then(response => {this.list = response.data})
  },
  watch: {
    list: function () {
      for(var i = 1; i <= 15; i++){
        var str = 'strIngredient' + i
        if (this.list.drinks[0][str] !== ""){
          this.strIngredients.push(this.list.drinks[0][str])
        }
      }
    }
  }
}

</script>
