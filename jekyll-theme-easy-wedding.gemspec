# frozen_string_literal: true

Gem::Specification.new do |spec|
  spec.name          = "jekyll-theme-easy-wedding"
  spec.version       = "0.1.15"
  spec.authors       = ["Nathan Orick"]
  spec.email         = ["cnathanorick@gmail.com"]

  spec.summary       = "This theme makes it easy to build wedding websites."
  spec.homepage      = "https://nathanorick.com"
  spec.license       = "MIT"

  spec.files         = `git ls-files -z`.split("\x0").select { |f| f.match(%r!^(assets|_layouts|_includes|_sass|LICENSE|README|_config\.yml)!i) }
  spec.files         += ['assets/main-bundle.js']

  spec.add_runtime_dependency "jekyll", "~> 4.2"
  spec.add_runtime_dependency "jekyll-sitemap"
  spec.add_runtime_dependency "jekyll-feed"
  spec.add_runtime_dependency "jekyll-seo-tag"
  spec.add_runtime_dependency "jekyll-compress-images"
end
