use Rack::Static, 
  :urls => %w[/],
  :root => "_site"

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
