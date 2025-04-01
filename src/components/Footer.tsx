import { Link } from "react-router-dom"
import { Instagram, Facebook, Linkedin, ArrowUp } from 'lucide-react'

function Footer() {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth"
    })
  }

  return (
    <footer className="bg-black text-white py-12 px-6 md:px-12">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="md:col-span-2">
            <Link to="/" className="text-2xl font-light tracking-tighter">
              ARCHI<span className="font-medium">STUDIO</span>
            </Link>
            <p className="mt-4 text-gray-400 max-w-md">
              Transformando espaços em experiências memoráveis através de projetos arquitetônicos inovadores e sustentáveis.
            </p>
            <div className="flex space-x-4 mt-6">
              <a href="#" className="text-gray-400 hover:text-white transition-colors" aria-label="Instagram">
                <Instagram size={20} />
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors" aria-label="Facebook">
                <Facebook size={20} />
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors" aria-label="LinkedIn">
                <Linkedin size={20} />
              </a>
            </div>
          </div>
          
          <div>
            <h3 className="text-lg font-medium mb-4">Links Rápidos</h3>
            <ul className="space-y-2">
              {["Projetos", "Sobre", "Serviços", "Contato"].map((item) => (
                <li key={item}>
                  <a 
                    href={`#${item.toLowerCase()}`}
                    className="text-gray-400 hover:text-white transition-colors"
                  >
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>
          
          <div>
            <h3 className="text-lg font-medium mb-4">Serviços</h3>
            <ul className="space-y-2">
              {[
                "Projetos Residenciais",
                "Projetos Comerciais",
                "Interiores",
                "Consultoria",
                "Paisagismo"
              ].map((item) => (
                <li key={item}>
                  <a 
                    href="#"
                    className="text-gray-400 hover:text-white transition-colors"
                  >
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>
        
        <div className="mt-12 pt-8 border-t border-gray-800 flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-400 text-sm">
            &copy; {new Date().getFullYear()} ArchiStudio. Todos os direitos reservados.
          </p>
          
          <button 
            onClick={scrollToTop}
            className="mt-4 md:mt-0 flex items-center text-gray-400 hover:text-white transition-colors"
            aria-label="Voltar ao topo"
          >
            <span className="mr-2 text-sm">Voltar ao topo</span>
            <ArrowUp size={16} />
          </button>
        </div>
      </div>
    </footer>
  )
}

export default Footer
