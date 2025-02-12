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
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";

// Material Kit 2 React components
import MKBox from "components/MKBox";
import MKTypography from "components/MKTypography";

// Material Kit 2 React components
import TransparentBlogCard from "examples/Cards/BlogCards/TransparentBlogCard";
import BackgroundBlogCard from "examples/Cards/BlogCards/BackgroundBlogCard";

// Images
import post1 from "assets/images/examples/testimonial-6-2.jpg";
import post2 from "assets/images/examples/applause.webp";
import post3 from "assets/images/examples/blog-9-4.webp";
import post4 from "assets/images/examples/testimonial-6-3.jpg";

function Places() {
  return (
    <MKBox component="section" py={2}>
      <Container>
        <Grid container item xs={12} lg={6}>
          <MKTypography variant="h3" mb={6}>
            Recognition & Testaments
          </MKTypography>
        </Grid>
        <Grid container spacing={3}>
          <Grid item xs={12} sm={6} lg={3}>
            <TransparentBlogCard
              image={post1}
              title="Outstanding Performance Award"
              time="Mar 2022"
              description="Thank you for all the support that you have provided MUT team
              despite challenges in your workstream. Your curiousity and accountability are second to none! The tech maturity you have shown while executing these complex time-crunched project is highly commendable. Gagan, soar to new heights!"
              action={{
                type: "internal",
                route: "https://www.linkedin.com/in/gagan-r-338451171/details/honors/",
                color: "info",
                label: "read more",
              }}
            />
          </Grid>
          <Grid item xs={12} sm={6} lg={3}>
            <TransparentBlogCard
              image={post3}
              time="Oct 2023"
              title="Stake holder's Appreciation"
              description="Hi Gagan,
              Thank you for all of your hard work on delivering
              the innovative and insightful analysis on Smart
              St.'s performance. Your diligence, creativity, and
              dedication has been critical to improving the
              team's understanding of this new, high-visibility
              feature, and has empowered them to speak to its
              functionality in an impactful way
              I appreciate you going above and beyond on this.
              It's made a world of difference!"
              action={{
                type: "internal",
                route: "https://www.linkedin.com/in/gagan-r-338451171/details/honors/",
                color: "info",
                label: "read more",
              }}
            />
          </Grid>
          <Grid item xs={12} sm={6} lg={3}>
            <TransparentBlogCard
              image={post2}
              time="Jul 2021"
              title="Applause Award"
              description="Gagan's unbelievable performance these past few months have showcased his abilities to the hilt. His dedication and constant desire to surpass expectations is absolutely admirable. In times of need, Gagan has time and again proven by his presence of being dependable. Outstanding work, exceptional performance and all round positivity"
              action={{
                type: "internal",
                route: "https://www.linkedin.com/in/gagan-r-338451171/details/honors/",
                color: "info",
                label: "read more",
              }}
            />
          </Grid>
          <Grid item xs={12} sm={6} lg={3}>
            <TransparentBlogCard
              image={post1}
              time="Dec 2024"
              title="Outstanding Performance Award"
              description="Your exceptional work in enhancing user experience, supporting analytics,
and managing critical deployments has been invaluable. Thank you for your dedication and
outstanding contributions to our team's success.
"
              action={{
                type: "internal",
                route: "https://www.linkedin.com/in/gagan-r-338451171/details/honors/",
                color: "info",
                label: "read more",
              }}
            />
          </Grid>
          {/* <Grid item xs={12} sm={6} lg={3}>
            <BackgroundBlogCard
              image={post4}
              title="Personal Projects"
              description=""
              action={{
                type: "internal",
                route: "",
                label: "",
              }}
            />
          </Grid> */}
        </Grid>
      </Container>
    </MKBox>
  );
}

export default Places;
