import QUnit from 'steal-qunit';
import { ViewModel } from './page2';

// ViewModel unit tests
QUnit.module('donejs-app/page2');

QUnit.test('Has message', function(){
  var vm = new ViewModel();
  QUnit.equal(vm.attr('message'), 'This is the app-page2 component');
});
