import { lazy } from 'react';

const Calendar = lazy(() => import('../pages/Calendar'));
const Chart = lazy(() => import('../pages/Chart'));
const FormElements = lazy(() => import('../pages/Form/FormElements'));
const FormLayout = lazy(() => import('../pages/Form/FormLayout'));
const Profile = lazy(() => import('../pages/Profile'));
const Settings = lazy(() => import('../pages/Settings'));
const Tables = lazy(() => import('../pages/Tables'));
const Alerts = lazy(() => import('../pages/UiElements/Alerts'));
const Buttons = lazy(() => import('../pages/UiElements/Buttons'));

const coreRoutes = [
  {
    path: '/admin/dashboard/calendar',
    title: 'Calender',
    component: Calendar,
  },
  {
    path: '/admin/dashboard/profile',
    title: 'Profile',
    component: Profile,
  },
  {
    path: '/admin/dashboard/forms/form-elements',
    title: 'Forms Elements',
    component: FormElements,
  },
  {
    path: '/admin/dashboard/forms/form-layout',
    title: 'Form Layouts',
    component: FormLayout,
  },
  {
    path: '/admin/dashboard/tables',
    title: 'Tables',
    component: Tables,
  },
  {
    path: '/admin/dashboard/settings',
    title: 'Settings',
    component: Settings,
  },
  {
    path: '/admin/dashboard/chart',
    title: 'Chart',
    component: Chart,
  },
  {
    path: '/admin/dashboard/ui/alerts',
    title: 'Alerts',
    component: Alerts,
  },
  {
    path: '/admin/dashboard/ui/buttons',
    title: 'Buttons',
    component: Buttons,
  },
];

const routes = [...coreRoutes];
export default routes;
