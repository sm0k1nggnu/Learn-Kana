kana = $('#kana');
romaji = $('#romaji');

var hiragana = [
	[[1],["あ"], ["い"], ["う"], ["え"], ["お"]],
	[[2],["か"], ["き"], ["く"], ["け"], ["こ"]],
	[[3],["が"], ["ぎ"], ["ぐ"], ["げ"], ["ご"]],
	[[4],["さ"], ["し"], ["す"], ["せ"], ["そ"]],
	[[5],["ざ"], ["じ"], ["ず"], ["ぜ"], ["ぞ"]],
	[[6],["た"], ["ち"], ["つ"], ["て"], ["と"]],
	[[7],["だ"], ["ぢ"], ["づ"], ["で"], ["ど"]],
	[[8],["な"], ["に"], ["ぬ"], ["ね"], ["の"]],
	[[9],["は"], ["ひ"], ["ふ"], ["へ"], ["ほ"]],
	[[10],["ば"], ["び"], ["ぶ"], ["べ"], ["ぼ"]],
	[[11],["ぱ"], ["ぴ"], ["ぷ"], ["ぺ"], ["ぽ"]],
	[[12],["ま"], ["み"], ["む"], ["め"], ["も"]],
	[[13],["や"], [""], ["ゆ"], [""], ["よ"]],        
	[[14],["ら"], ["り"], ["る"], ["れ"], ["ろ"]],
	[[15],["わ"], ["ゐ"], [""], ["ゑ"], ["を"]],
	[[16],["ん"], [""], [""], [""], [""]]
];

var katakana = [
	[[1],["ア"], ["イ"], ["ウ"], ["エ"], ["オ"]],
	[[2],["カ"], ["キ"], ["ク"], ["ケ"], ["コ"]],
	[[3],["ガ"], ["ギ"], ["グ"], ["ゲ"], ["ゴ"]],
	[[4],["サ"], ["シ"], ["ス"], ["セ"], ["ソ"]],
	[[5],["ザ"], ["ジ"], ["ズ"], ["ゼ"], ["ゾ"]],
	[[6],["タ"], ["チ"], ["ツ"], ["テ"], ["ト"]],
	[[7],["ダ"], ["ヂ"], ["ヅ"], ["デ"], ["ドゾ"]],
	[[8],["ナ"], ["ニ"], ["ヌ"], ["ネ"], ["ノ"]],
	[[9],["ハ"], ["ヒ"], ["フ"], ["ヘ"], ["ホ"]],
	[[10],["バ"], ["ビ"], ["ブ"], ["ベ"], ["ボ"]],
	[[11],["パ"], ["ピ"], ["プ"], ["ペ"], ["ポ"]],
	[[12],["マ"], ["ミ"], ["ム"], ["メ"], ["モ"]],
	[[13],["ヤ"], [""], ["ユ"], [""], ["ヨ"]],        
	[[14],["ラ"], ["リ"], ["ル"], ["レ"], ["ロ"]],
	[[15],["ワ"], [""], [""], [""], ["ヲ"]],
	[[16],["ン"], [""], [""], [""], [""]]
];

var sounds = [
	[[1],["a"], ["i"], ["u"], ["e"], ["o"]],
	[[2],["ka"], ["ki"], ["ku"], ["ke"], ["ko"]],
	[[3],["ga"], ["gi"], ["gu"], ["ge"], ["go"]],
	[[4],["sa"], ["shi"], ["su"], ["se"], ["so"]],
	[[5],["za"], ["zi"], ["zu"], ["ze"], ["zo"]],
	[[6],["ta"], ["chi"], ["tsu"], ["te"], ["to"]],
	[[7],["da"], ["ji"], ["zu"], ["de"], ["doˆ"]],
	[[8],["na"], ["ni"], ["nu"], ["ne"], ["no"]],
	[[9],["ha"], ["hi"], ["fu"], ["he"], ["ho"]],
	[[10],["ba"], ["bi"], ["bu"], ["be"], ["bo"]],
	[[11],["pa"], ["pi"], ["pu"], ["pe"], ["po"]],
	[[12],["ma"], ["mi"], ["mu"], ["me"], ["mo"]],
	[[13],["ya"], [""], ["yu"], [""], ["yo"]],        
	[[14],["ra"], ["ri"], ["ru"], ["re"], ["ro"]],
	[[15],["wa"], [""], [""], [""], ["o/wo"]],
	[[16],["n"]]
];

var hiraganaMenu = $('#hiragana-checkboxes');
var katakanaMenu = $('#katakana-checkboxes');

var fill_checkboxes = function() {
	for (x = 0; x<16; x++) {
		hiraganaMenu.append("<div class='checkbox'>" + sounds[x][1] + "<label><input type='checkbox' value='" + x + "'></label>" + hiragana[x][1] + hiragana[x][2] + hiragana[x][3] + hiragana[x][4] + hiragana[x][5] +"</div>");
		katakanaMenu.append("<div class='checkbox'><label><input type='checkbox' value='" + x + "'></label>" + katakana[x][1] + katakana[x][2] + katakana[x][3] + katakana[x][4] + katakana[x][5] +"</div>");
	}
};

var choose_row = function(r) { // r is array with all rows
	rows_count = r.length;
	i = Math.floor((Math.random()*rows_count)); //random Array-entry
	
	return r[i];
}

var get_kana = function(h,k) { //check if not empty - only show rows user wants to learn
	
	if (h != '' && k != '') { // are both values set? 
		hk = Math.floor((Math.random()*2)); // 0 = Hiragana, 1 = Katakana
		if (hk == 0){ // if Hiragana -> choose i from 1 - h.length-1
			console.log("Hiragana Row " + choose_row(h));
		} else { // if Katakana -> choose i from 1 - k.length-1
			console.log("Katakana Row " + choose_row(k));
		}
	} else if (h != '' && k == '') { // only h set so only choose Hiragana
		hk = 0;
		console.log("Hiragana Row " + choose_row(h));
	} else { // only k set so only choose Katakana
		hk = 1;
		console.log("Katakana Row " + choose_row(k));
	}
	
	

	// get a possible i from h or a possible i from k
	// h.length, k.length
	// choose randomly if h or k
	// choose i from 1 - h.length-1 oder 1 - k.length-1 
	//i = Math.floor((Math.random()*16)); //rows
	j = Math.floor((Math.random()*5)+1); //columns
	console.log("Column " + j);
	return i;
	return j;
}

var write_kana = function(h,k) { //h = Hiragana-rows, k = Katakana-rows
	get_kana(h,k) // h could be for example [1,3,7]. Therefor i can only be 1,3 or 7
	
	if (hk == 0) {
		kana.html(hiragana[this.i][this.j]);
	} else {
		kana.html(katakana[this.i][this.j]);
	}
		
	romaji.html(sounds[this.i][this.j]);

    //console.log(h,k);
    console.log("row [" + this.i + "], col [" + this.j + "]");
};


write_kana([1,2,3,9],[1,2,3]); //make this dynamic to chosen rows
fill_checkboxes();