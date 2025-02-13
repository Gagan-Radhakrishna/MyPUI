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
import MKButton from "components/MKButton";
import MKTypography from "components/MKTypography";
import Slide from '@mui/material/Slide';
import InstagramIcon from '@mui/icons-material/Instagram';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import TelegramIcon from '@mui/icons-material/Telegram';

// Images
import bgImage from "assets/images/land.jpg";

const icon = (<MKBox component="section" py={{ xs: 0, lg: 6 }}>
  <Container>
    <Grid container item>
      <MKBox
        width="100%"
        bgColor="white"
        borderRadius="xl"
        shadow="xl"
        mb={6}
        sx={{ overflow: "hidden" }}
      >
        <Grid container spacing={2}>
          <Grid
            item
            xs={12}
            lg={5}
            position="relative"
            px={0}
            sx={{
              backgroundImage: ({
                palette: { gradients },
                functions: { rgba, linearGradient },
              }) =>
                `${linearGradient(
                  rgba(gradients.dark.main, 0.8),
                  rgba(gradients.dark.state, 0.8)
                )}, url(${bgImage})`,
              backgroundSize: "cover",
            }}
          >
            <MKBox
              display="flex"
              justifyContent="center"
              alignItems="center"
              width="100%"
              height="100%"
            >
              <MKBox py={6} pr={6} pl={{ xs: 6, sm: 12 }} my="auto">
                <MKTypography variant="h3" color="white" mb={1}>
                  Contact Information
                </MKTypography>
                <MKBox display="flex" p={1}>
                  <MKTypography variant="button" color="white">
                    <i className="fas fa-phone" />
                  </MKTypography>
                  <a href="tel:+91-9206-00-4682">
                    <MKTypography
                      component="span"
                      variant="button"
                      color="white"
                      opacity={0.8}
                      ml={2}
                      fontWeight="regular"
                    >
                      (+91) 9206004682
                    </MKTypography>
                  </a>
                </MKBox>
                <MKBox display="flex" color="white" p={1}>
                  <MKTypography variant="button" color="white">
                    <i className="fas fa-envelope" />
                  </MKTypography>
                  <MKTypography
                    component="span"
                    variant="button"
                    color="white"
                    opacity={0.8}
                    ml={2}
                    fontWeight="regular"
                  >
                    gagan.r.blr@gmail.com
                  </MKTypography>
                </MKBox>
                <MKBox display="flex" color="white" p={1}>
                  <MKTypography variant="button" color="white">
                    <i className="fas fa-map-marker-alt" />
                  </MKTypography>
                  <MKTypography
                    component="span"
                    variant="button"
                    color="white"
                    opacity={0.8}
                    ml={2}
                    fontWeight="regular"
                  >
                    Brundhavana 4, 4th cross Bengaluru 560050
                  </MKTypography>
                </MKBox>
                <MKBox mt={3}>
                  <a
                    href="https://www.instagram.com/nomadic.cinematographer?igsh=MjM0Zm9laGtiMzhk"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <MKButton variant="text" color="white" size="large" iconOnly>
                      <InstagramIcon>
                      </InstagramIcon>
                    </MKButton>
                  </a>
                  <a
                    href="https://www.linkedin.com/in/gagan-r-338451171/"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <MKButton variant="text" color="white" size="large" iconOnly>
                      <LinkedInIcon></LinkedInIcon>
                    </MKButton>
                  </a>
                  <a
                    href="https://t.me/gaganRJ"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <MKButton variant="text" color="white" size="large" iconOnly>
                      <TelegramIcon></TelegramIcon>
                    </MKButton>
                  </a>
                  <a
                    href="https://wa.me/qr/7ASJNKGLL7IKP1"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <MKButton variant="text" color="white" size="large" iconOnly>
                      <WhatsAppIcon></WhatsAppIcon>
                    </MKButton>
                  </a>
                </MKBox>
              </MKBox>
            </MKBox>
          </Grid>
          {/* <Grid item xs={12} lg={7}>
            <MKBox component="form" p={2} method="post">
              <MKBox px={3} py={{ xs: 2, sm: 6 }}>
                <MKTypography variant="h2" mb={1}>
                  Say Hi!
                </MKTypography>
                <MKTypography variant="body1" color="text" mb={2}>
                  We&apos;d like to talk with you.
                </MKTypography>
              </MKBox>
              <MKBox pt={0.5} pb={3} px={3}>
                <Grid container>
                  <Grid item xs={12} pr={1} mb={6}>
                    <MKInput
                      variant="standard"
                      label="My name is"
                      placeholder="Full Name"
                      InputLabelProps={{ shrink: true }}
                      fullWidth
                    />
                  </Grid>
                  <Grid item xs={12} pr={1} mb={6}>
                    <MKInput
                      variant="standard"
                      label="I'm looking for"
                      placeholder="What you love"
                      InputLabelProps={{ shrink: true }}
                      fullWidth
                    />
                  </Grid>
                  <Grid item xs={12} pr={1} mb={6}>
                    <MKInput
                      variant="standard"
                      label="Your message"
                      placeholder="I want to say that..."
                      InputLabelProps={{ shrink: true }}
                      fullWidth
                      multiline
                      rows={6}
                    />
                  </Grid>
                </Grid>
                <Grid
                  container
                  item
                  xs={12}
                  md={6}
                  justifyContent="flex-end"
                  textAlign="right"
                  ml="auto"
                >
                  <MKButton variant="gradient" color="info">
                    Send Message
                  </MKButton>
                </Grid>
              </MKBox>
            </MKBox>
          </Grid> */}
        </Grid>
      </MKBox>
    </Grid>
  </Container>
</MKBox>);

function Contact() {
  return (
    <Slide direction="up" in={true} mountOnEnter unmountOnExit style={{ transformOrigin: '0 0 0' }}
      {...(true ? { timeout: 2000 } : {})}>
      {icon}
    </Slide>
  )
}

export default Contact;
