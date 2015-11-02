import Component from 'can/component/';
import Map from 'can/map/';
import 'can/map/define/';
import './page3.less!';
import template from './page3.stache!';
import fixture from 'can-fixture';

export const ViewModel = Map.extend({
  define: {
    message: {
      value: 'This is the app-page3 component'
    }
  }
});

export default Component.extend({
  tag: 'app-page3',
  viewModel: ViewModel,
  template
});