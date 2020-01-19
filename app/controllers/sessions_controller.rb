class SessionsController < Devise::SessionsController
  include ActionController::MimeResponds
  clear_respond_to
  respond_to :json

  skip_before_action :verify_signed_out_user

  def create
    self.resource = warden.authenticate!(auth_options)
    auth_token = AuthenticationTokens.generate resource.email, resource.id
    cookies.encrypted[:auth_token] = {
      value: auth_token,
      httponly: true,
      expires: 1.hour.from_now
    }
    render json: {first_name: resource.first_name, last_name: resource.last_name,
                  email: resource.email}
  end

  def destroy
    auth_token = cookies.encrypted[:auth_token]
    AuthenticationTokens.revoke auth_token
    cookies.delete :auth_token
    render json: {auth_token: auth_token}
  end
end
