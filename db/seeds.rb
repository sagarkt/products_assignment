# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

user = User.find_or_create_by(first_name: 'Test User', last_name: 'Test Last Name', email: 'demo@test.com', password: 'test@121')
puts "Created User: #{user.email} with Password: #{user.password}"

def generate_code(number)
  charset = Array('A'..'Z') + Array('a'..'z')
  Array.new(number) { charset.sample }.join
end

return if Product.count === 5000

5000.times do |count|
  product_data = {}
  product_data[:name] = "Name #{generate_code(rand(50))}"
  product_data[:model] = "Model #{generate_code(rand(50))}"
  product_data[:brand] = "Brand #{generate_code(rand(50))}"
  product_data[:year] = "Year #{generate_code(rand(50))}"
  product_data[:ram] = "RAM #{generate_code(rand(50))}"
  product_data[:external_storage] = "External Storage #{generate_code(rand(50))}"
  Product.create(product_data)
  puts "Created #{count} product"
end
