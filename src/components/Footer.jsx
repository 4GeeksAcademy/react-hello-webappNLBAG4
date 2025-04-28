const Footer = () => {
	return (
	  <footer className="text-center py-4 mt-5" style={{ backgroundColor: "rgba(0,0,0,0.7)", backdropFilter: "blur(5px)", color: "#f8f9fa", marginTop: "auto" }}>
		<div className="container">
		  <p className="mb-1">
			May the Force be with you <i className="fas fa-jedi"></i>
		  </p>
		  <p style={{ fontSize: "0.9rem" }}>
			© {new Date().getFullYear()} Star Wars Blog - Hecho con amor galáctico.
		  </p>
		</div>
	  </footer>
	);
  };
  
  export default Footer;