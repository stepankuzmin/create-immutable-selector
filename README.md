# create-immutable-selector

[![npm](https://img.shields.io/npm/v/create-immutable-selector.svg)](https://www.npmjs.com/package/create-immutable-selector)

`createImmutableSelector` is a customized version of reselect's [createSelector](https://github.com/reactjs/reselect#createselectorinputselectors--inputselectors-resultfunc) with [Immutable.is](http://facebook.github.io/immutable-js/docs/#/is) as equality check.

```shell
npm i create-immutable-selector
```

## Usage

```js
import createImmutableSelector from "create-immutable-selector";

const shopItemsSelector = state => state.getIn(["shop", "items"]);

const subtotalSelector = createImmutableSelector(shopItemsSelector, items =>
  items.reduce((acc, item) => acc + item.value, 0)
);
```
