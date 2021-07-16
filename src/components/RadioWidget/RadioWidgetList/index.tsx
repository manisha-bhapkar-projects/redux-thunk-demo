import { useContext } from 'react';
import { PlusIcon, MinusIcon } from '../../../components/Icon';
import PlaceholderImage from '../../../assets/placeholder.png';
import Icon from '../../Icon';
import { RadioWidgetContext } from '../index';
import LoaderComponent from '../../Loader/LoaderComponent'

type RadioWidgetListProps = {
    list: Array<any>,
    loading: boolean
    handleSelectStation: Function,
    handlePlusButton?: Function,
    handleMinusButton?: Function,
}

const RadioWidgetList = (props: RadioWidgetListProps) => {
    const RADIO_CONTEXT = useContext(RadioWidgetContext);

    return (
        <div className="custom-card-body">
            {
                props.loading ?
                    <div className="d-flex justify-content-center align-items-center w-100 h-100">
                        <LoaderComponent
                            type="Circles"
                            color="#ecaa5b"
                            height={50}
                            width={50}
                            timeout={5000}
                        />
                    </div>
                    :
                    props.list &&
                    props.list
                        .map((station: any) => {
                            return (
                                <>
                                    {station.station_id == RADIO_CONTEXT.selectedStation?.station_id ?
                                        <div className="fm-point-show" key={station.station_id}>
                                            <button className="stationbutton" >
                                                <MinusIcon onClick={props.handleMinusButton} />
                                            </button>
                                            <Icon icon={PlaceholderImage} />
                                            <button className="stationbutton" >
                                                <PlusIcon onClick={props.handlePlusButton} />
                                            </button>
                                        </div>
                                        : ""}
                                    <a className="custom-card-body-content"
                                        onClick={() => props.handleSelectStation(station)}>
                                        <h2>{station.station_name}</h2>
                                        <h3>{station.station_frequency}</h3>
                                    </a>
                                </>
                            )
                        })

            }

        </div>
    )
}
export default RadioWidgetList;