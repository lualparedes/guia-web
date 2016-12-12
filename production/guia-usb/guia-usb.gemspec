# coding: utf-8

Gem::Specification.new do |spec|
  spec.name          = "guia-usb"
  spec.version       = "0.1.0"
  spec.authors       = ["Lual"]
  spec.email         = ["lualps94@gmail.com"]

  spec.summary       = %q{Website dev for astronomy group GUIA USB }
  spec.homepage      = "https://github.com/lualparedes/guia-web"
  spec.license       = "GPL-3.0"

  spec.files         = `git ls-files -z`.split("\x0").select { |f| f.match(%r{^(assets|_layouts|_includes|_sass|LICENSE|README)}i) }

  spec.add_runtime_dependency "jekyll", "~> 3.3"

  spec.add_development_dependency "bundler", "~> 1.12"
  spec.add_development_dependency "rake", "~> 10.0"
end
