import { Routes, Route, Navigate } from 'react-router-dom'
import PublicLayout from '../layouts/PublicLayout'
import AuthLayout from '../layouts/AuthLayout'
import DashboardLayout from '../layouts/DashboardLayout'
import AdminLayout from '../layouts/AdminLayout'
import ProtectedRoute from './ProtectedRoute'
import AdminRoute from './AdminRoute'
import { ROUTES } from '../constants/routes'

import Home from '../pages/public/Home'
import About from '../pages/public/About'
import Pricing from '../pages/public/Pricing'
import Blog from '../pages/public/Blog'
import Contact from '../pages/public/Contact'
import Login from '../pages/public/Login'
import AdminLogin from '../pages/public/AdminLogin'
import Register from '../pages/public/Register'

import Dashboard from '../pages/dashboard/Dashboard'
import Stories from '../pages/dashboard/Stories'
import StoryEditor from '../pages/dashboard/StoryEditor'
import StoryGenerator from '../pages/dashboard/StoryGenerator'
import Characters from '../pages/dashboard/Characters'
import Episodes from '../pages/dashboard/Episodes'
import EmotionViewer from '../pages/dashboard/EmotionViewer'
import AudioLibrary from '../pages/dashboard/AudioLibrary'
import MotionVideos from '../pages/dashboard/MotionVideos'
import Exports from '../pages/dashboard/Exports'
import Profile from '../pages/dashboard/Profile'

import AdminDashboard from '../pages/admin/Dashboard'
import AdminUsers from '../pages/admin/Users'
import AdminStories from '../pages/admin/Stories'
import AdminCharacters from '../pages/admin/Characters'
import AdminAudio from '../pages/admin/Audio'
import AdminMotionVideos from '../pages/admin/MotionVideos'
import AdminAnalytics from '../pages/admin/Analytics'
import AdminReports from '../pages/admin/Reports'
import AdminSettings from '../pages/admin/Settings'
import AdminNotifications from '../pages/admin/Notifications'

export default function AppRoutes() {
  return (
    <Routes>
      <Route element={<AuthLayout />}>
        <Route path={ROUTES.LOGIN} element={<Login />} />
        <Route path={ROUTES.ADMIN_LOGIN} element={<AdminLogin />} />
        <Route path={ROUTES.REGISTER} element={<Register />} />
      </Route>

      <Route element={<PublicLayout />}>
        <Route path={ROUTES.HOME} element={<Home />} />
        <Route path={ROUTES.ABOUT} element={<About />} />
        <Route path={ROUTES.PRICING} element={<Pricing />} />
        <Route path={ROUTES.BLOG} element={<Blog />} />
        <Route path={ROUTES.CONTACT} element={<Contact />} />
      </Route>

      <Route
        element={
          <ProtectedRoute>
            <DashboardLayout />
          </ProtectedRoute>
        }
      >
        <Route path={ROUTES.DASHBOARD} element={<Dashboard />} />
        <Route path={ROUTES.STORIES} element={<Stories />} />
        <Route path={ROUTES.STORY_EDITOR} element={<StoryEditor />} />
        <Route path={ROUTES.STORY_GENERATOR} element={<StoryGenerator />} />
        <Route path={ROUTES.CHARACTERS} element={<Characters />} />
        <Route path={ROUTES.EPISODES} element={<Episodes />} />
        <Route path={ROUTES.EMOTION_VIEWER} element={<EmotionViewer />} />
        <Route path={ROUTES.AUDIO_LIBRARY} element={<AudioLibrary />} />
        <Route path={ROUTES.MOTION_VIDEOS} element={<MotionVideos />} />
        <Route path={ROUTES.EXPORTS} element={<Exports />} />
        <Route path={ROUTES.PROFILE} element={<Profile />} />
      </Route>

      <Route
        element={
          <AdminRoute>
            <AdminLayout />
          </AdminRoute>
        }
      >
        <Route path={ROUTES.ADMIN} element={<AdminDashboard />} />
        <Route path={ROUTES.ADMIN_USERS} element={<AdminUsers />} />
        <Route path={ROUTES.ADMIN_STORIES} element={<AdminStories />} />
        <Route path={ROUTES.ADMIN_CHARACTERS} element={<AdminCharacters />} />
        <Route path={ROUTES.ADMIN_AUDIO} element={<AdminAudio />} />
        <Route path={ROUTES.ADMIN_MOTION_VIDEOS} element={<AdminMotionVideos />} />
        <Route path={ROUTES.ADMIN_ANALYTICS} element={<AdminAnalytics />} />
        <Route path={ROUTES.ADMIN_REPORTS} element={<AdminReports />} />
        <Route path={ROUTES.ADMIN_SETTINGS} element={<AdminSettings />} />
        <Route path={ROUTES.ADMIN_NOTIFICATIONS} element={<AdminNotifications />} />
      </Route>

      <Route path="*" element={<Navigate to={ROUTES.HOME} replace />} />
    </Routes>
  )
}
