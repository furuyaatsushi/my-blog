class ArticlesController < ApplicationController

  def index
  end

  def new
    @article = Article.new
    @article.images.build
  end

end
