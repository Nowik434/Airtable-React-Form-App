import Checkout from './Components/Checkout';
import Airtable from 'airtable';
import store from './store';
import { Provider } from 'react-redux'

Airtable.configure({
  endpointUrl: 'https://api.airtable.com',
  apiKey: 'keyUikARuFZvTwxwu'
});
const base = Airtable.base('appz3wXEuchIbubsF');

function App() {
  return (
    <Provider store={store}>
      <div className="App">
        <Checkout base={base} />
      </div>
    </Provider>
  );
}

export default App;
