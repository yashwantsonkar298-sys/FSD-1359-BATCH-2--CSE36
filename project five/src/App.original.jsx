import Header from "./ component/Header";
import {Footer} from "./component/Info";
import { About,Contact } from "./component/Info";

function App(){
  return(
    <div style={{ padding: "20px", fontFamily: " Arial"}}>
      <h1> Import and  Export Component Exsmple</h1> 
      <Header/>
      <About/>
      <contct/>
      <footer/>

    </div>
  );
}
export default App;