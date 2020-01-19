class Product
  include Mongoid::Document
  include Mongoid::Timestamps

  field :name, type: String
  field :model, type: String
  field :brand, type: String
  field :year, type: String
  field :ram, type: String
  field :external_storage, type: String
end
