import { motion } from "framer-motion"
import { ChevronRight } from 'lucide-react'
import { useNavigate } from "react-router-dom";

const projects = [
  {
    id: 1,
    title: "Residência Minimalista",
    description:
      "Uma casa contemporânea que integra espaços internos e externos com amplas áreas de vidro. O projeto prioriza a iluminação natural e a conexão com o jardim, criando ambientes fluidos e aconchegantes.",
    image: "https://www.plantapronta.com.br/projetos/161/02.jpg",
    fullImages: ["/src/assets/project1-1.jpg", "/src/assets/project1-2.jpg", "/src/assets/project1-3.jpg"],
    category: "Residencial",
    client: "Família Silva",
    date: "2023",
    location: "São Paulo, SP",
    details:
      "O projeto da Residência Minimalista foi concebido para uma família que valoriza espaços amplos e integrados. Com 350m², a casa se distribui em dois pavimentos, com áreas sociais no térreo e íntimas no pavimento superior. Materiais como concreto aparente, madeira e vidro compõem a paleta de materiais, criando um ambiente sofisticado e acolhedor ao mesmo tempo.",
  },
  {
    id: 5,
    title: "Residência Minimalista",
    description:
      "Uma casa contemporânea que integra espaços internos e externos com amplas áreas de vidro. O projeto prioriza a iluminação natural e a conexão com o jardim, criando ambientes fluidos e aconchegantes.",
    image: "https://www.plantapronta.com.br/projetos/161/02.jpg",
    fullImages: ["/src/assets/project1-1.jpg", "/src/assets/project1-2.jpg", "/src/assets/project1-3.jpg"],
    category: "Residencial",
    client: "Família Silva",
    date: "2023",
    location: "São Paulo, SP",
    details:
      "O projeto da Residência Minimalista foi concebido para uma família que valoriza espaços amplos e integrados. Com 350m², a casa se distribui em dois pavimentos, com áreas sociais no térreo e íntimas no pavimento superior. Materiais como concreto aparente, madeira e vidro compõem a paleta de materiais, criando um ambiente sofisticado e acolhedor ao mesmo tempo.",
  },
  {
    id: 6,
    title: "Residência Minimalista",
    description:
      "Uma casa contemporânea que integra espaços internos e externos com amplas áreas de vidro. O projeto prioriza a iluminação natural e a conexão com o jardim, criando ambientes fluidos e aconchegantes.",
    image: "https://www.plantapronta.com.br/projetos/161/02.jpg",
    fullImages: ["/src/assets/project1-1.jpg", "/src/assets/project1-2.jpg", "/src/assets/project1-3.jpg"],
    category: "Residencial",
    client: "Família Silva",
    date: "2023",
    location: "São Paulo, SP",
    details:
      "O projeto da Residência Minimalista foi concebido para uma família que valoriza espaços amplos e integrados. Com 350m², a casa se distribui em dois pavimentos, com áreas sociais no térreo e íntimas no pavimento superior. Materiais como concreto aparente, madeira e vidro compõem a paleta de materiais, criando um ambiente sofisticado e acolhedor ao mesmo tempo.",
  },
  {
    id: 2,
    title: "Edifício Corporativo Eco",
    description: "Projeto sustentável com certificação LEED que prioriza eficiência energética e bem-estar.",
    image: "https://admin.archshop.com.br/uploads/001_261511aea8.jpg",
    fullImages: ["/src/assets/project2-1.jpg", "/src/assets/project2-2.jpg", "/src/assets/project2-3.jpg"],
    category: "Comercial",
    client: "Eco Empreendimentos",
    date: "2022",
    location: "Rio de Janeiro, RJ",
    details:
      "O Edifício Corporativo Eco é um marco na arquitetura sustentável brasileira. Com 15 andares e 12.000m² de área construída, o projeto incorpora tecnologias de ponta para redução do consumo energético, captação de água pluvial e aproveitamento máximo da iluminação natural. A fachada ventilada e os jardins verticais contribuem para o conforto térmico e a qualidade do ar.",
  },
  {
    id: 3,
    title: "Museu de Arte Contemporânea",
    description: "Espaço cultural com design inovador que dialoga com o entorno histórico da cidade.",
    image: "https://www.plantapronta.com.br/projetos/161/02.jpg",
    fullImages: ["/src/assets/project3-1.jpg", "/src/assets/project3-2.jpg", "/src/assets/project3-3.jpg"],
    category: "Cultural",
    client: "Secretaria de Cultura",
    date: "2021",
    location: "Salvador, BA",
    details:
      "O Museu de Arte Contemporânea foi projetado para ser um espaço dinâmico e flexível, capaz de abrigar exposições de diferentes escalas e formatos. Com 5.000m² distribuídos em três pavimentos, o edifício conta com galerias de exposição, auditório, café, loja e áreas educativas. A volumetria arrojada estabelece um diálogo respeitoso com o centro histórico da cidade.",
  },
  {
    id: 4,
    title: "Complexo Residencial Urbano",
    description: "Conjunto habitacional que integra áreas comuns e espaços verdes para promover qualidade de vida.",
    image: "https://www.plantapronta.com.br/projetos/161/02.jpg",
    fullImages: ["/src/assets/project4-1.jpg", "/src/assets/project4-2.jpg", "/src/assets/project4-3.jpg"],
    category: "Residencial",
    client: "Construtora Horizonte",
    date: "2022",
    location: "Belo Horizonte, MG",
    details:
      "O Complexo Residencial Urbano é composto por 4 torres de 20 andares, totalizando 320 unidades habitacionais. O projeto prioriza a qualidade dos espaços comuns, com praças, áreas de lazer, academia e coworking. A implantação das torres foi cuidadosamente estudada para garantir privacidade e boa insolação para todos os apartamentos.",
  },
]

