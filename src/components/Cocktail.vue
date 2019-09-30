<template>
  <el-row>
    <el-input placeholder="Please input" v-model="keywords" class="input-with-select" style="padding-bottom: 20px;width: 80%;">
      <el-select v-model="select" slot="prepend" placeholder="Select">
        <el-option label="Name" value="1"></el-option>
        <el-option label="Ingredient" value="2"></el-option>
        <el-option label="Category" value="3"></el-option>
      </el-select>
      <el-button v-on:click="search()" slot="append" icon="el-icon-search"></el-button>
    </el-input>
    <el-col :span="6" v-for="(drink, index) in list.drinks" :key="index">
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
.el-input-group__prepend {
  width: 15%;
}
</style>

<script>
import axios from 'axios'

function search(){
  switch(this.select){
    // Name
    case "1":
      axios
        .get('https://www.thecocktaildb.com/api/json/v1/1/search.php?s=' + this.keywords)
        .then(response => {this.list = response.data})
      break
    case "2":
    // Ingredient
      axios
        .get('https://www.thecocktaildb.com/api/json/v1/1/filter.php?i=' + this.keywords)
        .then(response => {this.list = response.data})
        break
    // Category
    case "3":
      axios
        .get('https://www.thecocktaildb.com/api/json/v1/1/filter.php?c=' + this.keywords)
        .then(response => {this.list = response.data})
      break
    default:
      break
  }
}

export default {
  data(){
    return {
      list: [],
      select: '',
      keywords:''
    }
  },
  methods: {
    search: search
  },
  created(){
    if(!this.list.length) {
      axios
        .get('https://www.thecocktaildb.com/api/json/v1/1/filter.php?c=Cocktail')
        .then(response => {this.list = response.data})
    }
  }
}
</script>
