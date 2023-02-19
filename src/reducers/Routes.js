import Home from "../pages/Home"
import StudentLogin from "../pages/Student/Login"
import StudentWorkspace from "../pages/Student/Workspace"
import ManageStudents from "../pages/Admin/ManageStudents"
import AdminWorkspace from "../pages/Admin/Workspace"
// import RegisterStudents from "../pages/Admin/RegisterStudents"
import ManageCourses from "../pages/Admin/ManageCourses"

export const AdminWorkspaceRoutes = [
    {
        path: '/admin/manage-students',
        title: 'Manage students',
        component: <ManageStudents />
    },
    // {
    //     path: '/register-students',
    //     title: 'Register students',
    //     component: <RegisterStudents />
    // },
    {
        path: '/admin/manage-courses',
        title: 'Manage courses',
        component: <ManageCourses />
    }
];

export const defaultRoutes = [
    {
        path: '/',
        title: "Home",
        component: <Home />
    },
    {
        path: '/student/marks',
        title: 'View marks',
    }
]

export const studentRoutes = [
    {
        path: '/student/login',
        title: 'Student Login',
        component: <StudentLogin />
    },
    {
        path: '/student/workspace',
        title: 'Student Workspace',
        component: <StudentWorkspace />
    }
]

export const adminRoutes = [
    {
        path: '/admin/login',
        title: 'Admin Login',
    },
    {
        path: '/admin/workspace',
        title: 'Admin Workspace',
        component: <AdminWorkspace />
    },
]

