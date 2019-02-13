import asyncComponent from './../components/AsyncComponent';
// Dashboard
export const DashboardV1 = asyncComponent(() => import('./Dashboard/Dashboard'));
export const DashboardV2 = asyncComponent(() => import('./Dashboard/DashboardV2'));
// Layouts
export const AppLayout = asyncComponent(() => import('./Layouts/AppLayout'));
export const Responsive = asyncComponent(() => import('./Layouts/Responsive'));
export const Grid = asyncComponent(() => import('./Layouts/Grid'));
// Themes
export const Themes = asyncComponent(() => import('./Themes'));
// Tables
export const SimpleTable = asyncComponent(() => import('./Tables/BasicTable'));
export const AdvancedTable = asyncComponent(() => import('./Tables/AdvancedTable'));
export const TreeTable = asyncComponent(() => import('./Tables/TreeTable'));
export const CrudTable = asyncComponent(() => import('./Tables/CrudTable'));
export const TablePlayground = asyncComponent(() => import('./Tables/TablePlayground'));
// Forms
export const ReduxForm = asyncComponent(() => import('./Forms/ReduxForm'));
export const DateTimePicker = asyncComponent(() => import('./Forms/DateTimePicker'));
export const CheckboxRadio = asyncComponent(() => import('./Forms/CheckboxRadio'));
export const Switches = asyncComponent(() => import('./Forms/Switches'));
export const Selectbox = asyncComponent(() => import('./Forms/Selectbox'));
export const Rating = asyncComponent(() => import('./Forms/Rating'));
export const SliderRange = asyncComponent(() => import('./Forms/SliderRange'));
export const Buttons = asyncComponent(() => import('./Forms/Buttons'));
export const Textbox = asyncComponent(() => import('./Forms/Textbox'));
export const Autocomplete = asyncComponent(() => import('./Forms/Autocomplete'));
export const TextEditor = asyncComponent(() => import('./Forms/TextEditor'));
export const Upload = asyncComponent(() => import('./Forms/Upload'));
// UI Components
export const Badges = asyncComponent(() => import('./UiElements/Badges'));
export const Avatars = asyncComponent(() => import('./UiElements/Avatars'));
export const Accordion = asyncComponent(() => import('./UiElements/Accordion'));
export const List = asyncComponent(() => import('./UiElements/List'));
export const PopoverTooltip = asyncComponent(() => import('./UiElements/PopoverTooltip'));
export const Notification = asyncComponent(() => import('./UiElements/Notification'));
export const Typography = asyncComponent(() => import('./UiElements/Typography'));
export const Tabs = asyncComponent(() => import('./UiElements/Tabs'));
export const Cards = asyncComponent(() => import('./UiElements/Cards'));
export const ImageGrid = asyncComponent(() => import('./UiElements/ImageGrid'));
export const Progress = asyncComponent(() => import('./UiElements/Progress'));
export const DialogModal = asyncComponent(() => import('./UiElements/DialogModal'));
export const Steppers = asyncComponent(() => import('./UiElements/Steppers'));
export const DrawerMenu = asyncComponent(() => import('./UiElements/DrawerMenu'));
export const Paginations = asyncComponent(() => import('./UiElements/Paginations'));
export const Breadcrumbs = asyncComponent(() => import('./UiElements/Breadcrumbs'));
export const Icons = asyncComponent(() => import('./UiElements/Icons'));
export const SliderCarousel = asyncComponent(() => import('./UiElements/SliderCarousel'));
export const Tags = asyncComponent(() => import('./UiElements/Tags'));
export const Dividers = asyncComponent(() => import('./UiElements/Dividers'));
// Chart
export const LineCharts = asyncComponent(() => import('./Charts/LineCharts'));
export const BarCharts = asyncComponent(() => import('./Charts/BarCharts'));
export const AreaCharts = asyncComponent(() => import('./Charts/AreaCharts'));
export const PieCharts = asyncComponent(() => import('./Charts/PieCharts'));
export const RadarCharts = asyncComponent(() => import('./Charts/RadarCharts'));
export const ScatterCharts = asyncComponent(() => import('./Charts/ScatterCharts'));
export const CompossedCharts = asyncComponent(() => import('./Charts/CompossedCharts'));
export const ResponsiveCharts = asyncComponent(() => import('./Charts/ResponsiveCharts'));
// Pages
export const Login = asyncComponent(() => import('./Pages/Users/Login'));
export const Register = asyncComponent(() => import('./Pages/Users/Register'));
export const Profile = asyncComponent(() => import('./Pages/UserProfile'));
export const SocialMedia = asyncComponent(() => import('./Pages/SocialMedia'));
export const BlankPage = asyncComponent(() => import('./Pages/BlankPage'));
export const Ecommerce = asyncComponent(() => import('./Pages/Ecommerce'));
export const Contact = asyncComponent(() => import('./Pages/Contact'));
export const ResetPassword = asyncComponent(() => import('./Pages/Users/ResetPassword'));
export const LockScreen = asyncComponent(() => import('./Pages/Users/LockScreen'));
export const Chat = asyncComponent(() => import('./Pages/Chat'));
export const Email = asyncComponent(() => import('./Pages/Email'));
export const Photos = asyncComponent(() => import('./Pages/Photos'));
export const Calendar = asyncComponent(() => import('./Pages/Calendar'));
export const LoginDedicated = asyncComponent(() => import('./Pages/Standalone/LoginDedicated'));
// Maps
export const MapMarker = asyncComponent(() => import('./Maps/MapMarker'));
export const MapDirection = asyncComponent(() => import('./Maps/MapDirection'));
export const SearchMap = asyncComponent(() => import('./Maps/SearchMap'));
export const TrafficIndicator = asyncComponent(() => import('./Maps/TrafficIndicator'));
export const StreetViewMap = asyncComponent(() => import('./Maps/StreetViewMap'));
// Other
export const NotFound = asyncComponent(() => import('./NotFound/NotFound'));
export const NotFoundDedicated = asyncComponent(() => import('./Pages/Standalone/NotFoundDedicated'));
export const Error = asyncComponent(() => import('./Pages/Error'));
export const Maintenance = asyncComponent(() => import('./Pages/Maintenance'));
export const Parent = asyncComponent(() => import('./Parent'));
export const Settings = asyncComponent(() => import('./Pages/Settings'));
export const HelpSupport = asyncComponent(() => import('./Pages/HelpSupport'));
