import Home from "../pages/Home"
import StudentLogin from "../pages/Student/Login"
import StudentWorkspace from "../pages/Student/Workspace"
import ManageStudents from "../pages/Admin/ManageStudents"
import AdminWorkspace from "../pages/Admin/Workspace"
import ManageCourses from "../pages/Admin/ManageCourses"
import ManageExams from "../pages/Admin/ManageExams"
import ManageFaculties from "../pages/Admin/ManageFaculties"

export const AdminWorkspaceRoutes = [
    {
        path: '/admin/manage-students',
        title: 'Manage Students',
        component: <ManageStudents />
    },
    {
        path: '/admin/manage-faculties',
        title: 'Manage Faculties',
        component: <ManageFaculties />
    },
    {
        path: '/admin/manage-courses',
        title: 'Manage Courses',
        component: <ManageCourses />
    },
    {
        path: '/admin/manage-exams',
        title: 'Manage Exams',
        component: <ManageExams />
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

