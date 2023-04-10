import Navbar from "./Navbar";
const Layout = ({ children }) => {
  return (
    <>
      <div className="content">
        <Navbar />
        {children}
        <footer>Copyright CMYKat LLC 2023</footer>
      </div>
    </>
  );
};

export default Layout;
