import F from 'funcunit';
import QUnit from 'steal-qunit';

F.attach(QUnit);

QUnit.module('donejs-app functional smoke test', {
  beforeEach() {
    F.open('../development.html');
  }
});

QUnit.test('donejs-app main page shows up', function() {
  F('title').text('donejs-app', 'Title is set');
});
