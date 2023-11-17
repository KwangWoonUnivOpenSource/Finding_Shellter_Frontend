const ShowShellters = (props) =>{
    const shllter = props.data
   
    return (
        <>
            {shllter.forEach(element => {
                <div>대피소 명: {element.shllterName} 대피소 주소: {element.shllterAddress} 지도 보기: {element.directionUrl} 로드 뷰: {element.roadViewUrl} 거리 : {element.distance}</div>
            })}
        </>
    )
}
export default ShowShellters