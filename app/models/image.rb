class Image < ApplicationRecord
  belongs_to :article, optional: true
  mount_uploader :content, ImageUploader
end
