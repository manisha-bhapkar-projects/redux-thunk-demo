import React from "react";
import { shallow } from 'enzyme';
import toJson from 'enzyme-to-json'
import RadioWidget from './index';
import mockStationList from './mockStationList'
const createTestProps = (props) => ({
    stationList: mockStationList,
    ...props
})
describe("Radio Widget component test suite", () => {
    it('it should render successfully', () => {
        let props = createTestProps({
            cardTitle: 'Custom Card Title',
            handlePlusButton: jest.fn(),
            handleMinusButton: jest.fn(),
            handleBackButton: jest.fn(),
            handleSwitchButton: jest.fn()
        })
        const comp = shallow(
            <RadioWidget {...props} />
        );
        expect(toJson(comp.container)).toMatchSnapshot();
    });
});