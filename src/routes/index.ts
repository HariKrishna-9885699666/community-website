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
    path: '/admin/calendar',
    title: 'Calender',
    component: Calendar,
  },
  {
    path: '/admin/profile',
    title: 'Profile',
    component: Profile,
  },
  {
    path: '/admin/forms/form-elements',
    title: 'Forms Elements',
    component: FormElements,
  },
  {
    path: '/admin/forms/form-layout',
    title: 'Form Layouts',
    component: FormLayout,
  },
  {
    path: '/admin/tables',
    title: 'Tables',
    component: Tables,
  },
  {
    path: '/admin/settings',
    title: 'Settings',
    component: Settings,
  },
  {
    path: '/admin/chart',
    title: 'Chart',
    component: Chart,
  },
  {
    path: '/admin/ui/alerts',
    title: 'Alerts',
    component: Alerts,
  },
  {
    path: '/admin/ui/buttons',
    title: 'Buttons',
    component: Buttons,
  },
];

const routes = [...coreRoutes];
export default routes;
