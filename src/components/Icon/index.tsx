import BackArrow from '../../assets/icon/back-arrow.png';
import Plus from '../../assets/icon/plus.png';
import Minus from '../../assets/icon/minus.png';
import Switch from '../../assets/icon/switch.png';

export const BackArrowIcon = (props: any) => <Icon icon={BackArrow} {...props} />
export const SwitchIcon = (props: any) => <Icon icon={Switch} {...props} />
export const PlusIcon = (props: any) => <Icon icon={Plus} {...props} />
export const MinusIcon = (props: any) => <Icon icon={Minus} {...props} />

const Icon = (props: any) => {
    return (
        <img src={props.icon} {...props} onClick={props.onClick} />
    )
}
export default Icon;
