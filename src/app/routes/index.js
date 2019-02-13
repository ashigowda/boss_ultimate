import { App, Dashboard, Outer } from './../components';
import withTracker from './withTracker';
// import * as page from './pageListAsync';
/* Code Splitting (Disabled by default) */
/*
  Use pageListAsync to split javascript request.
  Just uncomment the line code above, then comment/remove import * as page from './pageList';.
  It will load only necessary script by routing request.
  The page will load Asynchronously.
  Suitable for handle slow internet connection in client.
  --------
  NOTE: We recommend to use it in production only,
  because will make development slower. especially when HMR re-build.
*/
import * as page from './pageList';

// Dashboard
const { DashboardV1 } = page;
const { DashboardV2 } = page;
// Layouts
const { AppLayout } = page;
const { Responsive } = page;
const { Grid } = page;
// Themes
const { Themes } = page;
const { SimpleTable } = page;
const { AdvancedTable } = page;
const { TreeTable } = page;
const { CrudTable } = page;
const { TablePlayground } = page;
// Forms
const { ReduxForm } = page;
const { DateTimePicker } = page;
const { CheckboxRadio } = page;
const { Switches } = page;
const { Selectbox } = page;
const { Rating } = page;
const { SliderRange } = page;
const { Buttons } = page;
const { Textbox } = page;
const { Autocomplete } = page;
const { TextEditor } = page;
const { Upload } = page;
// UI Components
const { Badges } = page;
const { Avatars } = page;
const { Accordion } = page;
const { List } = page;
const { PopoverTooltip } = page;
const { Notification } = page;
const { Typography } = page;
const { Tabs } = page;
const { Cards } = page;
const { ImageGrid } = page;
const { Progress } = page;
const { DialogModal } = page;
const { Steppers } = page;
const { DrawerMenu } = page;
const { Paginations } = page;
const { Breadcrumbs } = page;
const { Icons } = page;
const { SliderCarousel } = page;
const { Tags } = page;
const { Dividers } = page;
// Chart
const { LineCharts } = page;
const { BarCharts } = page;
const { AreaCharts } = page;
const { PieCharts } = page;
const { RadarCharts } = page;
const { ScatterCharts } = page;
const { CompossedCharts } = page;
const { ResponsiveCharts } = page;
// Pages
const { Login } = page;
const { Register } = page;
const { Profile } = page;
const { SocialMedia } = page;
const { BlankPage } = page;
const { Ecommerce } = page;
const { Contact } = page;
const { ResetPassword } = page;
const { LockScreen } = page;
const { Chat } = page;
const { Email } = page;
const { Photos } = page;
const { Calendar } = page;
const { LoginDedicated } = page;
// Maps
const { MapMarker } = page;
const { MapDirection } = page;
const { SearchMap } = page;
const { TrafficIndicator } = page;
const { StreetViewMap } = page;
// Other
const { NotFound } = page;
const { NotFoundDedicated } = page;
const { Error } = page;
const { Maintenance } = page;
const { Parent } = page;
const { Settings } = page;
const { HelpSupport } = page;

