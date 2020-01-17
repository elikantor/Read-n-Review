class CreateReviews < ActiveRecord::Migration[6.0]
  def change
    create_table :reviews do |t|
      t.integer :stars
      t.string :content
      t.belongs_to :book, null: false, foreign_key: true

      t.timestamps
    end
  end
end
