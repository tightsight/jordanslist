

/* Components */

Vue.component('bar-card', {
 	template : "#barcard",
 	props : ['bar'],
 });

var mainList = {
   template : '#mainList',
   // props : ['CHOCOLATE_BRANDS', 'ORDER_OPTIONS', 'ETHICAL_OPTIONS', 'BARS'],
   methods : {
      showBar : function(bar){

         if(this.selectedEthical.indexOf(ETHICAL_OPTIONS.ORGANIC) != -1 && !bar.organic) return false;
         if(this.selectedEthical.indexOf(ETHICAL_OPTIONS.FAIR_TRADE) != -1 && !bar.fairTrade) return false;


         // if(this.organic && !bar.organic) return false;
         // if(this.fairTrade && !bar.fairTrade) return false;
         if(this.selectedBrand != "" && bar.brand != this.selectedBrand) return false;

         return true;
      },
      clearFilter : function(){
         this.selectedBrand = "";
         this.selectedEthical = [];
         // this.organic = false;
         // this.fairTrade = false;
      }
   },
   computed : {
      barsSorted : function(){
         if(this.orderBy == ORDER_OPTIONS.DATE) {
            return BARS;
         }
         else if (this.orderBy == ORDER_OPTIONS.HIGH_SCORE || this.orderBy == ORDER_OPTIONS.LOW_SCORE){
            return BARS.slice().sort(function(bar1, bar2){
               if(this.orderBy == ORDER_OPTIONS.HIGH_SCORE) return bar1.rating > bar2.rating;
               return bar1.rating < bar2.rating;
            });
         }
         else if (this.orderBy == ORDER_OPTIONS.CACAO){
            return BARS.slice().sort(function(bar1, bar2){
               return bar1.chocolatePercentage < bar2.chocolatePercentage;
            });
         }
      }
   },
   data : function(){
      return {
         brands : Object.keys(CHOCOLATE_BRANDS).map(function(key){
            return CHOCOLATE_BRANDS[key];
         }),
         orderOptions : [ORDER_OPTIONS.DATE, ORDER_OPTIONS.HIGH_SCORE, ORDER_OPTIONS.LOW_SCORE, ORDER_OPTIONS.CACAO],
         orderBy : ORDER_OPTIONS.DATE,
         selectedBrand : "",
         selectedEthical : [],
         ethicalOptions : [ETHICAL_OPTIONS.ORGANIC, ETHICAL_OPTIONS.FAIR_TRADE, ETHICAL_OPTIONS.RAINFOREST],
         organic : false,
         fairTrade : false,
      }
   }
}

var about = {
   template : "#about",
   data : function() {
      return {
        app_name : APP_NAME
      }
   }
}

var about_dc = {
   template : "#about-dc",
   data : function() {
      return {
        app_name : APP_NAME
      }
   }
}

var routes = [
   { path : '/', component : mainList},
   { path : '/about', component : about},
   { path : '/dark-chocolate', component : about_dc}
]

var router = new VueRouter({
   routes : routes
})

new Vue({ 
	el: '#app',
  router : router,
})