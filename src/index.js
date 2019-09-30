const proxyVariablesWithCache = (target) => new Proxy({}, {
  get(_, key) {
  	//console.log('get', key, target);
  	return `var(--${key})`;
  },
  set(_, key, value) {
  	//console.log('set', key, value, target);
    target.style
      .setProperty(`--${key}`, value);
  }
});

const cssPath = function(el) {
    if (!(el instanceof Element)) return;
    const path = [];
    while (el.nodeType === Node.ELEMENT_NODE) {
        let selector = el.nodeName.toLowerCase();
        if (el.id) {
            selector += `#${el.id}`;
        } else {
            let sib = el, nth = 1;
            while (sib.nodeType === Node.ELEMENT_NODE && (sib = sib.previousSibling) && nth++);
            selector += `:nth-child(${nth})`;
        }
        path.unshift(selector);
        el = el.parentNode;
    }
    return path.join('');
}

const ecv = (selectorCache => new Proxy(selectorOrElement => {
  	const element = 
    	typeof selectorOrElement === 'string' 
        ? document.querySelector(selectorOrElement)
      	: selectorOrElement;
    
    const identifier = cssPath(element);
  	if (identifier in selectorCache) return selectorCache[identifier];
    
    selectorCache[identifier] = proxyVariablesWithCache(element);
    return selectorCache[identifier];
  }, {
  	get(__, key) {
    	if (!__.global) {
      	__.global = proxyVariablesWithCache(document.documentElement);
      }
      return __.global[key];
    },
    set(__, key, value) {
    	if (!__.global) {
      	__.global = proxyVariablesWithCache(document.documentElement);
      }
      __.global[key] = value;
    }
  }))({});
  
window.ecv = ecv;
