class Album < ActiveRecord::Base
  has_many :photos
  #un album tiene muchas fotos
  belongs_to :user
  #la cual pertenece a un usuario
end
