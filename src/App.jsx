import { BrowserRouter, Route, Routes } from "react-router-dom";
import { routes } from "./routes";
import { Home } from "./views/home/Home";

import { MyPage } from "./views/mypage/Mypage";
import { Login } from "./views/login/Login";
import { Sign } from "./views/login/Sign";
import { Container, CssBaseline } from "@mui/material";
import { Header } from "./components/Header";
import { Footer } from "./components/Footer";
import { PageNotFound } from "./views/PageNotFound";
import { Logout } from "./views/login/Logout";
import { useAuthStore } from "./store/useAuthStore";
import { BlogMain } from "./views/blog/BlogMain";



function App() {
  const { isAuthenticated } = useAuthStore();

  return (
    <>
      <CssBaseline />
      <Container
        sx={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
        }}
        maxWidth="lg"
      >
        <BrowserRouter>
          <Header />
          <Routes>
            <Route path={routes.home} element={<Home />} />
            
            <Route path={routes.blog} element={<BlogMain />} />
            <Route path={routes.mypage} element={<MyPage />} />
            <Route
              path={routes.login}
              element={isAuthenticated ? <Logout /> : <Login />}
            />
            <Route path={routes.sign} element={<Sign />} />
            <Route path="/*" element={<PageNotFound />} />
          </Routes>
          <Footer />
        </BrowserRouter>
      </Container>
    </>
  );
}

export default App;
