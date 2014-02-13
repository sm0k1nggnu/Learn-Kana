#author: David May - @sm0k1nggnu

#TODO: show kana only for x amount of time, then fail
#TODO: build points-system. x/y kana correct
#TODO: show 5 kana under kana to choose from. 4 random, 1 correct

kana = $("#kana")
romaji = $("#romaji")
refresh = $('.glyphicon-refresh')
answer = $('#romajiAnswer')

chosen_h = []
chosen_k = []

chosen_h[0] = 1
chosen_k[0] = 1

h = 1
while h < 16
  chosen_h[h] = 0
  chosen_k[h] = 0
  h++
	
hiragana = [
  [
    [1]
    ["あ"]
    ["い"]
    ["う"]
    ["え"]
    ["お"]
  ]
  [
    [2]
    ["か"]
    ["き"]
    ["く"]
    ["け"]
    ["こ"]
  ]
  [
    [3]
    ["が"]
    ["ぎ"]
    ["ぐ"]
    ["げ"]
    ["ご"]
  ]
  [
    [4]
    ["さ"]
    ["し"]
    ["す"]
    ["せ"]
    ["そ"]
  ]
  [
    [5]
    ["ざ"]
    ["じ"]
    ["ず"]
    ["ぜ"]
    ["ぞ"]
  ]
  [
    [6]
    ["た"]
    ["ち"]
    ["つ"]
    ["て"]
    ["と"]
  ]
  [
    [7]
    ["だ"]
    ["ぢ"]
    ["づ"]
    ["で"]
    ["ど"]
  ]
  [
    [8]
    ["な"]
    ["に"]
    ["ぬ"]
    ["ね"]
    ["の"]
  ]
  [
    [9]
    ["は"]
    ["ひ"]
    ["ふ"]
    ["へ"]
    ["ほ"]
  ]
  [
    [10]
    ["ば"]
    ["び"]
    ["ぶ"]
    ["べ"]
    ["ぼ"]
  ]
  [
    [11]
    ["ぱ"]
    ["ぴ"]
    ["ぷ"]
    ["ぺ"]
    ["ぽ"]
  ]
  [
    [12]
    ["ま"]
    ["み"]
    ["む"]
    ["め"]
    ["も"]
  ]
  [
    [13]
    ["や"]
    ["ゆ"]
    ["よ"]
  ]
  [
    [14]
    ["ら"]
    ["り"]
    ["る"]
    ["れ"]
    ["ろ"]
  ]
  [
    [15]
    ["わ"]
    ["を"]
  ]
  [
    [16]
    ["ん"]
  ]
]
katakana = [
  [
    [1]
    ["ア"]
    ["イ"]
    ["ウ"]
    ["エ"]
    ["オ"]
  ]
  [
    [2]
    ["カ"]
    ["キ"]
    ["ク"]
    ["ケ"]
    ["コ"]
  ]
  [
    [3]
    ["ガ"]
    ["ギ"]
    ["グ"]
    ["ゲ"]
    ["ゴ"]
  ]
  [
    [4]
    ["サ"]
    ["シ"]
    ["ス"]
    ["セ"]
    ["ソ"]
  ]
  [
    [5]
    ["ザ"]
    ["ジ"]
    ["ズ"]
    ["ゼ"]
    ["ゾ"]
  ]
  [
    [6]
    ["タ"]
    ["チ"]
    ["ツ"]
    ["テ"]
    ["ト"]
  ]
  [
    [7]
    ["ダ"]
    ["ヂ"]
    ["ヅ"]
    ["デ"]
    ["ドゾ"]
  ]
  [
    [8]
    ["ナ"]
    ["ニ"]
    ["ヌ"]
    ["ネ"]
    ["ノ"]
  ]
  [
    [9]
    ["ハ"]
    ["ヒ"]
    ["フ"]
    ["ヘ"]
    ["ホ"]
  ]
  [
    [10]
    ["バ"]
    ["ビ"]
    ["ブ"]
    ["ベ"]
    ["ボ"]
  ]
  [
    [11]
    ["パ"]
    ["ピ"]
    ["プ"]
    ["ペ"]
    ["ポ"]
  ]
  [
    [12]
    ["マ"]
    ["ミ"]
    ["ム"]
    ["メ"]
    ["モ"]
  ]
  [
    [13]
    ["ヤ"]
    ["ユ"]
    ["ヨ"]
  ]
  [
    [14]
    ["ラ"]
    ["リ"]
    ["ル"]
    ["レ"]
    ["ロ"]
  ]
  [
    [15]
    ["ワ"]
    ["ヲ"]
  ]
  [
    [16]
    ["ン"]
  ]
]
sounds = [
  [
    [1]
    ["a"]
    ["i"]
    ["u"]
    ["e"]
    ["o"]
  ]
  [
    [2]
    ["ka"]
    ["ki"]
    ["ku"]
    ["ke"]
    ["ko"]
  ]
  [
    [3]
    ["ga"]
    ["gi"]
    ["gu"]
    ["ge"]
    ["go"]
  ]
  [
    [4]
    ["sa"]
    ["shi"]
    ["su"]
    ["se"]
    ["so"]
  ]
  [
    [5]
    ["za"]
    ["zi"]
    ["zu"]
    ["ze"]
    ["zo"]
  ]
  [
    [6]
    ["ta"]
    ["chi"]
    ["tsu"]
    ["te"]
    ["to"]
  ]
  [
    [7]
    ["da"]
    ["ji"]
    ["zu"]
    ["de"]
    ["do"]
  ]
  [
    [8]
    ["na"]
    ["ni"]
    ["nu"]
    ["ne"]
    ["no"]
  ]
  [
    [9]
    ["ha"]
    ["hi"]
    ["fu"]
    ["he"]
    ["ho"]
  ]
  [
    [10]
    ["ba"]
    ["bi"]
    ["bu"]
    ["be"]
    ["bo"]
  ]
  [
    [11]
    ["pa"]
    ["pi"]
    ["pu"]
    ["pe"]
    ["po"]
  ]
  [
    [12]
    ["ma"]
    ["mi"]
    ["mu"]
    ["me"]
    ["mo"]
  ]
  [
    [13]
    ["ya"]
    ["yu"]
    ["yo"]
  ]
  [
    [14]
    ["ra"]
    ["ri"]
    ["ru"]
    ["re"]
    ["ro"]
  ]
  [
    [15]
    ["wa"]
    ["o/wo"]
  ]
  [
    [16]
    ["n"]
  ]
]
hiraganaMenu = $("#hiragana-checkboxes")
katakanaMenu = $("#katakana-checkboxes")
menuButton = $("#off-canvas-menu")


