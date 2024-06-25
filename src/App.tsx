import "./App.css";
// src/index.js or src/App.js
import "./index.css";

// import { Header } from "./components/Header";
// import EmblaCarousel from "./components/EmblaCarousel";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Layout from "./Layout/Layout";
import Home from "./Layout/Routes/Home/Home";
import About from "./Layout/Routes/About/About";
import Contact from "./Layout/Routes/Contact/Contact";

function App() {
  const routes = createBrowserRouter([
    {
      path: "/",
      element: <Layout />,
      children: [
        {
          path: "/",
          element: <Home />,
        },
        {
          path: "/about",
          element: <About about={[]} />,
        },
        {
          path: "/contact",
          element: <Contact />,
        },
        // {
        //   path: "/menu",
        //   element: <Menu />,
        //   children: [{ path: "/:id", element: <MenuItem /> }],
        // },
      ],
    },
  ]);

  return (
    <>
      <RouterProvider router={routes}></RouterProvider>
    </>
  );
  // return (
  //   <>
  //     <Header />
  //     <EmblaCarousel slides={imagelist} />
  //   </>
  // );
}

export default App;
