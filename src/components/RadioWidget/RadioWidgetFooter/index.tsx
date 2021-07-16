import { useContext } from 'react';
import { RadioWidgetContext, RadioStationObject } from '../index';


const RadioWidgetFooter = () => {
    const RADIO_CONTEXT = useContext(RadioWidgetContext);
    return (
        <div className="custom-card-footer">
            <div className="footer-content">
                {RADIO_CONTEXT.selectedStation ?
                    <span>CURRENTLY PLAYING</span> : ""
                }
                <h4>{RADIO_CONTEXT.selectedStation?.station_name}</h4>
            </div>
        </div>

    )
}
export default RadioWidgetFooter;