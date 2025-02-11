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
import Icon from "@mui/material/Icon";

// Material Kit 2 React components
import MKBox from "components/MKBox";
import MKAvatar from "components/MKAvatar";
import MKButton from "components/MKButton";
import MKTypography from "components/MKTypography";
import InstagramIcon from '@mui/icons-material/Instagram';
import LinkedInIcon from '@mui/icons-material/LinkedIn';

// Images
import profilePicture from "assets/images/gagan1.jpg";

function Profile() {
  return (
    <MKBox component="section" py={{ xs: 6, sm: 12 }}>
      <Container>
        <Grid container item xs={12} justifyContent="center" mx="auto">
          <MKBox mt={{ xs: -16, md: -20 }} textAlign="center">
            <MKAvatar src={profilePicture} alt="Burce Mars" size="xxl" shadow="xl" />
          </MKBox>
          <Grid container justifyContent="center" py={6}>
            <Grid item xs={12} md={7} mx={{ xs: "auto", sm: 6, md: 1 }}>
              <MKBox display="flex" justifyContent="space-between" alignItems="center" mb={1}>
                <MKTypography variant="h3">Hey, I&apos;m Gagan</MKTypography>
                <MKBox display="flex" justifyContent="space-between" alignItems="center" >
                  {/* <MKTypography variant="h6">Socialize with me on</MKTypography> */}
                  <a
                    href="https://www.instagram.com/nomadic.cinematographer?igsh=MjM0Zm9laGtiMzhk"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <MKButton variant="text" color="info" size="large" iconOnly>
                      <InstagramIcon>
                      </InstagramIcon>
                    </MKButton>
                  </a>

                  <a
                    href="https://www.linkedin.com/in/gagan-r-338451171/"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <MKButton variant="text" color="info" size="large" iconOnly>
                      <LinkedInIcon></LinkedInIcon>

                      {/* <i className="fab fa-linkedin" style={{ fontSize: "1.25rem" }} />  */}

                    </MKButton>
                  </a>
                  {/* <MKButton variant="text" color="white" size="large" iconOnly>
                    <a
                      href="https://www.instagram.com/nomadic.cinematographer?igsh=MjM0Zm9laGtiMzhk"
                      target="_blank"
                      rel="noreferrer"
                    >
                      <i className="fab fa-instagram" style={{ fontSize: "1.25rem" }} />
                    </a>
                  </MKButton> */}

                </MKBox>
              </MKBox>
              <Grid container spacing={3} mb={3}>
                <Grid item>
                  {/* <MKTypography component="span" variant="body2" fontWeight="bold">
                    323&nbsp;
                  </MKTypography>
                  <MKTypography component="span" variant="body2" color="text">
                    Posts
                  </MKTypography>
                </Grid>
                <Grid item>
                  <MKTypography component="span" variant="body2" fontWeight="bold">
                    3.5k&nbsp;
                  </MKTypography> */}
                  {/* <MKTypography component="span" variant="body2" color="text">
                    Followers
                  </MKTypography> */}
                </Grid>
                <Grid item>
                  {/* <MKTypography component="span" variant="body2" fontWeight="bold">
                    260&nbsp;
                  </MKTypography>
                  <MKTypography component="span" variant="body2" color="text">
                    Following
                  </MKTypography> */}
                </Grid>
              </Grid>
              <MKTypography variant="body1" fontWeight="light" color="text">
                A dynamic management consultant with six years of shaking things up in Energy, Digital Adaptation, and Healthcare. I don’t just optimize—I revolutionize, cutting business operations costs by 30-40% and earning a standing ovation (well, almost) for my strategic insights and fresh ideas.

                But hey, life isn’t all about boardrooms and KPIs! When I’m off duty, you’ll find me behind a camera capturing cinematic moments, trekking up new heights, embarking on solo adventures, or geeking out over SAS applications just for fun. Work hard, explore harder! <br />
                <MKTypography
                  component="a"
                  href="#snaps"
                  variant="body1"
                  fontWeight="light"
                  color="info"
                  mt={3}
                  sx={{
                    width: "max-content",
                    display: "flex",
                    alignItems: "center",

                    "& .material-icons-round": {
                      transform: `translateX(3px)`,
                      transition: "transform 0.2s cubic-bezier(0.34, 1.61, 0.7, 1.3)",
                    },

                    "&:hover .material-icons-round, &:focus .material-icons-round": {
                      transform: `translateX(6px)`,
                    },
                  }}
                >
                  Some of my Snapshots <Icon sx={{ fontWeight: "bold" }}>arrow_downward</Icon>
                </MKTypography>
              </MKTypography>
            </Grid>
          </Grid>
        </Grid>
      </Container>
    </MKBox>
  );
}

export default Profile;
