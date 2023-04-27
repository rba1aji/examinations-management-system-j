import Home from "../pages/Home"
import StudentLogin from "../pages/Student/StudentLogin"
import StudentWorkspace from "../pages/Student/StudentWorkspace"
import AdminWorkspace from "../pages/Admin/AdminWorkspace"
import FacultyLogin from "../pages/Faculty/FacultyLogin"
// import FacultyWorkspace from "../pages/Faculty/FacultyWorkspace"
import Exam from "../pages/Faculty/Exam"
import AdminLogin from "../pages/Admin/AdminLogin"
import { FacultyWorkspace } from "../pages/Faculty/FacultyWorkspace"
import Print1 from "../pages/Faculty/Print1"
import Print2 from "../pages/Faculty/Print2"

export const loginRoutes = [
    {
        path: '/student/login',
        title: 'Student login',
        component: <StudentLogin />
    },
    {
        path: '/faculty/login',
        title: 'Faculty login',
        component: <FacultyLogin />
    },
    {
        path: '/admin/login',
        title: 'Admin login',
        component: <AdminLogin />
    }
]

export const adminWorkspaceRoutes = [
    {
        path: '/admin/workspace',
        title: 'Admin Workspace',
        component: <AdminWorkspace />
    }
];

export const facultyWorkspaceRoutes = [
    {
        path: '/faculty/workspace',
        title: 'Faculty Workspace',
        component: <FacultyWorkspace />
    },
    {
        path: '/faculty/exam/:examBatchId',
        title: 'Exam',
        component: <Exam />
    },
    {
        path: '/faculty/exam/:examBatchId/print-1',
        title: 'Print Result 1',
        component: <Print1 />
    },
    {
        path: '/faculty/exam/:examBatchId/print-2',
        title: 'Print Result 2',
        component: <Print2 />
    }
];

export const studentWorkspaceRoutes = [
    {
        path: '/student/workspace',
        title: 'Student Workspace',
        component: <StudentWorkspace />
    }
]

export const defaultRoutes = [
    {
        path: '/',
        title: "Home",
        component: <Home />
    }
]
