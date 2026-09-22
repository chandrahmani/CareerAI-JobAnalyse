
import { AutoAwesome } from '@mui/icons-material';
import { Box, Container, Typography, Stack } from '@mui/material';

function Footer() {
	return (
		<Box
        component="footer"
        sx={{
          py: 5,
          borderTop: "1px solid",
          borderColor: "divider",
        }}
      >
        <Container maxWidth="lg">
          <Stack
            sx={{
              direction: {
                xs: "column",
                md: "row",
              },
              justifyContent: "space-between",
              alignItems: "center",
              spacing: 2,
            }}
          >
            <Stack
              sx={{
                direction: "row",
                spacing: 1,
                alignItems: "center",
              }}
            >
              <AutoAwesome color="primary" />

              <Typography sx={{ fontWeight: 700 }}>CareerAI</Typography>
            </Stack>

            <Typography variant="body2" color="text.secondary">
              © 2026 CareerAI. Built with React & TypeScript.
            </Typography>
          </Stack>
        </Container>
      </Box>
	);
}

export default Footer;