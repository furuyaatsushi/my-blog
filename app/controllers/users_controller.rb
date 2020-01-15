class UsersController < ApplicationController

  before_action :authenticate_user!, only: [:show, :favorites]

  def show
    @user = User.find(params[:id])
    @articles = @user.articles.order('updated_at DESC').includes(:images).page(params[:page]).per(5)
    @favorites = @user.favorited_articles.order('updated_at DESC').includes(:images).page(params[:page]).per(5)
  end

  def favorites
    @user = User.find(current_user)
  end
end
