import logo from './logo.svg';
import './App.css';
import { Route, Routes } from 'react-router-dom';
import Login from './components/Login';
import Dashboard from './components/Dashboard';
import PrivateRoutes from './utiils/PrivateRoutes';
import Visit from './components/Visit';
import Maped from './components/Maped';
import MonthlyDeposite from './components/MonthlyDeposite';
import DailyDeploy from './components/DailyDeploy';
import TotalDeploymentPage from './components/DailyDeploy/TotalDeploymentPage';
import TotalDeploymentViewTable from './components/DailyDeploy/TotalDeploymentViewTable';
import CheckOutPage from './components/DailyDeploy/CheckOutPage';
import PresentPage from './components/DailyDeploy/PresentPage';
import PresentViewTable from './components/DailyDeploy/PresentViewTable';
import ShortagePage from './components/DailyDeploy/ShortagePage';
import DoubleDutyPage from './components/DailyDeploy/DoubleDutyPage';
import LatePage from './components/DailyDeploy/LatePage';
import UnmappedPage from './components/DailyDeploy/UnmappedPage';
import Approval from './components/Approval';
import Employee from './components/Employee';
import AddEmployee from './components/Employee/AddEmployee';
import Recruitment from './components/Employee/Recruitment';
import Profile from './components/Employee/Profile';
import UpdateProfile from './components/Employee/UpdateProfile';
import ManualAttendance from './components/ManualAttendance';
import EmpProfile from './components/EmpProfile';
import LeaveApproval from './components/LeaveApproval';

function App() {
  return (
    <Routes>
      <Route path="/" element={<Login />} />
      <Route element={<PrivateRoutes />}>
      <Route path="/dashboard" element={<Dashboard />} />
      <Route path="/visit" element={<Visit />} />
      <Route path="/maped" element={<Maped />} />
      <Route path="/monthly-deposite" element={<MonthlyDeposite />} />
      <Route path="/daily-deploy" element={<DailyDeploy />} />
      <Route path="/daily-deploy/total-deploy" element={<TotalDeploymentPage />} />
      <Route path="/daily-deploy/total-deploy-view" element={<TotalDeploymentViewTable />} />
      <Route path="/daily-deploy/checkout" element={<CheckOutPage />} />
      <Route path="/daily-deploy/present" element={<PresentPage />} />
      <Route path="/daily-deploy/present-view" element={<PresentViewTable />} />
      <Route path="/daily-deploy/shortage" element={<ShortagePage />} />
      <Route path="/daily-deploy/double-duty" element={<DoubleDutyPage />} />
      <Route path="/daily-deploy/late" element={<LatePage />} />
      <Route path="/daily-deploy/unmapped" element={<UnmappedPage />} />
      <Route path="/approval" element={<Approval />} />
      <Route path="/employee" element={<Employee />} />
      <Route path="/employee/add-employee" element={<AddEmployee />} />
      <Route path="/employee/recruitment" element={<Recruitment />} />
      <Route path="/employee/profile" element={<Profile />} />
      <Route path="/profile" element={<EmpProfile />} />
      <Route path="/employee/update-profile" element={<UpdateProfile />} />
      <Route path="/attendance" element={<ManualAttendance />} />
      <Route path="/leave" element={<LeaveApproval />} />

       </Route>
      </Routes>
  );
}

export default App;
