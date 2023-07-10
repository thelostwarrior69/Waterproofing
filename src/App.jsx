import AboutUs from './Pages/AboutUs/AboutUs';
import Home from './Pages/Home/Home';
import Certificates from './components/Certificates/Certificates'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import ABoutCeo from './components/AboutCeo/ABoutCeo';
import ClientPage from './Pages/ClientPage/ClientPage';
import ServicesPage from './Pages/ServicesPage/ServicesPage'
import ProductsPage from './Pages/ProductsPage/ProductsPage'
import Concepts from './Pages/Concepts/Concepts';
import Gallery from './Pages/Gallery/Gallery';
import PvcMembrane from './Pages/ProductsPage/PvcMembrane/PvcMembrane';
import AppMembrane from './Pages/ProductsPage/AppMembrane/AppMembrane';
import SbsMembrane from './Pages/ProductsPage/SbsMembrane/SbsMembrane';
import EpdmMembrane from './Pages/ProductsPage/EpdmMembrane/EpdmMembrane';
import CementiousWp from './Pages/ProductsPage/CementiousWp/CementiousWp';
import Poluurethera from './Pages/ProductsPage/Polyurethera/Poluurethera';
import PolyureaCoating from './Pages/ProductsPage/PolyureaCoating';
import Tpomembrane from './Pages/ProductsPage/Tpomembrane';
import RubberBasedEMBFlexibleAcrylicCoating from './Pages/ProductsPage/RubberBasedEMBFlexibleAcrylicCoating';
import CrystallineWaterproofing from './Pages/ProductsPage/CrystallineWaterproofing';
import WaterProofing from './Pages/ServicesPage/WaterProofing';
import EpoxyFlooring from './Pages/ServicesPage/EpoxyFlooring';
import Repair from './Pages/ServicesPage/Repair';
import Insulation from './Pages/ServicesPage/Insulation';
import ProjectConsultaion from './Pages/ServicesPage/ProjectConsultaion';
import SingleProjectsImages from './Pages/SingleProjectImages/SingleProjectsImages';
import './App.css';
import Contacts from './Pages/Contacts/Contacts';
import WaterSourcespage from './Pages/Concepts/WaterSourcespage';
import WaterProofingIndiapage from './Pages/Concepts/WaterProofingIndiapage';
import WaterProodingproductsPage from './Pages/Concepts/WaterProodingproductsPage';
import SelectProducts from './Pages/Concepts/SelectProducts';

 const router = createBrowserRouter([
  {
    path: "*",
    exact: true,
    element: <Home/>
  },
  {
    path: "/home",
    element: <>
    {<Home/>}
    </>,
    exact: true,
  },
  {
    path: "/about",
    element: <AboutUs/>,
    exact: true
  },
  {
    path: "/aboutCeo",
    element:<ABoutCeo/> ,
    exact: true
  },
  {
    path: "/certificates",
    element:<Certificates/> ,
    exact: true
  },
  {
    path: "/Clients",
    element:<ClientPage/> ,
    exact: true
  }
  ,
  {
    path: "/services",
    element:<ServicesPage/> ,
    exact: true
  },
  {
    path: "/products",
    element:<ProductsPage/> ,
    exact: true
  },
  {
    path: "/gallery",
    element: <Gallery/> ,
    exact: true
   },
  {
    path: "/concepts",
    element: <Concepts/> ,
    exact: true
  },
  {
    path: "/contacts",
    element: <Contacts/> ,
    exact: true
  },
  {
    path: "/products/pvcmembrane",
    element:<PvcMembrane/> ,
    exact: true
  },
  {
    path: "/products/appmembrane",
    element: <AppMembrane/>  ,
    exact: true
  },
  {
    path: "/products/sbsmembrane",
    element: <SbsMembrane/> ,
    exact: true
  },
  {
    path: "/products/epdmMembrane",
    element: <EpdmMembrane/> ,
    exact: true
  },
  {
    path: "/products/CementitiousWPCoating",
    element: <CementiousWp/> ,
    exact: true
  },
  {
    path: "/products/polyurethaneCoating",
    element: <Poluurethera/> ,
    exact: true
  },
  {
    path: "/products/PolyureaCoating",
    element: <PolyureaCoating/> ,
    exact: true
  },
  {
    path: "/products/TPOmembranes",
    element: <Tpomembrane/>,
    exact: true
  },
  {
    path: "/products/RubberBasedEMBFlexibleAcrylicCoating",
    element: <RubberBasedEMBFlexibleAcrylicCoating/>,
    exact: true
  },
  {
    path: "/products/CrystallineWaterproofing",
    element: <CrystallineWaterproofing/>,
    exact: true
  },
  {
    path: "/services/waterproofing",
    element: <WaterProofing/> ,
    exact: true
  },
  {
    path: "/services/epoxyFlooring",
    element: <EpoxyFlooring/> ,
    exact: true
  },
  {
    path: "/services/repair",
    element: <Repair/> ,
    exact: true
  },
  {
    path: "/services/insulation",
    element: <Insulation/> ,
    exact: true
  },
  {
    path: "/services/projectConsultancy",
    element: <ProjectConsultaion/> ,
    exact: true
  },
  {
    path: "/gallery/project",
    element: <SingleProjectsImages/> ,
    exact: true
  },
  {
    path: "/concepts/WaterSources",
    element: <WaterSourcespage /> ,
    exact: true
  },
  {
    path: "/concepts/WaterProofingIndia",
    element: <WaterProofingIndiapage/>,
    exact: true
  },
  {
    path: "/concepts/waterProofingProducts",
    element: <WaterProodingproductsPage /> ,
    exact: true
  },
  {
    path: "/concepts/selectProduct",
    element: <SelectProducts /> ,
    exact: true
  },
]);



function App() {
  return (
    <div className ="App">
      <RouterProvider router={router}/>
  </div>
  );
}

export default App;
