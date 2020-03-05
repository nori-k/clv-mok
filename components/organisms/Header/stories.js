import { storiesOf } from '@storybook/vue';
import Header from './index.vue';

storiesOf('Header', module).add('default', () => ({
  components: { Header },
  template: `<Header></Header>`
}));
