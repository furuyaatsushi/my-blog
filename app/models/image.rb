class Image < ApplicationRecord
  mount_uploader :content, ImagesUploader

  belongs_to :article
end
