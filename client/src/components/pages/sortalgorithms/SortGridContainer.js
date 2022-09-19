import GraphBar from "./GraphBar";

const colors = {
    0: '#6f74a1',
    1: '#14FFEC',
    2: '#0D7377',
    3: '#3ad3d'
}


const SortGridContainer = (props) => {
    const renderBars = () => {
        if (props.array !== null) {
            if (props.algorithm === 'binary') {   
                return props.array.map((value, index) => (
                    <GraphBar searchValue={props.searchValue} onClick={props.setSearchValue} index={index} key={index} height={value} color={colors[props.colorsArray[index]]}/>
                ))
            } else {
                return props.array.map((value, index) => (
                    <GraphBar onClick={props.setSearchValue} index={index} key={index} height={value} color={colors[props.colorsArray[index]]}/>
                ))
            }
        }
        return <div></div>
    }

    return (
        <div id="content-height" className="my-5 d-flex justify-content-center flex-grow-1">
            <div className="col-md-9 d-flex flex-wrap bar-chart-sort justify-content-center">
                {renderBars()}
            </div>
        </div>
    )
}

export default SortGridContainer;