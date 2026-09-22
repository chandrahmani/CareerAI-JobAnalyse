import {
  ArrowForward,
  AutoAwesome,
  CheckCircle,
  Description,
  Insights,
  Menu,
  Psychology,
  Speed,
  TrendingUp,
} from "@mui/icons-material";

import {
  AppBar,
  Box,
  Button,
  Card,
  CardContent,
  Chip,
  Container,
  Divider,
  Drawer,
  Grid,
  IconButton,
  Paper,
  Stack,
  Toolbar,
  Typography,
  useMediaQuery,
  useTheme,
} from "@mui/material";
import { motion } from "framer-motion";


import { useState } from "react";

// import ThemeToggle from '../../components/common/ThemeToggle';

const MotionBox = motion(Box);

const features = [
  {
    icon: <Psychology />,
    title: "AI Resume Analysis",
    description:
      "Analyze your resume against any job description and discover exactly where you stand.",
  },
  {
    icon: <Insights />,
    title: "ATS Score",
    description:
      "Get an AI-powered compatibility score and understand how your resume performs.",
  },
  {
    icon: <TrendingUp />,
    title: "Skill Gap Detection",
    description:
      "Identify missing skills and keywords that can improve your chances of matching a role.",
  },
  {
    icon: <Description />,
    title: "Resume Improvement",
    description:
      "Generate stronger summaries, skills and resume sections with AI assistance.",
  },
];

const steps = [
  {
    number: "01",
    title: "Upload Resume",
    description:
      "Upload your PDF resume and let CareerAI understand your experience.",
  },
  {
    number: "02",
    title: "Add Job Description",
    description:
      "Paste the job description for the position you want to apply for.",
  },
  {
    number: "03",
    title: "Get AI Insights",
    description:
      "Receive your ATS score, skill matches, missing keywords and recommendations.",
  },
];

const testimonials = [
  {
    name: "Aarav Sharma",
    role: "Frontend Developer",
    text: "CareerAI helped me understand what was missing from my resume before applying.",
  },
  {
    name: "Priya Mehta",
    role: "Software Engineer",
    text: "The skill-gap analysis makes it much easier to tailor my resume for different roles.",
  },
  {
    name: "Rahul Verma",
    role: "React Developer",
    text: "The dashboard gives me a much clearer view of my job applications and resume performance.",
  },
];

