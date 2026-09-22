import {
  AccessTime,
  Email,
  LocationOn,
  Phone,
  Send,
} from "@mui/icons-material";
import {
  Alert,
  Box,
  Button,
  Card,
  CardContent,
  Chip,
  Container,
  Grid,
  Paper,
  Snackbar,
  Stack,
  TextField,
  Typography,
} from "@mui/material";
import { useState } from "react";
import { useForm } from "react-hook-form";

interface ContactFormData {
  name: string;
  email: string;
  subject: string;
  message: string;
}

const Contact = () => {
  const [success, setSuccess] = useState(false);

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<ContactFormData>();

  const onSubmit = (data: ContactFormData) => {
    console.log("Contact form data:", data);

    setSuccess(true);
    reset();
  };

  const contactInfo = [
    {
      icon: <Email />,
      title: "Email Us",
      value: "support@careerai.com",
      description: "Send us an email anytime.",
    },
    {
      icon: <Phone />,
      title: "Call Us",
      value: "+91 98765 43210",
      description: "Mon - Fri, 10 AM - 6 PM.",
    },
    {
      icon: <LocationOn />,
      title: "Our Location",
      value: "New Delhi, India",
      description: "Serving job seekers worldwide.",
    },
    {
      icon: <AccessTime />,
      title: "Working Hours",
      value: "Mon - Fri",
      description: "10:00 AM - 6:00 PM IST.",
    },
  ];

  return (
    <Box sx={{ overflow: "hidden" }}>
      {/* Hero */}
      <Box
        sx={{
          py: { xs: 9, md: 13 },
          background: (theme) =>
            theme.palette.mode === "dark"
              ? "linear-gradient(135deg, #111827 0%, #1e1b4b 50%, #312e81 100%)"
              : "linear-gradient(135deg, #f8faff 0%, #eef2ff 50%, #f5f3ff 100%)",
        }}
      >
        <Container maxWidth="lg">
          <Box
            // textAlign="center"
            // maxWidth={800}
            // mx="auto"
			sx={{
              textAlign: "center",
              maxWidth: 800,
              mx: "auto",
            }}
          >
            <Chip
              label="Contact CareerAI"
              color="primary"
              sx={{
                mb: 3,
                fontWeight: 600,
              }}
            />

            <Typography
              variant="h1"
              sx={{
                fontSize: {
                  xs: "2.5rem",
                  md: "4.2rem",
                },
                fontWeight: 800,
                lineHeight: 1.1,
                mb: 3,
              }}
            >
              Let's talk about your{" "}
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
                career.
              </Box>
            </Typography>

            <Typography
              variant="h6"
              color="text.secondary"
              sx={{
                maxWidth: 680,
                mx: "auto",
                lineHeight: 1.8,
                fontWeight: 400,
              }}
            >
              Have a question, feedback, or need help with CareerAI?
              Our team would love to hear from you.
            </Typography>
          </Box>
        </Container>
      </Box>

      {/* Contact Section */}
      <Container
        maxWidth="lg"
        sx={{
          py: { xs: 7, md: 11 },
        }}
      >
        <Grid container spacing={5}>
          {/* Left */}
          <Grid size={{ xs: 12, md: 5 }}>
            <Typography
              variant="h3"
              sx={{
                fontWeight: 800,
                fontSize: {
                  xs: "2rem",
                  md: "2.7rem",
                },
                mb: 2,
              }}
            >
              Get in touch
            </Typography>

            <Typography
              color="text.secondary"
              sx={{
                lineHeight: 1.8,
                mb: 5,
              }}
            >
              Whether you're experiencing an issue, have a suggestion,
              or simply want to learn more about CareerAI, feel free to
              reach out.
            </Typography>

            <Stack spacing={2}>
              {contactInfo.map((item) => (
                <Card
                  key={item.title}
                  elevation={0}
                  sx={{
                    border: "1px solid",
                    borderColor: "divider",
                    borderRadius: 3,
                    transition: "0.3s",
                    "&:hover": {
                      transform: "translateX(6px)",
                      boxShadow: 4,
                    },
                  }}
                >
                  <CardContent>
                    <Stack
                      sx={{
                        flexDirection: "row",
                        spacing: 2,
                        alignItems: "center",
                      }}
                    >
                      <Box
                        sx={{
                          width: 48,
                          height: 48,
                          minWidth: 48,
                          borderRadius: 2.5,
                          display: "flex",
                          alignItems: "center",
                          justifyContent: "center",
                          color: "primary.main",
                          backgroundColor: "action.hover",
                        }}
                      >
                        {item.icon}
                      </Box>

                      <Box>
                        <Typography
                          variant="subtitle2"
                          color="text.secondary"
                        >
                          {item.title}
                        </Typography>

                        <Typography
                          sx={{
                            variant: "subtitle1",
                            fontWeight: 700,
                          }}
                        >
                          {item.value}
                        </Typography>

                        <Typography
                          variant="body2"
                          color="text.secondary"
                        >
                          {item.description}
                        </Typography>
                      </Box>
                    </Stack>
                  </CardContent>
                </Card>
              ))}
            </Stack>
          </Grid>

          {/* Form */}
          <Grid size={{ xs: 12, md: 7 }}>
            <Paper
              elevation={0}
              sx={{
                p: {
                  xs: 3,
                  sm: 4,
                  md: 5,
                },
                borderRadius: 5,
                border: "1px solid",
                borderColor: "divider",
              }}
            >
              <Typography
                sx={{ variant: "h4", fontWeight: 800, mb: 1 }}
              >
                Send us a message
              </Typography>

              <Typography
                color="text.secondary"
                sx={{ mb: 4 }}
              >
                Fill out the form and we'll get back to you as soon
                as possible.
              </Typography>

              <Box
                component="form"
                onSubmit={handleSubmit(onSubmit)}
              >
                <Grid container spacing={2.5}>
                  {/* Name */}
                  <Grid size={{ xs: 12, sm: 6 }}>
                    <TextField
                      fullWidth
                      label="Your Name"
                      placeholder="Enter your name"
                      {...register("name", {
                        required: "Name is required",
                        minLength: {
                          value: 2,
                          message:
                            "Name must be at least 2 characters",
                        },
                      })}
                      error={Boolean(errors.name)}
                      helperText={errors.name?.message}
                    />
                  </Grid>

                  {/* Email */}
                  <Grid size={{ xs: 12, sm: 6 }}>
                    <TextField
                      fullWidth
                      label="Email Address"
                      placeholder="you@example.com"
                      type="email"
                      {...register("email", {
                        required: "Email is required",
                        pattern: {
                          value:
                            /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
                          message:
                            "Enter a valid email address",
                        },
                      })}
                      error={Boolean(errors.email)}
                      helperText={errors.email?.message}
                    />
                  </Grid>

                  {/* Subject */}
                  <Grid size={{ xs: 12 }}>
                    <TextField
                      fullWidth
                      label="Subject"
                      placeholder="How can we help?"
                      {...register("subject", {
                        required: "Subject is required",
                      })}
                      error={Boolean(errors.subject)}
                      helperText={errors.subject?.message}
                    />
                  </Grid>

                  {/* Message */}
                  <Grid size={{ xs: 12 }}>
                    <TextField
                      fullWidth
                      label="Message"
                      placeholder="Write your message..."
                      multiline
                      rows={6}
                      {...register("message", {
                        required: "Message is required",
                        minLength: {
                          value: 10,
                          message:
                            "Message must be at least 10 characters",
                        },
                      })}
                      error={Boolean(errors.message)}
                      helperText={errors.message?.message}
                    />
                  </Grid>

                  {/* Submit */}
                  <Grid size={{ xs: 12 }}>
                    <Button
                      type="submit"
                      variant="contained"
                      size="large"
                      fullWidth
                      endIcon={<Send />}
                      sx={{
                        py: 1.6,
                        borderRadius: 3,
                        textTransform: "none",
                        fontWeight: 700,
                        fontSize: "1rem",
                      }}
                    >
                      Send Message
                    </Button>
                  </Grid>
                </Grid>
              </Box>
            </Paper>
          </Grid>
        </Grid>
      </Container>

      {/* Bottom CTA */}
      <Box
        sx={{
          py: { xs: 7, md: 10 },
          backgroundColor: "action.hover",
        }}
      >
        <Container maxWidth="md">
          <Paper
            elevation={0}
            sx={{
              p: { xs: 4, md: 6 },
              borderRadius: 5,
              textAlign: "center",
              border: "1px solid",
              borderColor: "divider",
              background:
                "linear-gradient(135deg, rgba(99,102,241,0.08), rgba(139,92,246,0.12))",
            }}
          >
            <Typography
              sx={{
                fontSize: {
                  xs: "2rem",
                  md: "2.8rem",
				   fontWeight:800
                },
                mb: 2,
              }}
            >
              Need quick answers?
            </Typography>

            <Typography
              color="text.secondary"
              sx={{
                maxWidth: 600,
                mx: "auto",
                lineHeight: 1.8,
              }}
            >
              Check out our frequently asked questions to find
              answers to common CareerAI questions.
            </Typography>

            <Button
              variant="outlined"
              size="large"
              sx={{
                mt: 3,
                px: 4,
                py: 1.4,
                borderRadius: 3,
                textTransform: "none",
                fontWeight: 700,
              }}
              onClick={() => {
                window.location.href = "/#faq";
              }}
            >
              View FAQs
            </Button>
          </Paper>
        </Container>
      </Box>

      {/* Success Snackbar */}
      <Snackbar
        open={success}
        autoHideDuration={4000}
        onClose={() => setSuccess(false)}
        anchorOrigin={{
          vertical: "bottom",
          horizontal: "center",
        }}
      >
        <Alert
          severity="success"
          variant="filled"
          onClose={() => setSuccess(false)}
        >
          Your message has been submitted successfully!
        </Alert>
      </Snackbar>
    </Box>
  );
};

export default Contact;