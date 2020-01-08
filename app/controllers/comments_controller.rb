class CommentsController < ApplicationController
  def create
    Comment.create(comment_params)
  end

  private
  def comment_params
    params.require(:comment).permit(:content, :article_id).merge(user_id: current_user.id)
  end
end
