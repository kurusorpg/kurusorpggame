// Generated by RPG Maker.
// Do not edit this file directly.
var $plugins =
[
{"name":"GraphicalDesignMode","status":false,"description":"GUI画面デザインプラグイン\r\nパラメータを変更したら「プロジェクトの保存」（Ctrl+S）","parameters":{"デザインモード":"OFF","自動保存":"OFF","モバイル版作成":"ON","モバイル偽装":"OFF","ウィンドウ透過":"OFF","グリッドサイズ":"48","パディング":"","フォントサイズ":"","行の高さ":"","背景透明度":""}},
{"name":"YEP_CoreEngine","status":true,"description":"v1.18 Needed for the majority of Yanfly Engine Scripts. Also\ncontains bug fixes found inherently in RPG Maker.","parameters":{"---Screen---":"","Screen Width":"816","Screen Height":"624","Scale Battlebacks":"true","Scale Title":"true","Scale Game Over":"true","Open Console":"false","Reposition Battlers":"true","GameFont Load Timer":"0","---Gold---":"","Gold Max":"99999999","Gold Font Size":"30","Gold Icon":"0","Gold Overlap":"a lotta","---Items---":"","Default Max":"99","Quantity Text Size":"20","---Stats---":"","Max Level":"99","Actor MaxHP":"9999","Actor MaxMP":"9999","Actor Parameter":"999","Enemy MaxHP":"999999","Enemy MaxMP":"9999","Enemy Parameter":"999","---Battle---":"","Animation Rate":"4","Flash Target":"false","---Font---":"","Chinese Font":"SimHei, Heiti TC, sans-serif","Korean Font":"Dotum, AppleGothic, sans-serif","Default Font":"GameFont, Verdana, Arial, Courier New","Font Size":"28","Text Align":"left","---Windows---":"","Digit Grouping":"true","Line Height":"36","Icon Width":"32","Icon Height":"32","Face Width":"144","Face Height":"144","Window Padding":"18","Text Padding":"6","Window Opacity":"192","Gauge Outline":"true","Gauge Height":"18","Menu TP Bar":"true","---Window Colors---":"","Color: Normal":"0","Color: System":"16","Color: Crisis":"17","Color: Death":"18","Color: Gauge Back":"19","Color: HP Gauge 1":"20","Color: HP Gauge 2":"21","Color: MP Gauge 1":"22","Color: MP Gauge 2":"23","Color: MP Cost":"23","Color: Power Up":"24","Color: Power Down":"25","Color: TP Gauge 1":"28","Color: TP Gauge 2":"29","Color: TP Cost Color":"29"}},
{"name":"YEP_BattleEngineCore","status":true,"description":"v1.38a Have more control over the flow of the battle system\nwith this plugin and alter various aspects to your liking.","parameters":{"---General---":"","Action Speed":"agi","Default System":"dtb","---Escape---":"","Escape Ratio":"0.5 * $gameParty.agility() / $gameTroop.agility()","Fail Escape Boost":"0.1","---Animation---":"","Animation Base Delay":"0","Animation Next Delay":"0","Certain Hit Animation":"0","Physical Animation":"0","Magical Animation":"0","Enemy Attack Animation":"0","Reflect Animation":"42","Motion Waiting":"false","---Frontview---":"","Front Position X":"Graphics.boxWidth / 8 + Graphics.boxWidth / 4 * index","Front Position Y":"Graphics.boxHeight - 180","Front Actor Sprite":"false","Front Sprite Priority":"1","---Sideview---":"","Home Position X":"Graphics.boxWidth - 216 + index * 32","Home Position Y":"Graphics.boxHeight - 344 + index * 48","Side Sprite Priority":"1","---Sprites---":"","Default X Anchor":"0.5","Default Y Anchor":"1.0","Step Distance":"48","Flinch Distance":"12","Show Shadows":"true","---Damage Popups---":"","Popup Duration":"128","Newest Popup Bottom":"true","Popup Overlap Rate":"0.9","Critical Popup":"255, 0, 0, 160","Critical Duration":"60","---Tick-Settings---":"","Timed States":"false","Timed Buffs":"false","Turn Time":"100","AI Self Turns":"true","---Window Settings---":"","Lower Windows":"true","Window Rows":"4","Command Window Rows":"4","Command Alignment":"center","Start Actor Command":"true","Current Max":"false","---Selection Help---":"","Mouse Over":"true","Select Help Window":"false","User Help Text":"ユーザー","Ally Help Text":"味方","Allies Help Text":"味方","Enemy Help Text":"敵","Enemies Help Text":"敵","All Help Text":"全ての %1","Random Help Text":"%2 ランダムな %1","---Enemy Select---":"","Visual Enemy Select":"false","Show Enemy Name":"false","Show Select Box":"false","Enemy Font Size":"20","Enemy Auto Select":"this.furthestRight()","---Actor Select---":"","Visual Actor Select":"false","---Battle Log---":"","Show Emerge Text":"false","Show Pre-Emptive Text":"true","Show Surprise Text":"true","Optimize Speed":"true","Show Action Text":"false","Show State Text":"false","Show Buff Text":"false","Show Counter Text":"true","Show Reflect Text":"true","Show Substitute Text":"true","Show Fail Text":"false","Show Critical Text":"false","Show Miss Text":"false","Show Evasion Text":"false","Show HP Text":"false","Show MP Text":"false","Show TP Text":"false"}},
{"name":"YEP_AutoPassiveStates","status":true,"description":"アクター、敵、スキル、装備のステートをパッシブにできます","parameters":{}},
{"name":"YEP_MessageCore","status":true,"description":"メッセージの表示方法や機能をカスタマイズすることができます。","parameters":{"---一般---":"","Default Rows":"4","Default Width":"Graphics.boxWidth","Face Indent":"Window_Base._faceWidth + 24","Fast Forward":"Input.isPressed('pagedown')","Word Wrapping":"false","Description Wrap":"false","---フォント---":"","Font Name":"GameFont","Font Size":"28","Font Size Change":"12","Font Changed Max":"96","Font Changed Min":"12","---Name Box---":"","Name Box Buffer X":"-28","Name Box Buffer Y":"0","Name Box Padding":"this.standardPadding() * 4","Name Box Color":"3","Name Box Clear":"false","Name Box Added Text":"\\c[6]"}},
{"name":"YEP_X_ActSeqPack1","status":false,"description":"Battle Engine Coreに対する拡張プラグインです","parameters":{"Default Volume":"90","Default Pitch":"100","Default Pan":"0"}},
{"name":"YEP_X_ActSeqPack2","status":false,"description":"Battle Engine Coreのアクションシーケンスに視覚的な\n機能を追加します。(YEP_BattleEngineCore.jsが必要です)","parameters":{}},
{"name":"YEP_X_ActSeqPack3","status":false,"description":"Battle Engine Coreのアクションシーケンスに、カメラ制御\nの機能を追加します。(YEP_BattleEngineCore.jsが必要です)","parameters":{"Camera Option":"Battle Camera"}},
{"name":"------------------------","status":false,"description":"----------------------------------------------------------------------------------","parameters":{}},
{"name":"MPP_TouchTargetSelect","status":true,"description":"【MMP ver.1.0】戦闘時のターゲット選択で、キャラクターをタッチして選択できるようにします。","parameters":{"=== Actor ===":"","Actor Window View?":"true","Actor Arrow Name":"","Actor Arrow Pos":"0","Actor Arrow Width":"0","Actor Arrow Rate":"4","Actor Arrow Rotation":"0","Actor Arrow Speed":"0","=== Enemy ===":"","Enemy Window View?":"true","Enemy Arrow Name":"","Enemy Arrow Pos":"0","Enemy Arrow Width":"0","Enemy Arrow Rate":"4","Enemy Arrow Rotation":"0","Enemy Arrow Speed":"0"}},
{"name":"BattleBalanceCustom","status":true,"description":"【MPP ver.2.0】デフォルトで変更できない戦闘バランスを調整します。","parameters":{"=== Buff ===":"","Max Buff":"2","Buff Rate":"0.25, 0.25, 0.25, 0.25, 0.25, 0.25, 0.25, 0.25","Icon Buff Start":"32,40","Icon Debuff Start":"48,56","=== Custom Formula ===":"","Speed":"a.agi + rand(floor(5 + a.agi / 4))","Certain Hit Rate":"successRate","Physical Hit Rate":"successRate * a.hit","Magical Hit Rate":"successRate","Certain Eva Rate":"0","Physical Eva Rate":"b.eva","Magical Eva Rate":"b.mev","Apply Critical":"damage * 3","Critical Rate":"a.cri * (1 - b.cev)","Luk Effect Rate":"1.0 + (a.luk - b.luk) * 0.001","Charge TP By Damage":"floor(50 * damageRate * a.tcr)","Init TP":"rand(25)","Encounter Count":"rand(step) + rand(step) + 1","Escape Ratio":"0.5 * $gameParty.agility() / $gameTroop.agility()"}},
{"name":"ChangeWindowTouchPolicy","status":true,"description":"ウィンドウタッチ仕様変更プラグイン</span></td>\n</tr>\n<tr>\n<td id=\"L18\" class=\"blob-num js-line-number\" data-line-number=\"18\"></td>\n<td id=\"LC18\" class=\"blob-code blob-code-inner js-file-line\"><span class=\"pl-c\"> *","parameters":{"枠外タッチ動作</span></td>":"キャンセル</span></td>"}},
{"name":"ExtendSearchLimit","status":true,"description":"自動移動時の探索範囲を拡張します。","parameters":{"searchDistance":"17"}},
{"name":"Gamefocus","status":true,"description":"ゲームがアクティブウィンドウでなくなった際に、\r\nオーディオかビデオ、もしくはその両方を一時停止します。","parameters":{"Pause Audio":"true","Pause Graphics":"true"}},
{"name":"SSEP_BattleSpeedUp_v2","status":true,"description":"[ver2.01] 戦闘速度を上げるプラグインです。YanflyEngine対応。\n利用時は、必ずYanflyEngineの後に読み込んでください。","parameters":{"---General Setting---":"","BattleSpeed (Default)":"2","BattleSpeed (Boost)":"3","OkayKeyBoost":"true","VisibleSwitch":"false","BoostToggleSwitch":"shift","---Detail Setting---":"","StateIcon":"40","StateOverlay":"8","Weapon":"12","Motion":"12","Balloon":"12","Damage":"90","DamageMin":"60","--BattleLog Setting--":"","LogAnime BaseDelay":"8","LogAnime NextDelay":"12","LogWaitCount Default":"1","LogWaitCount Boost":"2","---Switch Setting---":"","SE BoostON":"Decision2","SE BoostOFF":"Decision2","SE Volume":"50","SwitchImage":"Balloon","SwitchX":"10","SwitchY":"10","SwitchWidth":"48","SwitchHeight":"48","SwitchTop":"2","SwitchLeft":"1","SwitchAnimePattern":"8","SwitchAnimeSpeed":"5","---YEP BattleCore---":"","YEP Battle MotionWait":"20","---YEP ATB---":"","YEP ATB BoostSwitch":"true","---ATB Speed---":"","ATB Speed(Default)":"1","ATB Speed(Boost)":"2","---YEP Victory AM---":"","YEP Victory Wait":"true"}},
{"name":"SmartPath","status":true,"description":"イベントもしくはプレイヤーに、高度な経路探索を提供します。","parameters":{}},
{"name":"TDDP_MouseSystemEx","status":true,"description":"マウスカーソルのカスタム、メニューアイテムの\nハイライトなどを行います。詳しくはHelpをご覧ください。","parameters":{"---Custom Cursor---":"","Use Custom Cursor?":"false","Custom Cursor Image":"default.png","Custom Cursors Folder":"img/cursors/","---Auto Change Cursors---":"","Show Text Cursor":"","Transfer Cursor":"","Change Gold Cursor":"","Change Items Cursor":"","Change Weapons Cursor":"","Change Armors Cursor":"","---Auto Change Icons---":"","Show Text Icon":"","Transfer Icon":"","Change Gold Icon":"","Change Items Icon":"","Change Weapons Icon":"","Change Armors Icon":"","---Hover Select---":"","Highlight On Hover":"false","Hover SE Cooldown":"4","---Customizeable Notetags---":"","No Auto Cursor Notetag":"no_auto_cursor!","No Auto Icon Notetag":"no_auto_icon!","Click Notetag":"click_activate!","Hover Notetag":"hover_activate!","Leave Notetag":"leave_activate!","---Mouse Icons---":"","Hide Cursor":"false","Icon Offset X":"9","Icon Offset Y":"14","---Mouse Icon Tags---":"","Icon Tag 1":"quest: 191","Icon Tag 2":"chest: 210","Icon Tag 3":"door: 106","Icon Tag 4":"world_map: 190","Icon Tag 5":"potion: 176","Icon Tag 6":"poison: 177","Icon Tag 7":"four_leaf_clover: 182","Icon Tag 8":"notebook: 187","Icon Tag 9":"letter: 192","Icon Tag 10":"key: 195","Icon Tag 11":"key: 195","Icon Tag 12":"key: 195","Icon Tag 13":"key: 195","Icon Tag 14":"key: 195","Icon Tag 15":"key: 195"}},
{"name":"Torigoya_AddStateSkill","status":true,"description":"スキル使用時に使用者にステートを追加/削除できるようにします","parameters":{}},
{"name":"TMTopFix","status":true,"description":"パーティの先頭にいるアクターの並び替えを禁止します。","parameters":{}},
{"name":"YED_Hospital","status":true,"description":"パーティの回復、支払などの\n病院機能を追加することができます。","parameters":{"[Default Price]":"","HP Price":"10","MP Price":"20","State Price":"100","[Visual Setting]":"","Nurse Face":"People4, 1","Nurse Name":"Loli","Nurse Message":"こんにちは、今日はどうされましたか？","Heal One Help":"メンバーを個別に回復させます","Heal All Help (Treat)":"%1Gを払ってメンバー全員を回復させます","Heal All Help (Healthy)":"回復が必要なメンバーが居ません","Exit Help":"外に出る","Actor Help (Treat)":"%1は回復が必要だ","Actor Help (Healthy)":"%1は回復の必要はない","Heal One Command":"1人を回復する","Heal All Command":"全員を回復する","Exit Command":"Exit","Text Alignment":"center"}},
{"name":"Yami_SkipTitle","status":false,"description":"テストプレイ用にタイトルシーンを飛ばすことができます。","parameters":{}},
{"name":"BattleEffectPopup","status":true,"description":"戦闘行動結果ポップアッププラグイン","parameters":{"クリティカル":"critical","クリティカルカラー":"255,0,0,255","回避":"avoid","回避カラー":"0,128,255,255","ミス":"miss","ミスカラー":"0,0,0,0","魔法反射":"reflect","魔法反射カラー":"0,128,255,255","反撃":"counter","反撃カラー":"0,128,255,255","弱点":"weak","弱点カラー":"0,255,128,255","耐性":"resist","耐性カラー":"0,0,128,255","味方ダメージカラー":"0,0,0,0","敵ダメージカラー":"0,0,0,0","フォントサイズ":"42","メッセージ最大幅":"240","フラッシュ時間":"0","X座標補正":"0","Y座標補正":"0","画像使用":"ON"}},
{"name":"TMNamePop","status":true,"description":"イベントの頭上に文字列を表示する機能を追加します。","parameters":{"backOpacity":"96","fontSize":"20","fontOutlineWidth":"4","fontOutlineColor":"rgba(0, 0, 0, 0.5)","width":"160"}},
{"name":"UTA_MessageSkip","status":true,"description":"特定キーを押す事でメッセージをスキップできるようにします。","parameters":{"Skip Key":"control","Show Trace":"false"}},
{"name":"Hurry_ActorSpriteAdjust","status":true,"description":"パーティ人数によってSVアクターの位置を自動調整します","parameters":{"CenterAdjustX":"16","CenterAdjustY":"24","ActorHomeX":"600","ActorHomeY":"280","DistanceX":"32","DistanceY":"48"}},
{"name":"Hurry_AnimationCut","status":true,"description":"オプションで戦闘アニメーションをオフにすることができます","parameters":{"戦闘アニメ非表示":"バトルスピードアップ"}},
{"name":"------------------------","status":false,"description":"----------------------------------------------------------------------------------","parameters":{}},
{"name":"MOG_BattleHud","status":true,"description":"(v3.1) Permite customizar o layout de batalha.","parameters":{"Hud X-Axis":"-100","Hud Y-Axis":"460","Hud Space X":"0","Hud Space Y":"0","Vertical Mode":"false","Command Auto Adjust":"false","Max Battle Members":"4",">> LAYOUT OVERLAY =========":"","Layout2 Visible":"false","Layout2 X-Axis":"0","Layout2 Y-Axis":"0",">> TURN ===================":"","Turn Visible":"true","Turn X-Axis":"0","Turn Y-Axis":"0",">> FACE ===================":"","Face Visible":"true","Face X-Axis":"70","Face Y-Axis":"70","Face Shake Animation":"true","Face Zoom Animation":"true","Face Frame Animation":"true","Face Priority":"0",">> NAME ===================":"","Name Visible":"true","Name X-Axis":"90","Name Y-Axis":"-20","Name Font Size":"20","Name Bold Size":"4","Name Font Italic":"false",">> HP ===================":"","HP Meter Visible":"true","HP Meter X-Axis":"113","HP Meter Y-Axis":"39","HP Meter Angle":"0","HP Meter Flow Anime":"false","HP Number Visible":"true","HP Number Align type":"0","HP Number X-Axis":"175","HP Number Y-Axis":"23","MaxHP Number Visible":"false","MaxHP Number X-Axis":"185","MaxHP Number Y-Axis":"40",">> MP ===================":"","MP Meter Visible":"true","MP Meter X-Axis":"113","MP Meter Y-Axis":"77","MP Meter Angle":"0","MP Meter Flow Anime":"false","MP Number Visible":"true","MP Number Align type":"0","MP Number X-Axis":"175","MP Number Y-Axis":"61","MaxMP Number Visible":"false","MaxMP Number X-Axis":"196","MaxMP Number Y-Axis":"78",">> TP ===================":"","TP Meter Visible":"true","TP Meter X-Axis":"113","TP Meter Y-Axis":"115","TP Meter Angle":"0","TP Meter Flow Anime":"false","TP Number Visible":"true","TP Number Align type":"0","TP Number X-Axis":"175","TP Number Y-Axis":"99","MaxTP Number Visible":"false","MaxTP Number X-Axis":"185","MaxTP Number Y-Axis":"116",">> ATB ===================":"","ATB Meter Visible":"true","ATB Meter X-Axis":"80","ATB Meter Y-Axis":"140","ATB Meter Angle":"0","ATB Meter Flow Anime":"false",">> STATES ===================":"","States Visible":"true","States X-Axis":"10","States Y-Axis":"0",">> W COMMAND ===================":"","W Command X-Axis":"0","W Command Y-Axis":"-15","W Command Width":"192","W Command Height":"180","Layout Command":"true","L Command X-Axis":"0","L Command Y-Axis":"0",">> W PARTY ===================":"","W Party X-Axis":"200","W Party Y-Axis":"200","W Party Width":"192","W Party Height":"180","Layout Party":"true","L Party X-Axis":"-310","L Party Y-Axis":"-45",">> W HELP ===================":"","W Help X-Axis":"0","W Help Y-Axis":"0","W Help Width":"816","W Help Height":"108","Layout Help":"true","L Help X-Axis":"0","L Help Y-Axis":"0",">> W SKILL ===================":"","W Skill X-Axis":"0","W Skill Y-Axis":"444","W Skill Width":"816","W Skill Height":"180","W Skill maxCols":"2","Layout Skill":"true","L Skill X-Axis":"0","L Skill Y-Axis":"-67",">> W ITEM ===================":"","W Item X-Axis":"0","W Item Y-Axis":"444","W Item Width":"816","W Item Height":"180","W Item maxCols":"2","Layout Item":"true","L Item X-Axis":"0","L Item Y-Axis":"-67",">> W ACTOR ===================":"","W Actor X-Axis":"0","W Actor Y-Axis":"444","W Actor Width":"816","W Actor Height":"180","W Actor maxCols":"1","Layout Actor":"true","L Actor X-Axis":"0","L Actor Y-Axis":"-67",">> W ENEMY ===================":"","W Enemy X-Axis":"0","W Enemy Y-Axis":"444","W Enemy Width":"816","W Enemy Height":"180","W Enemy maxCols":"2","Layout Enemy":"true","L Enemy X-Axis":"0","L Enemy Y-Axis":"-67",">> SCREEN LAYOUT ===================":"","Screen Layout":"true","Screen X-Axis":"0","Screen Y-Axis":"0",">> CUSTOM POSITION ===================":"","Custom Position 1":"","Custom Position 2":"","Custom Position 3":"","Custom Position 4":"","Custom Position 5":"","Custom Position 6":"","Custom Position 7":"","Custom Position 8":""}},
{"name":"MOG_BattleCommands","status":true,"description":"(v1.1) Comandos de batalhas animados por imagens.","parameters":{"Mode":"0","Layout X-axis":"200","Layout Y-axis":"30","Com X-axis":"300","Com Y-axis":"0","Arrow":"true","Arrow X-axis":"5","Arrow Y-axis":"0","Zoom Animation":"true","Zoom Rate":"1.30","Zoom Speed":"0.015","Zoom Loop":"true","Slide Animation":"true","Slide X":"30","Slide Y":"0","Com Name":"false","Com Name X-axis":"55","Com Name Y-axis":"75","Com Font Size":"22","Cursor":"true","Cursor X-axis":"0","Cursor Y-axis":"0","Cursor Slide":"true","Row Max":"5","Ring Range":"70","Ring Motion":"true","Pi Range":"2.0","Side Input":"true","Face X-axis":"0","Face Y-axis":"-4000"}},
{"name":"MOG_BattleCamera","status":false,"description":"(v1.1) Adiciona o efeito de camera de batalha.","parameters":{"Cam Rate":"50","Cam Speed":"120","Cam Focus Delay":"20","Cam X-Axis":"0","Cam Y-Axis":"0"}},
{"name":"MOG_ActorPictureCM","status":true,"description":"(v1.3) Apresenta a imagem do personagem durante a seleção de comandos.","parameters":{"CM 1 Visible":"true","CM 1 X-Axis":"150","CM 1 Y-Axis":"0","CM 2 Visible":"false","CM 2 X-Axis":"0","CM 2 Y-Axis":"0"}},
{"name":"MOG_BattleCursor","status":true,"description":"(v1.8) Adiciona flechas de indicação nos alvos selecionados.","parameters":{"X-Axis":"0","Y-Axis":"0","Name Visible":"true","Name X-Axis":"0","Name Y-Axis":"0","Font Size":"18","Float Effect":"true","Sort X-Axis":"true","Window Visible":"false","Touch Selection":"true","Help All Allies":"All Allies","Help All Enemies":"All Enemies"}},
{"name":"DevToolsManage","status":false,"description":"デベロッパツール管理プラグイン","parameters":{"開始時に起動":"OFF","常に前面表示":"OFF","デベロッパツール表示位置":"0,0,800,600","最小化切替キー":"F8","リロードキー":"F12","画面の左寄せキー":"","高速化切替キー":"","強制戦闘勝利キー":"","スクリプト実行キー":"","フリーズキー":"","FPS表示":"OFF","タイトルカット":"OFF","高速開始":"OFF","高速スピード":"2","モバイル偽装":"OFF","メニューバー表示":"ON","クリックメニュー":"2"}},
{"name":"OriginalTimer","status":true,"description":"オリジナルタイマー","parameters":{"TimerSave":"NO"}},
{"name":"------------------------","status":false,"description":"----------------------------------------------------------------------------------","parameters":{}},
{"name":"Rubi_riru","status":true,"description":"ルビ振りを行います。用語登録によるオートルビ振り機能つき。","parameters":{"Auto Ruby":"true","Help Auto Ruby":"true","Database Auto Ruby":"true","Jisage":"0","Ruby Size":"1"}},
{"name":"TYA_SymbolEncount","status":true,"description":"シンボルエンカウント作成の補助を行います。\r\n詳しい使い方はヘルプを参照してください。","parameters":{"situationVariables":"1"}},
{"name":"UCHU_MobileOperation","status":true,"description":"スマホ操作用プラグイン。横持ち/縦持ちに対応した仮想ボタン、\r\nタッチ操作の方法を追加拡張し、スマホプレイを快適にします。","parameters":{"---PC Option---":"","PC BtnDisplay":"false","PC TouchExtend":"true","---File Path---":"","DPad Image":"./img/system/DirPad.png","ActionBtn Image":"./img/system/ActionButton.png","CancelBtn Image":"./img/system/CancelButton.png","---Button Customize---":"","Button Opacity":"0.7","Vertical BtnZoom":"1.7","Tablet BtnZoom":"0.8","TabVertical BtnZoom":"1.1","HideButton OnMessage":"true","DPad Visible":"true","DPad Size":"200","DPad Margin":"10; 10","DPad Orientation":"left; bottom","DPad OpelationRange":"1.3","DPad DiagonalRange":"0.3","ActionBtn Visible":"true","ActionBtn Size":"100","ActionBtn Margin":"10; 90","ActionBtn Orientation":"right; bottom","CancelBtn Visible":"true","CancelBtn Size":"100","CancelBtn Margin":"110; 10","CancelBtn Orientation":"right; bottom","---TouchInput Extend---":"","Flick PageUp-PageDown":"true","HoldCanvas ActionBtn":"true","OutCanvas CancelBtn":"false","OutCanvas ActionBtn":"false","--!need AnalogMove.js!--":"","Analog Move":"false","Analog Sensitivity":"1.8"}},
{"name":"TinyGetInfoWnd","status":true,"description":"マップ上でアイテムの入手/消失を小さなウィンドウで表示します。","parameters":{"Event Command Switch":"22","Y position type":"1","textGainItem":"%1ゲット！","textLoseItem":"%1をうしなった...。","SE filename":"coin","SE volume":"90","SE pitch":"100"}},
{"name":"RetryBattle","status":true,"description":"戦闘リトライプラグイン","parameters":{"雑魚敵でリトライ可能":"ON","ボス敵でリトライ可能":"ON","コマンドリトライ":"リトライ（バトルをやり直す）","コマンドロード":"ファイルをロードする","コマンドタイトル":"タイトルへ　戻る","ウィンドウY座標":"448","メニュー画面を表示":"OFF","メッセージ":"\\i[1]\\c[2]バトルに　負けてしまった…\\c[0]\\i[1]","メッセージY座標":"360","フォントサイズ":"32"}},
{"name":"UR65_SmartPhoneUI","status":true,"description":"スマホ用UI  ver 1.0.0\nUIのサイズをスマートフォン向けに最適化します。","parameters":{"タイトル":"0","メニュー":"0","アイテム":"0","スキル":"0","装備":"0","オプション":"0","ゲーム終了":"0","戦闘":"0","ショップ":"1","イベント関係":"0","アイコン位置修正":"0"}},
{"name":"DP_MapZoom","status":true,"description":"マップの拡大率を制御します。v0.452(20160410)","parameters":{"Base Scale":"1","Encount Effect":"true","Camera Controll":"true","Use Hack":"true"}},
{"name":"CustomizeConfigDefault","status":true,"description":"オプションデフォルト値設定プラグイン","parameters":{"常時ダッシュ":"ON","コマンド記憶":"ON","BGM音量":"100","BGS音量":"100","ME音量":"100","SE音量":"100","常時ダッシュ消去":"OFF","コマンド記憶消去":"OFF","BGM音量消去":"OFF","BGS音量消去":"OFF","ME音量消去":"OFF","SE音量消去":"OFF"}},
{"name":"TMMapHpGauge","status":true,"description":"マップシーンに顔グラフィックとＨＰゲージを表示します。\n必要に応じてＭＰや変数などをゲージで表示することもできます。","parameters":{"gaugeWindowX":"0","gaugeWindowY":"0","gaugeWindowWidth":"288","gaugeWindowHeight":"64","gaugeAType":"HP","gaugeAX":"12","gaugeAY":"12","gaugeAWidth":"144","gaugeAHeight":"36","gaugeAFontSize":"28","gaugeAParam":"0","gaugeAMax":"0","gaugeAName":"AP","gaugeAColor":"#ff60c0 #ffa0e0","gaugeBType":"","gaugeBX":"12","gaugeBY":"12","gaugeBWidth":"144","gaugeBHeight":"36","gaugeBFontSize":"28","gaugeBParam":"0","gaugeBMax":"0","gaugeBName":"BP","gaugeBColor":"#ff60c0 #ffa0e0","gaugeCType":"","gaugeCX":"12","gaugeCY":"12","gaugeCWidth":"144","gaugeCHeight":"36","gaugeCFontSize":"28","gaugeCParam":"0","gaugeCMax":"0","gaugeCName":"CP","gaugeCColor":"#ff60c0 #ffa0e0","faceOffsetX":"-4","faceOffsetY":"-4","stateIconMax":"4","stateIconX":"156","stateIconY":"24","shakeTime":"20","startVisible":"1","collideOpacity":"128","messageBusyHide":"1","eventBusyHide":"1"}}
];
