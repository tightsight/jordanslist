var CHOCOLATE_BRANDS = {
   ALTER_ECO : "Alter Eco",
   TRADER_JOES : "Trader Joe's",
   EEC : "Equal Exchange Chocolates",
   CHOCOLOVE : "Chocolove",
   SB : "Scharffen Berger",
   ASEDA : "Aseda",
   LINDT : "Lindt",
   GAB : "Green & Black's",
}

var ORDER_OPTIONS = {
   DATE : "Date Added",
   HIGH_SCORE : "High Score",
   LOW_SCORE : "Low Score",
   CACAO : "Cacao %"
}

var ETHICAL_OPTIONS = {
   ORGANIC : "Organic",
   FAIR_TRADE : "Fair Trade",
   RAINFOREST : "Rainforest Alliance",
}

var APP_NAME = "Jordans List";

var BARS = [
			{
				name : "Dark Blackout",
				brand : "Alter Eco",
				officialLink : "http://www.alterecofoods.com/product/dark-blackout/",
				image : "./img/db_ae.jpg",
				organic : true,
				fairTrade : true,
				chocolatePercentage : 85,
				stores : ["whole foods"],
            notes : "Bittersweet with fruity notes.  Rich texture.",
				rating : 9
			},
			{
				name : "The Dark Chocolate Lovers Chocolate Bar",
				brand : CHOCOLATE_BRANDS.TRADER_JOES,
				officialLink : "https://www.traderjoes.com/fearless-flyer/article/1749",
				image : "./img/dcl_tj.jpg",
				organic : false,
				fairTrade : false,
				chocolatePercentage : 85,
				stores : ["trader joes"],
            notes : "Bittersweet with a very fruity taste.  Packaging nice as well.",
				rating : 9
			},
			{
				name : "Panama Extra Dark",
				brand : "Equal Exchange Chocolates",
				officialLink : "http://shop.equalexchange.coop/chocolate/chocolate-bars/organic-extra-dark-chocolate-panama.html",
				image : "./img/ped_eec.jpg",
				organic : true,
				fairTrade : true,
				chocolatePercentage : 80,
				stores : ["whole foods"],
            notes : "Very dry, tasted a lot like baking chocolate.",
				rating : 3
			},
         {
            name : "Extra Strong",
            brand : "Chocolove",
            officialLink : "https://www.chocolove.com/chocolate/extra-strong-dark-chocolate-77-cocoa.html",
            image : "./img/es_chocolove.jpg",
            organic : false,
            fairTrade : false,
            chocolatePercentage : 77,
            stores : ["whole foods"],
            notes : "Smooth, and not at all bitter.  Slight burnt aftertaste, but overall very nice.",
            rating : 8
         },
         {
            name : "Extra Dark",
            brand : "Scharffen Berger",
            officialLink : "http://shop.scharffenberger.com/82-Extra-Dark-Chocolate-Bar/p/SFB-CBDARK&c=ScharffenBerger@Chocolate@Dark",
            image : "./img/ed_sb.jpg",
            organic : false,
            fairTrade : false,
            chocolatePercentage : 82,
            stores : ["whole foods"],
            notes : "Some richness, but not many strong flavors, and a little too sweet.",
            // A little too sweet for my taste.
            rating : 5
         },
         {
            name : "Fine Chocolate",
            brand : "Aseda",
            officialLink : "https://asedarawhoney.com/product/aseda-fine-chocolate/",
            image : "./img/fc_aseda.jpg",
            organic : false,
            fairTrade : false,
            chocolatePercentage : 80,
            stores : ["Food of All Nations"],
            notes : "The honey gives it a cloying sweetness that wont go away. Hard to imagine how this got to the shelves.",
            rating : 1
         },
         {
            name : "Dark Chocolate",
            brand : CHOCOLATE_BRANDS.LINDT,
            officialLink : "https://explore.lindtusa.com/excellence/",
            image : "./img/78_lindt.jpg",
            organic : false,
            fairTrade : false,
            chocolatePercentage : 78,
            stores : ["Lindt Store"],
            notes : "Smooth, not very bitter at all, a little too sweet, but not as many flavors either.",
            rating : 7
         },
         // {
         //    name : "Extra Dark",
         //    company : CHOCOLATE_BRANDS.LINDT,
         //    officialLink : "https://explore.lindtusa.com/excellence/",
         //    image : "./img/fc_aseda.jpg",
         //    organic : false,
         //    fairTrade : false,
         //    chocolatePercentage : 85,
         //    stores : ["Lindt Store"],
         //    notes : "Not many fruity notes, but very rich and even creamy.  Good level of bitterness",
         //    rating : 9
         // },
         // {
         //    name : "Dark Chocolate",
         //    company : CHOCOLATE_BRANDS.GAB,
         //    officialLink : "https://asedarawhoney.com/product/aseda-fine-chocolate/",
         //    image : "./img/fc_aseda.jpg",
         //    organic : true,
         //    fairTrade : true,
         //    chocolatePercentage : 70,
         //    notes : "A slight cloying sweetness at first, but finishes with a balanced and robust cacao taste.  Wanted to like it more, but the first bite is annoying.",
         //    rating : 7
         // }
		]