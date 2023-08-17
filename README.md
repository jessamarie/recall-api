# recall-api

This is the api that goes along with the recall ![recall][1] app

## required software

- NodeJS 16
- MongoDB

## Installation instructions and starting the app

First install dependencies and seed the app:

```bash
npm install
npm run seed
```

Next run webpack (uses hot module replacement) and start the server:

```bash
npm run watch
npm run start
```

Or for automatic restart of server upon changes:

```bash
npm run watch
npm run start:watch-dev
```

# API

`example: localhost:4000/api/topics`

```bash
topics/     # get all topics
topics/:id  # find a topic & it's sentences by id
```

## Future of the app

See project board

Also see [Planning][1]

# unsolved problems or major hurdles

- Slight learning curve with OvernightJS
- Adding middleware
- Proper handling of bad routes

[1]: https://github.com/jessamarie/recall
