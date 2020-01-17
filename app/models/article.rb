class Article < ApplicationRecord

  belongs_to :user
  has_many :images, dependent: :destroy
  has_many :comments, dependent: :destroy
  has_many :favorites, dependent: :destroy
  has_many :favorited_users, through: :fovorite, source: :user
  has_many :article_tags, dependent: :destroy
  has_many :tags, through: :article_tag

  accepts_nested_attributes_for :images

  validates :title, presence: true, length: { maximum: 40 }
  validates :content, presence: true

  validates_associated :images
  validates :images, presence: true
end
