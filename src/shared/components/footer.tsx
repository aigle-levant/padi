
export default function Footer() {
    return (
    <footer className="w-full bg-slate-100 dark:bg-slate-900 text-slate-900 dark:text-slate-100 border-t border-slate-300 dark:border-slate-800">
      <div className="text-center py-8 px-4 border-b border-slate-300 dark:border-slate-700">
        <p className="font-main font-medium text-2xl md:text-3xl">
          "Let's cross the bridge when we reach it."
        </p>
      </div>

      <div className="max-w-6xl mx-auto flex flex-col md:flex-row justify-between px-10 py-10 gap-8">
        <div className="flex flex-col items-start gap-4">
          <p className="font-main font-bold text-3xl">Padi</p>
          <p className="text-sm text-slate-600 dark:text-slate-400">
            Extract text from English and Tamil images effortlessly.
          </p>

          <div className="flex flex-col gap-2 text-sm mt-2">
            <a
              href="https://www.linkedin.com/in/prajanya-subramanian"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:underline"
            >
              LinkedIn
            </a>
            <a
              href="https://github.com/aigle-levant"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:underline"
            >
              GitHub
            </a>
            <a
              href="https://x.com/aiglelevant"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:underline"
            >
              X (Twitter)
            </a>
          </div>
        </div>

        <div className="flex flex-col sm:flex-row gap-10 md:gap-16">
          <div>
            <p className="font-heading font-bold mb-3 text-xl">Resources</p>
            <div className="flex flex-col gap-2 text-sm">
              <a
                href="https://github.com/aigle-levant/padi"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:underline"
              >
                View Repository
              </a>
              <a
                href="https://tesseract.projectnaptha.com/"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:underline"
              >
                Tesseract.js Docs
              </a>
              <a
                href="https://scribe.js.org/"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:underline"
              >
                Scribe.js Docs
              </a>
            </div>
          </div>
        </div>
      </div>

      <div className="border-t border-slate-300 dark:border-slate-800 py-4 text-center text-sm font-body">
        <p>
          © {new Date().getFullYear()} Prajanya Subramanian
        </p>
      </div>
    </footer>
  );
}