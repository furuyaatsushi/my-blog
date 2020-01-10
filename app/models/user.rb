class User < ApplicationRecord
  # Include default devise modules. Others available are:
  # :confirmable, :lockable, :timeoutable, :trackable and :omniauthable
  devise :database_authenticatable, :registerable,
         :recoverable, :rememberable, :validatable

  mount_uploader :icon, IconsUploader

  has_many :articles
  has_many :comments
  has_many :favorites, dependent: :destroy
  has_many :favorited_articles, through: :favorites, source: :article
end
