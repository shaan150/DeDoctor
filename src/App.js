import React from 'react';
import {
    BrowserRouter as Router,
    Routes,
    Route,
} from 'react-router-dom';
import RegisterPatient from "./react/registration/RegisterPatient";
import CompleteRegistration from './react/registration/CompleteRegistration';
import Dashboard from './react/dashboard/Dashboard';
import StartDiagnosis from "./react/diagnosis/StartDiagnosis";
import Diagnosis1 from "./react/diagnosis/Diagnosis1";
import DownloadKey from "./react/registration/DownloadKey";
import Diagnosis2 from "./react/diagnosis/Diagnosis2";
import Diagnosis3 from "./react/diagnosis/Diagnosis3";
import Diagnosis4 from "./react/diagnosis/Diagnosis4";
import Login from "./react/login/Login";
import ProtectedRoute from './ProtectedRoute'; // Make sure this is correctly imported

function App() {
    return (
        <Router>
            <div>
                <Routes>
                    <Route path="/" element={<Dashboard />} />
                    <Route path="/login" element={<Login />} />
                    <Route path="/register" element={<RegisterPatient />} />
                    <Route path="/download-key" element={<DownloadKey />} />
                    <Route path="/complete-registration" element={<CompleteRegistration />} />
                    <Route element={<ProtectedRoute />}> {/* Wrap protected routes */}
                        <Route path="/StartDiagnosis" element={<StartDiagnosis />} />
                        <Route path="/Diagnosis1" element={<Diagnosis1 />} />
                        <Route path="/Diagnosis2" element={<Diagnosis2 />} />
                        <Route path="/Diagnosis3" element={<Diagnosis3 />} />
                        <Route path="/Diagnosis4" element={<Diagnosis4 />} />
                    </Route>
                    <Route path="/check-email" element={<div>Check your email for the key</div>} />
                </Routes>
            </div>
        </Router>
    );
}

export default App;
