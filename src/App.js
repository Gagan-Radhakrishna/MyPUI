/**
=========================================================
* Material Kit 2 React - v2.1.0
=========================================================

* Product Page: https://www.creative-tim.com/product/material-kit-react
* Copyright 2023 Creative Tim (https://www.creative-tim.com)

Coded by www.creative-tim.com

 =========================================================

* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.
*/

import { useEffect } from "react";

// react-router components
import { Routes, Route, Navigate, useLocation } from "react-router-dom";

// @mui material components
import { ThemeProvider } from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";

// Material Kit 2 React themes
import theme from "assets/theme";
import Author from "pages/LandingPages/Author";

// Material Kit 2 React routes

export default function App() {
  const { pathname } = useLocation();

  // Setting page scroll to 0 when changing the route
  useEffect(() => {
    document.documentElement.scrollTop = 0;
    document.scrollingElement.scrollTop = 0;
  }, [pathname]);



  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Routes>
        <Route path="/presentation" element={<Author />} />
        <Route path="*" element={<Navigate to="/presentation" />} />
      </Routes>
    </ThemeProvider>
  );
}

// /*
// =========================================================
// * Material Kit 2 React - v2.1.0
// =========================================================

// * Product Page: https://www.creative-tim.com/product/material-kit-react
// * Copyright 2023 Creative Tim (https://www.creative-tim.com)

// Coded by www.creative-tim.com

//  =========================================================

// * The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.
// */

// // @mui material components
// import Card from "@mui/material/Card";

// // Material Kit 2 React components
// import MKBox from "./components/MKBox";

// import ReactGA from "react-ga";

// import { useSearchParams } from "react-router-dom";

// import { useEffect } from "react";

// // Material Kit 2 React examples
// // import DefaultNavbar from "examples/Navbars/DefaultNavbar";

// // Author page sections
// import Profile from "./pages/LandingPages/Author/sections/Profile";
// import Posts from "./pages/LandingPages/Author/sections/Posts";
// import Contact from "./pages/LandingPages/Author/sections/Contact";

// // Routes
// // import routes from "routes";

// // Images
// import bgImage from "./assets/images/me.jpeg";

// function Author() {
//   let searchParams = useSearchParams();

//   console.log(searchParams[0].get("context"));

//   useEffect(() => {
//     ReactGA.initialize("G-B865N4QV8B");
//     ReactGA.pageview(searchParams[0].get("context"));
//   }, []);

//   return (
//     <>
//       <MKBox bgColor="white">
//         <MKBox
//           minHeight="25rem"
//           width="100%"
//           sx={{
//             backgroundImage: ({ functions: { linearGradient, rgba }, palette: { gradients } }) =>
//               `${linearGradient(
//                 rgba(gradients.dark.main, 0.8),
//                 rgba(gradients.dark.state, 0.8)
//               )}, url(${bgImage})`,
//             backgroundSize: "cover",
//             backgroundPosition: "center",
//             display: "grid",
//             placeItems: "center",
//           }}
//         />
//         <Card
//           sx={{
//             p: 2,
//             mx: { xs: 2, lg: 3 },
//             mt: -8,
//             mb: 4,
//             backgroundColor: ({ palette: { white }, functions: { rgba } }) => rgba(white.main, 0.8),
//             backdropFilter: "saturate(200%) blur(30px)",
//             boxShadow: ({ boxShadows: { xxl } }) => xxl,
//           }}
//         >
//           <Profile />
//           <Posts />
//           {/* <Gallery /> */}
//         </Card>
//         <Contact />
//         {/* <Footer /> */}
//       </MKBox>
//     </>
//   );
// }

// export default Author;
