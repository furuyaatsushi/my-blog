class Article < ApplicationRecord

  belongs_to :user
  has_many :images, dependent: :destroy
  has_many :comments, dependent: :destroy
  has_many :favorites, dependent: :destroy
  has_many :favorited_users, through: :fovorite, source: :user
  has_many :article_tags, dependent: :destroy
  has_many :tags, through: :article_tags

  accepts_nested_attributes_for :images

  validates :title, presence: true, length: { maximum: 40 }
  validates :content, presence: true

  validates_associated :images
  validates :images, presence: true

  def save_articles(savearticle_tags)
    current_tags = self.tags.pluck(:name) unless self.tags.nil?
    old_tags = current_tags - savearticle_tags
    new_tags = savearticle_tags - current_tags

    old_tags.each do |old_name|
      self.tags.delete Tag.find_by(name:old_name)
    end
    new_tags.each do |new_name|
      post_tag = Tag.find_or_create_by(name:new_name)
      self.tags << article_tags
    end
  end
end
