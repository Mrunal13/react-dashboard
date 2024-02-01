import {
    Route,
    Routes,
} from "react-router-dom";
import AdvancedForm from "./pages/advanced";
import Calender from "./pages/calender";
import DataTablePage from "./pages/data-table";
import GeneralElementsForm from "./pages/general-elements";
import LogInV1 from "./pages/log-in/LogInV1";
import LogInV2 from "./pages/log-in/LogInV2";
import SimpleTablePage from "./pages/simple-table";
import UIGeneral from "./pages/ui/general";
import Widgets from "./pages/widgets";
import NavBar from "./components/navbar";
import Sidenav from "./components/side-nav";
import Footer from "./components/footer";
import TopNavLayout from './pages/top-nav-layout'
import Buttons from "./pages/ui/buttons";
import Iconpage from "./pages/ui/icons";
import ModelAndAlerts from './pages/ui/models-and-alerts-new'
import NavBarAndTabs from './pages/ui/navbar-and-tabs'
import Ribbons from './pages/ui/ribbons'
import TopNavAndSidebar from "./pages/top-nav-layout/TopNavAndSidebar";
import BoxedLayout from "./pages/top-nav-layout/BoxedLayout";
import ProjectTable from "./pages/example/project-table";
import Slider from './pages/ui/slider'
import StarterPage from './pages/extras/starter-page'
import KanbanBoard from "./pages/kanban-board";
import ChartJS from "./pages/charts/chartjs";
import MailBox from "./pages/email/inbox";
import ComposePage from "./pages/email/compose";
import FlotChart from "./pages/charts/flot-chart";
import ReadMail from "./pages/email/read-mail";

const WithSidebar = (Component) => ({ ...props }) => (
    <>
        <NavBar />
        <Sidenav />
        <Component {...props} />
        <Footer />
    </>
);

const WithoutSidebar = (Component) => ({ ...props }) => (
    <Component {...props} />
)


const HOCGeneralElementsForm = WithSidebar(GeneralElementsForm)
const HOCAdvancedForm = WithSidebar(AdvancedForm)
const HOCWidgets = WithSidebar(Widgets)
const HOCSimpleTablePage = WithSidebar(SimpleTablePage)
const HOCDataTablePage = WithSidebar(DataTablePage)
const HOCCalender = WithSidebar(Calender)
const HOCUIGeneral = WithSidebar(UIGeneral)
const HOCUIButton = WithSidebar(Buttons)
const HOCLogInV1 = WithoutSidebar(LogInV1)
const HOCLogInV2 = WithoutSidebar(LogInV2)
const HOCTopNavLayout = WithoutSidebar(TopNavLayout)
const HOCTopNavAndSidebar = WithoutSidebar(TopNavAndSidebar)
const HOCIconPage = WithSidebar(Iconpage)
const HOCModelAndAlerts = WithSidebar(ModelAndAlerts)
const HOCNavBarAndTabs = WithSidebar(NavBarAndTabs)
const HOCRibbons = WithSidebar(Ribbons)
const HOCProjectTable = WithSidebar(ProjectTable)
const HOCBoxedLayout = WithSidebar(BoxedLayout)
const HOCStarterPage = WithSidebar(StarterPage)
const HOCSlider = WithSidebar(Slider)
const HOCKanbanBoard = WithSidebar(KanbanBoard)
const HOCChartJS = WithSidebar(ChartJS)
const HOCMailBox = WithSidebar(MailBox)
const HOCReadMail = WithSidebar(ReadMail)
const HOCComposePage = WithSidebar(ComposePage)
const HOCFlotChart = WithSidebar(FlotChart)

