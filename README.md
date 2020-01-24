# My Blog
ご覧いただきありがとうございます。
<br>私はスクールを卒業し、現在も日々プログラミング学習をしております。このアプリケーションはいたって単純なブログアプリです。コンセプトとしては、
* Twitterとの連携や、いいね機能、画像プレビューなどのやったこのない機能にチャレンジする。
* 最終課題の時の経験を活かした機能を実装する。(アウトプット)
* hamlでのマークアップに慣れてきて忘れがちなため、HTMLを用いる。
<br>などの目標を立て制作を行いました。


# DB設計

## ER図

<img width="984" alt="スクリーンショット 2019-12-21 2 13 32" src="https://user-images.githubusercontent.com/52952732/71274846-99777c80-2397-11ea-905c-2b4fd5cbef7f.png">

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

- has_many :articles
- has_many :articles, through: :comments
- has_many :articles,through: :favorites


## articleテーブル
投稿された記事は複数の画像を投稿できる。
<br>複数のタグをつけることができ、コメントやいいねをつけることができる。

|Column|Type|Options|
|------|----|-------|
|title|string|null: false|
|content|string|null: false|
|user_id|integer|null: false, foregin_key: true|

## Association

- has_many :users, through: :comments
- has_many :favorites
- has_many :tags, through: :article_tags
- has_many :users, through: :favorite
- has_many :images
- belongs_to :user

## imagesテーブル
一つの記事に複数の画像投稿が可能

|Column|Type|Options|
|------|----|-------|
|content|string|null: false|
|article_id|integer|null: false, foregin_key: true|

## Association

- belongs_to :article

## commentsテーブル
投稿されたブログにコメントを投稿できる。
* 文字が入力されてない状態では送信ボタンdisabledにする

|Column|Type|Options|
|------|----|-------|
|content|text|null: false|
|user_id|integer|null: false, foregin_key: true|
|article_id|integer|null: false, foregin_key: true|

## Association

- belongs_to :user
- belongs_to :article

## tagsテーブル
記事にはタグをつけることができる。
* すでにあるものに関してはタグのidを紐付け、新しいものに関しては作成した上で紐づける。

|Column|Type|Options|
|------|----|-------|
|name|string|null: false|

## Association

- belongs_to :article
- belongs_to :tag

## favoritesテーブル
記事にはお気に入り(いいね)をつけることができ、その数を表示したりいいね欄から記事に飛べる。

|Column|Type|Options|
|------|----|-------|
|article_id|integer|null: false, foregin_key: true|
|user_id|integer|null: false, foregin_key: true|

## Association

- belongs_to :user
- belongs_to :article

## article_tagsテーブル
一つの記事は複数のタグを持ち、一つのタグは複数の記事を持つ。

|Column|Type|Options|
|------|----|-------|
|article_id|integer|null: false, foregin_key: true|
|tag_id|integer|null: false, foregin_key: true|

## Association

- belongs_to :article
- belongs_to :tag