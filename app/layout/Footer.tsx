export default function Footer() {
  const currYear = new Date().getFullYear();

  return (
    <footer className="flex md:hidden justify-center items-center py-6 border-t dark:border-gray-500 border-gray-400">
      <small>© 2023 - {currYear} Thornthan J.</small>
    </footer>
  );
}
