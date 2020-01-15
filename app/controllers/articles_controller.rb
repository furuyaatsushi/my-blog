class ArticlesController < ApplicationController

  before_action :authenticate_user!, only: [:new, :create]

  def index
    @articles = Article.all.includes(:images).order('updated_at DESC').page(params[:page]).per(5)
  end

  def show
    @article = Article.find(params[:id])

    @comments = @article.comments.order('updated_at DESC')

    @favorite = Favorite.new
  end

  def new
    @article = Article.new
    @article.images.build
  end

  def create
    @article = Article.new(article_params)
    @article.save

    if @article.save
      redirect_to root_path
    else
      session[:error] = @article.errors.full_messages
      redirect_to new_article_path
    end
  end

  def edit
    @article = Article.find(params[:id])
  end

  def update
    @article = Article.find(params[:id])
    @article.update(article_params)

    if @article.save
      redirect_to root_path
    else
      session[:error] = @article.errors.full_messages
      redirect_to new_article_path
    end
  end

  def destroy
    @article = Article.find(params[:id])
    @article.destroy
    redirect_to root_path
  end

  private
  def article_params
    params.require(:article).permit(:title, :content, images_attributes: [:id, :content] ).merge(user_id: current_user.id)
  end

end
