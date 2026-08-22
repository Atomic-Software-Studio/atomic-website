import ExecutionTrace from '@/components/ExecutionTrace'
import Logo from '@/components/brand/Logo'

export default function Home() {
  return (
    <main id="main" className="mx-auto max-w-6xl px-6 py-24 md:px-8">
      <Logo variant="color" className="text-3xl" />
      <div className="mt-16">
        <ExecutionTrace />
      </div>
    </main>
  )
}
