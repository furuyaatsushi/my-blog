# コンセプト
構造としてはいたって単純なブログアプリ。
Twetterとの連携や、画像の複数投稿、プレビューなどのやったこのない機能にチャレンジする。
また、最終課題の時の経験を活かした機能を実装する。(アウトプット)
デプロイ経験がAWSでのみのため、herokuを用いたデプロイに挑戦する。

# DB設計

## usersテーブル

|Column|Type|Options|
|------|----|-------|
|nickname|string|null: false|
|email|string|null: false|
|password|string|null: false|
|profile|text||
|icon|string||

## Association