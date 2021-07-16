import { Provider } from 'react-redux';
import store from '../../store/createstore';

export default function MockProvider({ children }) {
  return (
    <Provider store={store}>
      {children}
    </Provider>
  );
};
