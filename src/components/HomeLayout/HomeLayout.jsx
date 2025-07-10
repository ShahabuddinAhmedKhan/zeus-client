
import Navbar from '../Navbar';
import Footer from '../Footer';
import { Outlet } from 'react-router';
import { AuthContext } from '../AuthProvider';
import Loading from '../Loading';

const HomeLayout = () => {
    
    return (
        <div>
            
            <Navbar></Navbar>
            <Outlet></Outlet>
            <Footer></Footer>
        </div>
    );
};

export default HomeLayout;