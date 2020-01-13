class UsersController < ApplicationController

  def show
    @user = User.find(params[:id])
    @articles = @user.articles.order('updated_at DESC').includes(:images).page(params[:page]).per(5)
  end
end
