(function() {
  var choose_row, fill_checkboxes, get_kana, hiragana, hiraganaMenu, kana, katakana, katakanaMenu, menuButton, romaji, sounds, write_kana;

  kana = $("#kana");

  romaji = $("#romaji");

  hiragana = [[[1], ["あ"], ["い"], ["う"], ["え"], ["お"]], [[2], ["か"], ["き"], ["く"], ["け"], ["こ"]], [[3], ["が"], ["ぎ"], ["ぐ"], ["げ"], ["ご"]], [[4], ["さ"], ["し"], ["す"], ["せ"], ["そ"]], [[5], ["ざ"], ["じ"], ["ず"], ["ぜ"], ["ぞ"]], [[6], ["た"], ["ち"], ["つ"], ["て"], ["と"]], [[7], ["だ"], ["ぢ"], ["づ"], ["で"], ["ど"]], [[8], ["な"], ["に"], ["ぬ"], ["ね"], ["の"]], [[9], ["は"], ["ひ"], ["ふ"], ["へ"], ["ほ"]], [[10], ["ば"], ["び"], ["ぶ"], ["べ"], ["ぼ"]], [[11], ["ぱ"], ["ぴ"], ["ぷ"], ["ぺ"], ["ぽ"]], [[12], ["ま"], ["み"], ["む"], ["め"], ["も"]], [[13], ["や"], [""], ["ゆ"], [""], ["よ"]], [[14], ["ら"], ["り"], ["る"], ["れ"], ["ろ"]], [[15], ["わ"], ["ゐ"], [""], ["ゑ"], ["を"]], [[16], ["ん"], [""], [""], [""], [""]]];

  katakana = [[[1], ["ア"], ["イ"], ["ウ"], ["エ"], ["オ"]], [[2], ["カ"], ["キ"], ["ク"], ["ケ"], ["コ"]], [[3], ["ガ"], ["ギ"], ["グ"], ["ゲ"], ["ゴ"]], [[4], ["サ"], ["シ"], ["ス"], ["セ"], ["ソ"]], [[5], ["ザ"], ["ジ"], ["ズ"], ["ゼ"], ["ゾ"]], [[6], ["タ"], ["チ"], ["ツ"], ["テ"], ["ト"]], [[7], ["ダ"], ["ヂ"], ["ヅ"], ["デ"], ["ドゾ"]], [[8], ["ナ"], ["ニ"], ["ヌ"], ["ネ"], ["ノ"]], [[9], ["ハ"], ["ヒ"], ["フ"], ["ヘ"], ["ホ"]], [[10], ["バ"], ["ビ"], ["ブ"], ["ベ"], ["ボ"]], [[11], ["パ"], ["ピ"], ["プ"], ["ペ"], ["ポ"]], [[12], ["マ"], ["ミ"], ["ム"], ["メ"], ["モ"]], [[13], ["ヤ"], [""], ["ユ"], [""], ["ヨ"]], [[14], ["ラ"], ["リ"], ["ル"], ["レ"], ["ロ"]], [[15], ["ワ"], [""], [""], [""], ["ヲ"]], [[16], ["ン"], [""], [""], [""], [""]]];

  sounds = [[[1], ["a"], ["i"], ["u"], ["e"], ["o"]], [[2], ["ka"], ["ki"], ["ku"], ["ke"], ["ko"]], [[3], ["ga"], ["gi"], ["gu"], ["ge"], ["go"]], [[4], ["sa"], ["shi"], ["su"], ["se"], ["so"]], [[5], ["za"], ["zi"], ["zu"], ["ze"], ["zo"]], [[6], ["ta"], ["chi"], ["tsu"], ["te"], ["to"]], [[7], ["da"], ["ji"], ["zu"], ["de"], ["do"]], [[8], ["na"], ["ni"], ["nu"], ["ne"], ["no"]], [[9], ["ha"], ["hi"], ["fu"], ["he"], ["ho"]], [[10], ["ba"], ["bi"], ["bu"], ["be"], ["bo"]], [[11], ["pa"], ["pi"], ["pu"], ["pe"], ["po"]], [[12], ["ma"], ["mi"], ["mu"], ["me"], ["mo"]], [[13], ["ya"], [""], ["yu"], [""], ["yo"]], [[14], ["ra"], ["ri"], ["ru"], ["re"], ["ro"]], [[15], ["wa"], [""], [""], [""], ["o/wo"]], [[16], ["n"], [""], [""], [""], [""]]];

  hiraganaMenu = $("#hiragana-checkboxes");

  katakanaMenu = $("#katakana-checkboxes");

  menuButton = $("#off-canvas-menu");

  fill_checkboxes = function() {
    var x;
    x = 0;
    while (x < 16) {
      hiraganaMenu.append("<div class='checkbox'><label class='sound'>" + sounds[x][1] + "</label><label><input type='checkbox' value='" + x + "'></label>" + hiragana[x][1] + hiragana[x][2] + hiragana[x][3] + hiragana[x][4] + hiragana[x][5] + "</div>");
      katakanaMenu.append("<div class='checkbox'><label><input type='checkbox' value='" + x + "'></label>" + katakana[x][1] + katakana[x][2] + katakana[x][3] + katakana[x][4] + katakana[x][5] + "</div>");
      x++;
    }
  };

  choose_row = function(r) {
    var rows_count;
    rows_count = r.length;
    this.i = Math.floor(Math.random() * rows_count);
    return r[this.i];
  };

  get_kana = function(h, k) {
    console.log("h = " + h + " k = " + k[0]);
    if (h[0] !== 99 && k[0] !== 99) {
      this.hk = Math.floor(Math.random() * 2);
      console.log("here");
      if (hk === 0) {
        console.log("Hiragana Row " + choose_row(h));
      } else {
        console.log("Katakana Row " + choose_row(k));
      }
    } else if (h[0] !== 99 && k[0] === 99) {
      this.hk = 0;
      console.log("Hiragana Row " + choose_row(h));
    } else if (h[0] === 99 && k[0] !== 99) {
      this.hk = 1;
      console.log("Katakana Row " + choose_row(k));
    }
    this.j = Math.floor((Math.random() * 5) + 1);
    console.log("Column " + this.j);
    return this.i;
    return this.j;
  };

  write_kana = function(h, k) {
    get_kana(h, k);
    if (this.hk === 0 && hiragana[this.i][this.j] !== '') {
      kana.html(hiragana[this.i][this.j]);
    } else if (this.hk === 0 && hiragana[this.i][this.j] === '') {
      kana.html(hiragana[this.i - 3][this.j]);
    } else if (this.hk === 1 && katakna[this.i][this.j] !== '') {
      kana.html(katakana[this.i][this.j]);
    } else {
      kana.html(katakana[this.i - 3][this.j]);
    }
    romaji.append(sounds[this.i][this.j] + " ");
    console.log("row [" + this.i + "], col [" + this.j + "]");
  };

  write_kana([1, 2, 3, 4], [99]);

  fill_checkboxes();

  menuButton.on("show.bs.collapse", function() {
    $("#off-canvas-button").css("right", "320px");
    $(".sidebar-offcanvas").css("background-color", "transparent");
  });

  menuButton.on("hide.bs.collapse", function() {
    $("#off-canvas-button").css("right", "0");
    $(".sidebar-offcanvas").css("background-color", "#000");
  });

}).call(this);
