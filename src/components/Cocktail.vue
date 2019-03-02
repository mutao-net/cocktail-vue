<template>
  <el-row>
    <el-col :span="6" v-for="(drink, index) in list.drinks">
      <el-card :body-style="{ padding: '0px' }">
        <img :src="drink.strDrinkThumb" class="image">
        <div style="padding: 14px;">
          <div class="link">{{ drink.strDrink }}</div>
          <div class="bottom clearfix">
            <a v-bind:href="'/detail/' + drink.idDrink"><el-button type="text" class="button">Detail</el-button></a>
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
</style>

<script>
import axios from 'axios'
export default {
  data() {
    return {
      list: []
    }
  },
  created(){
    axios
      .get('https://www.thecocktaildb.com/api/json/v1/1/filter.php?c=Cocktail')
      .then(response => {this.list = response.data})
  }
}
</script>
