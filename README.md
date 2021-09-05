# jekyll-theme-easy-wedding
Are you or a friend getting married? Do you want a quick way to make a **customizable** website? This is the theme for you! When I got married, I created a website to commemorate the occasion as well provide information to my guests. Then, I had a bunch of friends get married, and they wanted me to make them a site too. So, instead of making _basically_ the same site over and over, I decided to templatize it so that I just have to change the data in a yaml file.

Most of the original work is from https://github.com/cbaclig/wedding and is thanks to [@cbaclig](https://github.com/cbaclig).

## Installation

Add this line to your Jekyll site's `Gemfile`:

```ruby
gem "jekyll-theme-easy-wedding"
```

And add this line to your Jekyll site's `_config.yml`:

```yaml
theme: jekyll-theme-easy-wedding
```

And then execute:

    $ bundle

Or install it yourself as:

    $ gem install jekyll-theme-easy-wedding

## Usage

The best place to start is by copying the [example folder](https://github.com/cnorick/jekyll-theme-easy-wedding/tree/main/example) to your project, then start editing the .yaml files in [\_data](https://github.com/cnorick/jekyll-theme-easy-wedding/tree/main/example/\_data) to customize the site for your needs.

## Contributing

Bug reports and pull requests are welcome on GitHub at https://github.com/[USERNAME]/hello. This project is intended to be a safe, welcoming space for collaboration, and contributors are expected to adhere to the [Contributor Covenant](http://contributor-covenant.org) code of conduct.

## Development

To set up your environment to develop this theme, run `bundle install`.

Your theme is setup just like a normal Jekyll site! To test your theme, run `bundle exec jekyll serve` and open your browser at `http://localhost:4000`. This starts a Jekyll server using your theme. Add pages, documents, data, etc. like normal to test your theme's contents. As you make modifications to your theme and to your content, your site will regenerate and you should see the changes in the browser after a refresh, just like normal.

When your theme is released, only the files in `_layouts`, `_includes`, `_sass` and `assets` tracked with Git will be bundled.
To add a custom directory to your theme-gem, please edit the regexp in `jekyll-theme-easy-wedding.gemspec` accordingly.

## License

The theme is available as open source under the terms of the [MIT License](https://opensource.org/licenses/MIT).

