# easy-css-variables

## Global

```js
const ecv = require('easy-css-variables');

ecv.global.backgroundColor = 'blue';
```

```css
.greet {
  background: var(--backgroundColor);
}
```

```html
<div class="greet">Hello!</div>
```


## Target element

```js
const ecv = require('easy-css-variables');

const seGreet = document.querySelector('.greet.se');

ecv('#greeter').backgroundColor = 'blue';
ecv(seGreet).backgroundColor = 'pink';
```

_Note: The selector passed to `ecv(selectorOrElement)` needs to only match a single element._

```css
#greeter {
  background: var(--backgroundColor);
}
```

```html
<div id="greet">Hello!</div>
<div class="greet se">Hej!</div>
```

---

WIP: https://jsfiddle.net/j8prgqwa/78/
