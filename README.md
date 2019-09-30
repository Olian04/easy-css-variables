# easy-css-variables

__CDN:__ <br>

```html
<script src="https://cdn.jsdelivr.net/gh/olian04/easy-css-variables/src/index.js"></script>
```

## Global

```js
const ecv = require('easy-css-variables');

ecv.backgroundColor = 'blue';
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

ecv('.greeter.en').backgroundColor = 'blue';
ecv(seGreet).backgroundColor = 'pink';
```

_Note: The selector passed to `ecv(selectorOrElement)` needs to only match a single element, or the first one will be selected._

```css
.greet {
  background: var(--backgroundColor);
}
```

```html
<div class="greet en">Hello!</div>
<div class="greet se">Hej!</div>
```

---

WIP: https://jsfiddle.net/olian04/rxLfmgeq/35/
