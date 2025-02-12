/*
=========================================================
* Material Kit 2 React - v2.1.0
=========================================================

* Product Page: https://www.creative-tim.com/product/material-kit-react
* Copyright 2023 Creative Tim (https://www.creative-tim.com)

Coded by www.creative-tim.com

 =========================================================

* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.
*/

// @mui material components

import Card from "@mui/material/Card";

// Material Kit 2 React components
import MKBox from "components/MKBox";

import { useSearchParams } from "react-router-dom";

import ReactGA from "react-ga4";

import { useEffect, lazy, Suspense, useState } from "react";
import Profile from "pages/LandingPages/Author/sections/Profile";
import ScrollImageChanger from "pages/LandingPages/Author/sections/images";
import MusicPlayer from "components/Music";
import bgImage from "assets/images/me.jpeg";
const LazyComponent = lazy(() => import("pages/LandingPages/Author/sections/Posts"));
const LazyComponent1 = lazy(() => import("pages/LandingPages/Author/sections/Contact"));

// Material Kit 2 React examples
// import DefaultNavbar from "examples/Navbars/DefaultNavbar";

// Author page sections



// Routes
// import routes from "routes";

// Images


function Author() {

  let searchParams = useSearchParams();
  const [isVisible, setIsVisible] = useState(false);
  const [isVisible1, setIsVisible1] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.8 } // Load when 50% of the target is visible
    );

    const target = document.getElementById("lazy-load-section");
    if (target) observer.observe(target);

    return () => {
      if (target) observer.unobserve(target);
    };
  }, []);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          setIsVisible1(true);
        }
      },
      { threshold: 0.7 } // Load when 50% of the target is visible
    );

    const target = document.getElementById("lazy-load-section1");
    if (target) observer.observe(target);

    return () => {
      if (target) observer.unobserve(target);
    };
  }, []);

  // console.log(searchParams[0].get("context"));

  useEffect(() => {
    ReactGA.initialize([{
      "trackingId": "G-B865N4QV8B"
    }]);
    // searchParams[0].get("context") && ReactGA.send({ hitType: "pageview", page: searchParams[0].get("context").toString(), title: "Custom Title" });
    searchParams[0].get("context") && console.log(searchParams[0].get("context").toString());
    searchParams[0].get("context") && ReactGA.event(
      {
        category: "From Resume",
        action: "your action",
        label: searchParams[0].get("context").toString(),
        value: searchParams[0].get("context").toString(),
        nonInteraction: true,
        transport: "xhr",
      }
    );
  }, []);

  return (
    <>
      <MKBox bgColor="white">
        <MusicPlayer></MusicPlayer>
        <MKBox
          minHeight="25rem"
          width="100%"
          sx={{
            backgroundImage: ({ functions: { linearGradient, rgba }, palette: { gradients } }) =>
              `${linearGradient(
                rgba(gradients.dark.main, 0.8),
                rgba(gradients.dark.state, 0.8)
              )}, url(${bgImage})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
            display: "grid",
            placeItems: "center",
          }}
        />
        <Card
          sx={{
            p: 2,
            mx: { xs: 2, lg: 3 },
            mt: -8,
            mb: 4,
            backgroundColor: ({ palette: { white }, functions: { rgba } }) => rgba(white.main, 0.8),
            backdropFilter: "saturate(200%) blur(30px)",
            boxShadow: ({ boxShadows: { xxl } }) => xxl,
          }}
        >
          <Profile />

          <div id="lazy-load-section" style={{ minHeight: "50vh" }}>
            {isVisible ? (
              <Suspense fallback={<p></p>}>
                <LazyComponent />
              </Suspense>
            ) : (
              <p></p>
            )}
          </div>

          <ScrollImageChanger />



          {/* <Posts /> */}
          {/* <Gallery /> */}
        </Card>

        <div id="lazy-load-section1" style={{ minHeight: "50vh" }}>
          {isVisible1 ? (
            <Suspense fallback={<p></p>}>
              <LazyComponent1 />
            </Suspense>
          ) : (
            <p></p>
          )}
        </div>
        {/* <Footer /> */}
      </MKBox>
    </>
  );
}

export default Author;
