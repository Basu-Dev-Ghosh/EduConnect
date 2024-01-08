import { BrowserRouter, Routes, Route } from "react-router-dom";
import "swiper/css";
import ScrollToTop from "./component/layout/ScrollToTop";

import { AuthProvider } from "./context/authContext";
import { QueryClient, QueryClientProvider } from "react-query";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Routings from "./page/routing";
// import ProtectedRoute from "./page/protected";
const queryClient = new QueryClient();

export const server = "https://educonnect-server.onrender.com/api/v1/"; //Hosted server
// export const server = "http://localhost:4000/api/v1/";

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <AuthProvider>
        <BrowserRouter>
          <ScrollToTop />
          <Routings />
          <ToastContainer />
        </BrowserRouter>
      </AuthProvider>
    </QueryClientProvider>
  );
}

export default App;
