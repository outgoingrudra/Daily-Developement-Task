
const Carlayout = (props) => {
    const {data} = props

    const styleData ={
        color : "red",
        fontSize : "20px",
        fontWeight : "bold",
        border : "1px solid black",
        padding : "10px",
        margin : "10px"
    }

  return (
    <div className="card" style={styleData}>
         Car-Name : {data["model"]} &nbsp; &nbsp; &nbsp;
         Car-Location : {data["location"]} &nbsp; &nbsp; &nbsp;
         Car-Price : {data["pricePerDay"]}
      
      </div>
)};

export default Carlayout;