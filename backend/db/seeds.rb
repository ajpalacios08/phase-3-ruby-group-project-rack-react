#Clear Previous Seed
User.delete_all
Choice.delete_all
Scene.delete_all
Story.delete_all

# Create Users
puts "Creating Users..."

3.times do
    User.create(name: Faker::Name.name)
end

# Create Stories
puts "Creating Stories..."

User.all.each do |user|
    2.times do
        book = Faker::Book
        Story.create(name: book.title, description: book.genre, user_id: user.id)
    end
end

# Create Scenes and generate choices
puts "Creating scenes and generating choices..."

Story.all.each do |story|
    currScene = Scene.create(text: Faker::Quotes::Shakespeare.hamlet_quote, story_id: story.id)
    2.times do
        Choice.create(text: Faker::Quote.yoda)
    end
end