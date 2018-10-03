import EmberObject from '@ember/object';
import DraggableMixin from 'draggable-mixin/mixins/draggable';
import { module, test } from 'qunit';

module('Unit | Mixin | draggable', function() {
  // Replace this with your real tests.
  test('it works', function (assert) {
    let DraggableObject = EmberObject.extend(DraggableMixin);
    let subject = DraggableObject.create();
    assert.ok(subject);
  });
});
