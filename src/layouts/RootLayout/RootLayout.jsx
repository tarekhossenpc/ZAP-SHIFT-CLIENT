import { Outlet } from 'react-router';
import Navbar from '../../pages/shared/Navbar/Navbar';
import Footer from '../../pages/shared/Footer/Footer';
import Services from '../../components/serviceSection/Services/Services';
import HowItWorks from '../../components/HowItWorksSection/HowItWorks';

const RootLayout = () => {
    return (
        <div className=' max-w-[1500px] mx-auto bg-base-300'>
            <Navbar></Navbar>
            <Outlet></Outlet>
            <HowItWorks></HowItWorks>
            <Services></Services>
            <Footer></Footer>

        </div>
    );
};

export default RootLayout;