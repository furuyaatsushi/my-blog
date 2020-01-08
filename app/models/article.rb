class Article < ApplicationRecord

  belongs_to :user
  has_many :images
  has_many :comments

  accepts_nested_attributes_for :images

  validates :title, presence: true, length: { maximum: 40 }
  validates :content, presence: true

  validates_associated :images
  validates :images, presence: true
end
