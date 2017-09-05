require "pug-ruby"

require_relative "jekyll-pug/tags/pug_partial"
require_relative "jekyll-pug/ext/convertible"

module Jekyll
	class PugConverter < Converter
		safe true
		priority :low

		def matches(ext)
			ext =~ /^\.pug$/i
		end

		def output_ext(ext)
			".html"
		end

		def convert(content)
			return Pug.compile(content, {"filename"=>"./_includes/."})
		end
	end
end
