"use client"

import { useState, useRef } from "react"
import { useNavigate } from "react-router-dom"
import { ChevronLeft, ChevronRight } from "lucide-react"
import { AnimatePresence, motion } from "framer-motion"

// Exemplo de projetos (você pode substituir por seus dados reais)
const projects = [
  {
    id: 1,
    title: "Residência Moderna",
    category: "Residencial",
    description:
      "Uma casa contemporânea que combina funcionalidade e estética, criando espaços que fluem naturalmente entre si e com o ambiente externo.",
    image: "https://admin.archshop.com.br/uploads/001_261511aea8.jpg",
  },
  {
    id: 2,
    title: "Centro Empresarial",
    category: "Comercial",
    description:
      "Um complexo de escritórios que prioriza a sustentabilidade e o bem-estar dos usuários, com amplos espaços verdes e iluminação natural.",
    image: "https://admin.archshop.com.br/uploads/001_261511aea8.jpg",
  },
  {
    id: 3,
    title: "Pavilhão Cultural",
    category: "Institucional",
    description:
      "Um espaço multifuncional que celebra a arte e a cultura, com design flexível para acomodar diferentes tipos de eventos e exposições.",
    image: "https://admin.archshop.com.br/uploads/001_261511aea8.jpg",
  },
]

function ProjectShowcase2() {
  const [currentIndex, setCurrentIndex] = useState(0)
  const [direction, setDirection] = useState(0)
  const constraintsRef = useRef(null)
  const navigate = useNavigate()

  const nextProject = () => {
    setDirection(1)
    setCurrentIndex((prevIndex) => (prevIndex + 1) % projects.length)
  }

  const prevProject = () => {
    setDirection(-1)
    setCurrentIndex((prevIndex) => (prevIndex - 1 + projects.length) % projects.length)
  }

  const currentProject = projects[currentIndex]

  const handleClick = (id: number) => {
    const dados = projects
    navigate(`/project/${id}`, { state: { projects: dados } })
  }

  const variants = {
    enter: (direction: number) => ({
      x: direction > 0 ? 1000 : -1000,
      opacity: 0,
    }),
    center: {
      x: 0,
      opacity: 1,
    },
    exit: (direction: number) => ({
      x: direction < 0 ? 1000 : -1000,
      opacity: 0,
    }),
  }

  return (
    <section id="destaques" className="py-18 bg-[#1a1a2e] text-white">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          viewport={{ once: true }}
          className="mb-16 text-center px-6"
        >
          <h2 className="text-3xl md:text-4xl font-light mb-4">
            Nossos <span className="font-medium">Projetos</span>
          </h2>
          <p className="text-zinc-400 max-w-2xl mx-auto">
            Conheça alguns dos nossos trabalhos mais recentes e descubra como transformamos conceitos em realidade.
          </p>
        </motion.div>

        <div className="relative max-h-[600px] h-[700px] overflow-hidden" ref={constraintsRef}>
          <AnimatePresence initial={false} custom={direction} mode="wait">
            <motion.div
              key={currentProject.id}
              custom={direction}
              variants={variants}
              initial="enter"
              animate="center"
              exit="exit"
              transition={{ type: "tween", duration: 0.8 }}
              className="absolute inset-0"
            >
              {/* Imagem de fundo */}
              <div className="absolute inset-0">
                <img
                  src={currentProject.image || "https://v0.dev/placeholder.svg"}
                  alt={currentProject.title}
                  className="w-full h-full object-cover"
                />
                {/* Overlay gradiente para melhorar a legibilidade do texto */}
                <div className="absolute inset-0 bg-gradient-to-t from-[#1a1a2e] via-[#1a1a2e]/70 to-transparent"></div>
              </div>

              {/* Conteúdo de texto */}
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="max-w-3xl px-6 md:px-12 text-center">
                  {/*<span className="text-sm uppercase tracking-wider text-zinc-300">{currentProject.category}</span>*/}
                  <h3 className="text-3xl md:text-5xl font-medium mt-2 mb-6">{currentProject.title}</h3>
                  <p className="text-zinc-300 mb-8 text-lg md:text-xl">{currentProject.description}</p>
                  <button
                    onClick={() => {
                      handleClick(currentProject.id)
                    }}
                    className="inline-flex items-center justify-center px-6 py-3 bg-white text-black text-sm uppercase tracking-wider hover:bg-zinc-200 transition-colors rounded-md"
                  >
                    Ver detalhes
                    <ChevronRight size={16} className="ml-2" />
                  </button>
                </div>
              </div>
            </motion.div>
          </AnimatePresence>

          <button
            onClick={prevProject}
            className="absolute left-6 top-1/2 -translate-y-1/2 z-10 bg-white/10 hover:bg-white/20 p-3 rounded-full backdrop-blur-sm transition-colors"
            aria-label="Projeto anterior"
          >
            <ChevronLeft size={24} className="text-white" />
          </button>

          <button
            onClick={nextProject}
            className="absolute right-6 top-1/2 -translate-y-1/2 z-10 bg-white/10 hover:bg-white/20 p-3 rounded-full backdrop-blur-sm transition-colors"
            aria-label="Próximo projeto"
          >
            <ChevronRight size={24} className="text-white" />
          </button>
        </div>

        <div className="flex justify-center mt-8 space-x-3 px-6">
          {projects.map((_, index) => (
            <button
              key={index}
              onClick={() => {
                setDirection(index > currentIndex ? 1 : -1)
                setCurrentIndex(index)
              }}
              className={`w-3 h-3 rounded-full transition-colors ${
                index === currentIndex ? "bg-white" : "bg-zinc-700"
              }`}
              aria-label={`Ir para projeto ${index + 1}`}
            />
          ))}
        </div>
      </div>
    </section>
  )
}

export default ProjectShowcase2

