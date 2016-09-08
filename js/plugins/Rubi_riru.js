//=============================================================================
// Rubi_riru.js
//=============================================================================
/*:
 * @plugindesc ルビ振りを行います。用語登録によるオートルビ振り機能つき。
 * @author riru
 *
 *
 * @param Auto Ruby
 * @desc 自動ルビ振りをする（する：true　しない：false）
 * @default true
 *
 * @param Help Auto Ruby
 * @desc スキルの説明やヘルプメッセージ等（ヘルプで一部制御文字が使えるところ）も自動ルビ振りをする（する：true　しない：false）
 * @default true
 *
 * @param Database Auto Ruby
 * @desc アクターやアイテム名などウィンドウ内の他すべての場所も自動ルビ振りをする（する：true　しない：false）
 * @default true
 *
 * @param Jisage
 * @desc 字下げを行う（1行目は字下げをしないとルビが切れます。）（する：0　しない：1　ルビがあるときだけ字下げ：2）
 * @default 0
 *
 * @param Ruby Size
 * @desc ルビのサイズ補正。字下げONの場合このサイズに合わせて字下げ、行詰みの度合いが変わります。あまり大きすぎると上の文字に被ります
 * @default -1
 *
 * @help
 *
 * ルビ振りプラグイン ver 1.04
 *
 *＜使い方＞
 *\r[ルビを振る漢字,よみがな]と記入すると漢字の上によみがながつきます。
 *例）\r[君,きみ]
 *jsエディタでこのファイルを開いてGame_Message.prototype.rubyDictionary　の中によく使う単語を登録しておくと自動でルビ振りをしてくれます。ただし手動でもルビ振りをしている場合は手動の読みを優先します。ひらがな、カタカナは送り仮名として認識され漢字、アルファベットの上にのみルビがつきます。
 *※認識の関係上、[,の中は自動ルビ振りがされません。（例[この中はだめ,）この場合はお手数ですが手動で設定していただきますようお願いいたします
 *
 * ＜規約＞
 * 有償無償問わず使用できます。改変もご自由にどうぞ。使用報告もいりません。２次配布はだめです
 *著作権は放棄していません。使用する場合は以下の作者とURLをreadmeなどどこかに記載してください
 *
 * ＜作者情報＞
 *作者：riru 
 *HP：ガラス細工の夢幻
 *URL：http://garasuzaikunomugen.web.fc2.com/index.html
 *＜更新履歴＞
 *4月18日　Ver1.04。1.03の修正内で記号等が反映されていなかった不具合を修正。
 *4月18日　Ver1.03。文章以外で全角と半角文字が混合していると文字幅が狭くなる不具合を修正。
 *2016年4月14日　Ver1.02。ヘルプメッセージやアクター名などにもルビ振り可能になりました
 *2016年4月12日　Ver1.01。制御文字の直後,同じ単語が連続しているなど特定の条件下で自動ルビ振りがうまくいかない不具合を修正。
 */

