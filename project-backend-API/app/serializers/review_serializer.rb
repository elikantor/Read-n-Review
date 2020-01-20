class ReviewSerializer
  include FastJsonapi::ObjectSerializer
  attributes :stars, :content, :book_id
  
end
