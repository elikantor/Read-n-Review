class BookSerializer
  include FastJsonapi::ObjectSerializer
  attributes :title, :author, :image, :abstract, :fiction, :reviews, :genre
  
  # belongs_to :genre
  # has_many :reviews
end
