import Component from '@glimmer/component';
import ENV from 'super-rentals2/config/environment';

export default class MapComponent extends Component {
    get token() {
          return encodeURIComponent(ENV.MAPBOX_ACCESS_TOKEN);
    }
}
