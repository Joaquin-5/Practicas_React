function Footer() {
  function getCurrentYear() {
    return new Date().getFullYear();
  }

  getCurrentYear();

  return (
    <footer
      style={{
        backgroundColor: "#f1f1f1",
        padding: "10px",
        textAlign: "center",
        marginTop: "20px",
      }}
    >
      <p>&copy; {getCurrentYear()} - Prácticas React</p>
    </footer>
  );
}

export default Footer;
