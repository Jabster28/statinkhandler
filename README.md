# StatInkHandler

A npm module for the stat.ink API

Allows for requesting battles, user data and posting battles easily within node.

# Install

With [npm](https://www.npmjs.com/), do:

```sh
npm install -g statinkhandler
```

With [yarn](https://www.yarnpkg.com/), do:

```sh
yarn add statinkhandler
```

# Examples
Let's say we have battle data stored in a variable called `battle`
To post `battle` using [jQuery](https://jquery.com)'s AJAX method and then return the data, one would have to do:
```js
            $.ajax({
                type: "POST",
                url: "https://stat.ink/api/v1/battle",
                data: battle,
                crossDomain: true,
                success: function (data, status, xhr) {
                  return data
                },
                error: function (error) {
                  return error
                }
            }
```
However, statinkhandler simplifies this to:
```js
const stat = require("statinkhandler")
stat.postBattle(battle)
```

# Usage
## `const stat = require("statinkhandler")`
### `stat.getBattles`
