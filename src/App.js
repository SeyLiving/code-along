import Header from "./components/Header";
import Button from "./components/Button";
import {Image} from "./components/Image";
import Navbar from "./components/Navbar";
import Practice from "./components/Practice"
import TaskManager from "./components/TaskManager";
import Form from "./components/Form";

function App(){
    return (
        <div>
        
            {/* <Navbar />
            <Header />
            <Button label="Add to Cart" />
            <Button label="Register" />
            <Button label="Login" />
            <Button label="Read More" />
            <Image /> */}
            {/* <Practice/> */} 
            <TaskManager></TaskManager>
            {/* <Form></Form> */}
        </div>
        
    )
}

export default App;
