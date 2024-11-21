import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import {
  createBrowserRouter,
  RouterProvider,
  Navigate,
} from "react-router-dom";
import Login from "./components/loginpage/Login.jsx";
import Dashboard from "./components/dashboard/Dashboard.jsx";
import Admin from "./components/dashboard/adminPanel/Admin.jsx";
import ManageStudents from "./components/dashboard/student/ManageStudents.jsx";
import ActiveStudent from "./components/dashboard/student/ActiveStudent.jsx";
import PassedOutStudents from "./components/dashboard/student/PassedOutStudents.jsx";
import InActiveStudents from "./components/dashboard/student/InActiveStudents.jsx";
import Courses from "./components/dashboard/courses/Courses.jsx";
import Batch from "./components/dashboard/batch/Batch.jsx"
import Faculty from "./components/dashboard/faculty/Faculty.jsx"
import Expense from "./components/dashboard/expense/Expense.jsx";
import Fee from "./components/dashboard/fee/Fee.jsx"
const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
  },
  {
    path: "/login",
    element: <Login />,
  },
  {
    path: "/",
    element: <Admin />,
    children: [
      {
        path: "dash-board",
        element: <Dashboard />,
      },

      {
        path: "manage-student",
        element: <ManageStudents />,
        children: [
          {
            path: "", // This path will match /dashboard/manage-student
            element: <Navigate to="active-student" />, // Redirect to Active Students
          },
          {
            path: "active-student",
            element: <ActiveStudent />,
          },
          {
            path: "passed-out-students",
            element: <PassedOutStudents />,
          },
          {
            path: "in-active-students",
            element: <InActiveStudents />,
          },
         
        ],
      },
      {
        path: "courses",
        element:<Courses />


    
      },
      {
        path: "batch",
        element:<Batch />


    
      },
      {
        path: "faculty",
        element:<Faculty />


    
      },
      {
        path: "expense",
        element:<Expense />


    
      },
      {
        path: "fee",
        element:<Fee />


    
      },

    ],
  },
]);

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
);
