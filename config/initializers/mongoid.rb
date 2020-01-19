require 'mongoid'

Mongoid.load!(File.expand_path('mongoid.yml', './config'))

Rails.application.config.generators do |g|
  g.orm :mongoid
end
