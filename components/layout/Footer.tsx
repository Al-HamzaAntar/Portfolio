import { Facebook, Github, Linkedin, Twitter } from "lucide-react";
import { useTranslation } from 'react-i18next';

const Footer = () => {
  const { t } = useTranslation();
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-muted/50 py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col items-center justify-between space-y-4 md:flex-row md:space-y-0">
          <p className="text-muted-foreground">
            © {currentYear} {t('footer.title')}
          </p>
          
          <div className="flex space-x-6">
            <a
              href="https://www.facebook.com/profile.php?id=100010890660827&paipv=0&eav=Afb8aW6RE2lYDk9io4oOH4hxHvAWBSA3WUS-G3zS03LC5pZctIkyCZQBRg1ydBitvoc&_rdr"
              className="text-muted-foreground hover:text-foreground transition-colors"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Facebook className="h-5 w-5" />
            </a>
            <a
              href="https://github.com/Al-HamzaAntar"
              className="text-muted-foreground hover:text-foreground transition-colors"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Github className="h-5 w-5" />
            </a>
            <a
              href="https://www.linkedin.com/in/%D8%A7%D9%84%D8%AD%D9%85%D8%B2%D8%A9-%D8%B9%D9%86%D8%AA%D8%B1-404677304/"
              className="text-muted-foreground hover:text-foreground transition-colors"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Linkedin className="h-5 w-5" />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;