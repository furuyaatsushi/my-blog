class ArticlesController < ApplicationController

  def index
  end

  def new
    @article = Article.new
    @article.images.build
  end

  def create

  end

  private
  def article_params
    params.requier(:article).permit(:title, :content, images_attributes: [:id, :content] ).merge(user_id: current_user.id)
  end

end
