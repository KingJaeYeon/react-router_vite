import {lazy, Suspense} from "react";

import {BrowserRouter, Navigate, Route, Routes} from "react-router-dom";

import {CitiesProvider} from "./context/CitiesContext.jsx";
import {AuthProvider} from "./context/AuthContext.jsx";
import ProtectedRoute from "./pages/ProtectedRoute.jsx";

import CityList from "./components/CityList.jsx";
import CountriesList from "./components/CountryList.jsx";
import City from "./components/City.jsx";
import Form from "./components/Form.jsx";
import SpinnerFullPage from "./components/SpinnerFullPage.jsx";


// import Product from "./pages/Product.jsx";
// import Pricing from "./pages/Pricing.jsx";
// import HomePage from "./pages/HomePage.jsx";
// import PageNotFound from "./pages/PageNotFound.jsx";
// import AppLayout from "./pages/AppLayout.jsx";
// import Login from "./pages/Login.jsx";

// dist/assets/index-fa614c4c.js   526.55 kB │ gzip: 149.12 kB
// dist/assets/index-188fe967.css   31.30 kB │ gzip:   5.22 kB


const HomePage = lazy(() => import("./pages/HomePage.jsx"))
const Product = lazy(() => import("./pages/Product.jsx"))
const Pricing = lazy(() => import("./pages/Pricing.jsx"))
const Login = lazy(() => import("./pages/Login.jsx"))
const AppLayout = lazy(() => import("./pages/AppLayout.jsx"))
const PageNotFound = lazy(() => import("./pages/PageNotFound.jsx"))


function App() {

    return (
        <AuthProvider>
            <CitiesProvider>
                <BrowserRouter>
                    <Suspense fallback={<SpinnerFullPage/>}>
                        <Routes>
                            <Route index element={<HomePage/>}/>
                            <Route path='product' element={<Product/>}/>
                            <Route path='pricing' element={<Pricing/>}/>
                            <Route path='app' element={<ProtectedRoute><AppLayout/></ProtectedRoute>}>
                                <Route index element={<Navigate replace to='cities'/>}/>
                                <Route path='cities' element={<CityList/>}/>
                                <Route path='cities/:id' element={<City/>}/>
                                <Route path='countries' element={<CountriesList/>}/>
                                <Route path='form' element={<Form/>}/>
                            </Route>
                            <Route path='login' element={<Login/>}/>
                            <Route path='*' element={<PageNotFound/>}/>
                        </Routes>
                    </Suspense>
                </BrowserRouter>
            </CitiesProvider>
        </AuthProvider>
    );
}

export default App;