const AllRoutes = () => {
    return (
        <Routes>
            <Route path="/" element={<>
                <NavBar />
                <Sidenav />
                <Footer />
            </>} />
            <Route path="/forms/general" element={<div className=" sidebar-mini">
                <div className="wrapper">
                    <HOCGeneralElementsForm />
                </div>
            </div>
            } />
            <Route path="/forms/advanced" element={
                <div className=" sidebar-mini">
                    <div className="wrapper">
                        <HOCAdvancedForm />
                    </div>
                </div>
            } />
            <Route path="/widget" element={
                <div className="sidebar-mini" id="forSidebarMini">
                    <div className="wrapper">
                        <HOCWidgets />
                    </div>
                </div>
            } />
            <Route path="/tables/simple" element={
                <div className=" sidebar-mini">
                    <div className="wrapper">
                        <HOCSimpleTablePage />
                    </div>
                </div>
            } />
            <Route path="/tables/data-table" element={
                <div className=" sidebar-mini">
                    <div className="wrapper">
                        <HOCDataTablePage />
                    </div>
                </div>
            } />
            <Route path="/calender" element={
                <div className=" sidebar-mini">
                    <div className="wrapper">
                        <HOCCalender />
                    </div>
                </div>
            } />
            <Route path="/ui/general" element={
                <div className=" sidebar-mini">
                    <div className="wrapper">
                        <HOCUIGeneral />
                    </div>
                </div>
            } />
            <Route path="/ui/buttons" element={
                <div className=" sidebar-mini">
                    <div className="wrapper">
                        <HOCUIButton />
                    </div>
                </div>
            } />
            <Route path="/ui/icons" element={
                <div className=" sidebar-mini">
                    <div className="wrapper">
                        <HOCIconPage />
                    </div>
                </div>
            } />
            <Route path="/ui/model-alerts" element={
                <div className=" sidebar-mini">
                    <div className="wrapper">
                        <HOCModelAndAlerts />
                    </div>
                </div>
            } />
            <Route path="/ui/navbar-tabs" element={
                <div className=" sidebar-mini">
                    <div className="wrapper">
                        <HOCNavBarAndTabs />
                    </div>
                </div>
            } />
            <Route path="/ui/ribbons" element={
                <div className=" sidebar-mini">
                    <div className="wrapper">
                        <HOCRibbons />
                    </div>
                </div>
            } />
            <Route path="/ui/sliders" element={
                <div className=" sidebar-mini">
                    <div className="wrapper">
                        <HOCSlider />
                    </div>
                </div>
            } />
            <Route path="/pages/log-in-v1" element={<HOCLogInV1 />} />
            <Route path="/pages/log-in-v2" element={<HOCLogInV2 />} />
            <Route path="/pages/layout/top-nav" element={<HOCTopNavLayout />} />
            <Route path="/pages/layout/top-nav-and-sidebar" element={
                <div className="hold-transition  layout-top-nav">
                    <div className="wrapper">
                        <HOCTopNavAndSidebar />
                    </div>
                </div>
            } />
            <Route path="/charts/chartjs" element={
                <div className=" sidebar-mini">
                    <div className="wrapper">
                        <HOCChartJS />
                    </div>
                </div>
            } />
            <Route path="/charts/flot" element={
                <div className=" sidebar-mini">
                    <div className="wrapper">
                        <HOCFlotChart />
                    </div>
                </div>
            } />
            <Route path="/pages/layout/boxed" element={
                <div className="sidebar-mini layout-boxed">
                    <div className="wrapper">
                        <HOCBoxedLayout />
                    </div>
                </div>
            } />
            <Route path="/pages/kanban-board" element={
                <div className="sidebar-mini layout-fixed">
                    <div className="wrapper">
                        <HOCKanbanBoard />
                    </div>
                </div>
            } />
            <Route path="/pages/example/project-table" element={
                <div className=" sidebar-mini">
                    <div className="wrapper">
                        <HOCProjectTable />
                    </div>
                </div>
            } />
            <Route path="/starter-page" element={
                <div className="wrapper">
                    <HOCStarterPage />
                </div>
            } />
            <Route path="/mailbox" element={
                <div className="sidebar-mini layout-fixed">
                    <div className="wrapper">
                        <HOCMailBox />
                    </div>
                </div>
            } />
            <Route path="/mail/read-mail" element={
                <div className=" sidebar-mini">
                    <div className="wrapper">
                        <HOCReadMail />
                    </div>
                </div>
            } />
            <Route path="/mail/compose" element={
                <div className="sidebar-mini layout-fixed">
                    <div className="wrapper">
                        <HOCComposePage />
                    </div>
                </div>
            } />
        </Routes>

    )
}

export default AllRoutes