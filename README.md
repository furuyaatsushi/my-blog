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


## postsテーブル
投稿されたブログは複数の画像を投稿できる。
<br>複数のタグをつけることができ、コメントやいいねをつけることができる。

|Column|Type|Options|
|------|----|-------|
|title|string|null: false|
|content|string|null: false|
|user_id|integer|null: false|

## Association


## commentsテーブル
投稿されたブログにコメントを投稿できる。
* 文字が入力されてない状態では送信ボタンdisabledにする

|Column|Type|Options|
|------|----|-------|
|comment|text|null: false|
|user_id|integer|null: false|
|post_id|integer|null: false|

## Association
