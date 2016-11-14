class PhotoUploader < CarrierWave::Uploader::Base
  # ...
  include CarrierWave::MiniMagick

  # Que tipo de strorage usará este uploader

  def store_dir
    # Como y donde guardar el archivo ...
    "uploads/#{model.class.to_s.underscore}/#{mounted_as}/#{model.id}"
  end

  #versiones de compresion de imagen
  version :large do
    process :resize_to_fit => [1024, 768]
  end

  version :medium, :from_version => :large do
    process :resize_to_fill => [600, 450]
  end

  version :small, :from_version => :medium do
    process :resize_to_fit => [240, 180]
  end

  version :thumb, :from_version => :small do
    process :resize_to_fill => [100, 100]
  end

  storage :file
  # Versiones del archivo ...
  #debe ser de tipo imagen para ser valido
  def content_type_whitelist
    /image\//
  end

  def move_to_cache
    true
  end

  def move_to_store
    true
  end
  #Que extensiones vas a aceptar
  def extension_whitelist
    %w(jpg jpeg gif png)
  end
end
