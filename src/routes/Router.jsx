import RootLayout from "../layouts/RootLayout";
import SignIn from "../pages/SignIn";

import {
    createBrowserRouter,
} from "react-router";
import SignUp from "../pages/SignUp";
import JobDetails from "../components/JobDetails";
import AppliedJob from "../components/AppliedJob";
import PrivateRoute from "../contexts/PrivateRoute";
import Home from "../pages/Home";
import ApplicationForm from "../components/ApplicationForm";
import MyApplications from "../components/MyApplications";
import AddJobs from "../components/AddJobs/AddJobs";


export const router = createBrowserRouter([
    {
        path: "/",
        Component: RootLayout,
        children: [
            {
                index: true,
                Component: Home
            },
            {
                path: '/jobs/:id',
                loader: ({ params }) => fetch(`http://localhost:3000/jobs/${params.id}`),
                Component: JobDetails
            },
            {
                path: '/myApplications',
                element: <PrivateRoute>
                    <MyApplications></MyApplications>
                </PrivateRoute>
            },
            {
                path: '/jobApply/:id',
                element: <PrivateRoute>
                    <ApplicationForm></ApplicationForm>
                </PrivateRoute>
            },
            {
                path: '/addJobs',
                element: <PrivateRoute>
                    <AddJobs></AddJobs>
                </PrivateRoute>
            }
            ,
            {
                path: '/signIn',
                Component: SignIn

            },
            {
                path: '/signUp',
                Component: SignUp
            }
        ]
    },
]);
