import axios from "axios";
import { LIST_STATION } from "./actionTypes";
import config from '../../utils/config';

export const fetchStation = () => {
    return (dispatch) => {
        axios
            .get(`${config.API_BASE_URL}72953f50-dde5-4555-b13e-358115e87936`)
            .then(response => {
                const station = response.data
                dispatch(listStation(station))
            })

    }
}


export const listStation = (station) => {
    return ({
        type: LIST_STATION,
        data: station
    })
}