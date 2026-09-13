import FooterImage from "../../assets/logo-text.png";
const Footer = () => {
  return (
    <footer className="w-full bg-white text-slate-600 px-8 pt-12 pb-6 border-t border-slate-100 font-sans  bg-gradient-to-br from-[#fff5fa] via-[#e7e6ee] to-[#dee2e7]">
      <div className="max-w-7xl mx-auto">
       
        <div className="grid grid-cols-1 md:grid-cols-5 gap-8 mb-12">
          
         
          <div className="md:col-span-2 space-y-4">
            <div className="flex items-center gap-2">
              <img src={FooterImage} alt="" />
            </div>
            <p className="text-sm text-slate-500 leading-relaxed max-w-sm">
              Curated tools, technologies, and resources for developers building modern software.
            </p>
            <div className="flex items-center gap-4 text-xs font-semibold text-slate-700 pt-2">
              <a href="#github" className="hover:text-pink-500 transition-colors">GitHub</a>
              <a href="#twitter" className="hover:text-pink-500 transition-colors">Twitter</a>
              <a href="#linkedin" className="hover:text-pink-500 transition-colors">LinkedIn</a>
            </div>
          </div>

       
          <div className="space-y-3">
            <h6 className="text-xs font-bold uppercase tracking-wider text-slate-900">PRODUCT</h6>
            <ul className="space-y-2 text-xs text-slate-500">
              <li><a href="#home" className="hover:text-slate-900 transition-colors">Home</a></li>
              <li><a href="#technologies" className="hover:text-slate-900 transition-colors">Technologies</a></li>
              <li><a href="#projects" className="hover:text-slate-900 transition-colors">Projects</a></li>
            </ul>
          </div>

          
          <div className="space-y-3">
            <h6 className="text-xs font-bold uppercase tracking-wider text-slate-900">COMPANY</h6>
            <ul className="space-y-2 text-xs text-slate-500">
              <li><a href="#about" className="hover:text-slate-900 transition-colors">About</a></li>
              <li><a href="#contact" className="hover:text-slate-900 transition-colors">Contact</a></li>
              <li><a href="#careers" className="hover:text-slate-900 transition-colors">Careers</a></li>
            </ul>
          </div>

       
          <div className="space-y-3">
            <h6 className="text-xs font-bold uppercase tracking-wider text-slate-900">LEGAL</h6>
            <ul className="space-y-2 text-xs text-slate-500">
              <li><a href="#privacy-policy" className="hover:text-slate-900 transition-colors">Privacy Policy</a></li>
              <li><a href="#terms-of-service" className="hover:text-slate-900 transition-colors">Terms of Service</a></li>
            </ul>
          </div>

        </div>

      
        <div className="pt-6 border-t border-slate-100 flex flex-col sm:flex-row justify-between items-center text-xs text-slate-500 gap-4">
          <p className="">© 2026 Dev Stack. All rights reserved.</p>
          <div className="flex gap-4">
            <a href="#privacy" className="hover:text-slate-700 transition-colors">Privacy</a>
            <a href="#terms" className="hover:text-slate-700 transition-colors">Terms</a>
          </div>
        </div>

      </div>
    </footer>
  );
};

export default Footer;