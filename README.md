# create-immutable-selector

[![Greenkeeper badge](https://badges.greenkeeper.io/stepankuzmin/create-immutable-selector.svg)](https://greenkeeper.io/)

`createImmutableSelector` is a customized version of `reselect` [createSelector](https://github.com/reactjs/reselect#createselectorinputselectors--inputselectors-resultfunc). It uses [Immutable.is](http://facebook.github.io/immutable-js/docs/#/is) for equality check with `defaultMemoize`.

```js
import createImmutableSelector from "create-immutable-selector";

const shopItemsSelector = state => state.getIn(["shop", "items"]);
const taxPercentSelector = state => state.getIn(["shop", "taxPercent"]);

const subtotalSelector = createImmutableSelector(shopItemsSelector, items =>
  items.reduce((acc, item) => acc + item.value, 0)
);
```
