import Loader from "react-loader-spinner";

const LoaderComponent = (props) => {
    // console.log(props);

    return (
        <Loader
            type={props.type}
            color={props.color}
            height={props.height}
            width={props.width}
            timeout={props.timeout}
        />
    )
}
export default LoaderComponent;