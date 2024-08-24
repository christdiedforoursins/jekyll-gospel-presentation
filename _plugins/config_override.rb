module ConfigOverride
  def config_value(key)
    config = Jekyll.configuration({})
    env_prefix = config['env_prefix'] || ''
    env_var_name = "#{env_prefix.upcase}_#{key.upcase}"
    env_var_value = ENV[env_var_name]
    if env_var_value
      env_var_value
    else
      config[key]
    end
  end
end

# Register as a Liquid filter
Liquid::Template.register_filter(ConfigOverride)