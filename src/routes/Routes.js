import {
    createBrowserRouter,
    RouterProvider,
    Route,
    Link,
  } from "react-router-dom";
 
  import Main from "../layout/Main";
import Home from './../component/Home/Home';
import Courses from './../component/Courses/Courses';
import Login from './../component/Login/Login';
import Register from './../component/Register/Register';
import Blogs from './../component/Blogs/Blogs';
import Terms from "../component/Terms/Terms";
import IndividualCourse from './../component/IndividualCourse/IndividualCourse';

  export const router = createBrowserRouter([
    {
      path: "/",
      element: <Main></Main>,
      children: [
        {
          path: "/",
          element: <Home></Home>,
          loader: () =>
            fetch("https://assignment-10-servers.vercel.app/courses"),
        },
        {
          path: "/courses",
          element: <Courses></Courses>,
          loader: () =>
            fetch("https://assignment-10-servers.vercel.app/courses"),
        },
        {
          path: "/courses/:id",
          element: <IndividualCourse></IndividualCourse>,
          loader: ({ params }) =>
            fetch(
              `https://assignment-10-servers.vercel.app/courses/${params.id}`
            ),
        },
        
        {
          path: "/login",
          element: <Login></Login>,
        },
        {
          path: "/register",
          element: <Register></Register>,
        },
        {
          path: "/blogs",
          element: <Blogs></Blogs>,
        },
        {
          path: "/terms",
          element: <Terms></Terms>,
        },
        
       
      ],
    },
  ]);
  