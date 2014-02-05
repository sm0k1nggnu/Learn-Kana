var choose_row, chosen_h, chosen_k, get_kana, h, hiragana, hiraganaMenu, kana, katakana, katakanaMenu, menuButton, refresh, romaji, selected_rows, sounds, write_kana;

kana = $("#kana");

romaji = $("#romaji");

refresh = $('.glyphicon-refresh');

chosen_h = [];

chosen_k = [];

chosen_h[0] = 1;

chosen_k[0] = 1;

h = 1;

while (h < 16) {
  chosen_h[h] = 0;
  chosen_k[h] = 0;
  h++;
}

console.log(chosen_h);

console.log(chosen_k);

hiragana = [[[1], ["あ"], ["い"], ["う"], ["え"], ["お"]], [[2], ["か"], ["き"], ["く"], ["け"], ["こ"]], [[3], ["が"], ["ぎ"], ["ぐ"], ["げ"], ["ご"]], [[4], ["さ"], ["し"], ["す"], ["せ"], ["そ"]], [[5], ["ざ"], ["じ"], ["ず"], ["ぜ"], ["ぞ"]], [[6], ["た"], ["ち"], ["つ"], ["て"], ["と"]], [[7], ["だ"], ["ぢ"], ["づ"], ["で"], ["ど"]], [[8], ["な"], ["に"], ["ぬ"], ["ね"], ["の"]], [[9], ["は"], ["ひ"], ["ふ"], ["へ"], ["ほ"]], [[10], ["ば"], ["び"], ["ぶ"], ["べ"], ["ぼ"]], [[11], ["ぱ"], ["ぴ"], ["ぷ"], ["ぺ"], ["ぽ"]], [[12], ["ま"], ["み"], ["む"], ["め"], ["も"]], [[13], ["や"], [""], ["ゆ"], [""], ["よ"]], [[14], ["ら"], ["り"], ["る"], ["れ"], ["ろ"]], [[15], ["わ"], [""], [""], ["ゑ"], ["を"]], [[16], ["ん"], [""], [""], [""], [""]]];

katakana = [[[1], ["ア"], ["イ"], ["ウ"], ["エ"], ["オ"]], [[2], ["カ"], ["キ"], ["ク"], ["ケ"], ["コ"]], [[3], ["ガ"], ["ギ"], ["グ"], ["ゲ"], ["ゴ"]], [[4], ["サ"], ["シ"], ["ス"], ["セ"], ["ソ"]], [[5], ["ザ"], ["ジ"], ["ズ"], ["ゼ"], ["ゾ"]], [[6], ["タ"], ["チ"], ["ツ"], ["テ"], ["ト"]], [[7], ["ダ"], ["ヂ"], ["ヅ"], ["デ"], ["ドゾ"]], [[8], ["ナ"], ["ニ"], ["ヌ"], ["ネ"], ["ノ"]], [[9], ["ハ"], ["ヒ"], ["フ"], ["ヘ"], ["ホ"]], [[10], ["バ"], ["ビ"], ["ブ"], ["ベ"], ["ボ"]], [[11], ["パ"], ["ピ"], ["プ"], ["ペ"], ["ポ"]], [[12], ["マ"], ["ミ"], ["ム"], ["メ"], ["モ"]], [[13], ["ヤ"], [""], ["ユ"], [""], ["ヨ"]], [[14], ["ラ"], ["リ"], ["ル"], ["レ"], ["ロ"]], [[15], ["ワ"], [""], [""], [""], ["ヲ"]], [[16], ["ン"], [""], [""], [""], [""]]];

sounds = [[[1], ["a"], ["i"], ["u"], ["e"], ["o"]], [[2], ["ka"], ["ki"], ["ku"], ["ke"], ["ko"]], [[3], ["ga"], ["gi"], ["gu"], ["ge"], ["go"]], [[4], ["sa"], ["shi"], ["su"], ["se"], ["so"]], [[5], ["za"], ["zi"], ["zu"], ["ze"], ["zo"]], [[6], ["ta"], ["chi"], ["tsu"], ["te"], ["to"]], [[7], ["da"], ["ji"], ["zu"], ["de"], ["do"]], [[8], ["na"], ["ni"], ["nu"], ["ne"], ["no"]], [[9], ["ha"], ["hi"], ["fu"], ["he"], ["ho"]], [[10], ["ba"], ["bi"], ["bu"], ["be"], ["bo"]], [[11], ["pa"], ["pi"], ["pu"], ["pe"], ["po"]], [[12], ["ma"], ["mi"], ["mu"], ["me"], ["mo"]], [[13], ["ya"], [""], ["yu"], [""], ["yo"]], [[14], ["ra"], ["ri"], ["ru"], ["re"], ["ro"]], [[15], ["wa"], [""], [""], [""], ["o/wo"]], [[16], ["n"], [""], [""], [""], [""]]];

