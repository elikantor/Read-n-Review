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

genre1 = Genre.create(name: 'Biography')
genre2 = Genre.create(name: 'Self-Help')
genre3 = Genre.create(name: 'Memoir')
genre4 = Genre.create(name: 'Psychology')
genre5 = Genre.create(name: 'Fantasy')
genre6 = Genre.create(name: 'Children')
genre7 = Genre.create(name: 'Action and Adventure')
genre8 = Genre.create(name: 'Drama')
genre9 = Genre.create(name: 'Mystery')
genre10 = Genre.create(name: 'Thriller')
genre11 = Genre.create(name: 'Young Adult')
genre12 = Genre.create(name: 'Autobiography')
genre13 = Genre.create(name: 'Health')
genre14 = Genre.create(name: 'History')
genre15 = Genre.create(name: 'Religion and Spirituality')
genre16 = Genre.create(name: 'Graphic Novel')
genre17 = Genre.create(name: 'Short Story')
genre18 = Genre.create(name: 'Satire')

book1 = Book.create(title: 'Shoe Dog', author: 'Phil Knight', genre: genre1, image: 'https://images-na.ssl-images-amazon.com/images/I/71KkAKYWcuL.jpg', abstract: "In this instant and tenacious New York Times bestseller, Nike founder and board chairman Phil Knight 'offers a rare and revealing look at the notoriously media-shy man behind the swoosh', illuminating his company’s early days as an intrepid start-up and its evolution into one of the world’s most iconic, game-changing, and profitable brands.", fiction: false, read_throughs: 1 )
book2 = Book.create(title: 'The Way Of Men', author: 'Jack Donovan', genre: genre2, image: 'https://images-na.ssl-images-amazon.com/images/I/71BDqpe7VvL.jpg', abstract: 'What is masculinity? Ask ten men and you will get ten vague, conflicting answers. Unlike any book of its kind, The Way of Men offers a simple, straightforward answer-without getting bogged down in religion, morality, or politics. It is a guide for understanding who men have been and the challenges men face today. The Way of Men captures the silent, stifling rage of men everywhere who find themselves at odds with the over-regulated, over-civilized, politically correct modern world. If you have ever closed your eyes and wished for one day as a lion, this book is for you.', fiction: false, read_throughs: 1)
book3 = Book.create(title: "Man's Search For Meaning", author: 'Viktor E. Frankl', genre: genre3, image: 'https://images-na.ssl-images-amazon.com/images/I/41s4xJZlEYL.jpg', abstract: "Psychiatrist Viktor Frankl's memoir has riveted generations of readers with its descriptions of life in Nazi death camps and its lessons for spiritual survival. Between 1942 and 1945 Frankl labored in four different camps, including Auschwitz, while his parents, brother, and pregnant wife perished. Based on his own experience and the experiences of others he treated later in his practice, Frankl argues that we cannot avoid suffering but we can choose how to cope with it, find meaning in it, and move forward with renewed purpose. Frankl's theory-known as logotherapy, from the Greek word logos ('meaning')-holds that our primary drive in life is not pleasure, as Freud maintained, but the discovery and pursuit of what we personally find meaningful.", fiction: false, read_throughs: 1)
book4 = Book.create(title: "The Compound Effect", author: 'Darren Hardy', genre: genre2, image: 'http://cdn.shopify.com/s/files/1/2048/9703/products/TheCompoundEffect2_grande.jpg?v=1570563612', abstract: "The Compound Effect is based on the principle that decisions shape your destiny. Little, everyday decisions will take you either to the life you desire or to disaster by default. This book is the distillation of the fundamental principles that have guided the most phenomenal achievements in business, relationships, and beyond.", fiction: false, read_throughs: 1)
book5 = Book.create(title: "Mind Hacking", author: 'Sir John Hardgrave', genre: genre2, image: 'https://images-na.ssl-images-amazon.com/images/I/71tMF-y6CFL.jpg', abstract: "Have you ever wished you could reprogram your brain, just as a hacker would a computer? In this 3-step guide to improving your mental habits—using plenty of clear 'computer-related terms should resonate with tech-savvy readers, including those resistant to typical self-help fare' (Publishers Weekly)— learn to take charge of your mind and banish negative thoughts, habits, and anxiety—in just twenty-one days!", fiction: false, read_throughs: 1)
book6 = Book.create(title: "A Short Handbook for Happiness", author: 'Jonathan Brierre', genre: genre2, image: 'https://images-na.ssl-images-amazon.com/images/I/31wicGEGewL.jpg', abstract: "In a world where the majority of us suffer incessantly and unnecessarily, this book was written as a means to give light to a pathway to happiness that most of us are unaware of. A Short Handbook for Happiness is a brief reading that delves into The Philosophy of Stoicism. It's a philosophy much like Buddhism in the sense that it focuses on bringing forth happiness and fulfillment from within ourselves. How do we achieve this? Read the book and find out!", fiction: false, read_throughs: 1)
book7 = Book.create(title: "Breaking Back", author: 'James Blake', genre: genre1, image: 'https://images-na.ssl-images-amazon.com/images/I/51YfI%2B0v0GL._SX329_BO1,204,203,200_.jpg', abstract: "James Blake's life was getting better every day. A rising tennis star and People magazine's Sexiest Male Athlete of 2002, he was leading a charmed life and loving every minute of it. But all that ended in May 2004, when Blake fractured his neck in an on-court freak accident. As he recovered, his father—who had been the inspiration for his tennis career—lost his battle with stomach cancer. Shortly after his father's death, Blake was dealt a third blow when he contracted zoster, a rare virus that paralyzed half of his face and threatened to end his already jeopardized career.  In Breaking Back, Blake provides a remarkable account of how he came back from this terrible heartbreak and self-doubt to become one of the top tennis players in the world. A story of strength, passion, courage, and the unbreakable bonds between a father and son, Breaking Back is a celebration of one extraordinary athlete's indomitable spirit and his inspiring ability to find hope in the bleakest of times.", fiction: false, read_throughs: 1)
book8 = Book.create(title: "Open", author: 'Andre Agassi', genre: genre1, image: 'https://images-na.ssl-images-amazon.com/images/I/91GKLzZAj3L.jpg', abstract: "Far more than a superb memoir about the highest levels of professional tennis, Open is the engrossing story of a remarkable life. Andre Agassi had his life mapped out for him before he left the crib. Groomed to be a tennis champion by his moody and demanding father, by the age of twenty-two Agassi had won the first of his eight grand slams and achieved wealth, celebrity, and the game’s highest honors. But as he reveals in this searching autobiography, off the court he was often unhappy and confused, unfulfilled by his great achievements in a sport he had come to resent. Agassi writes candidly about his early success and his uncomfortable relationship with fame, his marriage to Brooke Shields, his growing interest in philanthropy, and—described in haunting, point-by-point detail—the highs and lows of his celebrated career.", fiction: false, read_throughs: 1)
book9 = Book.create(title: "Born To Run", author: 'Bruce Springsteen', genre: genre1, image: 'https://prodimage.images-bn.com/pimages/9781501141522_p0_v4_s550x406.jpg', abstract: "Over the past seven years, Bruce Springsteen has privately devoted himself to writing the story of his life, bringing to these pages the same honesty, humor, and originality found in his songs.", fiction: false, read_throughs: 1)
book10 = Book.create(title: "Harry Potter And The Sorcerer's Stone", author: 'J.K Rowling', genre: genre5, image: 'https://images-na.ssl-images-amazon.com/images/I/81iqZ2HHD-L.jpg', abstract: "A winner of England's National Book Award, the acclaimed debut novel tells the outrageously funny, fantastic adventure story of Harry Potter, who escapes a hideous foster home thanks to a scholarship to The Hogwarts School for Witchcraft and Wizardry.", fiction: true, read_throughs: 1)

review1 = Review.create(stars: 5, content: 'A great book about life, business, and sports', book: book1)
review2 = Review.create(stars: 3, content: 'not interesting', book: book1)

review3 = Review.create(stars: 3, content: 'not interesting', book: book2)
review4 = Review.create(stars: 5, content: 'veery interesting', book: book4)
review5 = Review.create(stars: 5, content: 'Very enlightening - Would reccomend', book: book6)

