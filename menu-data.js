
"use strict";

/*
  HAO PHONG MENU DATA

  Row structure:
  [number, English, Vietnamese, Chinese, price]

  price can be a number-like string or a fully
  formatted price for wines and drinks.
*/

function menuGroup(name, rows) {
  return {
    name,
    items: rows.map(([number, en, vi, zh, price]) => ({
      number, en, vi, zh, price
    }))
  };
}

window.HAO_MENU = [

  menuGroup("Entrees", [
    [2,"Prawn & Pork Rice Paper Rolls (4)","Gỏi Cuốn Tôm Thịt (4)","蝦豬肉米紙卷","14.5"],
    [3,"Prawn Rice Paper Rolls (4)","Gỏi Cuốn Tôm (4)","蝦米紙卷","14.5"],
    [4,"Vegetarian Rice Paper Rolls (4)","Gỏi Cuốn Chay","齋米紙卷","13.5"],
    [5,"Shredded Pork Rice Paper Rolls (4)","Bì Cuốn (4)","肉絲米紙卷","13.5"],
    [6,"Prawn Spring Rolls (6)","Chả Giò Tôm (6)","蝦春卷","13"],
    [7,"Pork Spring Rolls (6)","Chả Giò Thịt (6)","肉春卷","13"],
    [8,"Crispy Quail (2 pcs)","Chim Cút Chiên Dòn","脆皮鵪鶉","11"],
    [9,"Satay Beef on Skewers (2)","Bò Satế Ghim (2)","沙爹牛肉串","10"],
    [10,"Satay Chicken on Skewers (2)","Gà Satế Ghim (2)","沙爹雞肉串","10"],
    [11,"Won Ton (Soup / Steamed)","Súp Hoành Thánh","雲吞湯","9"],
    [12,"Prawn Dumpling Soup (Soup / Steamed)","Súp Sủi Cảo","水餃湯","9"],
    [13,"Chicken & Sweet Corn Soup","Súp Bắp Gà","粟米雞羹","9"],
    [14,"Vegetable Soup (Chicken Stock)","Súp Rau","什菜湯","8"],
    [15,"Sugar Cane Prawn","Chạo Tôm","蔗蝦","13"],
    [16,"Chicken San Choi Pow (2 pcs)","Cải Xà Lách Cuốn Gà","雞生菜包","13"],
    [17,"Seafood San Choi Pow (2 pcs)","Cải Xà Lách Cuốn Đồ Biển","海鮮生菜包","14.5"],
    [18,"Minced Beef in Vine Leaf (6 pcs)","Bò Lá Lốp","香葉牛肉卷","14"]
  ]),

  menuGroup("Coleslaw", [
    [20,"Chicken Coleslaw","Gỏi Gà","越式菜絲類","20"],
    [21,"Seafood Coleslaw","Gỏi Đồ Biển","海鮮菜絲","23"],
    [22,"Prawn & Pork Coleslaw","Gỏi Tôm Thịt","鮮蝦、肉片菜絲","20"],
    [23,"Vegetarian Coleslaw","Gỏi Chay","齋菜絲","20"],
    [24,"Rare Cooked Beef with Lemon Juice","Bò Tái Chanh","檸汁生牛肉菜絲","20"],
    [25,"Grilled Pork with Coleslaw","Gỏi Thịt Nướng","肉菜絲","22"]
  ]),

  menuGroup("Congee", [
    [26,"Fresh Sliced Fish Congee","Cháo Cá","魚片粥","18"],
    [27,"Seafood Congee","Cháo Đồ Biển","海鮮粥","19"],
    [28,"King Prawns and Pork Congee","Cháo Tôm Thịt","鮮蝦、肉片粥","18"],
    [29,"Chicken Congee","Cháo Gà","雞球粥","18"],
    [30,"Minced Beef Congee","Cháo Thịt Bò","牛肉粥","18"],
    [31,"Chinese Donut","Dầu Cháo Quẩy","油條","7"]
  ]),

  menuGroup("Chef's Specials", [
    [null,"Bun cha",null,null,"22"],
    [null,"Pipi",null,null,"37"],
    [null,"Oyster",null,null,"15.8"],
    [null,"Barramundi ( Hấp/ Rang muối)",null,null,"85"],
    [null,"Lobster tail with noodles",null,null,"95"],
    [null,"Soft shell crab",null,null,"23"],
    [null,"Combo Lau Canh Chua Ca Kho",null,null,"109"],
    [null,"Chua 1 con",null,null,"95"],
    [null,"Kho 1 con",null,null,"95"],
    [null,"Chicken Farm Rice Noodle Soup",null,null,"20.5"],
    [null,"Chicken Farm on Rice",null,null,"20.5"],
    [null,"Chopped Chicken Farm ( Half)",null,null,"30"],
    [null,"Chopped Chicken Farm ( Whole)",null,null,"58"]
  ]),

  menuGroup("Fine Rice Vermicelli", [
    [32,"Sugar Cane Prawn with Fine Rice Vermicelli","Bánh Hỏi Chạo Tôm","蔗蝦瀨粉","20.5"],
    [33,"Spring Rolls with Fine Rice Vermicelli (Prawn, Pork or Vegetable)","Bánh Hỏi Chả Giò (Tôm, Heo hoặc Chay)","春卷瀨粉（蝦、豬、菜）","19.5"],
    [34,"Minced Beef in Vine Leaf with Fine Rice Vermicelli","Bánh Hỏi Bò Lá Lốp","香葉牛肉瀨粉","20"],
    [35,"Grilled Pork with Fine Rice Vermicelli","Bánh Hỏi Thịt Nướng","香茅烤豬肉瀨粉","20"],
    [36,"Stir Fried Beef w/ Lemon Grass Rice Vermicelli","Bún Bò Xào","香茅炒牛肉米粉","18"],
    [37,"Stir Fried Pork w/ Lemon Grass Rice Vermicelli","Bún Heo Xào","香茅炒豬肉米粉","18"],
    [38,"Grilled Pork Rice Vermicelli","Bún Heo Nướng","香茅豬肉米粉","18"],
    [39,"Grilled Chicken Rice Vermicelli","Bún Gà Nướng","香茅烤雞米粉","19"],
    [40,"Spring Rolls Rice Vermicelli (Prawn, Pork / Vegetable)","Bún Chả Giò (Tôm, Heo hoặc Chay)","春卷米粉（蝦、豬、齋）","18"],
    [41,"Sugar Cane Prawn Rice Vermicelli","Bún Chạo Tôm","蔗蝦米粉","19"],
    [42,"Grilled Prawn Rice Vermicelli","Bún Tôm Nướng","烤蝦米粉","19"],
    [43,"Minced Beef in Vine Leaf Rice Vermicelli","Bún Bò Lá Lốp","香葉牛肉卷米粉","19"],
    [null,"Extra Spring Rolls (2 rolls)","Thêm Chả Giò","加春卷","5"],
    [null,"Extra Grilled Pork","Thêm Heo Nướng","加烤豬肉","7"],
    [null,"Extra Grilled Chicken","Thêm Gà Nướng","加烤雞肉","10"],
    [null,"Extra Minced Beef in Vine Leaf","Thêm Bò Lá Lốp","加香葉牛肉","10"],
    [null,"Extra Sugar Cane Prawn","Thêm Chạo Tôm","加蔗蝦","10"],
    [null,"Extra Grilled Prawn (3 pcs)","Thêm Tôm Nướng","加烤蝦","7"]
  ]),

  menuGroup("Rice Dishes", [
    [44,"Grilled Pork Chop on Broken Rice","Cơm Tấm Sườn","豬扒碎米飯","17"],
    [45,"Grilled Pork Chop, Fried Egg, Pork Loaf & Shredded Pork on Broken Rice","Cơm Tấm Đặc Biệt","特別豬扒碎米飯","17"],
    [46,"Grilled Chicken, Fried Egg, Pork Loaf & Shredded Pork on Broken Rice","Cơm Tấm Gà Nướng Đặc Biệt","特別烤雞碎米飯","19.5"],
    [47,"Grilled Chicken on Rice","Cơm Gà Nướng","烤雞飯","18"],
    [48,"Crispy Skin Chicken on Tomato Rice","Cơm Gà Chiên Dòn (Cơm Đỏ)","脆皮雞飯（茄飯）","18"],
    [49,"Prawn Meat Stuffed Eggplant, Capsicum & Beancurd on Rice","Cơm Cà Tím, Ớt Đậu Hủ Dồn Tôm","釀瓤豆腐、茄子、辣椒飯","18"],
    [50,"Diced Beef Cube on Tomato Rice","Cơm Bò Lúc Lắc (Cơm Đỏ)","牛肉粒飯（茄飯）","18"]
  ]),

  menuGroup("Fried Rice", [
    [51,"Salted Fish & Diced Chicken Fried Rice","Cơm Chiên Cá Mặn Thịt Gà","咸魚雞粒炒飯","19"],
    [52,"Combination Fried Rice","Cơm Chiên Dương Châu","楊洲炒飯","18"],
    [53,"Minced Beef Fried Rice","Cơm Chiên Thịt Bò","生炒牛肉飯","18"],
    [54,"Vegetarian Fried Rice (with or without Egg)","Cơm Chiên Chay","齋炒飯","18"]
  ]),

  menuGroup("Steamed Rice", [
    [55,"Beef and Vegetable on Steamed Rice","Cơm Bò Xào Cải","時菜牛肉飯","18"],
    [56,"Seafood and Vegetable on Steamed Rice","Cơm Đồ Biển Xào Cải","時菜海鮮飯","18.5"],
    [57,"Combination on Steamed Rice","Cơm Thập Cẩm Xào Cải","什會飯","18.5"],
    [58,"Stir Fried Vegetable and Beancurd on Steamed Rice","Cơm Đậu Hủ Xào Cải","時菜豆腐飯","18"],
    [59,"Beef with Egg Sauce on Steamed Rice","Cơm Bò Sốt Trứng","滑蛋牛肉飯","18"],
    [60,"Chicken and Vegetable on Steamed Rice","Cơm Gà Xào Cải","時菜雞肉飯","18"]
  ]),

  menuGroup("Clay Pot Rice", [
    [61,"Prawn Meat Stuffed Eggplant, Capsicum & Beancurd Clay Pot Rice","Cơm Niêu Cà Tím, Ớt Đậu Hủ Dồn Tôm","釀瓤豆腐、茄子、辣椒飯","19.5"],
    [62,"Beef In Black Bean Sauce Clay Pot Rice","Cơm Niêu Bò Xào Tàu Xì","豉汁牛肉飯","18"],
    [63,"Vegetable & Beancurd Clay Pot Rice (Oyster / Blackbean / Szechuan Sauce)","Cơm Niêu Rau Cải (Sốt Dầu Hào / Tàu Xì / Tứ Xuyên)","時菜豆腐飯（蠔油、豉汁、四川汁）","18"],
    [64,"Seafood with XO Sauce & Vegetable Clay Pot Rice","Cơm Niêu Đồ Biển Xào Sốt XO","時菜海鮮XO","20"],
    [65,"Beef in Szechuan Chilli Sauce Clay Pot Rice","Cơm Niêu Bò Xào Sốt Tứ Xuyên","四川牛肉","18"],
    [66,"Beef or Chicken with Ginger & Shallot Clay Pot Rice","Cơm Niêu Bò hoặc Gà Xào Gừng Hành","薑蔥牛肉或雞","18"],
    [67,"Chicken and Chinese Mushroom Clay Pot Rice","Cơm Niêu Gà Xào Nấm Đông Cô","香菇雞飯","18"]
  ]),

  menuGroup("Rice Noodle Soup", [
    [68,"Rare Beef Rice Noodle Soup","Phở Tái","生牛肉粉","17"],
    [69,"Rare Beef & Tripe Rice Noodle Soup","Phở Tái Sách","生牛肉、牛柏葉粉","17"],
    [70,"Rare Beef and Beef Balls Rice Noodle Soup","Phở Tái Bò Viên","生牛肉、牛肉丸粉","17"],
    [71,"Special Combination Beef Rice Noodle Soup","Phở Đặc Biệt","特別牛肉粉","18"],
    [72,"Chicken Rice Noodle Soup","Phở Gà","雞粉","17"]
  ]),

  menuGroup("Drop Rice Noodle Soup", [
    [73,"Prawn and Pork Drop Rice Noodle Soup","Bánh Canh Tôm Thịt","豬肉、鮮蝦瀨粉","18"],
    [74,"Seafood Drop Rice Noodle Soup","Bánh Canh Đồ Biển","海鮮瀨粉","18.5"]
  ]),

  menuGroup("Rice / Egg Noodle (Soup / Dry)", [
    [75,"BBQ Pork with Rice Noodle / Egg Noodle","Hủ Tiếu hoặc Mì Xá Xíu","叉燒粉或麵","17"],
    [76,"King Prawn & Sliced Pork Rice Noodle / Egg Noodle","Hủ Tiếu hoặc Mì Tôm Thịt","鮮蝦、肉片粉或麵","17.5"],
    [77,"Seafood with Rice Noodle / Egg Noodle (Chicken Stock)","Hủ Tiếu hoặc Mì Đồ Biển","海鮮粉或麵","18.5"],
    [78,"Wonton with Rice Noodle / Egg Noodle","Hủ Tiếu hoặc Mì Hoành Thánh","雲吞粉或麵","18"],
    [79,"Prawn Dumplings w. Rice Noodle / Egg Noodle (Chicken Stock)","Hủ Tiếu hoặc Mì Sủi Cảo","水餃粉或麵","18"],
    [80,"Mixed Vegetable and Beancurd with Rice Noodle or Egg Noodle","Hủ Tiếu hoặc Mì Đậu Hủ Rau Cải","什菜豆腐粉或麵","17"],
    [81,"Grilled Chicken w. Rice Noodle / Egg Noodle (Chicken Stock)","Hủ Tiếu hoặc Mì Gà Nướng","烤雞粉或麵","18.5"],
    [82,"Grilled Pork Chop w. Rice Noodle / Egg Noodle (Chicken Stock)","Hủ Tiếu hoặc Mì Sườn Nướng","烤豬扒粉或麵","18.5"],
    [83,"Crispy Skin Chicken w. Rice Noodle / Egg Noodle (Chicken Stock)","Hủ Tiếu hoặc Mì Gà Chiên Dòn","脆皮雞粉或麵","18.5"],
    [84,"Braised Duck with Egg Noodle Soup","Mì Vịt Tiềm","鴨腿麵","19.8"],
    [85,"Seafood & Vegetables with Fried Rice Noodle / Egg Noodle","Hủ Tiếu hoặc Mì Xào Đồ Biển","時菜海鮮炒河或麵","20"],
    [86,"Prawn & Vegetables with Fried Rice Noodle / Egg Noodle","Hủ Tiếu hoặc Mì Xào Tôm","時菜蝦球炒河或麵","20"]
  ]),

  menuGroup("Stir Fried Noodle", [
    [87,"Combination with Fried Rice Noodle / Egg Noodle","Hủ Tiếu hoặc Mì Xào Thập Cẩm","時菜什會炒河或麵","20"],
    [88,"Beef & Vegetables with Fried Rice Noodle / Egg Noodle","Hủ Tiếu hoặc Mì Xào Bò & Cải","時菜牛肉炒河或麵","19.5"],
    [89,"Chicken & Vegetables with Fried Rice Noodle / Egg Noodle","Hủ Tiếu hoặc Mì Xào Gà & Cải","時菜雞球炒河或麵","19.5"],
    [90,"BBQ Pork & Vegetables with Fried Rice Noodle or Egg Noodle","Hủ Tiếu hoặc Mì Xào Xá Xíu & Cải","時菜叉燒炒河或麵","19.5"],
    [91,"Beef Fried Rice Noodle (with sesame seed topping)","Hủ Tiếu Xào Bò Khô","乾炒牛河","19.5"],
    [92,"Seafood Char Kwai Teow (Spicy) (with sesame seed topping)","Hủ Tiếu Xào Kiểu Mã Lai","海鮮炒貴刁","20"],
    [93,"Singapore Fried Rice Noodle (Spicy) (with sesame seed topping)","Bún Xào Kiểu Singapore","星洲炒米","19.5"],
    [94,"Salted Fish & Minced Chicken Fried Rice Noodle","Bún Xào Thịt Gà & Cá Mặn","咸魚雞粒炒米粉","19.5"],
    [95,"Stir Fried Vegetables & Beancurd with Fried Rice or Egg Noodle","Hủ Tiếu hoặc Mì Xào Rau Cải & Đậu Hủ","時菜豆腐炒河或麵","18.5"]
  ]),

  menuGroup("Pork", [
    [96,"Sweet & Sour Pork (in batter)","Heo Lăn Bột Sốt Chua Ngọt","豬肉類","24"],
    [97,"BBQ Pork & Vegetables with Plum Sauce","Xá Xíu Xào Sỉ Muội","咕嚕肉","24"],
    [98,"BBQ Pork with Vegetable","Xá Xíu Xào Rau Cải","椒鹽肉排","24"],
    [99,"BBQ Pork with Cashew Nuts & Vegetable","Xá Xíu Xào Hột Điều & Rau Cải","時菜叉燒","24"],
    [100,"Grilled Pork Chops","Sườn Nướng","京都肉排","24"]
  ]),

  menuGroup("Chicken", [
    [101,"Chicken Fillet & Vegetable","Gà Xào Rau Cải","時菜雞球","24"],
    [102,"Chicken Fillet with Black Bean Sauce","Gà Xào Tàu Xì","豉汁雞球","24"],
    [103,"Chicken Fillet with Ginger & Shallot","Gà Xào Gừng Hành","薑蔥雞球","24"],
    [104,"Satay Chicken","Gà Xào Satế","沙爹雞球","24"],
    [105,"Sweet & Sour Chicken (in Batter)","Gà Xào Chua Ngọt","王炒雞","24"],
    [106,"Lemon Chicken (in batter)","Gà Sốt Chanh","檸檬雞","24"],
    [107,"Honey Chicken (in batter) with Sesame seed topping","Gà Mật Ong","蜜糖雞","24"],
    [108,"Szechuan Chilli Chicken","Gà Xào Sốt Tứ Xuyên","四川雞","24"],
    [109,"Crispy Skin Chicken","Gà Chiên Dòn","脆皮雞","24"],
    [110,"Chicken with Lemon Grass and Chilli","Gà Xào Xả Ớt","香茅辣椒雞球","24"],
    [111,"Deep Fried Chicken Ribs Coated with Salted Egg Yolk","Sườn Gà Chiên Lăn Lòng Vàng Hột Vịt Muối","黃金雞扒","27"],
    [112,"Deep Fried Salted & Spicy Chicken Ribs","Sườn Gà Rang Muối","椒鹽雞扒","24"],
    [113,"Grilled Chicken","Gà Nướng","燒雞","23"]
  ]),

  menuGroup("Beef", [
    [114,"Beef & Vegetable","Bò Xào Rau Cải","時菜牛肉","24"],
    [115,"Beef with Black Bean Sauce","Bò Xào Tàu Xì","豉汁牛肉","24"],
    [116,"Beef with Ginger & Shallot","Bò Xào Gừng Hành","薑蔥牛肉","24"],
    [117,"Satay Beef","Bò Xào Satế","沙爹牛肉","24"],
    [118,"Mongolian Beef (Sizzling)","Bò Xào Kiểu Mông Cổ (Vĩ Sắt)","蒙古牛肉","25"],
    [119,"Szechuan Chilli Beef","Bò Xào Sốt Tứ Xuyên","四川牛肉","24"],
    [120,"Stir Fried Diced Beef","Bò Lúc Lắc","炒牛肉粒","24"]
  ]),

  menuGroup("Sizzling", [
    [121,"Sizzling Beef Steak in Black Pepper Sauce","Bò Xào Tiêu Đen (Lên Vĩ Sắt)","黑椒牛柳","35"],
    [122,"Sizzling Cantonese Beef Steak","Bò Quảng Châu (Lên Vĩ Sắt)","中式牛柳","33"]
  ]),

  menuGroup("Seafood", [
    [123,"Vietnamese Sweet & Sour Seafood Soup","Lẩu Canh Chua Đồ Biển","海鮮酸湯","50"],
    [124,"Seafood with XO Sauce","Đồ Biển Xào Sốt XO","海鮮XO","33"],
    [125,"Fish Fillet with Ginger & Shallot (Rockling)","Cá Xào Gừng Hành","薑蔥魚片","26"],
    [126,"Fish Fillet with Black Bean Sauce (Rockling)","Cá Xào Tàu Xì","豉汁魚片","26"],
    [127,"Sweet and Sour Fish (in Batter) (Rockling)","Cá Lăn Bột Sốt Chua Ngọt","黃炆魚","26"],
    [128,"Satay Fish (Rockling)","Cá Xào Satế","沙爹魚片","26"],
    [129,"Fish with Vegetable (Rockling)","Cá Xào Rau Cải","時菜魚片","26"],
    [130,"Spicy Salted and Pepper Flounder","Cá Ngộ Rang Muối","椒鹽左口魚","50"],
    [131,"King Prawns with Ginger & Shallot","Tôm Xào Gừng Hành","薑蔥蝦球","32"],
    [132,"Garlic King Prawns","Tôm Xào Tỏi","蒜蓉蝦球","32"],
    [133,"Spicy Salted and Pepper Prawns (with shells or without shells)","Tôm Rang Muối (Có Vỏ hoặc Không Vỏ)","椒鹽蝦球或蝦殼","32"],
    [134,"Prawns with Vegetable","Tôm Xào Rau Cải","時菜蝦球","32"],
    [135,"Deep Fried Prawn Coated with Salted Egg Yolk","Tôm Chiên Lăn Lòng Vàng Hột Vịt Muối","黃金蝦球或蝦殼","35"],
    [136,"Prawn Meat Stuffed with Eggplant, Capsicum & Beancurd","Tôm Dồn Đậu Hủ, Cà Tím, Ớt","釀釀三寶","33"],
    [137,"Spicy Salted and Pepper Squid","Mực Rang Muối","椒鹽鮮魷","26"],
    [138,"Deep Fried Squid Coated w/ Salted Egg Yolk","Mực Chiên Lăn Lòng Vàng Hột Vịt Muối","黃金鮮魷","29"]
  ]),

  menuGroup("Vegetables", [
    [139,"Chinese Broccoli with Oyster Sauce","Cải Rổ Xào Dầu Hào","蠔油芥蘭","20"],
    [140,"Chinese Broccoli with Garlic Sauce","Cải Rổ Xào Tỏi","蒜蓉芥蘭","20"],
    [141,"Water Spinach with Garlic Sauce","Rau Muống Xào Tỏi","蒜蓉通心菜","20"],
    [142,"Vegetable with Chinese Mushroom","Rau Cải Xào Đông Cô","冬菇扒菜","23"],
    [143,"Stir Fried Mixed Vegetable","Cải Thập Cẩm Xào","炒什菜","20"],
    [144,"Salt and Pepper Japanese Tofu","Đậu Hủ Nhật Rang Muối","椒鹽豆腐","21"]
  ]),

  menuGroup("Hot Pot", [
    [145,"Diced Chicken, Salted Fish & Beancurd Hot Pot","Thịt Gà, Cá Mặn & Đậu Hủ Tay Cầm","咸魚雞粒豆腐煲","25"],
    [146,"Diced Meat & Egg Plant Hot Pot","Thịt Xay Cà Tím Tay Cầm","魚香茄子煲","25"],
    [147,"Combination Seafood Beancurd Hot Pot","Đồ Biển Hầm Đậu Hủ Tay Cầm","海鮮豆腐煲","32"],
    [148,"Diced Chicken, Salted Fish & Eggplant Hot Pot","Thịt Gà, Cá Mặn Cà Tím Tay Cầm","咸魚雞粒茄子煲","25"],
    [149,"Caramelized Braised Pork in Hot Pot","Thịt Heo Kho","越式炆豬肉煲","24.5"]
  ]),

  menuGroup("Sides", [
    [null,"Steamed rice",null,null,"3.5"],
    [null,"Tomatoes rice",null,null,"5.8"],
    [null,"Rice Vermicelli",null,null,"5"],
    [null,"Egg Noodles",null,null,"5"]
  ]),

  menuGroup("Desserts & Drinks", [
    [null,"Banana Fritter with Ice Cream","Kem Chuối Chiên",null,"10"],
    [null,"Three Colours Drink","Chè Ba Màu",null,"7"],
    [null,"Blended Mung Bean Drink","Chè Đậu Xanh",null,"7"],
    [null,"Fresh Orange Juice","Nước Cam",null,"7"],
    [null,"Fresh Lemon Juice with Soda Water","Soda Chanh Đường",null,"7"],
    [null,"Coconut Juice","Nước Dừa Tươi",null,"6.5"],
    [null,"Black Coffee (Hot or with Ice)","Cà Phê Đen (Đá hoặc Nóng)",null,"6.5"],
    [null,"White Coffee (Hot or with Ice)","Cà Phê Sữa (Đá hoặc Nóng)",null,"6.5"],
    [null,"Soursop Smoothie","Sinh Tố Mãng Cầu",null,"7"],
    [null,"Avocado Smoothie","Sinh Tố Bơ",null,"7"],
    [null,"Jack Fruit Smoothie","Sinh Tố Mít",null,"7"],
    [null,"Dried Longan & Seaweed Drink","Sâm Bổ Lượng",null,"7"],
    [null,"Dried Longan Drink","Nhãn Nhục",null,"7"],
    [null,"Iced Lychee Drink","Nước Trái Vải",null,"7"]
  ]),

  menuGroup("Cans & Bottles", [
    [null,"Soft Drink Can (Coke, Fanta, Sprite, Coke Zero)","Nước Ngọt Lon",null,"4.5"],
    [null,"Bottle of Spring Water","Nước Suối Đóng Chai",null,"5"],
    [null,"Sparkling Mineral Water","Nước Khoáng Có Ga",null,"5.5"],
    [null,"Bottle of Fruit Juice (Orange / Apple / Apple & Blackcurrant)","Nước Trái Cây Đóng Chai",null,"6"]
  ]),

  menuGroup("Beer, Wine & Spirits", [
    [null,"Cabernet Sauvignon / Cabernet Merlot / Shiraz","Rượu Vang Đỏ",null,"Glass $9.9 · Bottle $39.9"],
    [null,"Sauvignon Blanc / Chardonnay","Rượu Vang Trắng",null,"Glass $9.9 · Bottle $39.9"],
    [null,"Martell Blue Swift","Rượu Mạnh",null,"Glass $15 · Bottle $250"],
    [null,"Watermelon / Lychee / Peach","Soju Dưa Hấu / Vải / Đào",null,"Bottle $20"],
    [null,"Asahi / Crown Lager / Tsing Tao / VB / Corona / Carlton Draught / Pure Blonde","Bia",null,"Bottle $8.5"]
  ])

];
