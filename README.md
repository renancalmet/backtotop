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

Add positioning parameters and stylize appearance/disappearance.