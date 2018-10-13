draggable-mixin
==============================================================================

This is a simple wrapper of the Hammer.js lib on your ember component.

Installation
------------------------------------------------------------------------------

```
ember install draggable-mixin
```


Usage
------------------------------------------------------------------------------

Just include this mixin to your component:

```
import DraggableMixin from 'draggable-mixin/mixins/draggable';

export default Component.extend(DraggableMixin, {});
```

`panDirection` - function to restrict directions. Should return directional constant. Directional constants are taken from Hammer library.
`maxDistance` - restrict drag distance. Returns number.
`onPanEnvComplete` - function evaluated on panstop.

There are also `_beforeMove` and `_afterMove` hooks to provide additional control over process.

Contributing
------------------------------------------------------------------------------

### Installation

* `git clone <repository-url>`
* `cd draggable-mixin`
* `npm install`

### Linting

* `npm run lint:hbs`
* `npm run lint:js`
* `npm run lint:js -- --fix`

### Running tests

* `ember test` – Runs the test suite on the current Ember version
* `ember test --server` – Runs the test suite in "watch mode"
* `ember try:each` – Runs the test suite against multiple Ember versions

### Running the dummy application

* `ember serve`
* Visit the dummy application at [http://localhost:4200](http://localhost:4200).

For more information on using ember-cli, visit [https://ember-cli.com/](https://ember-cli.com/).

License
------------------------------------------------------------------------------

This project is licensed under the [MIT License](LICENSE.md).
