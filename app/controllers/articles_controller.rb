class ArticlesController < ApplicationController

  def index
  end

  def new
    @article = Article.new
    @article.images.build
  end

  def create

    @article = Article.new(article_params)
    binding.pry
    @article.save

    if @article.save
      redirect_to root_path
    end
  end

  private
  def article_params
    params.require(:article).permit(:title, :content, images_attributes: [:id, :content] ).merge(user_id: current_user.id)
  end

end
