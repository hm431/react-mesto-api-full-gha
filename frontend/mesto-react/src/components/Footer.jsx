function Footer() {

    let year = '2023';
    const currentYear = new Date().getFullYear();
    if (currentYear !== 2023) {
        year = `2023 - ${currentYear}`;
    }

    return (
        <footer className="footer">
            <p className="footer__copiright">
                © {year} Mesto Russia
            </p>
        </footer>
    );
}


export default Footer;