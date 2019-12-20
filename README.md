# コンセプト
構造としてはいたって単純なブログアプリ。
<br>Twitterとの連携や、いいね機能、画像プレビューなどのやったこのない機能にチャレンジする。
<br>また、最終課題の時の経験を活かした機能を実装する。(アウトプット)
<br>デプロイ経験がAWSでのみのため、herokuを用いたデプロイに挑戦する。


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


## articleテーブル
投稿された記事は複数の画像を投稿できる。
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


## tagsテーブル
記事にはタグをつけることができる。
* すでにあるものに関してはタグのidを紐付け、新しいものに関しては作成した上で紐づける。

|Column|Type|Options|
|------|----|-------|
|tag|string|null: false|

## Association

