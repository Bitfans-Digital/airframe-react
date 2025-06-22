import React from 'react';
import { Redirect, Route, Switch } from 'react-router';

// ----------- Pages Imports ---------------
import Analytics from './Dashboards/Analytics';
import Financial from './Dashboards/Financial';
import Monitor from './Dashboards/Monitor';
import ProjectsDashboard from './Dashboards/Projects';
import Reports from './Dashboards/Reports';
import Stock from './Dashboards/Stock';
import System from './Dashboards/System';

import Widgets from './Widgets';

import Cards from './Cards/Cards';
import CardsHeaders from './Cards/CardsHeaders';

import DragAndDropLayout from './Layouts/DragAndDropLayout';
import NavbarOnly from './Layouts/NavbarOnly';
import SidebarA from './Layouts/SidebarA';
import SidebarDefault from './Layouts/SidebarDefault';
import SidebarWithNavbar from './Layouts/SidebarWithNavbar';

import ReCharts from './Graphs/ReCharts';
import Accordions from './Interface/Accordions';
import Alerts from './Interface/Alerts';
import Avatars from './Interface/Avatars';
import BadgesLabels from './Interface/BadgesLabels';
import Breadcrumbs from './Interface/Breadcrumbs';
import Buttons from './Interface/Buttons';
import Calendar from './Interface/Calendar';
import Colors from './Interface/Colors';
import CropImage from './Interface/CropImage';
import DragAndDropElements from './Interface/DragAndDropElements';
import Dropdowns from './Interface/Dropdowns';
import Images from './Interface/Images';
import ListGroups from './Interface/ListGroups';
import MediaObjects from './Interface/MediaObjects';
import Modals from './Interface/Modals';
import Navbars from './Interface/Navbars';
import Notifications from './Interface/Notifications';
import Paginations from './Interface/Paginations';
import ProgressBars from './Interface/ProgressBars';
import TabsPills from './Interface/TabsPills';
import TooltipPopovers from './Interface/TooltipsPopovers';
import Typography from './Interface/Typography';

import DatePicker from './Forms/DatePicker';
import Dropzone from './Forms/Dropzone';
import Editor from './Forms/Editor';
import Forms from './Forms/Forms';
import FormsLayouts from './Forms/FormsLayouts';
import InputGroups from './Forms/InputGroups';
import Sliders from './Forms/Sliders';
import TextMask from './Forms/TextMask';
import Toggles from './Forms/Toggles';
import Typeahead from './Forms/Typeahead';
import Wizard from './Forms/Wizard';

import AgGrid from './Tables/AgGrid';
import ExtendedTable from './Tables/ExtendedTable';
import Tables from './Tables/Tables';

import AccountEdit from './Apps/AccountEdit';
import BillingEdit from './Apps/BillingEdit';
import Chat from './Apps/Chat';
import Clients from './Apps/Clients';
import EmailDetails from './Apps/EmailDetails';
import Files from './Apps/Files';
import GalleryGrid from './Apps/GalleryGrid';
import GalleryTable from './Apps/GalleryTable';
import ImagesResults from './Apps/ImagesResults';
import Inbox from './Apps/Inbox';
import NewEmail from './Apps/NewEmail';
import ProfileDetails from './Apps/ProfileDetails';
import ProfileEdit from './Apps/ProfileEdit';
import Projects from './Apps/Projects';
import SearchResults from './Apps/SearchResults';
import SessionsEdit from './Apps/SessionsEdit';
import SettingsEdit from './Apps/SettingsEdit';
import Tasks from './Apps/Tasks';
import TasksDetails from './Apps/TasksDetails';
import TasksKanban from './Apps/TasksKanban';
import Users from './Apps/Users';
import UsersResults from './Apps/UsersResults';
import VideosResults from './Apps/VideosResults';

import ComingSoon from './Pages/ComingSoon';
import Confirmation from './Pages/Confirmation';
import Danger from './Pages/Danger';
import Error404 from './Pages/Error404';
import ForgotPassword from './Pages/ForgotPassword';
import LockScreen from './Pages/LockScreen';
import Login from './Pages/Login';
import Register from './Pages/Register';
import Success from './Pages/Success';
import Timeline from './Pages/Timeline';

import Icons from './Icons';

// ----------- Layout Imports ---------------
import { DefaultNavbar } from './../layout/components/DefaultNavbar';
import { DefaultSidebar } from './../layout/components/DefaultSidebar';

import { SidebarANavbar } from './../layout/components/SidebarANavbar';
import { SidebarASidebar } from './../layout/components/SidebarASidebar';

