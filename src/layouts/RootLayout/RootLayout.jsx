import { Outlet } from 'react-router';
import Navbar from '../../pages/shared/Navbar/Navbar';
import Footer from '../../pages/shared/Footer/Footer';

const RootLayout = () => {
    return (
        <div className='max-w-7xl mx-auto bg-base-300'>
            <Navbar></Navbar>
            <Outlet></Outlet>
            <Footer></Footer>

        </div>
    );
};

export default RootLayout;