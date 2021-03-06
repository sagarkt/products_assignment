require_relative 'boot'

require 'rails'
require 'action_controller/railtie'
require 'active_model/railtie'
require 'sprockets/railtie'
require 'rails/test_unit/railtie'
require 'dotenv';
require "action_cable/engine"
require 'active_job/railtie'
require 'action_mailer/railtie'

# Require the gems listed in Gemfile, including any gems
# you've limited to :test, :development, or :production.
Bundler.require(*Rails.groups)

Dotenv.load "config/environment_variables/.env.#{Rails.env}"

module AssignmentProducts
  class Application < Rails::Application
    # Initialize configuration defaults for originally generated Rails version.
    config.load_defaults 5.2

    # Settings in config/environments/* take precedence over those specified here.
    # Application configuration can go into files in config/initializers
    # -- all .rb files in that directory are automatically loaded after loading
    # the framework and any gems in your application.

    config.eager_load_paths += Dir[Rails.root.join('lib', '{**}')]
  end
end
