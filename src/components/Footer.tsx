import gembaLogo from "@/assets/gemba-logo.png";

const Footer = () => {
  return (
    <footer className="bg-secondary pt-16 pb-8">
      <div className="container mx-auto px-6">
        <div className="mb-10">
          <img
            src={gembaLogo}
            alt="Gemba Group"
            className="h-12 mb-4 brightness-0 invert opacity-80"
          />
          <p className="text-secondary-foreground/50 text-sm max-w-xs leading-relaxed">
            Capacitando profissionais para
            <br />
            transformar empresas desde 2008.
          </p>
        </div>

        <div className="border-t border-white/10 pt-6 flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
          <p className="text-secondary-foreground/40 text-sm">
            © {new Date().getFullYear()} Gemba Group. Todos os direitos reservados.
          </p>
          <p className="text-secondary-foreground/40 text-sm">
            Desenvolvido por{" "}
            <a
              href="https://agwebi.com.br"
              target="_blank"
              rel="noopener noreferrer"
              className="text-secondary-foreground/60 hover:text-secondary-foreground transition-colors underline"
            >
              AGWEBi
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
