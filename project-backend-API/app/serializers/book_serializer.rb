class BookSerializer
  include FastJsonapi::ObjectSerializer
  attributes :title, :author, :image, :abstract, :fiction, :reviews, :genre, :read_throughs
  
  # belongs_to :genre
  # has_many :reviews
end
