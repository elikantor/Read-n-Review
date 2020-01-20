class ReviewsController < ApplicationController
    def index 
        reviews = Review.all
        render json: ReviewSerializer.new(reviews)
    end

    def create
        review = Review.create(create_review_params)
        render json: ReviewSerializer.new(review)
    end


    private 
    def create_review_params
        params.require(:review).permit(:stars, :content, :book_id)
    end

end
