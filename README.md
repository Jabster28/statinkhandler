# StatInkHandler

A npm module for the stat.ink API

Allows for requesting battles, user data and posting battles easily within node.
WARNING: This API is for Splatoon 1, not Splatooon 2!
# Install

With [npm](https://www.npmjs.com/), do:

```sh
npm install -g statinkhandler
```

With [yarn](https://www.yarnpkg.com/), do:

```sh
yarn add statinkhandler
```

# Example
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
### `stat.getAllWeapons()`
Returns an array containing every weapon. 
```js
const stat = require("statinkhandler")
const a = stat.getAllWeapons
for (var i = 0; i < a.length; i++) {
           console.log(a[i])
}
```
### `stat.weaponmap`
An object containing the keyvalue pairs of the US English weapon name to the stat.ink weapon name.

Here is how you might get a selected weapon in stat.ink format once a form is submitted:
```js
const stat = require("statinkhandler")
const b = stat.weaponmap

$("form").submit(function(){
            console.log(b[$("select").options[e.selectedIndex].value])
})
```
## `stat.postBattle(data, options)`
`data`, object, The data that will be parsed by `options`, then posted to the stat.ink API
`options`, object, An object of options to customise the post request
.           `weapons` Can be set to `us` or `stat` (Default is `us`)
`weapons: stat` Will pass the `weapon` object from data to the push request without changing it
`stat.postBattle({weapon: "nomnji"})
