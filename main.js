

/* Components */

Vue.component('bar-card', {
 	template : "#barcard",
 	props : ['bar'],
 });

Vue.component('mainList', {
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
});

Vue.component('about', {
   template : "#about"
})

var routes = [
   { path : '/', component : mainList},
   { path : '/about', component : about}
]

var router = new VueRouter({
   routes : routes
})

new Vue({ 
	el: '#app',
   router : router,
   // methods : {
   //    showBar : function(bar){

   //       if(this.selectedEthical.indexOf(ETHICAL_OPTIONS.ORGANIC) != -1 && !bar.organic) return false;
   //       if(this.selectedEthical.indexOf(ETHICAL_OPTIONS.FAIR_TRADE) != -1 && !bar.fairTrade) return false;


   //       // if(this.organic && !bar.organic) return false;
   //       // if(this.fairTrade && !bar.fairTrade) return false;
   //       if(this.selectedBrand != "" && bar.brand != this.selectedBrand) return false;

   //       return true;
   //    },
   //    clearFilter : function(){
   //       this.selectedBrand = "";
   //       this.selectedEthical = [];
   //       // this.organic = false;
   //       // this.fairTrade = false;
   //    }
   // },
   // computed : {
   //    barsSorted : function(){
   //       if(this.orderBy == ORDER_OPTIONS.DATE) {
   //          return this.bars;
   //       }
   //       else if (this.orderBy == ORDER_OPTIONS.HIGH_SCORE || this.orderBy == ORDER_OPTIONS.LOW_SCORE){
   //          return this.bars.slice().sort(function(bar1, bar2){
   //             if(this.orderBy == ORDER_OPTIONS.HIGH_SCORE) return bar1.rating > bar2.rating;
   //             return bar1.rating < bar2.rating;
   //          });
   //       }
   //       else if (this.orderBy == ORDER_OPTIONS.CACAO){
   //          return this.bars.slice().sort(function(bar1, bar2){
   //             return bar1.chocolatePercentage < bar2.chocolatePercentage;
   //          });
   //       }
   //    }
   // },
	data : {
      // Can just use Object.values() once I upgrade chrome
      // brands : Object.keys(CHOCOLATE_BRANDS).map(function(key){
      //    return CHOCOLATE_BRANDS[key];
      // }),
      // orderOptions : [ORDER_OPTIONS.DATE, ORDER_OPTIONS.HIGH_SCORE, ORDER_OPTIONS.LOW_SCORE, ORDER_OPTIONS.CACAO],
      // orderBy : ORDER_OPTIONS.DATE,
      // selectedBrand : "",
      // selectedEthical : [],
      // ethicalOptions : [ETHICAL_OPTIONS.ORGANIC, ETHICAL_OPTIONS.FAIR_TRADE, ETHICAL_OPTIONS.RAINFOREST],
      // organic : false,
      // fairTrade : false,
		// bars : [
		// 	{
		// 		name : "Dark Blackout",
		// 		brand : "Alter Eco",
		// 		officialLink : "http://www.alterecofoods.com/product/dark-blackout/",
		// 		image : "./img/db_ae.jpg",
		// 		organic : true,
		// 		fairTrade : true,
		// 		chocolatePercentage : 85,
		// 		stores : ["whole foods"],
  //           notes : "Bittersweet with fruity notes.  Rich texture.",
		// 		rating : 9
		// 	},
		// 	{
		// 		name : "The Dark Chocolate Lovers Chocolate Bar",
		// 		brand : CHOCOLATE_BRANDS.TRADER_JOES,
		// 		officialLink : "https://www.traderjoes.com/fearless-flyer/article/1749",
		// 		image : "./img/dcl_tj.jpg",
		// 		organic : false,
		// 		fairTrade : false,
		// 		chocolatePercentage : 85,
		// 		stores : ["trader joes"],
  //           notes : "Bittersweet with a very fruity taste.  Packaging nice as well.",
		// 		rating : 9
		// 	},
		// 	{
		// 		name : "Panama Extra Dark",
		// 		brand : "Equal Exchange Chocolates",
		// 		officialLink : "http://shop.equalexchange.coop/chocolate/chocolate-bars/organic-extra-dark-chocolate-panama.html",
		// 		image : "./img/ped_eec.jpg",
		// 		organic : true,
		// 		fairTrade : true,
		// 		chocolatePercentage : 80,
		// 		stores : ["whole foods"],
  //           notes : "Very dry, tasted a lot like baking chocolate.",
		// 		rating : 3
		// 	},
  //        {
  //           name : "Extra Strong",
  //           brand : "Chocolove",
  //           officialLink : "https://www.chocolove.com/chocolate/extra-strong-dark-chocolate-77-cocoa.html",
  //           image : "./img/es_chocolove.jpg",
  //           organic : false,
  //           fairTrade : false,
  //           chocolatePercentage : 77,
  //           stores : ["whole foods"],
  //           notes : "Smooth, and not at all bitter.  Slight burnt aftertaste, but overall very nice.",
  //           rating : 8
  //        },
  //        {
  //           name : "Extra Dark",
  //           brand : "Scharffen Berger",
  //           officialLink : "http://shop.scharffenberger.com/82-Extra-Dark-Chocolate-Bar/p/SFB-CBDARK&c=ScharffenBerger@Chocolate@Dark",
  //           image : "./img/ed_sb.jpg",
  //           organic : false,
  //           fairTrade : false,
  //           chocolatePercentage : 82,
  //           stores : ["whole foods"],
  //           notes : "Some richness, but not many strong flavors, and a little too sweet.",
  //           // A little too sweet for my taste.
  //           rating : 5
  //        },
  //        {
  //           name : "Fine Chocolate",
  //           brand : "Aseda",
  //           officialLink : "https://asedarawhoney.com/product/aseda-fine-chocolate/",
  //           image : "./img/fc_aseda.jpg",
  //           organic : false,
  //           fairTrade : false,
  //           chocolatePercentage : 80,
  //           stores : ["Food of All Nations"],
  //           notes : "The honey gives it a cloying sweetness that wont go away. Hard to imagine how this got to the shelves.",
  //           rating : 1
  //        },
  //        // {
  //        //    name : "Extra Dark",
  //        //    company : CHOCOLATE_BRANDS.LINDT,
  //        //    officialLink : "https://asedarawhoney.com/product/aseda-fine-chocolate/",
  //        //    image : "./img/fc_aseda.jpg",
  //        //    organic : false,
  //        //    fairTrade : false,
  //        //    chocolatePercentage : 85,
  //        //    stores : ["Lindt Store"],
  //        //    notes : "Not many fruity notes, but very rich and even creamy.  Good level of bitterness",
  //        //    rating : 9
  //        // }
		// ]
	}

})