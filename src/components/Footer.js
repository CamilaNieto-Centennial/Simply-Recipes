const Footer = () => {

    return ( 
        <>
        <footer className="black-bg">
            <p className="white-font">&copy; {new Date().getFullYear()} <span className="footer-logo">SimplyRecipes </span><span>Attribution to <a href="https://johnsmilga.com/">Coding Addict</a> </span></p>
        </footer>
        </>
    );
}
 
export default Footer;