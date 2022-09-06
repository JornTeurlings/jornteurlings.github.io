import PathNavigation from "./PathNavigation";
import PathGridContainer from "./PathGridContainer";

const PathDashboard = () => {
    return (
        <div className="col-md-12 d-flex justify-content-center flex-column m-auto">
            <PathNavigation />
            <PathGridContainer />
        </div>
    )
}

export default PathDashboard;