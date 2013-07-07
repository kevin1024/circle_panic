circle_panic
============

Display circleci build status on your Panic status board

[!screenshot](http://i.imgur.com/tpwXTDF.png)

## Installation:

1. clone the repo
2. `npm install`
3. Put settings in settings.json (see exampleSettings.json for format)
4. Add the URL to your status board

## Customization

You can edit the template.html to pull in different stuff if you want.  Check out the [Panic table instructions](https://panic.com/statusboard/docs/table_tutorial.pdf) for more.

Here is an example of what data is available for each row:

```javascript
  { user: 'Kevin',
    project: 'howscraig',
    branch: 'master',
    status: 'success',
    green: true,
    subject: 'Merge pull request #3 from RealGeeks/fix_cookies' },
  { user: 'Brian',
    project: 'rg2',
    branch: 'master',
    status: 'success',
    green: true,
    subject: 'removed county, added subdivision' } ]
```

## TODO

* Better docs
* Host my own checkmark / x pngs
* Figure out why text doesn't line up with the images
* Maybe make the whole row red when the build fails?

License is MIT
