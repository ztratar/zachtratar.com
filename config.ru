use Rack::Static, 
  :urls => ["/css", "/fonts", "/img", "/js"],
  :root => "_site",
  :try  => ['index.html', '/index.html']

run lambda { |env|
  [
    200, 
    {
      'Content-Type'  => 'text/html', 
      'Cache-Control' => 'public, max-age=86400' 
    },
    File.open('_site/index.html', File::RDONLY)
  ]
}
