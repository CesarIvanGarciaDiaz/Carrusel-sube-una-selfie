get 'users/:id/upload' do
  erb :upload
end

post '/users/:id/upload' do
  @photo = Photo.new(params[:photo])
  @photo.save!
  if Album.find_by_title(params[:title]) == nil
    #buscar el title del album si no existe
    album = Album.new(title: params[:title])
    #crea uno nuevo
    User.find(current_user.id).albums << album
    #crea las relaciones  (busca el id del usuario que )
  else
    #en caso contrario
    #busca el album existente
    album = Album.find_by_title(params[:title])

  end
  #inseta la foto al album
  album.photos << @photo
  erb:images
end

#ver todas las fotos del id del usuario
get '/users/:id/photos' do
  @albums = User.find(current_user.id).albums
  erb :all_photos
end
