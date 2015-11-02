import Component from 'can/component/';
import Map from 'can/map/';
import 'can/map/define/';
import './page2.less!';
import template from './page2.stache!';

export const ViewModel = Map.extend({
  define: {
    message: {
      value: 'This is the app-page2 component'
    }
  }
});

export default Component.extend({
  tag: 'app-page2',
  viewModel: ViewModel,
  template
});