export function ProjectsSection() {

  const navigate = useNavigate();

  const handleClick = (id: Number) => {
    const dados = projects
    navigate(`/project/${id}`, { state: {projects: dados} })
  }

  return (
    <section id="projetos" className="bg-gray-50 py-18">
      <div className="container px-4 md:px-6 max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="mb-16 text-center"
        >
          <h2 className="mb-4 text-3xl md:text-4xl font-light">
            Nossos <span className="font-medium">Projetos</span>
          </h2>
          <p className="mx-auto max-w-2xl text-gray-600">
            Uma seleção dos nossos projetos arquitetônicos mais inovadores e impactantes de todo o Brasil.
          </p>
        </motion.div>
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {projects.map((project) => (
            <motion.div
              key={project.id}
              className="group overflow-hidden bg-white shadow-sm"
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              viewport={{ once: true }}
            >
              <div className="relative aspect-[4/3] overflow-hidden">
                <img
                  src={project.image || "/placeholder.svg"}
                  alt={project.title}
                  className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
              </div>
              <div className="p-6">
                <h3 className="mb-2 text-xl font-medium">{project.title}</h3>
                <p className="mb-4 text-sm text-gray-500">
                  {project.category} • {project.date}
                </p>
                <button
                  onClick={() => { handleClick(project.id) }}
                  className="inline-flex items-center text-sm uppercase tracking-wider hover:underline cursor-pointer"
                >
                  Ver Projeto <ChevronRight className="ml-1 h-4 w-4" />
                </button>
              </div>
            </motion.div>
          ))}
        </div>
        <motion.div
          className="mt-16 text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          viewport={{ once: true }}
        >

          <button
            className="border border-gray-300 px-8 py-3 text-sm font-medium uppercase tracking-wider transition-all hover:bg-black hover:text-white hover:border-black">
            Ver Todos os Projetos
          </button>

        </motion.div>
      </div>
    </section>
  )
}
