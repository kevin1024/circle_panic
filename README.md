circle_panic
============

Display circleci build status on your Panic status board

![screenshot](http://i.imgur.com/tpwXTDF.png)

## Installation

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
    subject: 'removed county, added subdivision' }
```

## Deploying to Heroku

You can set all the settings using environment variables.

`config:set variable_name=whatever`

for all the vars.  


### License
The MIT License (MIT)

Copyright (c) 2013 Kevin McCarthy

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in
all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
THE SOFTWARE.
