export default function Hero() {
  return (
    <div className="w-full @container">
      <div className="@[480px]:p-4">
        <div 
          className="flex min-h-[480px] flex-col gap-6 bg-cover bg-center bg-no-repeat @[480px]:gap-8 @[480px]:rounded-xl items-center justify-center p-4"
          style={{
            backgroundImage: `linear-gradient(rgba(16, 28, 34, 0.6) 0%, rgba(16, 28, 34, 0.9) 100%), url("https://lh3.googleusercontent.com/aida-public/AB6AXuDXmrx8NiT4UNH3YQjxuJADluy0tmD21O6VWnmQ_RDNSibIja_mxrxHwY76dOpGlR2pn5gobYIU_xyCrmpCx5oacwN2n0zUloPSD7Ts33A6Hrf03P1xANhT2G1soKRSxQO74Dwvuq7hOyg2kpArl3CDC-NTBJhhXogakICHa-uxfcE5DKfMP0Pc9J1KZFwF-8VZFmRuS3dVFEdlPlnKsmZc3LP9VmVcRIsUuCG9DhLSjQD0Ut_pZ3PJQfLcfqcIU_D33s4Gtss4nE_X")`
          }}
        >
          <div className="flex flex-col gap-4 text-center max-w-2xl">
            <h1 className="text-white text-4xl font-bold leading-tight tracking-tighter @[480px]:text-6xl @[480px]:font-bold @[480px]:leading-tight">
              Building the Future with Intelligent Software
            </h1>
            <p className="text-white/80 text-base font-normal leading-normal @[480px]:text-lg @[480px]:font-normal @[480px]:leading-normal">
              We create innovative, automated solutions to propel your business into the next digital era.
            </p>
          </div>
          <button className="flex min-w-[84px] max-w-[480px] cursor-pointer items-center justify-center overflow-hidden rounded-lg h-10 px-4 @[480px]:h-12 @[480px]:px-5 bg-primary text-white text-sm font-bold leading-normal tracking-[0.015em] @[480px]:text-base @[480px]:font-bold @[480px]:leading-normal @[480px]:tracking-[0.015em] hover:bg-primary/90 transition-colors">
            <span className="truncate">Explore Our Services</span>
          </button>
        </div>
      </div>
    </div>
  )
}