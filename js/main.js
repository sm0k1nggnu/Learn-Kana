$(document).ready(function() {
  var answer, checkAnswer, choose_row, chosen_h, chosen_k, get_kana, h, hiragana, hiraganaMenu, kana, katakana, katakanaMenu, menuButton, romaji, selected_rows, sounds, write_kana;
  kana = $("#kana");
  romaji = $("#romaji");
  answer = $('#romajiAnswer');
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
  hiragana = [[[1], ["あ"], ["い"], ["う"], ["え"], ["お"]], [[2], ["か"], ["き"], ["く"], ["け"], ["こ"]], [[3], ["が"], ["ぎ"], ["ぐ"], ["げ"], ["ご"]], [[4], ["さ"], ["し"], ["す"], ["せ"], ["そ"]], [[5], ["ざ"], ["じ"], ["ず"], ["ぜ"], ["ぞ"]], [[6], ["た"], ["ち"], ["つ"], ["て"], ["と"]], [[7], ["だ"], ["ぢ"], ["づ"], ["で"], ["ど"]], [[8], ["な"], ["に"], ["ぬ"], ["ね"], ["の"]], [[9], ["は"], ["ひ"], ["ふ"], ["へ"], ["ほ"]], [[10], ["ば"], ["び"], ["ぶ"], ["べ"], ["ぼ"]], [[11], ["ぱ"], ["ぴ"], ["ぷ"], ["ぺ"], ["ぽ"]], [[12], ["ま"], ["み"], ["む"], ["め"], ["も"]], [[13], ["や"], ["ゆ"], ["よ"]], [[14], ["ら"], ["り"], ["る"], ["れ"], ["ろ"]], [[15], ["わ"], ["を"]], [[16], ["ん"]]];
  katakana = [[[1], ["ア"], ["イ"], ["ウ"], ["エ"], ["オ"]], [[2], ["カ"], ["キ"], ["ク"], ["ケ"], ["コ"]], [[3], ["ガ"], ["ギ"], ["グ"], ["ゲ"], ["ゴ"]], [[4], ["サ"], ["シ"], ["ス"], ["セ"], ["ソ"]], [[5], ["ザ"], ["ジ"], ["ズ"], ["ゼ"], ["ゾ"]], [[6], ["タ"], ["チ"], ["ツ"], ["テ"], ["ト"]], [[7], ["ダ"], ["ヂ"], ["ヅ"], ["デ"], ["ドゾ"]], [[8], ["ナ"], ["ニ"], ["ヌ"], ["ネ"], ["ノ"]], [[9], ["ハ"], ["ヒ"], ["フ"], ["ヘ"], ["ホ"]], [[10], ["バ"], ["ビ"], ["ブ"], ["ベ"], ["ボ"]], [[11], ["パ"], ["ピ"], ["プ"], ["ペ"], ["ポ"]], [[12], ["マ"], ["ミ"], ["ム"], ["メ"], ["モ"]], [[13], ["ヤ"], ["ユ"], ["ヨ"]], [[14], ["ラ"], ["リ"], ["ル"], ["レ"], ["ロ"]], [[15], ["ワ"], ["ヲ"]], [[16], ["ン"]]];
  sounds = [[[1], ["a"], ["i"], ["u"], ["e"], ["o"]], [[2], ["ka"], ["ki"], ["ku"], ["ke"], ["ko"]], [[3], ["ga"], ["gi"], ["gu"], ["ge"], ["go"]], [[4], ["sa"], ["shi"], ["su"], ["se"], ["so"]], [[5], ["za"], ["zi"], ["zu"], ["ze"], ["zo"]], [[6], ["ta"], ["chi"], ["tsu"], ["te"], ["to"]], [[7], ["da"], ["ji"], ["zu"], ["de"], ["do"]], [[8], ["na"], ["ni"], ["nu"], ["ne"], ["no"]], [[9], ["ha"], ["hi"], ["fu"], ["he"], ["ho"]], [[10], ["ba"], ["bi"], ["bu"], ["be"], ["bo"]], [[11], ["pa"], ["pi"], ["pu"], ["pe"], ["po"]], [[12], ["ma"], ["mi"], ["mu"], ["me"], ["mo"]], [[13], ["ya"], ["yu"], ["yo"]], [[14], ["ra"], ["ri"], ["ru"], ["re"], ["ro"]], [[15], ["wa"], ["o/wo"]], [[16], ["n"]]];
  hiraganaMenu = $("#hiragana-checkboxes");
  katakanaMenu = $("#katakana-checkboxes");
  menuButton = $("#off-canvas-menu");
  $('.hiragana-check').on("change", function() {
    var h_i;
    h_i = $(this).attr('value');
    if ($(this).is(':checked')) {
      return chosen_h[h_i] = 1;
    } else {
      chosen_h[h_i] = 0;
    }
  });
  $('.katakana-check').on("change", function() {
    var k_i;
    k_i = $(this).attr('value');
    if ($(this).is(':checked')) {
      return chosen_k[k_i] = 1;
    } else {
      chosen_k[k_i] = 0;
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
    if (hira && kata) {
      this.hk = Math.floor(Math.random() * 2);
      if (hk === 0) {
        this.i = choose_row("h");
      } else {
        this.i = choose_row("k");
      }
    } else if (hira && !kata) {
      this.hk = 0;
      this.i = choose_row("h");
    } else if (kata && !hira) {
      this.hk = 1;
      this.i = choose_row("k");
    }
    this.j = Math.floor((Math.random() * 5) + 1);
    return this.i;
    return this.j;
  };
  write_kana = function(h, k) {
    get_kana(h, k);
    if (this.hk === 0 && hiragana[this.i][this.j] !== void 0) {
      kana.html(hiragana[this.i][this.j]);
      checkAnswer(sounds[this.i][this.j], hiragana[this.i][this.j]);
    } else if (this.hk === 0 && hiragana[this.i][this.j] === void 0) {
      this.j = 1;
      kana.html(hiragana[this.i][this.j]);
      checkAnswer(sounds[this.i][this.j], hiragana[this.i][this.j]);
    } else if (this.hk === 1 && katakana[this.i][this.j] !== void 0) {
      kana.html(katakana[this.i][this.j]);
      checkAnswer(sounds[this.i][this.j], katakana[this.i][this.j]);
    } else {
      this.j = 1;
      kana.html(katakana[this.i][this.j]);
      checkAnswer(sounds[this.i][this.j], katakana[this.i][this.j]);
    }
  };
  checkAnswer = function(args, k) {
    return answer.bind("keyup", function(e) {
      var code, kanaAnswer, kanas, value;
      code = e.keyCode || e.which;
      value = args.toString;
      kanas = k;
      kanaAnswer = $('#romajiAnswer').val();
      args = args.toString();
      if (code === 13 && kanaAnswer !== "") {
        if (args === kanaAnswer) {
          console.log("value = " + args + " = kana = " + kanaAnswer);
          write_kana([chosen_h], [chosen_k]);
          romaji.html("<span data-sound=\"" + args[0] + "\" >last: " + kanas + " = " + args[0] + "</span>");
        } else {
          console.log("value = " + args + " != kana = " + kanaAnswer);
          write_kana([chosen_h], [chosen_k]);
          romaji.html("<span data-sound=\"" + args[0] + "\" class=\"wrong-answer\">wrong: " + kanas + " = " + args[0] + "</span>");
        }
      } else {
        0;
      }
    });
  };
  menuButton.on("show.bs.collapse", function() {
    $("#off-canvas-button").css("right", "320px");
    $(".sidebar-offcanvas").css("background-color", "transparent");
  });
  menuButton.on("hide.bs.collapse", function() {
    $("#off-canvas-button").css("right", "0");
    $(".sidebar-offcanvas").css("background-color", "#000");
  });
  return write_kana([chosen_h], [chosen_k]);
});
