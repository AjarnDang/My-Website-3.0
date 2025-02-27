export default function Footer() {
  const currYear = new Date().getFullYear();

  return (
    <footer className="flex md:hidden justify-center items-center py-6 border-t border-theme">
      <small>© 2023 - {currYear} Thornthan J.</small>
    </footer>
  );
}
