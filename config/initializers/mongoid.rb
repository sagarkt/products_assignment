require 'mongoid'

Mongoid.load!(File.expand_path('mongoid.yml', './config'))

Rails.application.config.generators do |g|
  g.orm :mongoid
end

module BSON
  class ObjectId
    def as_json(*args)
      to_s
    end

    alias :to_json :as_json
  end
end