hiraganaMenu = $("#hiragana-checkboxes");

katakanaMenu = $("#katakana-checkboxes");

menuButton = $("#off-canvas-menu");

$('.hiragana-check').on("change", function() {
  var h_i;
  h_i = $(this).attr('value');
  if ($(this).is(':checked')) {
    chosen_h[h_i] = 1;
    return console.log(chosen_h);
  } else {
    chosen_h[h_i] = 0;
    console.log(chosen_h);
  }
});

$('.katakana-check').on("change", function() {
  var k_i;
  k_i = $(this).attr('value');
  if ($(this).is(':checked')) {
    chosen_k[k_i] = 1;
    return console.log(chosen_k);
  } else {
    chosen_k[k_i] = 0;
    console.log(chosen_k);
  }
});

selected_rows = function(kana_arr, t) {
  var i, len, result;
  result = [];
  i = 0;
  len = 16;
  while (i < len) {
    if (kana_arr[i] === 1) {
      result.push(i);
    }
    i++;
  }
  console.log("selected rows " + t + " " + result);
  return result;
};

choose_row = function(kana) {
  var chosen_row, k;
  if (kana === "h") {
    h = selected_rows(chosen_h, "hiragana");
    chosen_row = h[Math.floor(Math.random() * h.length)];
    return chosen_row;
  } else {
    k = selected_rows(chosen_k, "katakana");
    chosen_row = k[Math.floor(Math.random() * k.length)];
    return chosen_row;
  }
};

get_kana = function(h, k) {
  var hira, i, j, kata, len, result;
  result = void 0;
  hira = false;
  kata = false;
  i = 0;
  j = 0;
  len = 16;
  while (i < len) {
    if (chosen_h[i] === 1) {
      result = chosen_h[i];
      hira = true;
    }
    i++;
  }
  while (j < len) {
    if (chosen_k[j] === 1) {
      result = chosen_k[j];
      kata = true;
    } else {

    }
    j++;
  }
  console.log("hira " + hira + "kata " + kata);
  if (hira && kata) {
    this.hk = Math.floor(Math.random() * 2);
    if (hk === 0) {
      this.i = choose_row("h");
      console.log(choose_row("h"));
    } else {
      this.i = choose_row("k");
      console.log(choose_row("k"));
    }
  } else if (hira && !kata) {
    this.hk = 0;
    this.i = choose_row("h");
    console.log(choose_row("h"));
  } else if (kata && !hira) {
    this.hk = 1;
    this.i = choose_row("k");
    console.log(choose_row("k"));
  }
  this.j = Math.floor((Math.random() * 5) + 1);
  console.log("Column " + this.j);
  return this.i;
  return this.j;
};

write_kana = function(h, k) {
  get_kana(h, k);
  console.log("i is " + this.i);
  console.log("j is " + this.j);
  if (this.hk === 0 && hiragana[this.i][this.j] !== '') {
    kana.html(hiragana[this.i][this.j]);
  } else if (this.hk === 0 && hiragana[this.i][this.j] === '') {
    kana.html(hiragana[this.i - 3][this.j]);
  } else if (this.hk === 1 && katakana[this.i][this.j] !== '') {
    kana.html(katakana[this.i][this.j]);
  } else {
    kana.html(katakana[this.i - 3][this.j]);
  }
  romaji.html(sounds[this.i][this.j] + " ");
  console.log("row [" + this.i + "], col [" + this.j + "]");
};

menuButton.on("show.bs.collapse", function() {
  $("#off-canvas-button").css("right", "320px");
  $(".sidebar-offcanvas").css("background-color", "transparent");
});

menuButton.on("hide.bs.collapse", function() {
  $("#off-canvas-button").css("right", "0");
  $(".sidebar-offcanvas").css("background-color", "#000");
});

write_kana([chosen_h], [chosen_k]);

refresh.on("click", function() {
  return write_kana([chosen_h], [chosen_k]);
});
