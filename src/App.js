/**
 * <div id="parent">
 *  div id="child1">
 *    <h1> id="heading">Heding 1</h1>
 *     <h2> id="heading">Heading 2</h2>
 *  </div>
 * *  <div id="child2">
 * *    <h1> id="heading">Heading 1 of Child 2</h1>
 *      <h2> id="heading">Heading  of Child 2</h2>
 *  </div>
 * </div>
 * 
 */

// *******************************************************************************************************************
// Pure react element creation using React.createElement
// const parent = React.createElement("div", { id: "parent" }, [
//   React.createElement("div", { id: "child1", key: "child1" }, [
  //     React.createElement("h1", { id: "heading1", key: "h1-1" }, "Heading 1"),
  //     React.createElement("h2", { id: "heading2", key: "h2-1" }, "Heading 2")
  //   ]),
  //   React.createElement("div", { id: "child2", key: "child2" }, [
    //     React.createElement("h1", { id: "heading3", key: "h1-2" }, "Heading 1 of Child 2"),
    //     React.createElement("h2", { id: "heading4", key: "h2-2" }, "Heading of Child 2")
    //   ])
    // ]);
    // console.log(parent); // object
    // const header = React.createElement(
      //         'h1',
      //         {id:"heading"},
      //         'Hello, World!'
      //     );
      //  ******************************************************************************
      // JSX syntax for creating React elements
        // const heading = (
        //   <h1 id="heading">
        //     Hello, World!
        //   </h1>
        // );
// ********************************************************END Basics***********************************************************
  
import React, {lazy, Suspense, useEffect, useState} from 'react';
import ReactDOM from 'react-dom/client';
import Header from './components/Header';
import Body from './components/Body';
import Error from './components/Error';
// import About from './components/About'; 
import ContactUS from './components/ContactUs';
import RestaurantDetails from './components/RestaurantDetails';
import { createBrowserRouter, RouterProvider, Outlet } from 'react-router-dom'; 
import Shimmer from './components/Shimmer';
import UserContext from './utils/UserContext'; // Importing UserContext
import { Provider } from 'react-redux';
import appStore from './utils/redux/appStore';
import Cart from './components/Cart';

/**
 * Header
 *  - Logo
 * - Nav Items
 * * Body
 *  - Search Bar  
 *  - Restaurant List
 * * Footer
 *  - Links
 *  -Copyright
 * 
 */

/**
 * Lazy loading
 * Chunking
 * Code Splitting
 * Dynamic Import
 * Dynamic bundling
 * on demand loading
 */

const About = lazy(() => import('./components/About'))


const AppLayout = () => {
  const [userName , setUserName] = useState("");

  useEffect(() => {
    const data = {
      name: "Hanumesh B G",
      location: "Bangalore"
    }
    setUserName(data.name);
  }, [])
  return (
    <Provider store={appStore}>
      <UserContext.Provider value={{ LoggedInUser: userName, setUserName }}>
        <div className='app'>
          {/* 
            <UserContext.Provider value={{ LoggedInUser: "Sujatha G" }}>
              // This is valid code we can use UserContext as many time as  }> 
              <Header />
            </UserContext.Provider> 
          */}            
          <Header />
          <Outlet />
        </div>
      </UserContext.Provider>
    </Provider>
    
  );
}

const appRouter = createBrowserRouter([
  {
    path: '/',
    element: <AppLayout />,
    children:[
      {
        path: '/',
        element: <Body />,
      },
      {
        path: '/About',
        element: <Suspense fallback={<Shimmer />}><About /></Suspense>,
      },
      {
        path: '/ContactUs',
        element: <ContactUS />,
      },
      {
        path: '/restaurant/:resId',
        element: <RestaurantDetails />
      },
      {
        path: '/Cart',
        element: <Cart />
      }
    ],
    errorElement: <Error />,
  }
]);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<RouterProvider router={appRouter} />);
// root.render(<AppLayout />);
