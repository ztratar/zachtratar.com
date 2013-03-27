use Rack::Static, 
  :urls => ["/css", "/fonts", "/img", "/js"],
  :root => "_site",
  :try  => ['index.html', '/index.html']