function LandingPage() {
  const theme = useTheme();

  const isMobile = useMediaQuery(theme.breakpoints.down("md"));

  const [drawerOpen, setDrawerOpen] = useState(false);

  const scrollToSection = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });

    setDrawerOpen(false);
  };

  return (
    <Box
      sx={{
        minHeight: "100vh",
        bgcolor: "background.default",
        color: "text.primary",
      }}
    >
      {/* NAVBAR */}

      <AppBar
        position="sticky"
        elevation={0}
        sx={{
          bgcolor:
            theme.palette.mode === "light"
              ? "rgba(255,255,255,0.85)"
              : "rgba(11,17,32,0.85)",
          backdropFilter: "blur(18px)",
          borderBottom: "1px solid",
          borderColor: "divider",
        }}
      >
        <Container maxWidth="xl">
          <Toolbar
            disableGutters
            sx={{
              minHeight: 72,
              justifyContent: "space-between",
            }}
          >
            {/* LOGO */}

            <Stack
              sx={{ direction: "row", alignItems: "center", spacing: 1.2 }}
            >
              <Box
                sx={{
                  width: 40,
                  height: 40,
                  borderRadius: 2.5,
                  display: "grid",
                  placeItems: "center",
                  background: "linear-gradient(135deg, #6366F1, #8B5CF6)",
                  color: "#fff",
                }}
              >
                <AutoAwesome />
              </Box>

              <Typography
                sx={{
                  fontWeight: 700,
                  fontSize: "1.5rem",
                  lineHeight: 1.2,
                }}
              >
                CareerAI
              </Typography>
            </Stack>

            {/* DESKTOP NAV */}

            {!isMobile && (
              <Stack
                sx={{
                  direction: "row",
                  spacing: 4,
                  alignItems: "center",
                }}
              >
                <Button
                  color="inherit"
                  onClick={() => scrollToSection("features")}
                >
                  Features
                </Button>

                <Button
                  color="inherit"
                  onClick={() => scrollToSection("how-it-works")}
                >
                  How It Works
                </Button>

                <Button
                  color="inherit"
                  onClick={() => scrollToSection("pricing")}
                >
                  Pricing
                </Button>

                <Button color="inherit" onClick={() => scrollToSection("faq")}>
                  FAQ
                </Button>
              </Stack>
            )}

            <Stack
              sx={{
                direction: "row",
                spacing: 1,
                alignItems: "center",
              }}
            >
              {/* <ThemeToggle/> */}

              {!isMobile && (
                <>
                  <Button href="/login">Login</Button>

                  <Button variant="contained" href="/register">
                    Get Started
                  </Button>
                </>
              )}

              {isMobile && (
                <IconButton onClick={() => setDrawerOpen(true)}>
                  <Menu />
                </IconButton>
              )}
            </Stack>
          </Toolbar>
        </Container>
      </AppBar>

      {/* MOBILE DRAWER */}

      <Drawer
        anchor="right"
        open={drawerOpen}
        onClose={() => setDrawerOpen(false)}
      >
        <Box
          sx={{
            width: 280,
            p: 3,
          }}
        >
          <Stack spacing={1}>
            <Button onClick={() => scrollToSection("features")}>
              Features
            </Button>

            <Button onClick={() => scrollToSection("how-it-works")}>
              How It Works
            </Button>

            <Button onClick={() => scrollToSection("pricing")}>Pricing</Button>

            <Button onClick={() => scrollToSection("faq")}>FAQ</Button>

            <Divider sx={{ my: 2 }} />

            <Button href="/login">Login</Button>

            <Button variant="contained" href="/register">
              Get Started
            </Button>
          </Stack>
        </Box>
      </Drawer>

      {/* HERO */}

      <Box
        sx={{
          position: "relative",
          overflow: "hidden",
          py: {
            xs: 9,
            md: 14,
          },
        }}
      >
        {/* Background glow */}

        <Box
          sx={{
            position: "absolute",
            width: 500,
            height: 500,
            borderRadius: "50%",
            background:
              "linear-gradient(135deg, rgba(99,102,241,.18), rgba(139,92,246,.08))",
            filter: "blur(50px)",
            top: -200,
            left: "50%",
            transform: "translateX(-50%)",
            pointerEvents: "none",
          }}
        />

        <Container maxWidth="lg">
          <Grid
            sx={{
              spacing: 6,
              alignItems: "center",
            }}
          >
            <Grid size={{ xs: 12, md: 7 }}>
              <MotionBox
                initial={{
                  opacity: 0,
                  y: 25,
                }}
                animate={{
                  opacity: 1,
                  y: 0,
                }}
                transition={{
                  duration: 0.6,
                }}
              >
                <Chip
                  icon={<AutoAwesome />}
                  label="AI-Powered Career Intelligence"
                  color="primary"
                  variant="outlined"
                  sx={{
                    mb: 3,
                    fontWeight: 600,
                  }}
                />

                <Typography
                  variant="h1"
                  sx={{
                    fontSize: {
                      xs: "3rem",
                      md: "4.8rem",
                    },
                    lineHeight: 1.05,
                    maxWidth: 850,
                  }}
                >
                  Make Your Resume
                  <Box
                    component="span"
                    sx={{
                      display: "block",
                      background: "linear-gradient(90deg, #6366F1, #8B5CF6)",
                      backgroundClip: "text",
                      WebkitBackgroundClip: "text",
                      color: "transparent",
                    }}
                  >
                    Work Smarter.
                  </Box>
                </Typography>

                <Typography
                  variant="h6"
                  color="text.secondary"
                  sx={{
                    mt: 3,
                    maxWidth: 650,
                    lineHeight: 1.7,
                    fontWeight: 400,
                  }}
                >
                  Analyze your resume with AI, discover skill gaps, improve your
                  ATS score and build a smarter job application strategy.
                </Typography>

                <Stack
                  direction={{
                    xs: "column",
                    sm: "row",
                  }}
                  spacing={2}
                  sx={{ mt: 4 }}
                >
                  <Button
                    variant="contained"
                    size="large"
                    href="/register"
                    endIcon={<ArrowForward />}
                    sx={{
                      px: 3,
                      py: 1.5,
                      fontSize: "1rem",
                    }}
                  >
                    Analyze My Resume
                  </Button>

                  <Button
                    variant="outlined"
                    size="large"
                    onClick={() => scrollToSection("how-it-works")}
                    sx={{
                      px: 3,
                      py: 1.5,
                    }}
                  >
                    See How It Works
                  </Button>
                </Stack>

                <Stack
                  sx={{
                    direction: "row",
                    spacing: 3,
                    flexWrap: "wrap",
                    mt: 4,
                  }}
                >
                  {[
                    "No credit card required",
                    "AI-powered insights",
                    "Works with PDF",
                  ].map((item) => (
                    <Stack
                      key={item}
                      sx={{
                        direction: "row",
                        spacing: 0.8,
                        alignItems: "center",
                      }}
                    >
                      <CheckCircle
                        sx={{
                          fontSize: 18,
                          color: "success.main",
                        }}
                      />

                      <Typography variant="body2" color="text.secondary">
                        {item}
                      </Typography>
                    </Stack>
                  ))}
                </Stack>
              </MotionBox>
            </Grid>

            {/* DASHBOARD PREVIEW */}

            <Grid size={{ xs: 12, md: 5 }}>
              <MotionBox
                initial={{
                  opacity: 0,
                  scale: 0.95,
                }}
                animate={{
                  opacity: 1,
                  scale: 1,
                }}
                transition={{
                  duration: 0.7,
                  delay: 0.15,
                }}
              >
                <Paper
                  elevation={0}
                  sx={{
                    p: 2,
                    borderRadius: 4,
                    border: "1px solid",
                    borderColor: "divider",
                    background:
                      theme.palette.mode === "light"
                        ? "rgba(255,255,255,.75)"
                        : "rgba(17,24,39,.75)",
                    backdropFilter: "blur(20px)",
                  }}
                >
                  <Box
                    sx={{
                      p: 2,
                      borderRadius: 3,
                      bgcolor:
                        theme.palette.mode === "light" ? "#F8FAFC" : "#0B1120",
                    }}
                  >
                    <Stack
                      sx={{
                        direction: "column",
                        spacing: 1,
                      }}
                    >
                      <Typography sx={{ fontWeight: 700 }}>Resume Analysis</Typography>

                      <Chip label="AI Ready" size="small" color="success" />
                    </Stack>

                    <Box
                      sx={{
                        display: "flex",
                        justifyContent: "center",
                        mb: 3,
                      }}
                    >
                      <Box
                        sx={{
                          width: 170,
                          height: 170,
                          borderRadius: "50%",
                          display: "grid",
                          placeItems: "center",
                          background: "conic-gradient(#6366F1 87%, #E2E8F0 0)",
                        }}
                      >
                        <Box
                          sx={{
                            width: 130,
                            height: 130,
                            borderRadius: "50%",
                            bgcolor: theme.palette.background.paper,
                            display: "grid",
                            placeItems: "center",
                          }}
                        >
                          <Box sx={{ textAlign: "center" }}>
                            <Typography sx={{ variant: "h3", fontWeight: 800 }}>
                              87
                            </Typography>

                            <Typography
                              variant="caption"
                              color="text.secondary"
                            >
                              ATS SCORE
                            </Typography>
                          </Box>
                        </Box>
                      </Box>
                    </Box>

                    <Stack spacing={1.5}>
                      {[
                        ["React.js", "Matched"],
                        ["TypeScript", "Matched"],
                        ["AWS", "Missing"],
                        ["Leadership", "Missing"],
                      ].map(([skill, status]) => (
                        <Stack
                          // key={skill}
                          // direction="row"
                          // justifyContent="space-between"
                          // alignItems="center"
                          // sx={{
                          //   p: 1.3,
                          //   borderRadius: 2,
                          //   bgcolor: theme.palette.background.paper,
                          // }}
                          sx={{ display: "flex", flexDirection: "row", justifyContent: "space-between", alignItems: "center", p: 1.3, borderRadius: 2, bgcolor: theme.palette.background.paper }}
                        >
                          <Typography variant="body2">{skill}</Typography>

                          <Typography
                            // variant="caption"
                            // fontWeight={700}
                            // color={
                            //   status === "Matched"
                            //     ? "success.main"
                            //     : "warning.main"
                            // }
                            sx={{ color: status === "Matched" ? "success.main" : "warning.main" }}
                          >
                            {status}
                          </Typography>
                        </Stack>
                      ))}
                    </Stack>
                  </Box>
                </Paper>
              </MotionBox>
            </Grid>
          </Grid>
        </Container>
      </Box>

      {/* FEATURES */}

      <Box id="features" sx={{ py: 12 }}>
        <Container maxWidth="lg">
          <Box sx={{ mb: 5 }}>
            <Chip
              label="Powerful Features"
              color="primary"
              variant="outlined"
            />

            <Typography
              variant="h2"
              sx={{
                mt: 2,
                fontSize: {
                  xs: "2.2rem",
                  md: "3.2rem",
                },
              }}
            >
              Everything you need to
              <br />
              improve your career profile
            </Typography>

            <Typography
              color="text.secondary"
              sx={{
                mt: 2,
                maxWidth: 650,
                mx: "auto",
              }}
            >
              CareerAI combines resume intelligence, job tracking and AI-powered
              recommendations in one workspace.
            </Typography>
          </Box>

          <Grid container spacing={3}>
            {features.map((feature, index) => (
              <Grid
                key={feature.title}
                size={{
                  xs: 12,
                  sm: 6,
                  md: 3,
                }}
              >
                <MotionBox
                  initial={{
                    opacity: 0,
                    y: 20,
                  }}
                  whileInView={{
                    opacity: 1,
                    y: 0,
                  }}
                  viewport={{
                    once: true,
                  }}
                  transition={{
                    delay: index * 0.08,
                  }}
                  sx={{ height: "100%" }}
                >
                  <Card
                    sx={{
                      height: "100%",
                      border: "1px solid",
                      borderColor: "divider",
                      boxShadow: "none",
                      transition: "0.3s",
                      "&:hover": {
                        transform: "translateY(-6px)",
                        boxShadow: "0 20px 40px rgba(15,23,42,.10)",
                      },
                    }}
                  >
                    <CardContent sx={{ p: 3.5 }}>
                      <Box
                        sx={{
                          width: 52,
                          height: 52,
                          borderRadius: 3,
                          display: "grid",
                          placeItems: "center",
                          color: "primary.main",
                          bgcolor: "rgba(99,102,241,.10)",
                          mb: 3,
                        }}
                      >
                        {feature.icon}
                      </Box>

                      <Typography
                        sx={{
                          variant: "h6",
                          fontWeight: 700,
                        }}
                      >
                        {feature.title}
                      </Typography>

                      <Typography
                        color="text.secondary"
                        sx={{
                          mt: 1.5,
                          lineHeight: 1.7,
                        }}
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

      {/* HOW IT WORKS */}

      <Box
        id="how-it-works"
        sx={{
          py: 12,
          bgcolor: theme.palette.mode === "light" ? "#F1F5F9" : "#0F172A",
        }}
      >
        <Container maxWidth="lg">
          <Box sx={{ mb: 5, textAlign: "center" }}>
            <Chip label="Simple Process" color="primary" variant="outlined" />

            <Typography
              variant="h2"
              sx={{
                mt: 2,
                fontSize: {
                  xs: "2.2rem",
                  md: "3.2rem",
                },
              }}
            >
              From resume to insights
              <br />
              in three simple steps
            </Typography>
          </Box>

          <Grid container spacing={4}>
            {steps.map((step) => (
              <Grid
                key={step.number}
                size={{
                  xs: 12,
                  md: 4,
                }}
              >
                <Box sx={{ textAlign : "center" }}>
                  <Typography
                    sx={{
                      fontSize: "4rem",
                      fontWeight: 900,
                      color: "primary.main",
                      opacity: 0.18,
                    }}
                  >
                    {step.number}
                  </Typography>

                  <Typography sx={{ variant: "h5", fontWeight: "700" }}>
                    {step.title}
                  </Typography>

                  <Typography
                    color="text.secondary"
                    sx={{
                      mt: 1.5,
                      lineHeight: 1.7,
                    }}
                  >
                    {step.description}
                  </Typography>
                </Box>
              </Grid>
            ))}
          </Grid>
        </Container>
      </Box>

      {/* ATS SECTION */}

      <Box sx={{ py: 12 }}>
        <Container maxWidth="lg">
          <Grid sx={{ display: "flex", alignItems: "center" }}>
            <Grid size={{ xs: 12, md: 6 }}>
              <Chip
                label="ATS Intelligence"
                color="primary"
                variant="outlined"
              />

              <Typography
                variant="h2"
                sx={{
                  mt: 2,
                  fontSize: {
                    xs: "2.3rem",
                    md: "3.3rem",
                  },
                }}
              >
                Understand how your resume matches a job
              </Typography>

              <Typography
                color="text.secondary"
                sx={{
                  mt: 2,
                  lineHeight: 1.8,
                }}
              >
                CareerAI compares your resume with the requirements of a job
                description and highlights relevant skills, missing keywords,
                strengths and improvement opportunities.
              </Typography>

              <Stack spacing={2} sx={{ mt: 4 }}>
                {[
                  "Keyword matching",
                  "Skill gap detection",
                  "Resume recommendations",
                  "AI-generated summary",
                ].map((item) => (
                  <Stack
                    key={item}
                    sx={{
                      direction: "row",
                      spacing: 1.5,
                      alignItems: "center",
                    }}
                  >
                    <CheckCircle color="primary" />

                    <Typography>{item}</Typography>
                  </Stack>
                ))}
              </Stack>
            </Grid>

            <Grid size={{ xs: 12, md: 6 }}>
              <Card
                sx={{
                  p: 4,
                  border: "1px solid",
                  borderColor: "divider",
                }}
              >
                <Stack
                  sx={{
                    direction: "row",
                    spacing: 1,
                    alignItems: "center",
                  }}
                >
                  <Box>
                    <Typography color="text.secondary">
                      ATS Compatibility
                    </Typography>

                    <Typography sx={{ fontWeight: 700 }}>
                      87%
                    </Typography>
                  </Box>

                  <Speed
                    sx={{
                      fontSize: 55,
                      color: "primary.main",
                    }}
                  />
                </Stack>

                <Box sx={{ mt: 4 }}>
                  <Typography sx={{ variant: "body2", color: "text.secondary", mb: 1 }}>
                    Skill Match
                  </Typography>

                  <Box
                    sx={{
                      height: 10,
                      borderRadius: 5,
                      bgcolor: "action.hover",
                      overflow: "hidden",
                    }}
                  >
                    <Box
                      sx={{
                        width: "87%",
                        height: "100%",
                        borderRadius: 5,
                        background: "linear-gradient(90deg, #6366F1, #8B5CF6)",
                      }}
                    />
                  </Box>
                </Box>

                <Stack sx={{ direction: "row", spacing: 1, mt: 3, flexWrap: "wrap" }}>
                  {["React", "TypeScript", "JavaScript", "MUI", "Git"].map(
                    (skill) => (
                      <Chip
                        key={skill}
                        label={skill}
                        size="small"
                        color="success"
                        variant="outlined"
                      />
                    ),
                  )}
                </Stack>
              </Card>
            </Grid>
          </Grid>
        </Container>
      </Box>

      {/* TESTIMONIALS */}

      <Box
        sx={{
          py: 12,
          bgcolor: theme.palette.mode === "light" ? "#F8FAFC" : "#0F172A",
        }}
      >
        <Container maxWidth="lg">
          <Box sx={{ textAlign: "center" ,mb:7 }} >
            <Typography variant="h2">Built for modern job seekers</Typography>

            <Typography color="text.secondary" sx={{ mt: 2 }}>
              A workspace designed to make resume improvement more structured.
            </Typography>
          </Box>

          <Grid container spacing={3}>
            {testimonials.map((testimonial) => (
              <Grid
                key={testimonial.name}
                size={{
                  xs: 12,
                  md: 4,
                }}
              >
                <Card
                  sx={{
                    height: "100%",
                    border: "1px solid",
                    borderColor: "divider",
                    boxShadow: "none",
                  }}
                >
                  <CardContent sx={{ p: 3.5 }}>
                    <Typography
                      sx={{
                        lineHeight: 1.8,
                        fontStyle: "italic",
                      }}
                    >
                      “{testimonial.text}”
                    </Typography>

                    <Box sx={{ mt: 3 }}>
                      <Typography >
                        {testimonial.name}
                      </Typography>

                      <Typography variant="body2" color="text.secondary">
                        {testimonial.role}
                      </Typography>
                    </Box>
                  </CardContent>
                </Card>
              </Grid>
            ))}
          </Grid>
        </Container>
      </Box>

      {/* PRICING */}

      <Box id="pricing" sx={{ py: 12 }}>
        <Container maxWidth="md">
          <Box sx={{ textAlign: "center" }}>
            <Typography variant="h2">Start improving your resume</Typography>

            <Typography color="text.secondary" sx={{ mt: 2 }}>
              Start with the demo experience and connect your AI backend when
              ready.
            </Typography>
          </Box>

          <Card
            sx={{
              p: {
                xs: 3,
                md: 5,
              },
              border: "2px solid",
              borderColor: "primary.main",
            }}
          >
            <Box sx={{ textAlign: "center" }}>
              <Chip label="Free Demo" color="primary" />

              <Typography variant="h2" sx={{ mt: 2 }}>
                $0
              </Typography>

              <Typography color="text.secondary">
                For portfolio demonstration
              </Typography>

              <Stack
                spacing={2}
                sx={{
                  mt: 4,
                  mb: 4,
                  textAlign: "left",
                }}
              >
                {[
                  "AI resume analysis demo",
                  "ATS compatibility score",
                  "Skill gap analysis",
                  "Job application tracker",
                  "Analysis history",
                  "Dark mode",
                ].map((item) => (
                  <Stack
                    sx={{ display: "flex", flexDirection: "row", alignItems: "center", mb: 1 }}
                  >
                    <CheckCircle color="primary" fontSize="small" />

                    <Typography>{item}</Typography>
                  </Stack>
                ))}
              </Stack>

              <Button
                fullWidth
                variant="contained"
                size="large"
                href="/register"
              >
                Get Started
              </Button>
            </Box>
          </Card>
        </Container>
      </Box>

      {/* FAQ */}

      <Box
        id="faq"
        sx={{
          py: 12,
          bgcolor: theme.palette.mode === "light" ? "#F1F5F9" : "#0F172A",
        }}
      >
        <Container maxWidth="md">
          <Typography sx={{ fontWeight: 700, mb: 2 }}>
            Frequently Asked Questions
          </Typography>

          <Stack spacing={2}>
            {[
              {
                q: "What is CareerAI?",
                a: "CareerAI is a resume and job analysis platform that uses AI concepts to help users understand their resume against job requirements.",
              },
              {
                q: "Do I need an AI API key?",
                a: "No. The portfolio version uses a mock AI service. A secure backend can later connect it to an actual AI provider.",
              },
              {
                q: "Can I track job applications?",
                a: "Yes. The Job Tracker provides a Kanban-style workflow for managing applications.",
              },
              {
                q: "Is my resume stored?",
                a: "The demo application can use browser-based local storage. A production implementation should use secure backend storage and appropriate privacy controls.",
              },
            ].map((item) => (
              <Card
                key={item.q}
                sx={{
                  boxShadow: "none",
                  border: "1px solid",
                  borderColor: "divider",
                }}
              >
                <CardContent sx={{ p: 3 }}>
                  <Typography sx={{ fontWeight: 700 }}>
                    {item.q}
                  </Typography>

                  <Typography
                    color="text.secondary"
                    sx={{
                      mt: 1,
                      lineHeight: 1.7,
                    }}
                  >
                    {item.a}
                  </Typography>
                </CardContent>
              </Card>
            ))}
          </Stack>
        </Container>
      </Box>

      {/* CTA */}

      <Box sx={{ py: 12 }}>
        <Container maxWidth="md">
          <Card
            sx={{
              p: {
                xs: 4,
                md: 7,
              },
              textAlign: "center",
              color: "#fff",
              background: "linear-gradient(135deg, #4F46E5, #7C3AED)",
              borderRadius: 5,
            }}
          >
            <Typography
              variant="h2"
              sx={{
                fontSize: {
                  xs: "2.2rem",
                  md: "3.3rem",
                },
              }}
            >
              Ready to analyze your resume?
            </Typography>

            <Typography
              sx={{
                mt: 2,
                opacity: 0.85,
                lineHeight: 1.7,
              }}
            >
              Turn your resume into actionable career insights with CareerAI.
            </Typography>

            <Button
              variant="contained"
              size="large"
              href="/register"
              endIcon={<ArrowForward />}
              sx={{
                mt: 4,
                bgcolor: "#fff",
                color: "primary.main",
                "&:hover": {
                  bgcolor: "#F8FAFC",
                },
              }}
            >
              Get Started Free
            </Button>
          </Card>
        </Container>
      </Box>
    </Box>
  );
}

export default LandingPage;
