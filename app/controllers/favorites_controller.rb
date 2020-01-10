class FavoritesController < ApplicationController

  def create
    @favorite = current_user.favorites.create(article_id: params[:article_id])
    redirect_back(fallback_location: root_path)
  end

end
