class CommentsController < ApplicationController
  def create
    @comment = Comment.create(content: params[:content], article_id: params[:article_id], user_id: current_user.id)
    redirect_to "/articles/#{@comment.article.id}"
  end

  private
  def comment_params
    params.require(:comment).permit(:content).merge(user_id: current_user.id, article_id: @article.id)
  end
end
