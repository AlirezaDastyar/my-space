## My space
My space is a clean, minimalistic hugo theme.


The design is inspired by [june theme](https://github.com/clavinjune/hugo-june-theme)

> [!WARNING] 
> This theme has no commitment to preserve backward compatibility and with each new commit it might break your blog, **It's recommended to fork it and use the fork.**

## Usage

```bash
$ git submodule add https://github.com/AlirezaDastyar/my-space themes/my-space
```

## Config sample
```yaml
baseURL: https://my-blog.com/
languageCode: en
pluralizeListTitles: false
theme: my-space
pagination:
  pagerSize: 9

title: Blog's title

taxonomies:
  tag: tags

markup:
  goldmark:
    parser:
      attribute:
        block: true
        title: true
    renderer:
      unsafe: true
  highlight:
    noClasses: false  
    lineNos: true
    tabWidth: 4
menus:
    main:
        - name: HOME
          pageRef: /
          weight: 10
        - name: BLOG
          pageRef: /blog
          weight: 20
params:
    title: This is the title for home page
    description: |
        This is the description for the home page
    keywords: [home page, keywords]
    author:
        name: John doe
        avatar: img/avatar.jpg
        contacts:
          - name: Email
            link: mailto:me@my-blog.com
            icon: fa-regular fa-envelope #Font awesome icon
          - name: Github
            link: https://github.com/my-username
            icon: fa-brands fa-github #Font awesome icon
          - name: Linkedin
            link: https://linkedin.com/in/my-username
            icon: fa-brands fa-linkedin #Font awesome icon
    intro: |
        This field is for the home page intro in combination with author avatar
```
## Styling
### Table
For css styling to be applied to the tables, the tables must be wrapped with `table` shortcode.  
Example:
```
{{< table >}}
| H1   | H1   | H3   |
| ---- | ---- | ---- |
| data | data | data |
{{< /table >}}
```
## Considerations
### Post cover image
For theme to render the content correctly each post must have a cover image defined in front matter:
```yaml
---
params:
    cover: 
        image: img/cover.jpg
        small: img/cover-small.jpg # used for post preview
        alt: a description for the image
---
```

### Category
The theme does not leverage the hugo category taxonomy.  
The reason why that is the case is URL structure, as I wanted following structure:
```
https://my-website.com/{menu}/{category}/{slug}
```
Hence I structured the theme to use the hugo `section` as category.  
And your content directory should look like this:
```shell
$ tree content
content/
└── blog
    ├── _index.md
    └── my-category
        ├── my-post
        │   ├── cover.jpg
        │   └── index.md
        └── _index.md
```
And URL would be:
```
https://my-website.com/blog/my-categoty/my-post
```
Also note that for each post the front matter must include a category param for the category functionality work properly:
```yaml
---
params:
    category: my-category
---
```
> [!WARNING]
> Using category is required, for theme to render correctly