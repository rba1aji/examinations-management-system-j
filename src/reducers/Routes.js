import Home from "../pages/Home"
import StudentLogin from "../pages/Student/StudentLogin"
import StudentWorkspace from "../pages/Student/StudentWorkspace"
import ManageStudents from "../pages/Admin/ManageStudents"
import AdminWorkspace from "../pages/Admin/Workspace"
import ManageCourses from "../pages/Admin/ManageCourses"
import ManageExams from "../pages/Admin/ManageExams"
import ManageFaculties from "../pages/Admin/ManageFaculties"
import FacultyLogin from "../pages/Faculty/FacultyLogin"
import FacultyWorkspace from "../pages/Faculty/FacultyWorkspace"
import Exam from "../pages/Faculty/Exam"

export const loginRoutes = [
    {
        path: '/student/login',
        title: 'Student',
        component: <StudentLogin />
    },
    {
        path: '/faculty/login',
        title: 'Faculty',
        component: <FacultyLogin />
    },
    {
        path: '/admin/workspace',
        title: 'Admin',
        component: <AdminWorkspace />
    }
]

export const adminWorkspaceRoutes = [
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

export const facultyWorkspaceRoutes = [
    {
        path: '/faculty/exam/:examBatchId',
        title: 'Exam',
        component: <Exam />
    }
];

export const defaultRoutes = [
    {
        path: '/',
        title: "Home",
        component: <Home />
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

export const facultyRoutes = [
    {
        path: '/faculty/login',
        title: 'Faculty Login',
        component: <FacultyLogin />
    },
    {
        path: '/faculty/workspace',
        title: 'Faculty Workspace',
        component: <FacultyWorkspace />
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