(function() {

    var parameters = PluginManager.parameters('Rubi_riru');
    var p_auto_Ruby = Boolean(parameters['Auto Ruby']       === 'true' || false);
    var p_help_auto_Ruby = Boolean(parameters['Help Auto Ruby']       === 'true' || false);
    var p_data_auto_Ruby = Boolean(parameters['Database Auto Ruby']       === 'true' || false);
    var p_Jisage = Number(parameters['Jisage'] || 0);
    var ruby_c_size = Number(parameters['Ruby Size'] || -1);

Game_Message.prototype.rubyDictionary = function() {//自動登録用辞書。ここに直接書き込む（送り仮名込み）。漢字が被る場合は文字数が多い文字を先に。
//例
//var ruby_dic = [["君達","きみたち"],["楽し","たの"],["楽","らく"],["君","くん"]];

var ruby_dic = [["加わ","くわ"],["厄介払い","やっかいばら"],["彼","かれ"],["有名","ゆうめい"],["発掘隊","はっくつたい"],["洞窟","どうくつ"],["緑","みどり"],["一筋縄","ひとすじなわ"],["大抵","たいてい"],["商品","しょうひん"],["睡眠","すいみん"],["魅了","みりょう"],["暗闇","くらやみ"],["平気","へいき"],["店","みせ"],["歩","ある"],["突進","とっしん"],["指","ゆび"],["本","ほん"],["貯","たま"],["回す","まわ"],["回","かい"],["助","たす"],["言葉","ことば"],["声","こえ"],["位置","いち"],["効果的","こうかてき"],["担当","たんとう"],["仲間","なかま"],["地域","ちいき"],["特定","とくてい"],["一石二鳥","いっせきにちょう"],["影","かげ"],["間違","まちが"],["間","あいだ"],["協力","きょうりょく"],["先手","せんて"],["恐ろ","おそ"],["別れ","わか"],["災い","わざわ"],["緑","みどり"],["手助け","てだす"],["傷","きず"],["防具","ぼうぐ"],["鍵","かぎ"],["一つ","ひと"],["場所","ばしょ"],["倍","ばい"],["例","れい"],["防御力","ぼうぎょりょく"],["武器","ぶき"],["防御","ぼうぎょ"],["装備","そうび"],["専用","せんよう"],["防","ふせ"],["一刻","いっこく"],["所","ところ"],["危な","あぶ"],["上げ","あ"],["間違","まちが"],["方角","ほうがく"],["本当","ほんとう"],["全然","ぜんぜん"],["帰","かえ"],["一大事","いちだいじ"],["強く","つよ"],["形","かたち"],["公開","こうかい"],["開催","かいさい"],["今年","ことし"],["祭","まつり"],["感謝","かんしゃ"],["血","ち"],["古龍","こりゅう"],["砂時計","すなどけい"],["羽","はね"],["不死鳥","ふしちょう"],["買","か"],["用意","ようい"],["性能","せいのう"],["高性能","こうせいのう"],["整理","せいり"],["活動","かつどう"],["小型","こがた"],["完了","かんりょう"],["互換","ごかん"],["上位","じょうい"],["下位","かい"],["一体","いったい"],["与え","あた"],["奪","うば"],["爆発","ばくはつ"],["星","ほし"],["消え","き"],["壊","こわ"],["破壊","はかい"],["岩","いわ"],["速度","そくど"],["気配","けはい"],["輪","わ"],["黄色","きいろ"],["調査","ちょうさ"],["防御力","ぼうぎょりょく"],["攻撃力","こうげきりょく"],["扱","あつか"],["帽子","ぼうし"],["飾","かざ"],["花","はな"],["脳天","のうてん"],["呪文書","じゅもんしょ"],["一瞬","いっしゅん"],["片付け","かたづ"],["驚","おどろ"],["素材","そざい"],["丈夫","じょうぶ"],["赤","あか"],["左右","さゆう"],["謎","なぞ"],["水晶","すいしょう"],["手掛","てが"],["奥","おく"],["二重","にじゅう"],["万能薬","ばんのうやく"],["邪魔","じゃま"],["事件","じけん"],["聞","き"],["得意","とくい"],["癒","い"],["通じ","つう"],["世話役","せわやく"],["狩","か"],["一石二鳥","いっせきにちょう"],["御用","ごよう"],["安い","やすい"],["手伝","てつだ"],["装束","しょうぞく"],["鉢巻","はちまき"],["描か","えがか"],["稲妻","いなずま"],["衣装","いしょう"],["入手","にゅうしゅ"],["装備","そうび"],["鋼","はがね"],["術","じゅつ"],["風纏","かぜまとい"],["忍法","にんぽう"],["出血","しゅっけつ"],["追","お"],["以下","いか"],["最大","さいだい"],["八艘","はっそう"],["魔方陣","まほうじん"],["国王","こくおう"],["便利","べんり"],["宝箱","たからばこ"],["表示","ひょうじ"],["並べ","なら"],["順","じゅん"],["反応","はんのう"],["美し","うつく"],["危険","きけん"],["興味","きょうみ"],["金目","かねめ"],["目的","もくてき"],["実在","じつざい"],["迷","まよ"],["深入り","ふかい"],["深","ふか"],["下手","へた"],["一行","いっこう"],["修行","しゅぎょう"],["探","さが"],["関わ","かか"],["示","しめ"],["飛","と"],["方向","ほうこう"],["柱","はしら"],["散","ち"],["光","ひかり"],["太陽","たいよう"],["増し","ま"],["増す","ま"],["輝","かがや"],["個","こ"],["強い","つよ"],["違","ちが"],["舞い","ま"],["舞う","ま"],["舞","まい"],["準備","じゅんび"],["発動","はつどう"],["一撃","いちげき"],["強烈","きょうれつ"],["復活","ふっかつ"],["蘇生","そせい"],["復活薬","ふっかつぐすり"],["回復薬","かいふくやく"],["薬","くすり"],["１人","ひとり"],["例え","たと"],["百烈拳","ひゃくれつけん"],["負け","ま"],["方法","ほうほう"],["痛","いた"],["触れ","ふ"],["良","よ"],["決定","けってい"],["攻撃","こうげき"],["説明","せつめい"],["話","はなし"],["放つ","はな"],["話す","はな"],["烈風波","れっぷうは"],["刹那五月雨","せつなさみだれ"],["五月雨","さみだれ"],["成功","せいこう"],["失敗","しっぱい"],["半分","はんぶん"],["解除","かいじょ"],["治","なお"],["中回復","ちゅうかいふく"],["味方","みかた"],["以外","いがい"],["戦闘不能","せんとうふのう"],["状態","じょうたい"],["暴れ","あば"],["電光石火","でんこうせっか"],["串刺し","くしざ"],["撃","う"],["乱れ","みだ"],["切な","せつ"],["衰弱","すいじゃく"],["怒り","いか"],["即死","そくし"],["沈黙","ちんもく"],["混乱","こんらん"],["中確率","ちゅうかくりつ"],["確率","かくりつ"],["確立","かくりつ"],["毒","どく"],["行う","おこな"],["連続","れんぞく"],["吸魔","きゅうま"],["吸収","きゅうしゅう"],["吸血","きゅうけつ"],["無属性","むぞくせい"],["全体","ぜんたい"],["中ダメ","ちゅう"],["雷","かみなり"],["氷","こおり"],["炎","ほのお"],["小","しょう"],["大","だい"],["属性","ぞくせい"],["１体","いったい"],["物理","ぶつり"],["八艘飛び","はっそうと"],["疾風斬","しっぷうぎり"],["続","つづ"],["引","ひ"],["戻","もど"],["間違","まちが"],["面倒","めんどう"],["全回復","ぜんかいふく"],["魔法陣","まほうじん"],["相手","あいて"],["大し","たい"],["安値","やすね"],["剣","けん"],["杖","つえ"],["削","けず"],["棒","ぼう"],["木","き"],["効果","こうか"],["作","つく"],["加工","かこう"],["石","いし"],["刀","かたな"],["愛用","あいよう"],["全員","ぜんいん"],["遅","おそ"],["速","はや"],["低","ひく"],["高","たか"],["素早さ","すばや"],["今回","こんかい"],["ぜんいん","ぜんいん"],["順番","じゅんばん"],["行動","こうどう"],["超","ちょう"],["減","へ"],["増","ふ"],["強力","きょうりょく"],["回復","かいふく"],["消費","しょうひ"],["通常","つうじょう"],["戦っ","たたか"],["最初","さいしょ"],["最後","さいご"],["倒","たお"],["下さ","くだ"],["選","えら"],["少な","すく"],["遊","あそ"],["方","かた"],["戦い","たたか"],["襲","おそ"],["突然","とつぜん"],["瞬間","しゅんかん"],["一歩","いっぽ"],["足","あし"],["遅","おそ"],["早","はや"],["踏","ふ"],["簡単","かんたん"],["待","ま"],["為","ため"],["不審者","ふしんしゃ"],["道","みち"],["塞","ふさ"],["全回復","ぜんかいふく"],["必要","ひつよう"],["体力","たいりょく"],["保存","ほぞん"],["上","うえ"],["無","な"],["岩","いわ"],["少","すこ"],["軽","かる"],["体","からだ"],["乗","の"],["魔方陣","まほうじん"],["閉","と"],["押","お"],["青","あお"],["仲間","なかま"],["案内","あんない"],["呼","よ"],["話","はなし"],["名","な"],["俺","おれ"],["一体","いったい"],["現","あらわ"],["王国","おうこく"],["誰","だれ"],["誇","ほこ"],["自慢","じまん"],["起","お"],["事件","じけん"],["素晴","すば"],["特別","とくべつ"],["国","くに"],["開","ひら"],["感謝祭","かんしゃさい"],["毎年","まいとし"],["右","みぎ"],["左","ひだり"],["入","はい"],["森","もり"],["盗","ぬす"],["運","うん"],["噂","うわさ"],["守護者","ガーディアン"],["全く","まった"],["適当","てきとう"],["勇者","ゆうしゃ"],["巫女","みこ"],["教","おし"],["始","はじ"],["旅","たび"],["探し","さが"],["未来","みらい"],["僕","ぼく"],["王国","おうこく"],["王子","おうじ"],["弱","よわ"],["王女","おうじょ"],["返し","かえ"],["取り","と"],["伝え","つた"],["様","さま"],["国王","こくおう"],["相変わらず","あいか"],["宝物庫","ほうもつこ"],["真綿布団","まわたぶとん"],["気持ち","きも"],["仕留め","しと"],["晴野山","はれのさん"],["兎耳主","うさぎみみあるじ"],["木工品","もっこうひん"],["狐耳主","きつねみみあるじ"],["必殺技","ひっさつわざ"],["生まれ","う"],["山生湖","やうぶこ"],["大丈夫","だいじょうぶ"],["細工刀","さいくとう"],["羨まし","うらや"],["経験値","けいけんち"],["敏捷性","びんしょうせい"],["魔法力","まほうりょく"],["毛並み","けな"],["防御力","ぼうぎょりょく"],["攻撃力","こうげきりょく"],["晴野","はれの"],["中腹","ちゅうふく"],["引退","いんたい"],["間近","まぢか"],["機能","きのう"],["研師","とぎし"],["世界","せかい"],["時代","じだい"],["小さ","ちい"],["兄妹","きょうだい"],["手際","てぎわ"],["感情","かんじょう"],["茶会","ちゃかい"],["用語","ようご"],["少し","すこ"],["登録","とうろく"],["勝手","かって"],["渓流","けいりゅう"],["最近","さいきん"],["器用","きよう"],["職人","しょくにん"],["退治","たいじ"],["屋敷","やしき"],["比べ","くら"],["同じ","おな"],["確か","たし"],["部屋","へや"],["基準","きじゅん"],["葬式","そうしき"],["霊力","れいりょく"],["不満","ふまん"],["考え","かんが"],["味方","みかた"],["単体","たんたい"],["全体","ぜんたい"],["其々","それぞれ"],["塩水","しおみず"],["一応","いちおう"],["遣い","づか"],["問題","もんだい"],["顕現","けんげん"],["刃物","はもの"],["威力","いりょく"],["我々","われわれ"],["用件","ようけん"],["寂し","さみ"],["一生","いっしょう"],["錆び","さ"],["御用","ごよう"],["邪気","じゃき"],["人間","にんげん"],["隔た","へだ"],["大き","おお"],["案外","あんがい"],["邪魔","じゃま"],["大分","だいぶ"],["長け","た"],["越え","こ"],["遠慮","えんりょ"],["役目","やくめ"],["故郷","こきょう"],["繰兄","くりにい"],["漢字","かんじ"],["楽し","たの"],["本来","ほんらい"],["音楽","おんがく"],["手動","しゅどう"],["結構","けっこう"],["場所","ばしょ"],["私達","わたしたち"],["覚え","おぼ"],["練習","れんしゅう"],["用途","ようと"],["華奢","きゃしゃ"],["食堂","しょくどう"],["休憩","きゅうけい"],["俺達","おれたち"],["実際","じっさい"],["過ご","す"],["見本","みほん"],["一緒","いっしょ"],["貴重","きちょう"],["過剰","かじょう"],["無用","むよう"],["離れ","はな"],["手伝","てつだ"],["答え","こた"],["清め","きよ"],["入れ","い"],["心配","しんぱい"],["連れ","つ"],["現に","げん"],["散歩","さんぽ"],["参加","さんか"],["笑顔","えがお"],["化け","ば"],["機会","きかい"],["魔法","まほう"],["防御","ぼうぎょ"],["都度","つど"],["生活","せいかつ"],["浄化","じょうか"],["初め","はじ"],["必要","ひつよう"],["自分","じぶん"],["程度","ていど"],["視界","しかい"],["来る","く"],["生み","う"],["怪我","けが"],["雑魚","ざこ"],["新し","あたら"],["攻撃","こうげき"],["本体","ほんたい"],["穢れ","けが"],["範囲","はんい"],["成果","せいか"],["移動","いどう"],["終了","しゅうりょう"],["生き","い"],["並び","なら"],["出し","だ"],["兄様","あにさま"],["毛皮","けがわ"],["的な","てき"],["珍し","めずら"],["真ん","ま"],["仮名","がな"],["茶","ちゃ"],["現在","げんざい"],["最強","さいきょう"],["外す","はず"],["全て","すべ"],["出身","しゅっしん"],["今度","こんど"],["元気","げんき"],["防止","ぼうし"],["今日","きょう"],["話す","はな"],["亡く","な"],["帽子","ぼうし"],["変え","か"],["変わ","か"],["無理","むり"],["空気","くうき"],["悲し","かな"],["指輪","ゆびわ"],["常時","じょうじ"],["記憶","きおく"],["不安","ふあん"],["存在","そんざい"],["仕方","しかた"],["美味","うま"],["獲物","えもの"],["商売","しょうばい"],["下り","お"],["頻繁","ひんぱん"],["足跡","あしあと"],["漁師","りょうし"],["同士","どうし"],["要素","ようそ"],["仕事","しごと"],["評判","ひょうばん"],["流通","りゅうつう"],["季節","きせつ"],["製品","せいひん"],["仕上","しあ"],["道具","どうぐ"],["以外","いがい"],["細工","さいく"],["普通","ふつう"],["音量","おんりょう"],["好","す"],["受け","う"],["慣れ","な"],["嬉し","うれ"],["女性","じょせい"],["男性","だんせい"],["想像","そうぞう"],["存外","ぞんがい"],["意識","いしき"],["無性","むせい"],["寿命","じゅみょう"],["楽","らく"],["振","ふ"],["中","なか"],["送","おく"],["集","あつ"],["扱","あつか"],["思","おも"],["感","かん"],["味","あじ"],["里","さと"],["読","よ"],["書","か"],["数","かず"],["彫","ほ"],["邪","よこしま"],["顔","かお"],["使","つか"],["語","ご"],["達","たち"],["近","ちか"],["手","て"],["梅","うめ"],["見","み"],["入","はい"],["聴","き"],["鉄","てつ"],["静","しず"],["物","もの"],["与","あた"],["技","わざ"],["祓","はら"],["霊","れい"],["下","した"],["風","ふう"],["持","も"],["魂","たましい"],["動","うご"],["秘宝","ひほう"],["画面","がめん"],["渡","わた"],["継","つ"],["人","ひと"],["飯","めし"],["今","いま"],["力","ちから"],["眠","ねむ"],["頬","ほお"],["頼","たの"],["打","う"],["塊","かたまり"],["来","き"],["糧","かて"],["行","い"],["聞","き"],["特","とく"],["落","お"],["者","もの"],["言","い"],["他","ほか"],["切","き"],["時","とき"],["焼","や"],["湖","みずうみ"],["守","まも"],["私","わたし"],["埃","ほこり"],["血","ち"],["気","き"],["春","はる"],["刀","がたな"],["用","よう"],["化","か"],["身","み"],["狐","きつね"],["願","ねが"],["分","ぶん"],["葉","は"],["休","やす"],["年","ねん"],["俺","おれ"],["長","なが"],["付","つ"],["一","いち"],["目","め"],["伺","うかが"],["息","いき"],["釣","つ"],["作","つく"],["番","ばん"],["多","おお"],["欠","か"],["寝","ね"],["構","かま"],["山","やま"],["先","さき"],["主","あるじ"],["食","く"],["何","なに"],["屋","や"],["姿","すがた"],["隠","かく"],["無","な"],["短","みじか"],["傍","そば"],["元","もと"],["止","と"],["町","まち"],["前","まえ"],["拾","ひろ"],["割","わ"],["研","と"],["別","べつ"],["斬","き"],["西","にし"],["雪","ゆき"],["進","すす"],["寒","さむ"],["変","へん"],["熊","くま"],["替","か"],["服","ふく"],["心","こころ"],["錆","さび"],["済","す"],["盾","たて"],["次","つぎ"],["女","おんな"],["南","みなみ"],["幅","はば"],["狭","せま"],["宿","やど"],["満","み"],["着","つ"],["頭","あたま"],["決","き"],["冬","ふゆ"],["咲","さ"],["魚","さかな"],["遠","とお"],["立","た"],["細","ほそ"],["役","やく"],["低","ひく"],["終","お"],["限","かぎ"],["逆","ぎゃく"],["奴","やつ"],["果","は"],["命","いのち"],["肉","にく"],["残","のこ"],["敵","てき"],["込","こ"],["消","け"],["念","ねん"],["繰","くり"],["折","お"],["離","はな"],["暇","ひま"],["池","いけ"],["出","で"],["直","なお"],["死","し"],["逝","い"],["騒","さわ"],["向","む"],["訪れ","おとず"],["兵士","へいし"],["厚","あつ"],["藤","ふじ"],["懐","なつ"],["杖","つえ"],["北","きた"],["海","うみ"],["永","なが"],["溜","た"],["君","きみ"]];  
    return ruby_dic;
};
riru_Ruby_Message_processstartMessage =
		Window_Message.prototype.startMessage;
Window_Message.prototype.startMessage = function() {
    riru_Ruby_Message_processstartMessage.call(this);
    if(p_auto_Ruby)this._textState.text = this.convertEscapeCharacters($gameMessage.createRubytext($gameMessage.allText()));
    if(p_Jisage==0||(p_Jisage==2&&$gameMessage.ruby_e_hantei(this._textState.text)))this._textState.y += 6+ruby_c_size;
};
Game_Message.prototype.ruby_e_hantei = function(text) {
   var text_re = new RegExp("\x1br\\[(.*?),.*?\\]","img");//textの正規表現
return text_re.test(text);
};
Game_Message.prototype.createRubytext = function(alltext) {
var ruby_dic = $gameMessage.rubyDictionary();
     //送り仮名
     var kana = "あいうえおかきくけこさしすせそたちつてとなにぬねのはひふへほまみむめもやゆよわをんらりるれろぁぃぅぇぉっゃゅょゎヴがぎぐげござじずぜぞだぢづでどばびぶべぼぱぴぷぺぽアイウエオガギグゲゴカキクケコザジズゼゾサシスセソダヂヅデドタチツテトバビブベボナニヌネノパピプペポハヒフヘホァィゥェォマミムメモッャュョヮヤユヨワンラリルレロヴヲ"; 
     for (var i = 0; i < ruby_dic.length; i++) {
       var text = ruby_dic[i][0];//ルビが振られる漢字
       var text_re = new RegExp("(\\s|^|\\]|\\\\)"+"([^\\[]*?)"+text+"([^,]*?)"+"(\\s|\\\\|$)","mg");//前に[がない(手動でルビを振っているもの以外）辞書漢字
       //iに使用されている漢字が他の２文字以降にもある場合（例i:楽　他：音楽）、
       if (text_re.test(alltext)) {//辞書内i番の文字があるか？
         var kana_re = new RegExp("["+kana+"]","mg");//ひらがなが一文字でもある場合の正規
         var kana_ar = text.match(kana_re);
         var okurigana = "";
         if (text.match(kana_re)) {//送り仮名があった場合送り仮名を作成
           for (var j = 0; j < kana_ar.length; j++) {//送り仮名のみの文字列作成
             okurigana += kana_ar[j][0];
           }
         }    
         //ルビ制御文字に置換
         var after_text = text.replace(kana_re, "");//かなを取り除いた文字列
         alltext = alltext.replace(text_re, "$1$2\\R["+after_text+","+ruby_dic[i][1]+"]"+okurigana+"$3$4" );
         //マッチした文字列の中に複数対象があった場合
         var text_match = alltext.match(text_re);//マッチした配列
         var text_text_re = new RegExp(text,"mg");//textの正規表現
         var text_rep_count = 0;//置換する回数
         if (text_match){
           for (var k = 0; k < text_match.length; k++) {
             if(text_match[k].match(text_text_re)){
               var text_match_match = text_match[k].match(text_text_re);
               for (var l = 0; l < text_match_match.length; l++) {
                 text_rep_count++;
               }  
             }
           }  
         }  
         for (var m = 0; m < text_rep_count; m++) {
         alltext = alltext.replace(text_re, "$1$2\\R["+after_text+","+ruby_dic[i][1]+"]"+okurigana+"$3$4" );
         }         
       }  
     } 
   return alltext;  
};
Window_Base.prototype.drawText = function(text, x, y, maxWidth, align) {//再定義
    if (text&&typeof text == "string") {
        var textState = { index: 0, x: x, y: y, left: x };
        if(p_data_auto_Ruby){
          textState.text = this.convertEscapeCharacters($gameMessage.createRubytext(text));
        }else{
           textState.text = this.convertEscapeCharacters(text);
        }    
        textState.height = this.calcTextHeight(textState, false);
        var text_length_text = textState.text;//制御文字を抜いた文字長さ
         var text_length_re = new RegExp("\x1br\\[(.*?),.*?\\]","img");//textの正規表現
         text_length_text = text_length_text.replace(text_length_re, "$1" );
        if (this.textWidth(text_length_text)<maxWidth){
          if (align === 'center') {
              textState.x += (maxWidth - this.textWidth(text_length_text)) / 2;
          }else if (align === 'right') {
              textState.x += maxWidth - this.textWidth(text_length_text);
          }
        } 
    if(p_Jisage==0||(p_Jisage==2&&$gameMessage.ruby_e_hantei(textState.text)))textState.y += 6+ruby_c_size;//字下げ
          hankaku = new RegExp("[ -~｡-ﾟ]","img");//半角が含まれているもの
        var hankaku_text = text_length_text.match(hankaku);//半角がいくつ含まれているかマッチ
        if (hankaku_text == null) hankaku_text = [];
        if (hankaku_text.length == 0){
    var hankaku_width =  Math.min(maxWidth/text_length_text.length,this.textWidth(text_length_text)/text_length_text.length);//一文字あたりの幅
    hankaku_width /= 2;
        }else{  
          var hankaku_width = (this.textWidth(text_length_text)-(text_length_text.length-hankaku_text.length)*this.contents.fontSize)/text_length_text.length;//半角の状態での一文字あたりの幅
        }
     hankaku_textwidth = Math.min(maxWidth/(hankaku_text.length+((text_length_text.length-hankaku_text.length)*2)),this.contents.fontSize/2);
     zenkaku_textwidth =  Math.min(maxWidth/((hankaku_text.length+((text_length_text.length-hankaku_text.length)*2))/2),this.contents.fontSize);
        while (textState.index < textState.text.length) {
        
          switch (textState.text[textState.index]) {
          case '\x1b':
           if (this.obtainEscapeCode(textState)=='R') {
             this.makerubydraw(textState);
            }
            break;
          default:
            this.processNormalCharacterruby(textState);
            break;
          }
        }
    }else{  
      if(p_Jisage==0)y += 6+ruby_c_size;//riru追加字下げ
      this.contents.drawText(text, x, y, maxWidth, this.lineHeight(), align);
    }    
};
Window_Base.prototype.processNormalCharacterruby = function(textState) {//drawtext用
    var c = textState.text[textState.index++];
    if (c.match(hankaku)) {//半角の場合
      var w = hankaku_textwidth;
    }else{
      var w = zenkaku_textwidth;
    } 
    this.contents.drawText(c, textState.x, textState.y, w, textState.height);
    textState.x += w;
};
Window_Base.prototype.makerubydraw = function(textState) {//drawtext用
 var ruby = this.obtainEscapeParampex(textState).split(",");
    var ow = this.textWidth(ruby[0]);
    var w = 0;
    if (hankaku.test(ruby[0])){//半角が入っているか？
     for (var i = 0; i < ruby[0].match(hankaku).length; i++) {
       w += hankaku_textwidth;
     } 
     w += (ruby[0].length-ruby[0].match(hankaku).length)*zenkaku_textwidth;
    }else{
    var w = zenkaku_textwidth*ruby[0].length;
    } 
         this.contents.fontSize /= 3;
         this.contents.fontSize += ruby_c_size;
    this.contents.drawText(ruby[1], textState.x, textState.y-this.contents.fontSize*2-6+ruby_c_size, w, textState.height+10,'center');
         this.contents.fontSize -= ruby_c_size;
         this.contents.fontSize *= 3;
    this.contents.drawText(ruby[0], textState.x, textState.y, w, textState.height);
    textState.x += w;
};

Window_Base.prototype.drawTextEx = function(text, x, y) {//再定義
    if (text) {
        var textState = { index: 0, x: x, y: y, left: x };
        if(p_help_auto_Ruby){
          textState.text = this.convertEscapeCharacters($gameMessage.createRubytext(text));
        }else{
          textState.text = this.convertEscapeCharacters(text);
        }    
        textState.height = this.calcTextHeight(textState, false);
        this.resetFontSettings();
    if(p_Jisage==0||(p_Jisage==2&&$gameMessage.ruby_e_hantei(textState.text)))textState.y += 6+ruby_c_size;//riru追加
        while (textState.index < textState.text.length) {
            this.processCharacter(textState);
        }
        return textState.x - x;
    } else {
        return 0;
    }
};

riru_Ruby_Message_processEscapeCharacter =
		Window_Base.prototype.processEscapeCharacter;
Window_Base.prototype.processEscapeCharacter = function(code, textState) {
    switch (code) {
    case 'R':
        this.makeruby(textState);
      break;
    default:
      riru_Ruby_Message_processEscapeCharacter.call(this,
				code, textState);
      break;
    }
};
Window_Base.prototype.makeruby = function(textState) {
 var ruby = this.obtainEscapeParampex(textState).split(",");
    var ow = this.textWidth(ruby[0]);
         this.contents.fontSize /= 3;
         this.contents.fontSize += ruby_c_size;
    var w = this.textWidth(ruby[0]);
    this.contents.drawText(ruby[1], textState.x, textState.y-this.contents.fontSize*2-6+ruby_c_size, ow, textState.height+10,'center');
         this.contents.fontSize -= ruby_c_size;
         this.contents.fontSize *= 3;
     w = this.textWidth(ruby[0]);
    this.contents.drawText(ruby[0], textState.x, textState.y, w * 2, textState.height);
    textState.x += w;
};
Window_Base.prototype.obtainEscapeParampex = function(textState) {//riru文字も含めた判別
    var arr = /^\[(.*?)\]/.exec(textState.text.slice(textState.index));
    if (arr) {
        textState.index += arr[0].length;
        return arr[1];
    } else {
        return '';
    }
};
riru_Ruby_Message_processNewLine =
		Window_Base.prototype.processNewLine;
Window_Base.prototype.processNewLine = function(textState) {
    riru_Ruby_Message_processNewLine.call(this,textState);
    if(p_Jisage==0||(p_Jisage==2&&$gameMessage.ruby_e_hantei(textState)))textState.height -= Math.max(3+ruby_c_size, 2);//riru追加箇所
};
Window_Message.prototype.needsNewPage = function(textState) {//再定義
    return (!this.isEndOfText(textState) &&
            textState.y + textState.height > this.contents.height-ruby_c_size+3);
};

})();
