class UsersController < ApplicationController
  def get_current_user
    # TO-DO: Handle session properly
    auth_token = cookies.encrypted[:auth_token]
    if auth_token.nil?
      render json: {}
    else
      render json: current_user.as_json(only: [:first_name, :last_name, :email])
    end
  end
end
