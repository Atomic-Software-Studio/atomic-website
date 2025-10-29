import Image from 'next/image'

export default function Projects() {
  const projects = [
    {
      title: 'Appointment Workflow Automation',
      description: 'Automatiza agendamiento de citas, recordatorios, confirmaciones y seguimiento de clientes vía WhatsApp y Google a través de agentes IA.',
      image: '/projects/project_1.png',
      alt: 'A dark-themed code editor showing lines of colorful syntax-highlighted code.',
      technologies: ['n8n', 'OpenAI', 'WhatsApp API', 'Google Cloud']
    },
    {
      title: 'Multi-Client Automation Manager',
      description: 'Plataforma para administrar automatizaciones y flujos personalizados de múltiples clientes aislados en un solo entorno.',
      image: '/projects/project_2.png',
      alt: 'A dark-themed code editor showing lines of colorful syntax-highlighted code.',
      technologies: ['n8n', 'Meta Apps', 'WhatsApp API', 'Docker']
    },
  ]

  return (
    <section id="projects" className="flex flex-col gap-4">
      <h2 className="text-white text-3xl font-bold leading-tight tracking-tighter px-4 pb-3 pt-5 text-center">
        Proyectos destacados
      </h2>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 p-4">
        {projects.map((project, index) => (
          <div 
            key={index}
            className="group relative flex flex-col rounded-xl overflow-hidden border border-white/10 hover:border-primary/50 transition-all"
          >
            <Image
              className="aspect-[16/10] w-full object-cover transition-transform group-hover:scale-105"
              src={project.image}
              alt={project.alt}
              width={640}
              height={400}
            />
            <div className="absolute bottom-0 left-0 right-0 p-6 bg-gradient-to-t from-background-dark via-background-dark/100 to-transparent">
              <h3 className="text-xl font-bold">{project.title}</h3>
              <p className="text-sm text-white/70 mb-3">{project.description}</p>
              <div className="flex flex-wrap gap-2">
                {project.technologies.map((tech, techIndex) => (
                  <span 
                    key={techIndex}
                    className="px-3 py-1 text-xs font-medium bg-primary/20 text-primary border border-primary/40 rounded-full"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}