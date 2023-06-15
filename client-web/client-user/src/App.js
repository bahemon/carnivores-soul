import { Provider } from 'react-redux';
import { RouterProvider } from 'react-router-dom';
import router from './router';
import store from './store';

function App() {
  return (
    <div className="App">
      <Provider store={store}>
        <RouterProvider router={router} />
      </Provider>
    </div>
  );
}

export default App;
