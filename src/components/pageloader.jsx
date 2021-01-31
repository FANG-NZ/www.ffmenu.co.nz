import '../scss/pageloader.scss';

const PageLoader = (props) => {
    const _isShown = props.isShown;

    return(
        <div id="page-loader" className={(_isShown)?"" : "hide"}>
            <div className="animsition-loading"></div>
        </div>
    )
}

export default PageLoader;