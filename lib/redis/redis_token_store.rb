module RedisTokenStore # Calling it Redis will interfere with the Gem
  # Gets value of a single Redis hash key
  def hget(hash, field)
    redis_token.hget(hash, field)
  end

  # Get value of multiple keys in a Redis hash
  def hmget(hash, *fields)
    redis_token.hmget(hash, *fields)
  end

  # Get all fields and values from Redis at once by passing in the hash name
  def hgetall(hash)
    redis_token.hgetall(hash)
  end

  # TO-DO
  # Set Expire for key
  # Saves the current token as a hash with user info
  def hmset(hash, *field_value)
    redis_token.hmset(hash, *field_value)
  end

  # Expire an item
  def expire(hash, time)
    redis_token.expire(hash, time)
  end

  def del(hash)
    redis_token.del(hash)
  end

  private
    # Create our own instance of the $redis global so as not to interfere
    # with its use elsewhere
    def redis_token
      $redis_token
    end
end
