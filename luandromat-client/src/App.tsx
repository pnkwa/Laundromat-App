import {
  Outlet,
  Route,
  RouterProvider,
  createBrowserRouter,
  createRoutesFromElements,
} from 'react-router-dom'

import { WashingMachineProvider } from 'context/WashingMachineContext'
import DemoPage from 'Pages/DemoPage'

const appRoutes = createRoutesFromElements(
  <Route element={<Outlet />} errorElement={<div>not found</div>}>
    <Route path="/" element={<DemoPage />} />
    <Route path="/Laundry" element={<DemoPage />} />
  </Route>
)

const router = createBrowserRouter(appRoutes)

export const App = () => (
  <WashingMachineProvider>
    <RouterProvider router={router} />
  </WashingMachineProvider>
)

export default App
