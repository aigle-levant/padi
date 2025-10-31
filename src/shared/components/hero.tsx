import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Stack from "@mui/material/Stack";

export default function Hero() {
  return (
    <section
      id="hero"
      className="flex flex-col items-center justify-center text-center min-h-[85vh] px-6 bg-slate-100 dark:bg-slate-900 text-slate-900 dark:text-slate-100 transition-colors"
    >
      <div className="max-w-3xl mx-auto bg-slate-100 dark:bg-slate-900 text-slate-900 dark:text-slate-100">
        {/* Title */}
        <Typography
          variant="h2"
          sx={{
            fontWeight: 700,
            fontSize: { xs: "2rem", md: "3rem" },
            lineHeight: 1.2,
            mb: 2,
            fontFamily: "Inter, sans-serif",
          }}
          className="text-slate-900 dark:text-slate-50"
        >
          Extract text from images — fast, offline & limitless.
        </Typography>

        {/* Subtitle */}
        <Typography
          variant="body1"
          sx={{
            fontSize: { xs: "1rem", md: "1.2rem" },
            color: "text.secondary",
            mb: 4,
            fontFamily: "Inter, sans-serif",
          }}
        >
          Padi uses Tesseract.js to recognize both{" "}
          <span className="font-semibold text-slate-800 dark:text-slate-200">
            English
          </span>{" "}
          and{" "}
          <span className="font-semibold text-slate-800 dark:text-slate-200">
            Tamil
          </span>{" "}
          text from images, PDFs, and scanned documents — all in your browser.
        </Typography>

        {/* Buttons */}
        <Stack
          direction="row"
          spacing={2}
          justifyContent="center"
          flexWrap="wrap"
        >
          <Button
            variant="contained"
            size="large"
            href="#upload"
            sx={{
              textTransform: "none",
              fontWeight: 600,
              px: 4,
              py: 1.2,
              borderRadius: "12px",
              fontFamily: "Inter, sans-serif",
            }}
          >
            Get Started
          </Button>

          <Button
            variant="outlined"
            size="large"
            href="https://github.com/aigle-levant/padi"
            target="_blank"
            rel="noopener noreferrer"
            sx={{
              textTransform: "none",
              fontWeight: 500,
              px: 4,
              py: 1.2,
              borderRadius: "12px",
              fontFamily: "Inter, sans-serif",
            }}
          >
            View Source
          </Button>
        </Stack>
      </div>
    </section>
  );
}
