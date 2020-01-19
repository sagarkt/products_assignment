module Devise
  module Strategies
    # Token Based strategy for authentication
    class TokenStrategy < Base
      def valid?
        cookies.encrypted[:auth_token].present?
      end

      def authenticate!
        if decode_token.present?
          success! current_user
        else
          if decode_token.present?
            success! current_user
          else
            if request.url.match(/signin/).present?
              fail
            else
              fail!
            end
          end
        end
      end

      def decode_token
        auth_token = cookies.encrypted[:auth_token]
        @user_id = ::AuthenticationTokens.token_val(auth_token).first
      end

      def current_user
        User.find(@user_id)
      end
    end
  end
end
