class Photo < ActiveRecord::Base
  belongs_to :album
  #photo pertenece a un album
  validates :photo, presence: true
  #valida que la foto exista

  # El segundo parámetro es el nombre del uploader que se genera el paso 4
  mount_uploader :photo, PhotoUploader
end
