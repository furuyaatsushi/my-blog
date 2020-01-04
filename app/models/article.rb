class Article < ApplicationRecord

  belongs_to :user
  has_many :images

  accepts_nested_attributes_for :images

  validates :title, presence: true, length: { maximum: 40 }
end
