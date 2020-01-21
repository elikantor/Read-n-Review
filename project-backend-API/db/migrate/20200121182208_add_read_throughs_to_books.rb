class AddReadThroughsToBooks < ActiveRecord::Migration[6.0]
  def change
    add_column :books, :read_throughs, :integer
  end
end
