class ArticlesController < ApplicationController

  before_action :authenticate_user!, only: [:new, :create]

  def index
    @articles = Article.all.order('updated_at DESC')
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
      redirect_to new_article_path
    end
  end

  private
  def article_params
    params.require(:article).permit(:title, :content, images_attributes: [:id, :content] ).merge(user_id: current_user.id)
  end

end
