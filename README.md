# guia-web
Website dev for astronomy group GUIA USB
<br><br>

## Template architecture

Regular templating system using an OOP-inspired approach.

### List of basic templates (applied to several pages)
- `page.html`: used for pages that only contain a hero and content. The hero has several skins: the basic one with just a title inside the jumbotron or others with more complex inner content. The content of the page can be anything, although it's mainly expected to be just text, otherwise it's contained in an include (content_name-of-page.html).

### List of includes
- `content_name-of-page.html`: custom HTML to display the content of a page that uses the page.html template.
- `footer.html`: contains the last part of any HTML (footer, scripts and closing body and html tags).
- `header.html`: contains the first part of any HTML (header, header, nav and opening html and body tags). Styles to be applied to a particular page are included through an if statement (written in Liquid) that checks the class/id of the page. This class/id is declared in the front matter of the page and each of the styles for a particular page is stored in a include with the name "style_name-of-page.html".
- `hero.html`: basic structure for a hero. It has several skins, each one calling another include.
- `style_name-of-page.html`: particular styles to be applied to a single page.

### Custom page properties
- `class`: used to load custom styles for several pages (just like css classes), the value must correspond to the slug in the include `style_name-of-page.html`
- `id`: used to load custom styles for single pages (just like css ids), the value must correspond to the slug in the include `style_name-of-page.html`
- `jumbotron-title`: text inside the H1 of the jumbotron.
- `jumbotron-type`: the jumbotron has several skins: default, results. Each corresponds to the slug in `jumbotron_slug.html`
- `post-date`: the date of publication of a post. It's used to find assets specifics for the post, such as the hero image (`post-date-slug-hero.png`)

### Important name conventions

- Posts
```
/_posts/YYYY-MM-DD-slug.html
```
- Post image for hero
```
/img/posts/YYY-MM-DD-slug-hero.png
```
- Post images
```
/img/posts/YYY-MM-DD-slug-img-NN.png
```

<br><br>

## Style guidelines for code

### Commits
- Always write a message when commiting and make it short but meaningful:
```
  git commit -m 'updated README.md'
```
- Commit when you have added a substantial ammount of code (an entire journey, a section, corrected a bug, etc.)


### SCSS
- All documentation will be written in English, except in cases when Spanish is desirable because of practicity ([example](https://github.com/lualparedes/guia-web/blob/master/README.md#todo-general)).

