# backtotop
A simple vanilla js back-to-top button.

## Installation

```bash
npm install renancalmet/backtotop
```

## Usage

In document head :

```html
<link rel="stylesheet" href="node_modules/backtotop/backtotop.css">
```

At the end of `<body>` :

```html
<script src="node_modules/backtotop/index.js"></script>
<script>
    const bouton = new backToTop(700, '.button');
</script>
```

The class parameters are :
* `700` : the first pixel from which the backtotop button is displayed.
* `'.button'` : the CSS selector to identify the button.

## TODO

* Add positioning parameters
* Stylize appearance/disappearance
* Make it a real node module by `default export`ing the class + making a `dist/backtotop.js` following [this tutorial](https://hackernoon.com/use-es6-javascript-syntax-require-import-etc-in-your-front-end-project-5eefcef745c2)