import { Outlet } from 'react-router';
import Navbar from '../../pages/shared/Navbar/Navbar';
import Footer from '../../pages/shared/Footer/Footer';
import Services from '../../components/serviceSection/Services/Services';

const RootLayout = () => {
    return (
        <div className='max-w-7xl mx-auto bg-base-300'>
            <Navbar></Navbar>
            <Outlet></Outlet>
            <Services></Services>
            <Footer></Footer>

        </div>
    );
};

export default RootLayout;