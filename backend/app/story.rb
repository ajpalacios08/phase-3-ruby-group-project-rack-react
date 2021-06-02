class Story < ActiveRecord::Base
    has_many :scenes
    has_many :choices , through: :scenes
end