import stationReducer from './station';
import { LIST_STATION } from "../actions/actionTypes";
import { RadioWidgetActionProps } from '../../store/reducers/station';

describe("station reducer test cases", () => {
    it('should LIST_STATION in reducer', () => {

        let initialState = {
            station_data: [],
            loading: false
        };

        const action: RadioWidgetActionProps = {
            type: LIST_STATION,
            data: []
        }
        let state = stationReducer(initialState, action)
        expect(state).toEqual(initialState)
    });
})