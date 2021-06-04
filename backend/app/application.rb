require 'json'
require 'pry'

class Application

  def call(env)
    resp = Rack::Response.new
    req = Rack::Request.new(env)

    
    #Stories------------------------------------
    if req.path.match(/user-\d+\/stories/) && req.post?
      id = req.path.scan(/\d+/)
      rawData = JSON.parse(req.body.read)
      story = Story.create(name: rawData['name'] , description: rawData['description'],user_id: rawData['user_id'] )
      return [200, { 'Content-Type' => 'application/json' }, [ {:story => story}.to_json ]]
    elsif req.path.match(/user-\d+\/stories/)
      id = req.path.scan(/\d+/)
      return [200, { 'Content-Type' => 'application/json' }, [ {:stories => Story.where(user_id: id)}.to_json ]] 
    elsif req.path.match(/stories\/\d+\/scenes/)
      id = req.path.scan(/\d+/)
      return [200, { 'Content-Type' => 'application/json' }, [ {:scenes => Scene.where(story_id: id)}.to_json ]] 
    elsif req.path.match(/users/) 
      return [200, { 'Content-Type' => 'application/json' }, [ {:users => User.all}.to_json ]] 
    else
        resp.write "Path Not Found"
    end

    
    # #Users------------------------------

    # else
    #   resp.write "Path Not Found"
    # end

    # if req.path.match(/user-\d+/) 
    #   id = req.path.scan(/\d+/)
    #   return [200, { 'Content-Type' => 'application/json' }, [ {:user => User.where(id: id)}.to_json ]]

    # else
    #   resp.write "Path Not Found"
    # end

    resp.finish
  end

end
