class Article < ApplicationRecord

  belongs_to :user
  has_many :images
  has_many :comments
  has_many :favorites
  has_many :favorited_users, through: :fovorite, source: :user

  accepts_nested_attributes_for :images

  validates :title, presence: true, length: { maximum: 40 }
  validates :content, presence: true

  validates_associated :images
  validates :images, presence: true
end
