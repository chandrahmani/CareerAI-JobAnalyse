import {
  AutoAwesome,
  CheckCircle,
  Psychology,
  RocketLaunch,
  Speed,
  TrendingUp,
} from "@mui/icons-material";
import {
  Box,
  Button,
  Card,
  CardContent,
  Chip,
  Container,
  Grid,
  Paper,
  Stack,
  Typography,
} from "@mui/material";
import { motion } from "framer-motion";
// import { useNavigate } from "react-router-dom";

const MotionBox = motion(Box);

const AboutPage = () => {
  // const navigate = useNavigate();

  const features = [
    {
      icon: <Psychology fontSize="large" />,
      title: "AI-Powered Analysis",
      description:
        "Get intelligent insights into your resume and understand how well it matches your target role.",
    },
    {
      icon: <TrendingUp fontSize="large" />,
      title: "Improve Your Resume",
      description:
        "Discover missing skills, weak sections and actionable improvements to make your resume stronger.",
    },
    {
      icon: <Speed fontSize="large" />,
      title: "ATS Optimization",
      description:
        "Analyze your resume against ATS-friendly practices and improve your chances of getting noticed.",
    },
    {
      icon: <RocketLaunch fontSize="large" />,
      title: "Career Growth",
      description:
        "Turn your resume insights into practical steps for building a stronger career profile.",
    },
  ];

  const benefits = [
    "AI-powered resume analysis",
    "ATS compatibility insights",
    "Skill gap detection",
    "Job description matching",
    "Resume improvement suggestions",
    "Job application tracking",
  ];

  return (
    <Box sx={{ overflow: "hidden" }}>
      {/* Hero */}
      <Box
        sx={{
          py: { xs: 10, md: 15 },
          background: (theme) =>
            theme.palette.mode === "dark"
              ? "linear-gradient(135deg, #111827 0%, #1e1b4b 50%, #312e81 100%)"
              : "linear-gradient(135deg, #f8faff 0%, #eef2ff 50%, #f5f3ff 100%)",
        }}
      >
        <Container maxWidth="lg">
          <Grid sx={{ display: "flex", flexDirection: { xs: "column", md: "row" }, gap: 4 }}>
            <Grid size={{ xs: 12, md: 7 }}>
              <MotionBox
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7 }}
              >
                <Chip
                  icon={<AutoAwesome />}
                  label="About CareerAI"
                  color="primary"
                  sx={{
                    mb: 3,
                    fontWeight: 600,
                    px: 1,
                  }}
                />

                <Typography
                  variant="h1"
                  sx={{
                    fontSize: { xs: "2.5rem", md: "4.5rem" },
                    fontWeight: 800,
                    lineHeight: 1.08,
                    mb: 3,
                  }}
                >
                  Build a Resume.
                  <br />
                  <Box
                    component="span"
                    sx={{
                      background:
                        "linear-gradient(90deg, #6366F1, #8B5CF6)",
                      backgroundClip: "text",
                      WebkitBackgroundClip: "text",
                      color: "transparent",
                    }}
                  >
                    Build Your Future.
                  </Box>
                </Typography>

                <Typography
                  variant="h6"
                  color="text.secondary"
                  sx={{
                    maxWidth: 650,
                    lineHeight: 1.8,
                    fontWeight: 400,
                    mb: 4,
                  }}
                >
                  CareerAI is an AI-powered career platform designed to help
                  job seekers create stronger resumes, understand their skill
                  gaps and prepare for the modern job market.
                </Typography>

                <Stack direction={{ xs: "column", sm: "row" }} spacing={2}>
                  <Button
                    variant="contained"
                    size="large"
                    endIcon={<RocketLaunch />}
                    sx={{
                      px: 4,
                      py: 1.5,
                      borderRadius: 3,
                      textTransform: "none",
                      fontWeight: 700,
                    }}
                  >
                    Get Started
                  </Button>

                  <Button
                    variant="outlined"
                    size="large"
                    sx={{
                      px: 4,
                      py: 1.5,
                      borderRadius: 3,
                      textTransform: "none",
                      fontWeight: 700,
                    }}
                  >
                    Contact Us
                  </Button>
                </Stack>
              </MotionBox>
            </Grid>

            {/* Hero Card */}
            <Grid size={{ xs: 12, md: 5 }}>
              <MotionBox
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.8 }}
              >
                <Paper
                  elevation={0}
                  sx={{
                    p: 3,
                    borderRadius: 5,
                    backdropFilter: "blur(20px)",
                    backgroundColor: (theme) =>
                      theme.palette.mode === "dark"
                        ? "rgba(255,255,255,0.06)"
                        : "rgba(255,255,255,0.75)",
                    border: "1px solid",
                    borderColor: "divider",
                  }}
                >
                  <Typography
                   sx={{ fontWeight: 700, mb: 2 }}
                  >
                    CareerAI Analysis
                  </Typography>

                  <Stack spacing={2}>
                    <Paper
                      sx={{
                        p: 2,
                        borderRadius: 3,
                        backgroundColor: "background.default",
                      }}
                    >
                      <Typography variant="body2" color="text.secondary">
                        ATS Score
                      </Typography>

                      <Typography
                        sx={{ fontWeight: 700, fontSize: "1.5rem" }}
                      >
                        87%
                      </Typography>
                    </Paper>

                    <Stack direction="row" spacing={2}>
                      <Paper
                        sx={{
                          p: 2,
                          flex: 1,
                          borderRadius: 3,
                          backgroundColor: "background.default",
                        }}
                      >
                        <Typography variant="body2" color="text.secondary">
                          Skills
                        </Typography>
                        <Typography sx={{ fontWeight: 700, fontSize: "1.5rem" }}>
                          24
                        </Typography>
                      </Paper>

                      <Paper
                        sx={{
                          p: 2,
                          flex: 1,
                          borderRadius: 3,
                          backgroundColor: "background.default",
                        }}
                      >
                        <Typography variant="body2" color="text.secondary">
                          Match
                        </Typography>
                        <Typography sx={{ fontWeight: 700, fontSize: "1.5rem" }}>
                          92%
                        </Typography>
                      </Paper>
                    </Stack>

                    <Box
                      sx={{
                        height: 10,
                        borderRadius: 10,
                        backgroundColor: "divider",
                        overflow: "hidden",
                      }}
                    >
                      <Box
                        sx={{
                          width: "87%",
                          height: "100%",
                          borderRadius: 10,
                          background:
                            "linear-gradient(90deg, #6366F1, #8B5CF6)",
                        }}
                      />
                    </Box>
                  </Stack>
                </Paper>
              </MotionBox>
            </Grid>
          </Grid>
        </Container>
      </Box>

      {/* Mission */}
      <Container maxWidth="lg" sx={{ py: { xs: 8, md: 12 } }}>
        <Grid sx={{ flexDirection: { xs: "column", md: "row" }, gap: 4 }}>
          <Grid size={{ xs: 12, md: 6 }}>
            <Chip label="Our Mission" color="primary" sx={{ mb: 2 }} />

            <Typography
              variant="h2"
              sx={{
                fontWeight: 800,
                fontSize: { xs: "2rem", md: "3rem" },
                mb: 3,
              }}
            >
              Making career growth more accessible.
            </Typography>

            <Typography
              color="text.secondary"
              sx={{ fontSize: "1.1rem", lineHeight: 1.9 }}
            >
              Finding a job can be challenging. From creating a resume to
              understanding ATS systems and identifying the right skills,
              candidates often have to navigate many different tools.
            </Typography>

            <Typography
              color="text.secondary"
              sx={{
                fontSize: "1.1rem",
                lineHeight: 1.9,
                mt: 2,
              }}
            >
              CareerAI brings these experiences together in one platform,
              helping job seekers understand where they stand and what they
              can do next.
            </Typography>
          </Grid>

          <Grid size={{ xs: 12, md: 6 }}>
            <Paper
              sx={{
                p: { xs: 3, md: 5 },
                borderRadius: 5,
                background:
                  "linear-gradient(135deg, rgba(164, 165, 255, 0.1), rgba(139,92,246,0.08))",
                border: "1px solid",
                borderColor: "divider",
              }}
            >
              <AutoAwesome
                sx={{
                  fontSize: 55,
                  color: "primary.main",
                  mb: 2,
                }}
              />

              <Typography sx={{ fontWeight: 700 }}>
                Smarter career decisions
              </Typography>

              <Typography sx={{ color: "text.secondary", lineHeight: 1.8 }}>
                Instead of guessing what recruiters are looking for, use
                data-driven insights to understand your resume, skills and job
                compatibility.
              </Typography>
            </Paper>
          </Grid>
        </Grid>
      </Container>

      {/* Why CareerAI */}
      <Box sx={{ py: { xs: 8, md: 12 }, bgcolor: "background.default" }}>
        <Container maxWidth="lg">
          <Box sx={{ textAlign: "center", mb: 7 }}>
            <Chip label="Why CareerAI" color="primary" sx={{ mb: 2 }} />

            <Typography
              variant="h2"
              sx={{
                fontWeight: 800,
                fontSize: { xs: "2rem", md: "3rem" },
                mb: 2,
              }}
            >
              Everything you need to improve your career profile
            </Typography>

            <Typography
              color="text.secondary"
              sx={{
                maxWidth: 700,
                mx: "auto",
                lineHeight: 1.8,
              }}
            >
              CareerAI combines resume intelligence, job matching and career
              insights into one simple experience.
            </Typography>
          </Box>

          <Grid container spacing={3}>
            {features.map((feature, index) => (
              <Grid size={{ xs: 12, sm: 6, md: 3 }} key={feature.title}>
                <MotionBox
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  sx={{ height: "100%" }}
                >
                  <Card
                    sx={{
                      height: "100%",
                      borderRadius: 4,
                      transition: "0.3s",
                      "&:hover": {
                        transform: "translateY(-8px)",
                        boxShadow: 8,
                      },
                    }}
                  >
                    <CardContent sx={{ p: 3 }}>
                      <Box
                        sx={{
                          width: 55,
                          height: 55,
                          display: "flex",
                          alignItems: "center",
                          justifyContent: "center",
                          borderRadius: 3,
                          color: "primary.main",
                          backgroundColor: "primary.50",
                          mb: 3,
                        }}
                      >
                        {feature.icon}
                      </Box>

                      <Typography sx={{ fontWeight: 700, mb: 1 }} variant="h6">
                        {feature.title}
                      </Typography>

                      <Typography
                        sx={{ color: "text.secondary", lineHeight: 1.7 }}
                      >
                        {feature.description}
                      </Typography>
                    </CardContent>
                  </Card>
                </MotionBox>
              </Grid>
            ))}
          </Grid>
        </Container>
      </Box>

      {/* Features */}
      <Container maxWidth="lg" sx={{ py: { xs: 8, md: 12 } }}>
        <Grid sx={{ display: "flex", flexDirection: { xs: "column", md: "row" }}}>
          <Grid size={{ xs: 12, md: 6 }}>
            <Chip label="Built For Job Seekers" color="primary" sx={{ mb: 2 }} />

            <Typography
              variant="h2"
              sx={{
                fontWeight: 800,
                fontSize: { xs: "2rem", md: "3rem" },
                mb: 3,
              }}
            >
              One platform.
              <br />
              Multiple career tools.
            </Typography>

            <Typography
              color="text.secondary"
              sx={{ lineHeight: 1.8, mb: 4 }}
            >
              Whether you are a fresher applying for your first role or an
              experienced professional looking for your next opportunity,
              CareerAI helps you prepare with practical insights.
            </Typography>

            <Stack spacing={2}>
              {benefits.map((benefit) => (
                <Stack
                  // direction="row"
                  // spacing={1.5}
                  // alignItems="center"
                  // key={benefit}
                  sx={{direction:'row' , spacing: 1.5, alignItems: 'center'}}
                >
                  <CheckCircle color="primary" />
                  <Typography sx={{ fontWeight:500}}>{benefit}</Typography>
                </Stack>
              ))}
            </Stack>
          </Grid>

          <Grid size={{ xs: 12, md: 6 }}>
            <Paper
              sx={{
                p: { xs: 3, md: 5 },
                borderRadius: 5,
                background:
                  "linear-gradient(145deg, #6366F1, #8B5CF6)",
                color: "white",
              }}
            >
              <Typography sx={{ fontWeight: 700, mb: 1 }}>
                Your career deserves better tools.
              </Typography>

              <Typography
                sx={{
                  opacity: 0.9,
                  lineHeight: 1.8,
                  mb: 4,
                }}
              >
                Analyze your resume, discover opportunities for improvement
                and move forward with more confidence.
              </Typography>

              <Button
                variant="contained"
                // onClick={() => navigate("/register")}
                sx={{
                  backgroundColor: "white",
                  color: "primary.main",
                  px: 4,
                  py: 1.4,
                  borderRadius: 3,
                  textTransform: "none",
                  fontWeight: 700,
                  "&:hover": {
                    backgroundColor: "#f5f5f5",
                  },
                }}
              >
                Start Using CareerAI
              </Button>
            </Paper>
          </Grid>
        </Grid>
      </Container>

      {/* Vision */}
      <Box
        sx={{
          py: { xs: 8, md: 12 },
          backgroundColor: "action.hover",
        }}
      >
        <Container maxWidth="md">
          <Box sx={{ textAlign: "center" }}>
            <Chip label="Our Vision" color="primary" sx={{ mb: 2 }} />

            <Typography
              variant="h2"
              sx={{
                fontWeight: 800,
                fontSize: { xs: "2rem", md: "3.2rem" },
                mb: 3,
              }}
            >
              A smarter way to navigate your career.
            </Typography>

            <Typography
              color="text.secondary"
              sx={{
                fontSize: "1.1rem",
                lineHeight: 1.9,
              }}
            >
              We envision a future where every job seeker has access to
              intelligent career tools that help them understand their
              strengths, identify opportunities and continuously improve.
            </Typography>
          </Box>
        </Container>
      </Box>

      {/* CTA */}
      <Box sx={{ py: { xs: 8, md: 10 } }}>
        <Container maxWidth="md">
          <Paper
            sx={{
              p: { xs: 4, md: 7 },
              textAlign: "center",
              borderRadius: 5,
              background:
                "linear-gradient(135deg, rgba(99,102,241,0.1), rgba(139,92,246,0.12))",
              border: "1px solid",
              borderColor: "divider",
            }}
          >
            <Typography
              sx={{ fontSize: { xs: "2rem", md: "3rem" }, mb: 2 , fontWeight:800 }}
            >
              Ready to improve your resume?
            </Typography>

            <Typography
              color="text.secondary"
              sx={{ maxWidth: 600, mx: "auto", mb: 4 }}
            >
              Start analyzing your resume and discover what you can improve
              today.
            </Typography>

            <Button
              variant="contained"
              size="large"
              endIcon={<RocketLaunch />}
              // onClick={() => navigate("/register")}
              sx={{
                px: 4,
                py: 1.5,
                borderRadius: 3,
                textTransform: "none",
                fontWeight: 700,
              }}
            >
              Create Free Account
            </Button>
          </Paper>
        </Container>
      </Box>
    </Box>
  );
};

export default AboutPage;