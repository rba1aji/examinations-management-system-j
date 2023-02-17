import Home from "../pages/Home"
import StudentLogin from "../pages/Student/Login"
import StudentWorkspace from "../pages/Student/Workspace"
import StudentsData from "../pages/Admin/StudentsData"
import AdminWorkspace from "../pages/Admin/Workspace"
import RegisterStudents from "../pages/Admin/RegisterStudents"

export const routes = [
    {
        path: '/',
        title: "Home",
        component: <Home />
    },
    {
        path: '/students-data',
        title: 'Students Data',
        component: <StudentsData />
    },
    {
        path: '/student/marks',
        title: 'View marks',
    },
    {
        path: '/register-students',
        title: 'Register students',
        component: <RegisterStudents />
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

