
import ThemeToggle from "./theme-toggler";

export default function Navbar() {

  return (
    <header className="w-full bg-slate-100 dark:bg-slate-900 text-slate-900 dark:text-slate-100 shadow-sm sticky top-0 z-50 px-20">
      <nav className="max-w-6xl mx-auto flex items-center justify-between px-6 py-4">
        {/* Brand */}
        <div className="text-xl font-semibold font-main tracking-tight">
          Padi
        </div>

        <div className="flex items-center gap-3">
          <ThemeToggle />
        </div>
      </nav>
    </header>
  );
}
