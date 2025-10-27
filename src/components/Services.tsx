export default function Services() {
  const services = [
    {
      icon: 'smart_toy',
      title: 'AI Chatbots & Automation',
      description: 'Develop intelligent conversational AI and automate business processes for efficiency.'
    },
    {
      icon: 'code_blocks',
      title: 'Web Development',
      description: 'Craft modern, responsive, and scalable web applications and platforms.'
    },
    {
      icon: 'sync_alt',
      title: 'Integrations & APIs',
      description: 'Seamlessly connect disparate systems and build robust APIs for enhanced functionality.'
    },
    {
      icon: 'cloud_upload',
      title: 'Cloud Solutions',
      description: 'Design, deploy, and manage scalable cloud infrastructure and services.'
    }
  ]

  return (
    <section className="flex flex-col gap-8">
      <div className="text-center px-4">
        <h2 className="text-white text-3xl font-bold leading-tight tracking-tighter">
          Our Services
        </h2>
        <p className="text-white/70 mt-2 max-w-2xl mx-auto">
          We specialize in creating bespoke software solutions that are intelligent, efficient, and scalable. 
          Explore our core services designed to innovate and elevate your business.
        </p>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 p-4">
        {services.map((service, index) => (
          <div 
            key={index}
            className="group flex flex-col gap-4 rounded-xl border border-white/10 bg-white/[.03] p-6 transition-all duration-300 ease-in-out hover:border-primary/50 hover:bg-white/[.05]"
          >
            <div className="flex items-center gap-4">
              <span className="material-symbols-outlined text-primary text-4xl transition-transform duration-300 group-hover:scale-110 flex-shrink-0">
                {service.icon}
              </span>
              <div className="flex-1 h-[2px] bg-primary"></div>
            </div>
            <div className="flex flex-col gap-2">
              <h3 className="text-white text-xl font-bold leading-tight">
                {service.title}
              </h3>
              <p className="text-white/80 text-sm font-normal leading-normal">
                {service.description}
              </p>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}