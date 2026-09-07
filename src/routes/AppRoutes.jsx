import { BrowserRouter, Routes, Route } from "react-router-dom"
import CitizenDashboard from "../pages/CitizenDashboard"
import CreateComplaint from "../pages/CreateComplaint"
import NearbyIssues from "../pages/NearbyIssues"

function AppRoutes() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<CitizenDashboard />} />

        <Route
          path="/dashboard"
          element={<CitizenDashboard />}
        />

        <Route
          path="/complaints/new"
          element={<CreateComplaint />}
        />

        <Route
          path="/complaints/nearby"
          element={<NearbyIssues />}
        />
      </Routes>
    </BrowserRouter>
  )
}

export default AppRoutes