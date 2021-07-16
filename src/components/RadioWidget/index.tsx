import React from 'react';
import RadioWidgetList from './RadioWidgetList';
import RadioWidgetFooter from './RadioWidgetFooter';
import RadioWidgetHeader from './RadioWidgetHeader';
import './index.css';
export type RadioWidgetProps = {
    cardTitle?: string;
    stationList: Array<RadioStationObject>;
    loading: boolean
    getSelectedStation?: (RadioStationObject) => void;
    handlePlusButton?: () => void;
    handleMinusButton?: () => void;
    handleBackButton?: () => void;
    handleSwitchButton?: () => void;
}

export type RadioStationObject = {
    station_id: Number;
    station_name: string;
    station_frequency: String;
}
export const RadioWidgetContext = React.createContext<any>(0);

const RadioWidget = (props: RadioWidgetProps) => {
    const { Provider } = RadioWidgetContext;
    const [selectedStation, setselectedStation] = React.useState<RadioStationObject>();

    const handleStationSelect = (data: RadioStationObject) => {
        if (selectedStation?.station_id == data.station_id) {
            setselectedStation(undefined)
            props.getSelectedStation && props.getSelectedStation(undefined)
        } else {
            setselectedStation(data);
            props.getSelectedStation && props.getSelectedStation(data)
        }
    }

    return (
        <div className="custom-card">
            <Provider
                value={{
                    selectedStation: selectedStation
                }}
            >
                <RadioWidgetHeader label={props.cardTitle}
                    handleBackButton={props.handleBackButton}
                    handleSwitchButton={props.handleSwitchButton} />
                <RadioWidgetList
                    list={props.stationList}
                    loading={props.loading}
                    handleSelectStation={handleStationSelect}
                    handleMinusButton={props.handleMinusButton}
                    handlePlusButton={props.handlePlusButton}

                />
                <RadioWidgetFooter />
            </Provider>
        </div>
    );
}
export default RadioWidget;