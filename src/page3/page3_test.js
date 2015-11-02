import QUnit from 'steal-qunit';
import { ViewModel } from './page3';

// ViewModel unit tests
QUnit.module('donejs-app/page3');

QUnit.test('Has message', function(){
  var vm = new ViewModel();
  QUnit.equal(vm.attr('message'), 'This is the app-page3 component');
});
