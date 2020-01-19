class AuthenticationTokens
  extend RedisTokenStore
  HOURS = 24.freeze
  EXPIRE_IN = HOURS.hours.freeze

  # generate authentication token using the given email and save it in redis
  # the generated token will have a field "user_id" in order to identify the
  # associated user later
  def self.generate(email, user_id)
    payload = {
      email: email,
      exp: (Time.now + HOURS * 3600).to_i # Two Days
    }
    hmac_secret = Rails.application.secrets.secret_key_base
    token = JWT.encode(payload, hmac_secret, 'HS256')
    hmset(token, 'user_id', user_id)
    # Redis will remove token after 24 hours of inactivity
    expire(token, EXPIRE_IN.to_s)
    token
  end

  # renewing expiration timeout
  def self.touch(token)
    expire(token, EXPIRE_IN.to_s)
  end

  # deletes the token
  def self.revoke(token)
    del(token)
  end

  def self.token_val(token)
    expire(token, EXPIRE_IN.to_s)
    hmget(token, 'user_id')
  end
end
