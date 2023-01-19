# frozen_string_literal: true

lib = File.expand_path("lib", __dir__)
$LOAD_PATH.unshift(lib) unless $LOAD_PATH.include?(lib)

Gem::Specification.new do |spec|
  spec.name          = "primer_view_components"
  spec.version       = "0.0.1"

  spec.summary       = "ViewComponents for the Primer Design System"
  spec.homepage      = "https://github.com/primer/view_components"
  spec.license       = "MIT"
  spec.required_ruby_version = Gem::Requirement.new(">= 2.6.0")

  # Prevent pushing this gem to RubyGems.org. To allow pushes either set the 'allowed_push_host'
  # to allow pushing to a single host or delete this section to allow pushing to any host.
  if spec.respond_to?(:metadata)
    spec.metadata["allowed_push_host"] = "https://rubygems.org"
  else
    raise "RubyGems 2.0 or newer is required to protect against " \
      "public gem pushes."
  end

  spec.files         = Dir["CHANGELOG.md", "LICENSE.txt", "README.md", "lib/**/*", "app/**/*", "static/**/*", "previews/**/*"]
  spec.require_paths = ["lib"]

  spec.add_runtime_dependency     "actionview", ">= 5.0.0"
  spec.add_runtime_dependency     "activesupport", ">= 5.0.0"
  spec.add_runtime_dependency     "octicons", ">= 17.0.0"

  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
end
