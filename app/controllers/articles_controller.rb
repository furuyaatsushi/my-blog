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
    tag_list = params[:article][:tag_name].split(",")
    if @article.save
      @article.save_articles(tag_list)
      redirect_to root_path, notice: '投稿が完了しました'
    else
      session[:error] = @article.errors.full_messages
      redirect_to new_article_path
    end
  end

  def edit
    @article = Article.find(params[:id])
    @tag_list = @article.tags.pluck(:name).join(",")
  end

  def update
    @article = Article.find(params[:id])
    @article.update(article_params)
    tag_list = params[:article][:tag_name].split(",")
    if @article.save
      @article.save_articles(tag_list)
      redirect_to root_path, notice: '更新が完了しました'
    else
      session[:error] = @article.errors.full_messages
      redirect_to new_article_path
    end
  end

  def search
  end

  def destroy
    @article = Article.find(params[:id])
    @article.destroy
    redirect_to root_path, notice: '削除しました'
  end

  private
  def article_params
    params.require(:article).permit(:title, :content, images_attributes: [:id, :content, :_destroy] ).merge(user_id: current_user.id)
  end

end
