import './App.css';
import data from './data/data.json';

import PreNavbar from './components/PreNavbar/PreNavbar';
import Navbar from './components/Navbar/Navbar';

import Slider from './components/Slider/Slider';

import Heading from './components/Heading/Heading';
import StarProduct from './components/StarProduct/StarProduct';


import Footer from './components/Footer/Footer';


function App() {
    return (
        
           <>
                <PreNavbar />
                <Navbar />
                
                <Slider start={data.banner.start} />
                
                <Heading text='STAR PRODUCTS' />
                <StarProduct starProduct={data.starProduct} />
                
                
                <Footer footer={data.footer} />
           </>
        
    );
}

export default App;