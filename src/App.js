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
  
import React from 'react';
import ReactDOM from 'react-dom/client';
import Header from './components/Header';
import Body from './components/Body';
import Error from './components/Error';
import About from './components/About'; 
import ContactUS from './components/ContactUs';
import RestaurantDetails from './components/RestaurantDetails';
import { createBrowserRouter, RouterProvider, Outlet } from 'react-router-dom'; 

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

const AppLayout = () => {
  return (
    <div className='app'>
      <Header />
      <Outlet />
    </div>
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
        element: <About />,
      },
      {
        path: '/ContactUs',
        element: <ContactUS />,
      },
      {
        path: '/restaurant/:resId',
        element: <RestaurantDetails />
      }
    ],
    errorElement: <Error />,
  }
]);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<RouterProvider router={appRouter} />);
// root.render(<AppLayout />);
