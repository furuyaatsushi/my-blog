class CreateImages < ActiveRecord::Migration[5.0]
  def change
    create_table :images do |t|

      t.string      :content,     null: false
      t.references  :article,     null: false, foreign_key: true
      t.timestamps
    end
  end
end
