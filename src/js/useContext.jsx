import React, {useState, useContext} from "react";
import blank from "../img/blank.png";

const BulbContext = React.createContext();

export default function UseContextExample() {
  const [bulbStatus, setBulbStatus] = useState(0);

  const toggleLight = () => {
    setBulbStatus(bulbStatus=>{
      return bulbStatus ? 0 : 1;
    });
  }

  return (
    <BulbContext.Provider value={{bulbStatus,toggleLight}}>
      <Bulb />
    </BulbContext.Provider>
  );
}

function Bulb() {
  const ctxBulb = useContext(BulbContext);
  return (
    <div>
      <img className={`bulb ${ctxBulb.bulbStatus ? `on` : `off`}`} alt="" src={blank} onClick={()=>ctxBulb.toggleLight()}/>
      {`Turn ${ctxBulb.bulbStatus ? `off` : `on`} the light!`}
    </div>
  );
}