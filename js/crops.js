/*
 * All data gathered from:
 * 	Official Stardew Valley Wiki: http://stardewvalleywiki.com/Stardew_Valley_Wiki
 * 	Stardew Valley Crop Planner: http://exnil.github.io/crop_planner/
 */

// Crop List
var crops = {

	// Spring
	
	"coffeebean": {
		"name": "コーヒー豆", 
		"url": "http://stardewvalleywiki.com/Coffee_Bean",
		"img": "Coffee_Bean.png",
		"seeds": {
			"pierre": 0, 
			"joja": 0, 
			"special": 2500, 
			"specialLoc": "行商人", 
			"specialUrl": "http://stardewvalleywiki.com/Travelling_Cart"
		},
		"growth": {
			"initial": 10,
			"regrow": 2
		},
		"produce": {
			"extra": 3,
			"extraPerc": 1,
			"rawN": 15,
			"rawS": 18,
			"rawG": 22,
			"jar": 0,
			"keg": 30,
			"jarType": "",
			"kegType": "コーヒー"
		}
	},
	"strawberry": {
		"name": "イチゴ", 
		"url": "http://stardewvalleywiki.com/Strawberry",
		"img": "strawberry.png",
		"seeds": {
			"pierre": 0, 
			"joja": 0, 
			"special": 100, 
			"specialLoc": "エッグハント", 
			"specialUrl": "http://stardewvalleywiki.com/Egg_Festival"
		},
		"growth": {
			"initial": 8,
			"regrow": 4
		},
		"produce": {
			"extra": 0,
			"extraPerc": 0,
			"rawN": 120,
			"rawS": 150,
			"rawG": 180,
			"jar": 290,
			"keg": 360,
			"jarType": "ジャム",
			"kegType": "ワイン"
		}
	},
	"rhubarb": {
		"name": "ルバーブ", 
		"url": "http://stardewvalleywiki.com/Rhubarb",
		"img": "rhubarb.png",
		"seeds": {
			"pierre": 0, 
			"joja": 0, 
			"special": 100, 
			"specialLoc": "オアシス", 
			"specialUrl": "http://stardewvalleywiki.com/Oasis" 
		},
		"growth": {
			"initial": 13,
			"regrow": 0
		},
		"produce": {
			"extra": 0,
			"extraPerc": 0,
			"rawN": 220,
			"rawS": 275,
			"rawG": 330,
			"jar": 490,
			"keg": 660,
			"jarType": "ジャム",
			"kegType": "ワイン"
		}
	},
	"potato": {
		"name": "ジャガイモ", 
		"url": "http://stardewvalleywiki.com/Potato",
		"img": "potato.png",
		"seeds": {
			"pierre": 50, 
			"joja": 62, 
			"special": 0, 
			"specialLoc": "", 
			"specialUrl": "" 
		},
		"growth": {
			"initial": 6,
			"regrow": 0
		},
		"produce": {
			"extra": 1,
			"extraPerc": 0.25,
			"rawN": 80,
			"rawS": 100,
			"rawG": 120,
			"jar": 210,
			"keg": 180,
			"jarType": "ピクルス",
			"kegType": "ジュース"
		}
	},
	"cauliflower": {
		"name": "カリフラワー", 
		"url": "http://stardewvalleywiki.com/Cauliflower",
		"img": "cauliflower.png",
		"seeds": {
			"pierre": 80, 
			"joja": 100, 
			"special": 0, 
			"specialLoc": "", 
			"specialUrl": "" 
		},
		"growth": {
			"initial": 12,
			"regrow": 0
		},
		"produce": {
			"extra": 0,
			"extraPerc": 0,
			"rawN": 175,
			"rawS": 218,
			"rawG": 262,
			"jar": 400,
			"keg": 393,
			"jarType": "ピクルス",
			"kegType": "ジュース"
		}
	},
	"greenbean": {
		"name": "サヤエンドウ", 
		"url": "http://stardewvalleywiki.com/Green_Bean",
		"img": "greenbean.png",
		"seeds": {
			"pierre": 60, 
			"joja": 75, 
			"special": 0, 
			"specialLoc": "", 
			"specialUrl": "" 
		},
		"growth": {
			"initial": 10,
			"regrow": 3
		},
		"produce": {
			"extra": 0,
			"extraPerc": 0,
			"rawN": 40,
			"rawS": 50,
			"rawG": 60,
			"jar": 130,
			"keg": 90,
			"jarType": "ピクルス",
			"kegType": "ジュース"
		}
	},
	"kale": {
		"name": "ケール", 
		"url": "http://stardewvalleywiki.com/Kale",
		"img": "kale.png",
		"seeds": {
			"pierre": 70, 
			"joja": 87, 
			"special": 0, 
			"specialLoc": "", 
			"specialUrl": "" 
		},
		"growth": {
			"initial": 6,
			"regrow": 0
		},
		"produce": {
			"extra": 0,
			"extraPerc": 0,
			"rawN": 110,
			"rawS": 137,
			"rawG": 165,
			"jar": 270,
			"keg": 247,
			"jarType": "ピクルス",
			"kegType": "ジュース"
		}
	},
	"garlic": {
		"name": "ニンニク", 
		"url": "http://stardewvalleywiki.com/Garlic",
		"img": "garlic.png",
		"seeds": {
			"pierre": 40, 
			"joja": 0, 
			"special": 0, 
			"specialLoc": "", 
			"specialUrl": "" 
		},
		"growth": {
			"initial": 4,
			"regrow": 0
		},
		"produce": {
			"extra": 0,
			"extraPerc": 0,
			"rawN": 60,
			"rawS": 75,
			"rawG": 90,
			"jar": 170,
			"keg": 135,
			"jarType": "ピクルス",
			"kegType": "ジュース"
		}
	},
	"parsnip": {
		"name": "パースニップ", 
		"url": "http://stardewvalleywiki.com/Parsnip",
		"img": "parsnip.png",
		"seeds": {
			"pierre": 20, 
			"joja": 25, 
			"special": 0, 
			"specialLoc": "", 
			"specialUrl": "" 
		},
		"growth": {
			"initial": 4,
			"regrow": 0
		},
		"produce": {
			"extra": 0,
			"extraPerc": 0,
			"rawN": 35,
			"rawS": 43,
			"rawG": 52,
			"jar": 120,
			"keg": 78,
			"jarType": "ピクルス",
			"kegType": "ジュース"
		}
	},
	"bluejazz": {
		"name": "ブルージャズ", 
		"url": "http://stardewvalleywiki.com/Blue_Jazz",
		"img": "bluejazz.png",
		"seeds": {
			"pierre": 30, 
			"joja": 37, 
			"special": 0, 
			"specialLoc": "", 
			"specialUrl": "" 
		},
		"growth": {
			"initial": 7,
			"regrow": 0
		},
		"produce": {
			"extra": 0,
			"extraPerc": 0,
			"rawN": 50,
			"rawS": 62,
			"rawG": 75,
			"jar": 0,
			"keg": 0,
			"jarType": "",
			"kegType": ""
		}
	},
	"tulip": {
		"name": "チューリップ", 
		"url": "http://stardewvalleywiki.com/Tulip",
		"img": "tulip.png",
		"seeds": {
			"pierre": 20, 
			"joja": 30, 
			"special": 0, 
			"specialLoc": "", 
			"specialUrl": "" 
		},
		"growth": {
			"initial": 6,
			"regrow": 0
		},
		"produce": {
			"extra": 0,
			"extraPerc": 0,
			"rawN": 30,
			"rawS": 37,
			"rawG": 45,
			"jar": 0,
			"keg": 0,
			"jarType": "",
			"kegType": ""
		}
	},

	// Summer

	"blueberry": {
		"name": "ブルーベリー", 
		"url": "http://stardewvalleywiki.com/Blueberry",
		"img": "blueberry.png",
		"seeds": {
			"pierre": 80, 
			"joja": 0, 
			"special": 0, 
			"specialLoc": "", 
			"specialUrl": "" 
		},
		"growth": {
			"initial": 13,
			"regrow": 4
		},
		"produce": {
			"extra": 2,
			"extraPerc": 1,
			"rawN": 50,
			"rawS": 62,
			"rawG": 75,
			"jar": 150,
			"keg": 150,
			"jarType": "ジャム",
			"kegType": "ワイン"
		}
	},
	"starfruit": {
		"name": "スターフルーツ", 
		"url": "http://stardewvalleywiki.com/Starfruit",
		"img": "starfruit.png",
		"seeds": {
			"pierre": 0, 
			"joja": 0, 
			"special": 400, 
			"specialLoc": "オアシス", 
			"specialUrl": "http://stardewvalleywiki.com/Oasis" 
		},
		"growth": {
			"initial": 13,
			"regrow": 0
		},
		"produce": {
			"extra": 0,
			"extraPerc": 0,
			"rawN": 750,
			"rawS": 937,
			"rawG": 1125,
			"jar": 1550,
			"keg": 2250,
			"jarType": "ジャム",
			"kegType": "ワイン"
		}
	},
	"redcabbage": {
		"name": "赤キャベツ", 
		"url": "http://stardewvalleywiki.com/Red_Cabbage",
		"img": "redcabbage.png",
		"seeds": {
			"pierre": 100, 
			"joja": 0, 
			"special": 0, 
			"specialLoc": "", 
			"specialUrl": "" 
		},
		"growth": {
			"initial": 9,
			"regrow": 0
		},
		"produce": {
			"extra": 0,
			"extraPerc": 0,
			"rawN": 260,
			"rawS": 325,
			"rawG": 390,
			"jar": 570,
			"keg": 585,
			"jarType": "ピクルス",
			"kegType": "ジュース"
		}
	},
	"hops": {
		"name": "ホップ", 
		"url": "http://stardewvalleywiki.com/Hops",
		"img": "hops.png",
		"seeds": {
			"pierre": 60, 
			"joja": 75, 
			"special": 0, 
			"specialLoc": "", 
			"specialUrl": "" 
		},
		"growth": {
			"initial": 11,
			"regrow": 1
		},
		"produce": {
			"extra": 0,
			"extraPerc": 0,
			"rawN": 25,
			"rawS": 31,
			"rawG": 37,
			"jar": 100,
			"keg": 300,
			"jarType": "ピクルス",
			"kegType": "ペールエール"
		}
	},
	"melon": {
		"name": "メロン", 
		"url": "http://stardewvalleywiki.com/Melon",
		"img": "melon.png",
		"seeds": {
			"pierre": 80, 
			"joja": 100, 
			"special": 0, 
			"specialLoc": "", 
			"specialUrl": "" 
		},
		"growth": {
			"initial": 12,
			"regrow": 0
		},
		"produce": {
			"extra": 0,
			"extraPerc": 0,
			"rawN": 250,
			"rawS": 312,
			"rawG": 375,
			"jar": 550,
			"keg": 750,
			"jarType": "ジャム",
			"kegType": "ワイン"
		}
	},
	"hotpepper": {
		"name": "トウガラシ", 
		"url": "http://stardewvalleywiki.com/Hot_Pepper",
		"img": "hotpepper.png",
		"seeds": {
			"pierre": 40, 
			"joja": 50, 
			"special": 0, 
			"specialLoc": "", 
			"specialUrl": "" 
		},
		"growth": {
			"initial": 5,
			"regrow": 3
		},
		"produce": {
			"extra": 0,
			"extraPerc": 0,
			"rawN": 40,
			"rawS": 50,
			"rawG": 60,
			"jar": 130,
			"keg": 120,
			"jarType": "ジャム",
			"kegType": "ワイン"
		}
	},
	"tomato": {
		"name": "トマト", 
		"url": "http://stardewvalleywiki.com/Tomato",
		"img": "tomato.png",
		"seeds": {
			"pierre": 50, 
			"joja": 62, 
			"special": 0, 
			"specialLoc": "", 
			"specialUrl": "" 
		},
		"growth": {
			"initial": 11,
			"regrow": 4
		},
		"produce": {
			"extra": 0,
			"extraPerc": 0,
			"rawN": 60,
			"rawS": 75,
			"rawG": 90,
			"jar": 170,
			"keg": 135,
			"jarType": "ピクルス",
			"kegType": "ジュース"
		}
	},
	"radish": {
		"name": "ラディッシュ", 
		"url": "http://stardewvalleywiki.com/Radish",
		"img": "radish.png",
		"seeds": {
			"pierre": 40, 
			"joja": 50, 
			"special": 0, 
			"specialLoc": "", 
			"specialUrl": "" 
		},
		"growth": {
			"initial": 6,
			"regrow": 0
		},
		"produce": {
			"extra": 0,
			"extraPerc": 0,
			"rawN": 90,
			"rawS": 112,
			"rawG": 135,
			"jar": 230,
			"keg": 202,
			"jarType": "ピクルス",
			"kegType": "ジュース"
		}
	},
	"summerspangle": {
		"name": "サマースパングル", 
		"url": "http://stardewvalleywiki.com/Summer_Spangle",
		"img": "summerspangle.png",
		"seeds": {
			"pierre": 50, 
			"joja": 62, 
			"special": 0, 
			"specialLoc": "", 
			"specialUrl": "" 
		},
		"growth": {
			"initial": 8,
			"regrow": 0
		},
		"produce": {
			"extra": 0,
			"extraPerc": 0,
			"rawN": 90,
			"rawS": 112,
			"rawG": 135,
			"jar": 0,
			"keg": 0,
			"jarType": "",
			"kegType": ""
		}
	},
	"poppy": {
		"name": "ポピー", 
		"url": "http://stardewvalleywiki.com/Poppy",
		"img": "poppy.png",
		"seeds": {
			"pierre": 100, 
			"joja": 125, 
			"special": 0, 
			"specialLoc": "", 
			"specialUrl": "" 
		},
		"growth": {
			"initial": 7,
			"regrow": 0
		},
		"produce": {
			"extra": 0,
			"extraPerc": 0,
			"rawN": 140,
			"rawS": 175,
			"rawG": 210,
			"jar": 0,
			"keg": 0,
			"jarType": "",
			"kegType": ""
		}
	},
	"wheat": {
		"name": "小麦", 
		"url": "http://stardewvalleywiki.com/Wheat",
		"img": "wheat.png",
		"seeds": {
			"pierre": 10, 
			"joja": 12, 
			"special": 0, 
			"specialLoc": "", 
			"specialUrl": "" 
		},
		"growth": {
			"initial": 4,
			"regrow": 0
		},
		"produce": {
			"extra": 0,
			"extraPerc": 0,
			"rawN": 25,
			"rawS": 31,
			"rawG": 37,
			"jar": 100,
			"keg": 200,
			"jarType": "ピクルス",
			"kegType": "ビール"
		}
	},
	"corn": {
		"name": "トウモロコシ", 
		"url": "http://stardewvalleywiki.com/Corn",
		"img": "corn.png",
		"seeds": {
			"pierre": 150, 
			"joja": 187, 
			"special": 0, 
			"specialLoc": "", 
			"specialUrl": "" 
		},
		"growth": {
			"initial": 14,
			"regrow": 4
		},
		"produce": {
			"extra": 0,
			"extraPerc": 0,
			"rawN": 50,
			"rawS": 62,
			"rawG": 75,
			"jar": 150,
			"keg": 112,
			"jarType": "ピクルス",
			"kegType": "ジュース"
		}
	},

	// Autumn

	"sweetgemberry": {
		"name": "スイートジェムベリー", 
		"url": "http://stardewvalleywiki.com/Sweet_Gem_Berry",
		"img": "sweetgemberry.png",
		"seeds": {
			"pierre": 0, 
			"joja": 0, 
			"special": 1000, 
			"specialLoc": "行商人", 
			"specialUrl": "http://stardewvalleywiki.com/Traveling_Cart" 
		},
		"growth": {
			"initial": 24,
			"regrow": 0
		},
		"produce": {
			"extra": 0,
			"extraPerc": 0,
			"rawN": 3000,
			"rawS": 3750,
			"rawG": 4500,
			"jar": 0,
			"keg": 0,
			"jarType": "",
			"kegType": ""
		}
	},
	"cranberries": {
		"name": "クランベリー", 
		"url": "http://stardewvalleywiki.com/Cranberries",
		"img": "cranberries.png",
		"seeds": {
			"pierre": 240, 
			"joja": 300, 
			"special": 0, 
			"specialLoc": "", 
			"specialUrl": "" 
		},
		"growth": {
			"initial": 7,
			"regrow": 5
		},
		"produce": {
			"extra": 1,
			"extraPerc": 1,
			"rawN": 75,
			"rawS": 93,
			"rawG": 112,
			"jar": 200,
			"keg": 225,
			"jarType": "ジャム",
			"kegType": "ワイン"
		}
	},
	"pumpkin": {
		"name": "カボチャ", 
		"url": "http://stardewvalleywiki.com/Pumpkin",
		"img": "pumpkin.png",
		"seeds": {
			"pierre": 100, 
			"joja": 125, 
			"special": 0, 
			"specialLoc": "", 
			"specialUrl": "" 
		},
		"growth": {
			"initial": 13,
			"regrow": 0
		},
		"produce": {
			"extra": 0,
			"extraPerc": 0,
			"rawN": 320,
			"rawS": 400,
			"rawG": 480,
			"jar": 690,
			"keg": 720,
			"jarType": "ピクルス",
			"kegType": "ジュース"
		}
	},
	"grape": {
		"name": "ブドウ", 
		"url": "http://stardewvalleywiki.com/Grape",
		"img": "grape.png",
		"seeds": {
			"pierre": 60, 
			"joja": 75, 
			"special": 0, 
			"specialLoc": "", 
			"specialUrl": "" 
		},
		"growth": {
			"initial": 10,
			"regrow": 3
		},
		"produce": {
			"extra": 0,
			"extraPerc": 0,
			"rawN": 80,
			"rawS": 100,
			"rawG": 120,
			"jar": 210,
			"keg": 240,
			"jarType": "ジャム",
			"kegType": "ワイン"
		}
	},
	"artichoke": {
		"name": "アーティチョーク", 
		"url": "http://stardewvalleywiki.com/Artichoke",
		"img": "artichoke.png",
		"seeds": {
			"pierre": 30, 
			"joja": 0, 
			"special": 0, 
			"specialLoc": "", 
			"specialUrl": "" 
		},
		"growth": {
			"initial": 8,
			"regrow": 0
		},
		"produce": {
			"extra": 0,
			"extraPerc": 0,
			"rawN": 160,
			"rawS": 200,
			"rawG": 240,
			"jar": 370,
			"keg": 360,
			"jarType": "ピクルス",
			"kegType": "ジュース"
		}
	},
	"beet": {
		"name": "ビーツ", 
		"url": "http://stardewvalleywiki.com/Beet",
		"img": "beet.png",
		"seeds": {
			"pierre": 0, 
			"joja": 0, 
			"special": 20, 
			"specialLoc": "オアシス", 
			"specialUrl": "http://stardewvalleywiki.com/Oasis" 
		},
		"growth": {
			"initial": 6,
			"regrow": 0
		},
		"produce": {
			"extra": 0,
			"extraPerc": 0,
			"rawN": 100,
			"rawS": 125,
			"rawG": 150,
			"jar": 250,
			"keg": 225,
			"jarType": "ピクルス",
			"kegType": "ジュース"
		}
	},
	"eggplant": {
		"name": "ナス",
		"url": "http://stardewvalleywiki.com/Eggplant",
		"img": "eggplant.png",
		"seeds": {
			"pierre": 20, 
			"joja": 25, 
			"special": 0, 
			"specialLoc": "", 
			"specialUrl": "" 
		},
		"growth": {
			"initial": 5,
			"regrow": 5
		},
		"produce": {
			"extra": 0,
			"extraPerc": 0,
			"rawN": 60,
			"rawS": 75,
			"rawG": 90,
			"jar": 170,
			"keg": 135,
			"jarType": "ピクルス",
			"kegType": "ジュース"
		}
	},
	"amaranth": {
		"name": "アマランサス",
		"url": "http://stardewvalleywiki.com/Amaranth",
		"img": "amaranth.png",
		"seeds": {
			"pierre": 70, 
			"joja": 87, 
			"special": 0, 
			"specialLoc": "", 
			"specialUrl": "" 
		},
		"growth": {
			"initial": 7,
			"regrow": 0
		},
		"produce": {
			"extra": 0,
			"extraPerc": 0,
			"rawN": 150,
			"rawS": 187,
			"rawG": 225,
			"jar": 350,
			"keg": 337,
			"jarType": "ピクルス",
			"kegType": "ジュース"
		}
	},
	"yam": {
		"name": "サツマイモ", 
		"url": "http://stardewvalleywiki.com/Yam",
		"img": "yam.png",
		"seeds": {
			"pierre": 50, 
			"joja": 75, 
			"special": 0, 
			"specialLoc": "", 
			"specialUrl": "" 
		},
		"growth": {
			"initial": 10,
			"regrow": 0
		},
		"produce": {
			"extra": 0,
			"extraPerc": 0,
			"rawN": 160,
			"rawS": 200,
			"rawG": 240,
			"jar": 370,
			"keg": 360,
			"jarType": "ピクルス",
			"kegType": "ジュース"
		}
	},
	"fairyrose": {
		"name": "フェアリーローズ", 
		"url": "http://stardewvalleywiki.com/Fairy_Rose",
		"img": "fairyrose.png",
		"seeds": {
			"pierre": 200, 
			"joja": 250, 
			"special": 0, 
			"specialLoc": "", 
			"specialUrl": "" 
		},
		"growth": {
			"initial": 12,
			"regrow": 0
		},
		"produce": {
			"extra": 0,
			"extraPerc": 0,
			"rawN": 290,
			"rawS": 362,
			"rawG": 435,
			"jar": 0,
			"keg": 0,
			"jarType": "",
			"kegType": ""
		}
	},
	"bokchoy": {
		"name": "チンゲンサイ", 
		"url": "http://stardewvalleywiki.com/Bok_Choy",
		"img": "bokchoy.png",
		"seeds": {
			"pierre": 50, 
			"joja": 62, 
			"special": 0, 
			"specialLoc": "", 
			"specialUrl": "" 
		},
		"growth": {
			"initial": 4,
			"regrow": 0
		},
		"produce": {
			"extra": 0,
			"extraPerc": 0,
			"rawN": 80,
			"rawS": 100,
			"rawG": 120,
			"jar": 210,
			"keg": 180,
			"jarType": "ピクルス",
			"kegType": "ジュース"
		}
	},
	"sunflower": {
		"name": "ヒマワリ", 
		"url": "http://stardewvalleywiki.com/Sunflower",
		"img": "sunflower.png",
		"seeds": {
			"pierre": 200, 
			"joja": 125, 
			"special": 0, 
			"specialLoc": "", 
			"specialUrl": "" 
		},
		"growth": {
			"initial": 8,
			"regrow": 0
		},
		"produce": {
			"extra": 0,
			"extraPerc": 0,
			"rawN": 80,
			"rawS": 100,
			"rawG": 120,
			"jar": 0,
			"keg": 0,
			"jarType": "",
			"kegType": ""
		}
	},

	// Special

	"ancientfruit": {
		"name": "古代のフルーツ", 
		"url": "http://stardewvalleywiki.com/Ancient_Fruit",
		"img": "ancientfruit.png",
		"seeds": {
			"pierre": 0, 
			"joja": 0, 
			"special": 800, 
			"specialLoc": "行商人", 
			"specialUrl": "http://stardewvalleywiki.com/Traveling_Cart" 
		},
		"growth": {
			"initial": 28,
			"regrow": 7
		},
		"produce": {
			"extra": 0,
			"extraPerc": 0,
			"rawN": 550,
			"rawS": 687,
			"rawG": 825,
			"jar": 1150,
			"keg": 1650,
			"jarType": "ジャム",
			"kegType": "ワイン"
		}
	}
};
