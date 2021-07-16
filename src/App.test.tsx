import React from 'react';
import { shallow } from 'enzyme'
import toJson from 'enzyme-to-json'
import App from './App';
import MockProvider from "./utils/mocks/MockProvider";
// const createTestProps = (props) => ({
//   stationList: MockProvider,
//   ...props
// })
describe("App component test suite", () => {
  it('it should render successfully', () => {
    // let props = createTestProps({})
    const comp = shallow(
      <MockProvider>
        <App />
      </MockProvider>
    );
    expect(toJson(comp.container)).toMatchSnapshot();
  });
});