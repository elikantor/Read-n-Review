class BooksController < ApplicationController

    def index 
        books = Book.all
        render json: BookSerializer.new(books) 
    end

    def show
        book = Book.find_by(id: params[:id])
        render json: BookSerializer.new(book)
    end 

    def create 
        book = Book.create(create_book_params)
        render json: BookSerializer.new(book)
    end

    def update
        book = Book.find_by(id: params[:id])
        book.update(read_through_params)
        render json: BookSerializer.new(book)
    end

    private 
    def create_book_params 
        params.require(:book).permit(:title, :author, :image, :genre_id, :abstract, :fiction, :read_throughs)
    end

    def read_through_params
        params.require(:book).permit(:read_throughs)
    end
    
end
