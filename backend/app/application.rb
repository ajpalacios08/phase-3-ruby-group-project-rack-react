class Application

  def call(env)
    resp = Rack::Response.new
    req = Rack::Request.new(env)

    
    #Stories-------------------------------------
    if req.path.match(/user-\d+\/stories/) 
      id = req.path.scan(/\d+/)
      return [200, { 'Content-Type' => 'application/json' }, [ {:message => Story.where(user_id: id)}.to_json ]]

    else
      resp.write "Path Not Found"
    end

    
    #Users------------------------------
    if req.path.match(/users/) 
      return [200, { 'Content-Type' => 'application/json' }, [ {:message => User.all}.to_json ]]
    else
      resp.write "Path Not Found"
    end

    if req.path.match(/user-\d+/) 
      id = req.path.scan(/\d+/)
      return [200, { 'Content-Type' => 'application/json' }, [ {:message => User.where(id: id)}.to_json ]]

    else
      resp.write "Path Not Found"
    end

    resp.finish
  end

end
