
import { SwitchIcon, BackArrowIcon } from '../../../components/Icon';

type RadioWidgetHeaderProps = {
    label?: string;
    handleBackButton?: Function;
    handleSwitchButton?: Function;
}

const RadioWidgetHeader = (props: RadioWidgetHeaderProps) => {
    return (<div className="custom-card-header">
        <BackArrowIcon onClick={props.handleBackButton} />
        <h1>{props.label ? props.label : 'Station'}</h1>
        <SwitchIcon onClick={props.handleSwitchButton} />
    </div>
    )
}
export default RadioWidgetHeader;