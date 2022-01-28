import './App.css';
import Navbar from './components/Navbar';

import TextForm from './components/TextForm';

function App() {

    return (
        <div className="App" >

            <Navbar />

            <TextForm heading="Enter Your Text Analyze Below" />
        </div>

    );
}





export default App;