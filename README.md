# easy-css-variables

## Global

```js
const ecv = require('easy-css-variables');

ecv.global.backgroundColor = 'blue';
```

```css
.greet {
  backgroundColor: var(--backgroundColor);
}
```

```html
<div class="greet">Hello!</div>
```


## Target element

```js
const ecv = require('easy-css-variables');

ecv('#greeter').backgroundColor = 'blue';
```

_Note: The selector passed to `ecv(selectorOrElement)` needs to only match a single element._

```css
#greeter {
  backgroundColor: var(--backgroundColor);
}
```

```html
<div id="greet">Hello!</div>
```

---

WIP: https://jsfiddle.net/j8prgqwa/78/
