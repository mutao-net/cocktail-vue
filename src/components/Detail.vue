<template>
  <el-row style="display: flex; justify-content: center;">
    <el-col :span="8" v-for="(drink, index) in item.drinks">
      <el-card :body-style="{ padding: '0px' }">
        <img :src="drink.strDrinkThumb" class="image">
        <div style="padding: 14px;">
          <div class="name"><b>{{ drink.strDrink }}</b></div>
          <div class="clearfix" style="padding-top: 25px;">
            <ul class="recipe">
              <div v-for="(strIngredient, index) in strIngredients">
                  <li>{{ strIngredient }}</li>
                  <li>{{ strMeasure[index] }}</li>
              </div>
            </ul>
            <a @click="$router.go(-1)"><el-button type="text" class="button">Back</el-button></a>
          </div>
          </div>
        </div>
      </el-card>
    </el-col>
  </el-row>
</template>

<style>
.name {
  text-shadow: 1px 1px 0 rgba(0,0,0,.2);
}

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

.recipe:after {
  content: "";
  clear: both;
  display: block;
}

.recipe li{
  float: left;
  display: block;
  list-style-type: none;
  text-align: center;
  width: 50%;
}

</style>

<script>
import axios from 'axios'
import Router from 'vue-router'
export default {
  data() {
    return {
      item: [],
      strIngredients: [],
      strMeasure: []
    }
  },
  created(){
    axios
      .get('https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i=' + this.$route.params.id)
      .then(response => {this.item = response.data})
  },
  watch: {
    item: function () {
      for(var i = 1; i <= 15; i++){
        var str = 'strIngredient' + i
        var strMea = 'strMeasure' + i
        if (this.item.drinks[0][str] !== ""){
          this.strIngredients.push(this.item.drinks[0][str])
        }
        if (this.item.drinks[0][strMea] != ""){
          this.strMeasure.push(this.item.drinks[0][strMea])
        }
      }
    }
  }
}

</script>
