class CreateBooks < ActiveRecord::Migration[6.0]
  def change
    create_table :books do |t|
      t.string :title
      t.string :author
      t.string :image
      t.belongs_to :genre, null: false, foreign_key: true
      t.string :abstract
      t.boolean :fiction

      t.timestamps
    end
  end
end
