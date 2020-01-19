REDIS_CONFIG = YAML.load( File.open( Rails.root.join("config/redis.yml") ) ).symbolize_keys

dflt = cnfg = REDIS_CONFIG[:default].symbolize_keys
env_config = nil

env_config = REDIS_CONFIG[Rails.env.to_sym] if REDIS_CONFIG[Rails.env.to_sym].present?

cnfg = dflt.merge(env_config.symbolize_keys) if env_config.present?
$redis = Redis.new(cnfg)
#$redis_ns = Redis::Namespace.new(cnfg[:namespace], :redis => $redis) if cnfg[:namespace]

# To clear out the db before each test
$redis.flushdb if Rails.env == "test"

$redis_token = Redis::Namespace.new('rento_token', redis: $redis)