export default (store) => { // eslint-disable-line
  // we can get an access to store
  return [{
    component: withTracker(App),
    routes: [
      {
        component: withTracker(LoginDedicated),
        path: '/',
        exact: true,
      },
      {
        component: withTracker(Outer),
        path: '/login',
        routes: [
          {
            path: '/login',
            component: withTracker(Login),
            exact: true,
          },
          {
            path: '*',
            component: withTracker(NotFound)
          }
        ]
      },
      {
        component: withTracker(Outer),
        path: '/register',
        routes: [
          {
            path: '/register',
            component: withTracker(Register),
            exact: true,
          },
          {
            path: '*',
            component: withTracker(NotFound)
          }
        ]
      },
      {
        component: withTracker(Outer),
        path: '/reset-password',
        routes: [
          {
            path: '/reset-password',
            component: withTracker(ResetPassword),
            exact: true,
          },
          {
            path: '*',
            component: withTracker(NotFound)
          }
        ]
      },
      {
        component: withTracker(Outer),
        path: '/lock-screen',
        routes: [
          {
            path: '/lock-screen',
            component: withTracker(LockScreen),
            exact: true,
          },
          {
            path: '*',
            component: withTracker(NotFound)
          }
        ]
      },
      {
        component: withTracker(Outer),
        path: '/maintenance',
        routes: [
          {
            path: '/maintenance',
            component: withTracker(Maintenance),
            exact: true,
          },
          {
            path: '*',
            component: withTracker(NotFound)
          }
        ]
      },
      {
        component: withTracker(Dashboard),
        path: '/app',
        routes: [
          {
            path: '/app',
            component: withTracker(DashboardV1),
            exact: true,
          },
          {
            path: '/app/dashboard-v2',
            component: withTracker(DashboardV2),
          },
          {
            path: '/app/layouts',
            component: withTracker(Parent),
            exact: true,
          },
          {
            path: '/app/layouts/grid',
            component: withTracker(Grid),
          },
          {
            path: '/app/layouts/app-layout',
            component: withTracker(AppLayout),
          },
          {
            path: '/app/layouts/responsive',
            component: withTracker(Responsive),
          },
          {
            path: '/app/themes',
            component: withTracker(Themes),
          },
          {
            path: '/app/tables',
            component: withTracker(Parent),
            exact: true,
          },
          {
            path: '/app/tables/basic-table',
            component: withTracker(SimpleTable),
          },
          {
            path: '/app/tables/data-table',
            component: withTracker(AdvancedTable),
          },
          {
            path: '/app/tables/tree-table',
            component: withTracker(TreeTable),
          },
          {
            path: '/app/tables/crud-table',
            component: withTracker(CrudTable),
          },
          {
            path: '/app/tables/table-playground',
            component: withTracker(TablePlayground),
          },
          {
            path: '/app/forms',
            component: withTracker(Parent),
            exact: true,
          },
          {
            path: '/app/forms/reduxform',
            component: withTracker(ReduxForm),
          },
          {
            path: '/app/forms/datetimepicker',
            component: withTracker(DateTimePicker),
          },
          {
            path: '/app/forms/checkbox-radio',
            component: withTracker(CheckboxRadio),
          },
          {
            path: '/app/forms/switches',
            component: withTracker(Switches),
          },
          {
            path: '/app/forms/selectbox',
            component: withTracker(Selectbox),
          },
          {
            path: '/app/forms/ratting',
            component: withTracker(Rating),
          },
          {
            path: '/app/forms/slider-range',
            component: withTracker(SliderRange),
          },
          {
            path: '/app/forms/buttons',
            component: withTracker(Buttons),
          },
          {
            path: '/app/forms/textfields',
            component: withTracker(Textbox),
          },
          {
            path: '/app/forms/autocomplete',
            component: withTracker(Autocomplete),
          },
          {
            path: '/app/forms/wysiwyg-editor',
            component: withTracker(TextEditor),
          },
          {
            path: '/app/forms/upload',
            component: withTracker(Upload),
          },
          {
            path: '/app/ui',
            component: withTracker(Parent),
            exact: true,
          },
          {
            path: '/app/ui/avatars',
            component: withTracker(Avatars),
          },
          {
            path: '/app/ui/accordion',
            component: withTracker(Accordion),
          },
          {
            path: '/app/ui/badges',
            component: withTracker(Badges),
          },
          {
            path: '/app/ui/list',
            component: withTracker(List),
          },
          {
            path: '/app/ui/popover-tooltip',
            component: withTracker(PopoverTooltip),
          },
          {
            path: '/app/ui/notification',
            component: withTracker(Notification),
          },
          {
            path: '/app/ui/typography',
            component: withTracker(Typography),
          },
          {
            path: '/app/ui/tabs',
            component: withTracker(Tabs),
          },
          {
            path: '/app/ui/card-papper',
            component: withTracker(Cards),
          },
          {
            path: '/app/ui/image-grid',
            component: withTracker(ImageGrid),
          },
          {
            path: '/app/ui/progress',
            component: withTracker(Progress),
          },
          {
            path: '/app/ui/dialog-modal',
            component: withTracker(DialogModal),
          },
          {
            path: '/app/ui/steppers',
            component: withTracker(Steppers),
          },
          {
            path: '/app/ui/paginations',
            component: withTracker(Paginations),
          },
          {
            path: '/app/ui/drawer-menu',
            component: withTracker(DrawerMenu),
          },
          {
            path: '/app/ui/breadcrumbs',
            component: withTracker(Breadcrumbs),
          },
          {
            path: '/app/ui/icons',
            component: withTracker(Icons),
          },
          {
            path: '/app/ui/slider-carousel',
            component: withTracker(SliderCarousel),
          },
          {
            path: '/app/ui/tags',
            component: withTracker(Tags),
          },
          {
            path: '/app/ui/dividers',
            component: withTracker(Dividers),
          },
          {
            path: '/app/charts',
            component: withTracker(Parent),
            exact: true,
          },
          {
            path: '/app/charts/line-charts',
            component: withTracker(LineCharts),
          },
          {
            path: '/app/charts/bar-charts',
            component: withTracker(BarCharts),
          },
          {
            path: '/app/charts/area-charts',
            component: withTracker(AreaCharts),
          },
          {
            path: '/app/charts/pie-charts',
            component: withTracker(PieCharts),
          },
          {
            path: '/app/charts/radar-charts',
            component: withTracker(RadarCharts),
          },
          {
            path: '/app/charts/scatter-charts',
            component: withTracker(ScatterCharts),
          },
          {
            path: '/app/charts/responsive-chart',
            component: withTracker(ResponsiveCharts),
          },
          {
            path: '/app/charts/compossed-chart',
            component: withTracker(CompossedCharts),
          },
          {
            path: '/app/pages',
            component: withTracker(Parent),
            exact: true,
          },
          {
            path: '/app/pages/user-profile',
            component: withTracker(Profile),
          },
          {
            path: '/app/pages/social-media',
            component: withTracker(SocialMedia),
          },
          {
            path: '/app/pages/blank-page',
            component: withTracker(BlankPage),
          },
          {
            path: '/app/pages/ecommerce',
            component: withTracker(Ecommerce),
          },
          {
            path: '/app/pages/contact',
            component: withTracker(Contact),
          },
          {
            path: '/app/pages/chat',
            component: withTracker(Chat),
          },
          {
            path: '/app/pages/photo-gallery',
            component: withTracker(Photos),
          },
          {
            path: '/app/pages/email',
            component: withTracker(Email),
          },
          {
            path: '/app/pages/not-found',
            component: withTracker(NotFound),
          },
          {
            path: '/app/pages/calendar',
            component: withTracker(Calendar),
          },
          {
            path: '/app/pages/error',
            component: withTracker(Error),
          },
          {
            path: '/app/maps',
            component: withTracker(Parent),
            exact: true,
          },
          {
            path: '/app/maps/map-marker',
            component: withTracker(MapMarker),
          },
          {
            path: '/app/maps/map-direction',
            component: withTracker(MapDirection),
          },
          {
            path: '/app/maps/map-searchbox',
            component: withTracker(SearchMap),
          },
          {
            path: '/app/maps/map-traffic',
            component: withTracker(TrafficIndicator),
          },
          {
            path: '/app/maps/street-view',
            component: withTracker(StreetViewMap),
          },
          {
            path: '/app/settings',
            component: withTracker(Settings),
          },
          {
            path: '/app/help-support',
            component: withTracker(HelpSupport),
          },
          {
            path: '*',
            component: withTracker(NotFound)
          }
        ]
      },
      {
        path: '*',
        component: withTracker(NotFoundDedicated)
      }
    ]
  }];
};