$('.hiragana-check').on "change", ->
  h_i = $(this).attr('value')
  if $(this).is(':checked')
    chosen_h[h_i] = 1
  else
    chosen_h[h_i] = 0
    return

$('.katakana-check').on "change", ->
  k_i = $(this).attr('value')
  if $(this).is(':checked')
    chosen_k[k_i] = 1
  else
    chosen_k[k_i] = 0
    return

#find rows that are not empty
selected_rows = (kana_arr, t) ->
	result = []
	i = 0
	len = 16
	while i < len 
	  if kana_arr[i] is 1
	    result.push i
	    #break
	  i++
	return result
	

#find all checked rows, return one of them randomly
choose_row = (kana) ->
  if kana is "h"
    h = selected_rows(chosen_h, "hiragana")
    chosen_row = h[Math.floor(Math.random() * h.length)]
    return chosen_row
  else
    k = selected_rows(chosen_k, "katakana")
    chosen_row = k[Math.floor(Math.random() * k.length)]
    return chosen_row
  return
  #@i = Math.floor((Math.random() * rows_count)) #random Array-entry
	
#get_kana gets one kana, either Hiragana or Katakana from specified rows
#takes 2 arrays as argument, h for Hiragana, k for Katakana
#checks which rows have been selected (1)
get_kana = (h, k) ->
  #are both Hiragana and Katakana set? Random variable @hk defines which one to take
  result = undefined
  hira = false
  kata = false
  i = 0
  j = 0
  len = 16
  while i < len 
    if chosen_h[i] is 1
      result = chosen_h[i]
      hira = true
    i++
  while j < len 
    if chosen_k[j] is 1
      result = chosen_k[j]
      kata = true
    else
    j++
  
  if hira and kata # are both values set?	
    @hk = Math.floor((Math.random() * 2)) # 0 = Hiragana, 1 = Katakana
    if hk is 0 # if Hiragana -> choose i from 1 - h.length-1
      @i = choose_row("h")
    else # if Katakana -> choose i from 1 - k.length-1
      @i = choose_row("k")
  else if hira and !kata # only h set so only choose Hiragana
    @hk = 0
    @i =  choose_row("h")
  else if kata and !hira  # only k set so only choose Katakana
    @hk = 1
    @i =  choose_row("k")
  
  # get a possible i from h or a possible i from k
  # h.length, k.length
  # choose randomly if h or k
  # choose i from 1 - h.length-1 oder 1 - k.length-1 
  #i = Math.floor((Math.random()*16)); //rows
  @j = Math.floor((Math.random() * 5) + 1) #columns
  return @i
  @j

#write kana from chosen rows into html
#function takes 2 arrays as argument, arrays are chosen rows
write_kana = (h, k) -> 
  #get_kana gets one kana, either Hiragana or Katakana from specified rows
  get_kana h, k
  if @hk is 0 and hiragana[@i][@j] != undefined #this check doesn't work
    kana.html hiragana[@i][@j]
    checkAnswer(sounds[@i][@j], hiragana[@i][@j])
  else if @hk is 0 and hiragana[@i][@j] == undefined
	  @j = 1
	  kana.html hiragana[@i][@j] #if no kana on this spot
	  checkAnswer(sounds[@i][@j], hiragana[@i][@j])
  else if @hk is 1 and katakana[@i][@j] != undefined
    kana.html katakana[@i][@j]
    checkAnswer(sounds[@i][@j], katakana[@i][@j])
  else 
    @j = 1
    kana.html katakana[@i][@j]#if no kana on this spot
    checkAnswer(sounds[@i][@j], katakana[@i][@j])	
  return


checkAnswer = (args, k) ->
  answer.bind "keyup", (e) ->
    code = e.keyCode or e.which
    value = @value
    kanas = k
    if code is 13
      if value is args[0]
        write_kana [chosen_h], [chosen_k]
        romaji.html '<span data-sound="' + args[0] + '" >last: ' + kanas + " = "+ args[0] + '</span>'
      else
        write_kana [chosen_h], [chosen_k]
        romaji.html '<span data-sound="' + args[0] + '" class="wrong-answer">wrong: ' + kanas + " = "+ args[0] + '</span>'
    return
	


menuButton.on "show.bs.collapse", ->
  $("#off-canvas-button").css "right", "320px"
  $(".sidebar-offcanvas").css "background-color", "transparent"
  return

menuButton.on "hide.bs.collapse", ->
  $("#off-canvas-button").css "right", "0"
  $(".sidebar-offcanvas").css "background-color", "#000"
  return

write_kana	[ #initial
	  chosen_h
	], [
	  chosen_k
	]
	
refresh.on "click", ->
	write_kana [ #make this dynamic to chosen rows
	  chosen_h
	], [
	  chosen_k
	]
