# コンセプト
構造としてはいたって単純なブログアプリ。
Twitterとの連携や、画像の複数投稿、プレビューなどのやったこのない機能にチャレンジする。
また、最終課題の時の経験を活かした機能を実装する。(アウトプット)
デプロイ経験がAWSでのみのため、herokuを用いたデプロイに挑戦する。


# DB設計

## usersテーブル
ユーザーは自己紹介文とアイコンを設定できる。

|Column|Type|Options|
|------|----|-------|
|nickname|string|null: false|
|email|string|null: false|
|password|string|null: false|
|profile|text||
|icon|string||

## Association


## postテーブル
投稿されたブログは複数の画像を投稿できる。
<br>複数のタグをつけることができ、コメントやいいねをつけることができる。

|Column|Type|Options|
|------|----|-------|
|title|string|null: false|
|content|string|null: false|

## Association


## commentテーブル