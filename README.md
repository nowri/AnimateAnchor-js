% AnimateAnchor.js
% 
% 

AnimateAnchor.js
================

概要
----

AnimateAnchor.jsを読み込むと自動的にアンカーリンクがアニメーションするようになります。要jQuery。\
より細かく設定する場合は、jsファイルの下３行、自動実行の記述を削除し、下記サンプル等を参考の上設定ください。

主な機能
--------

-   ハッシュアクセスした時アニメーション
-   アンカーリンクをクリック時、アニメーション移動させる
-   jQueryと同じ書式で要素選択し、アニメーション移動させる
-   scrollTopを数値で指定し、アニメーション移動させる
-   アニメーション時間をミリ秒指定、jQuery.easing対応

ダウンロード
------------

[smoothAnchor2.js](../src/AnimateAnchor.js)

サンプル
--------

[animAllAnchorTop](sample1.html)
:   全ての\#で始まるアンカーリンクにアニメーションを適用させる
[animAnchorTopByNumber](sample2.html)
:   scrollTopを数値で指定しアニメーション
[animAnchorTopByElemName](sample3.html)
:   クリックターゲットとアンカーターゲットを個別に設定する
[animAnchorTopByHash](sample4.html)
:   \#で始まるアンカーリンクを個別にアニメーション設定する
[animOnHashAccess](sample5.html)
:   ハッシュアクセスした時アニメーション

動作環境
--------

Galaxy Tab + Android2\
でうまく動かないことを確認しており調査中です。\
この環境では通常のページ内アンカーも同じくリンク先に飛んでから元に戻ってしまいます。

以下動作確認した環境です。

### Mac

-   Safari 5.1
-   Chrome
-   Firefox

### Windows

-   Chrome
-   Firefox 3.6
-   Windows XP + IE6
-   IE7
-   Windows XP + IE8
-   Windows7 + IE9
-   Windows8 + IE10

### Mobile

-   GALAXY S + Android 2
-   ARROWS Tab LTE F-01D + Android 3
-   iPhone 4S + Safari + iOS6
-   iPhone 4S + Chrome + iOS6
-   iPad2 + Safari + iOS5
-   iPad2 + Chrome + iOS5
