class Image < ApplicationRecord
  belongs_to :article
  mount_uploader :content, ImagesUploader
end
