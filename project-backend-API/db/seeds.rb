# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

Review.destroy_all
Book.destroy_all
Genre.destroy_all

genre1 = Genre.create(name: 'biography')
genre2 = Genre.create(name: 'horrow')

book1 = Book.create(title: 'Shoe Dog', author: 'Phil Knight', genre: genre1, image: 'https://api.time.com/wp-content/uploads/2015/06/521811839-copy.jpg?w=412&quality=85', abstract: 'This is a boko constaining info', fiction: false, read_throughs: 5 )
book2 = Book.create(title: 'Something', author: 'tag', genre: genre2, image: 'https://api.time.com/wp-content/uploads/2015/06/521811839-copy.jpg?w=412&quality=85', abstract: 'This is a boko constaining info', fiction: false, read_throughs: 100)

review1 = Review.create(stars: 5, content: 'A great book about life, business, and sports', book: book1)
review2 = Review.create(stars: 3, content: 'not interesting', book: book1)

review3 = Review.create(stars: 3, content: 'not interesting', book: book2)
review4 = Review.create(stars: 5, content: 'veery interesting', book: book2)

