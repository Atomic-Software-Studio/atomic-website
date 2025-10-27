import Image from 'next/image'

export default function Projects() {
  const projects = [
    {
      title: 'Project Alpha',
      description: 'AI-Powered Analytics Dashboard',
      image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBQT6MtF3k7fdR6PCuswxzUnpHY4mlW63qzEiyrtDmcxEcW593uhmy1P4taw_ri_sRWQfSojgxc5uGyhEiPzMRvncNjwDRoC7bdRa4oNKW1zsYytZc2hBKnvauU-aWjMKf4BIEkb8Z9TrYqAlTM_Cawm27dJRhQqiKK_y2OQkbqU7W-OjQTl10EOApY6sc46nZJGXpJUnuLOfeIwHsUkirhyvgtJfIn0mQgpsTSjPqruzj6wNzNDkK7Sf7Bxs94O90xKTgRZAzY4-V9',
      alt: 'A dark-themed code editor showing lines of colorful syntax-highlighted code.'
    },
    {
      title: 'Project Beta',
      description: 'E-Commerce Platform Integration',
      image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBqpoAVG7pq53VAfCRPCGQeBJBMuyhOx524wJsjiVqlJDjFXygiH3l2Z_xuyOcgMkzoTsiOHuig_KQXYaGUjZdTYHITyZWruZqG1bXIlpeURpls38W4oQVm73EwwHZKDaY2s-3wVE1NJFmDP_6Y6-sgIYuRtD-xHD7Bwt5jKpGlfVMVNvY7HvTo-rYvBh0EC8MpwTupQCldWsgn1RbzmKTEkGzD9Rd8gKF1GDSqr_0BWQ3FRAeU00rJiNDgkiLa5ELtp-I4lO4P9rbl',
      alt: 'A laptop screen displaying HTML code, with a focus on the body and script tags.'
    }
  ]

  return (
    <section className="flex flex-col gap-4">
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
            <div className="absolute bottom-0 left-0 right-0 p-6 bg-gradient-to-t from-background-dark via-background-dark/80 to-transparent">
              <h3 className="text-xl font-bold">{project.title}</h3>
              <p className="text-sm text-white/70">{project.description}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}