// Routes configuration array
const routes = [
    // Dashboard Routes
    { path: '/dashboards/analytics', component: Analytics, exact: true },
    { path: '/dashboards/projects', component: ProjectsDashboard, exact: true },
    { path: '/dashboards/system', component: System, exact: true },
    { path: '/dashboards/monitor', component: Monitor, exact: true },
    { path: '/dashboards/financial', component: Financial, exact: true },
    { path: '/dashboards/stock', component: Stock, exact: true },
    { path: '/dashboards/reports', component: Reports, exact: true },

    // Widgets Route
    { path: '/widgets', component: Widgets, exact: true },

    // Cards Routes
    { path: '/cards/cards', component: Cards, exact: true },
    { path: '/cards/cardsheaders', component: CardsHeaders, exact: true },

    // Layouts Routes
    { path: '/layouts/navbar', component: NavbarOnly },
    { path: '/layouts/sidebar', component: SidebarDefault },
    { path: '/layouts/sidebar-a', component: SidebarA },
    { path: '/layouts/sidebar-with-navbar', component: SidebarWithNavbar },
    { path: '/layouts/dnd-layout', component: DragAndDropLayout },

    // Interface Routes
    { path: '/interface/accordions', component: Accordions },
    { path: '/interface/alerts', component: Alerts },
    { path: '/interface/avatars', component: Avatars },
    { path: '/interface/badges-and-labels', component: BadgesLabels },
    { path: '/interface/breadcrumbs', component: Breadcrumbs },
    { path: '/interface/buttons', component: Buttons },
    { path: '/interface/colors', component: Colors },
    { path: '/interface/dropdowns', component: Dropdowns },
    { path: '/interface/images', component: Images },
    { path: '/interface/list-groups', component: ListGroups },
    { path: '/interface/media-objects', component: MediaObjects },
    { path: '/interface/modals', component: Modals },
    { path: '/interface/navbars', component: Navbars },
    { path: '/interface/paginations', component: Paginations },
    { path: '/interface/progress-bars', component: ProgressBars },
    { path: '/interface/tabs-pills', component: TabsPills },
    { path: '/interface/tooltips-and-popovers', component: TooltipPopovers },
    { path: '/interface/typography', component: Typography },
    { path: '/interface/notifications', component: Notifications },
    { path: '/interface/crop-image', component: CropImage },
    { path: '/interface/drag-and-drop-elements', component: DragAndDropElements },
    { path: '/interface/calendar', component: Calendar },

    // Forms Routes
    { path: '/forms/forms', component: Forms },
    { path: '/forms/forms-layouts', component: FormsLayouts },
    { path: '/forms/input-groups', component: InputGroups },
    { path: '/forms/wizard', component: Wizard },
    { path: '/forms/text-mask', component: TextMask },
    { path: '/forms/typeahead', component: Typeahead },
    { path: '/forms/toggles', component: Toggles },
    { path: '/forms/editor', component: Editor },
    { path: '/forms/date-picker', component: DatePicker },
    { path: '/forms/dropzone', component: Dropzone },
    { path: '/forms/sliders', component: Sliders },

    // Graphs Routes
    { path: '/graphs/re-charts', component: ReCharts },

    // Tables Routes
    { path: '/tables/tables', component: Tables },
    { path: '/tables/extended-table', component: ExtendedTable },
    { path: '/tables/ag-grid', component: AgGrid },

    // Apps Routes
    { path: '/apps/account-edit', component: AccountEdit },
    { path: '/apps/billing-edit', component: BillingEdit },
    { path: '/apps/chat', component: Chat },
    { path: '/apps/clients', component: Clients },
    { path: '/apps/email-details', component: EmailDetails },
    { path: '/apps/files/:type', component: Files },
    { path: '/apps/gallery-grid', component: GalleryGrid },
    { path: '/apps/gallery-table', component: GalleryTable },
    { path: '/apps/images-results', component: ImagesResults },
    { path: '/apps/inbox', component: Inbox },
    { path: '/apps/new-email', component: NewEmail },
    { path: '/apps/profile-details', component: ProfileDetails },
    { path: '/apps/profile-edit', component: ProfileEdit },
    { path: '/apps/projects/:type', component: Projects },
    { path: '/apps/search-results', component: SearchResults },
    { path: '/apps/sessions-edit', component: SessionsEdit },
    { path: '/apps/settings-edit', component: SettingsEdit },
    { path: '/apps/tasks/:type', component: Tasks },
    { path: '/apps/task-details', component: TasksDetails },
    { path: '/apps/tasks-kanban', component: TasksKanban },
    { path: '/apps/users/:type', component: Users },
    { path: '/apps/users-results', component: UsersResults },
    { path: '/apps/videos-results', component: VideosResults },

    // Pages Routes
    { path: '/pages/coming-soon', component: ComingSoon },
    { path: '/pages/confirmation', component: Confirmation },
    { path: '/pages/danger', component: Danger },
    { path: '/pages/error-404', component: Error404 },
    { path: '/pages/forgot-password', component: ForgotPassword },
    { path: '/pages/lock-screen', component: LockScreen },
    { path: '/pages/login', component: Login },
    { path: '/pages/register', component: Register },
    { path: '/pages/success', component: Success },
    { path: '/pages/timeline', component: Timeline },

    // Icons Route
    { path: '/icons', component: Icons, exact: true },
];

//------ Route Definitions --------
// eslint-disable-next-line no-unused-vars
export const RoutedContent = () => {
    return (
        <Switch>
            <Redirect from="/" to="/dashboards/projects" exact />

            {routes.map((route, index) => (
                <Route
                    key={index}
                    path={route.path}
                    component={route.component}
                    {...(route.exact && { exact: route.exact })}
                />
            ))}

            {/*    404    */}
            <Redirect to="/pages/error-404" />
        </Switch>
    );
};

//------ Custom Layout Parts --------
export const RoutedNavbars = () => (
    <Switch>
        {/* Other Navbars: */}
        <Route component={SidebarANavbar} path="/layouts/sidebar-a" />
        <Route component={NavbarOnly.Navbar} path="/layouts/navbar" />
        <Route component={SidebarWithNavbar.Navbar} path="/layouts/sidebar-with-navbar" />
        {/* Default Navbar: */}
        <Route component={DefaultNavbar} />
    </Switch>
);

export const RoutedSidebars = () => (
    <Switch>
        {/* Other Sidebars: */}
        <Route component={SidebarASidebar} path="/layouts/sidebar-a" />
        <Route component={SidebarWithNavbar.Sidebar} path="/layouts/sidebar-with-navbar" />
        {/* Default Sidebar: */}
        <Route component={DefaultSidebar} />
    </Switch>
);
