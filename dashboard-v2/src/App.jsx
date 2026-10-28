import CountUp from './components/CountUp'
import HoldButton from './components/HoldButton'
import TextShimmer from './components/TextShimmer'
import WarmTooltip, { WarmTooltipGroup } from './components/WarmTooltip'

const kpis = [
  { label: 'Packets per second', to: 67 },
  { label: 'Active flows', to: 5 },
  { label: 'Alerts raised', to: 1 },
  { label: 'Addresses blocked', to: 0 },
  { label: 'Launched attacks caught', to: 1, suffix: ' of 1' },
  { label: 'Median time to detect', to: 0.7, decimals: 1, suffix: ' s' },
]

const attacks = [
  { label: 'Run port scan', tip: 'Simulated, safe' },
  { label: 'Run brute force', tip: 'Simulated, safe' },
  { label: 'Run DoS flood', tip: 'Simulated, safe' },
  { label: 'Normal browsing', tip: 'Baseline traffic' },
]

const sources = ['Simulated', 'Live capture', 'PCAP replay', 'CSV replay']

function Card({ className = '', children }) {
  return (
    <section className={`rounded-2xl border border-zinc-800 bg-zinc-900/60 p-5 ${className}`}>
      {children}
    </section>
  )
}

export default function App() {
  return (
    <div className="min-h-screen bg-zinc-950 text-zinc-100">
      <header className="flex flex-wrap items-center justify-between gap-4 border-b border-zinc-800 px-8 py-4">
        <div>
          <h1 className="text-2xl font-bold">
            <TextShimmer>NetGuard</TextShimmer>
          </h1>
          <p className="text-sm text-zinc-400">Network intrusion monitor</p>
        </div>
        <nav className="flex gap-1 rounded-xl bg-zinc-900 p-1">
          {sources.map((s, i) => (
            <button
              key={s}
              className={`rounded-lg px-3 py-1.5 text-sm ${
                i === 0 ? 'bg-zinc-100 text-zinc-900' : 'text-zinc-400 hover:text-zinc-100'
              }`}
            >
              {s}
            </button>
          ))}
        </nav>
        <span className="rounded-full bg-teal-500/15 px-3 py-1 text-sm text-teal-300">● All clear</span>
      </header>

      <main className="mx-auto max-w-7xl space-y-6 p-8">
        <div className="grid grid-cols-2 gap-4 md:grid-cols-3 lg:grid-cols-6">
          {kpis.map(k => (
            <Card key={k.label} className="!p-4">
              <div className="text-3xl font-semibold">
                <CountUp
                  to={k.to}
                  decimals={k.decimals}
                  suffix={k.suffix}
                  mode="roll"
                  trigger="load"
                  duration={1.2}
                />
              </div>
              <div className="mt-1 text-sm text-zinc-400">{k.label}</div>
            </Card>
          ))}
        </div>

        <div className="grid gap-6 lg:grid-cols-3">
          <Card className="lg:col-span-2">
            <h2 className="mb-4 font-semibold">Traffic and response</h2>
            <div className="flex h-56 items-center justify-center rounded-xl border border-dashed border-zinc-700 text-zinc-500">
              Chart goes here (next step)
            </div>
          </Card>

          <Card>
            <h2 className="mb-4 font-semibold">Alerts</h2>
            <div className="rounded-xl border border-red-900 bg-red-950/40 p-4">
              <div className="flex justify-between">
                <strong>Port scan</strong>
                <span className="text-sm text-red-400">Critical</span>
              </div>
              <p className="mt-1 text-sm text-zinc-400">10.0.0.66 to 10.0.0.2</p>
              <p className="text-sm text-zinc-400">133 different ports probed in 0.3 s</p>
              <div className="mt-4">
                <HoldButton size="sm" doneLabel="Blocked" fillColor="#b91c1c" holdTime={1200}>
                  Hold to block address
                </HoldButton>
              </div>
            </div>
          </Card>
        </div>

        <Card>
          <h2 className="mb-4 font-semibold">Run an attack</h2>
          <WarmTooltipGroup>
            <div className="flex flex-wrap gap-3">
              {attacks.map(a => (
                <WarmTooltip key={a.label} content={a.tip}>
                  <button className="rounded-xl bg-zinc-100 px-5 py-2.5 font-medium text-zinc-900 hover:bg-white">
                    {a.label}
                  </button>
                </WarmTooltip>
              ))}
            </div>
          </WarmTooltipGroup>
        </Card>
      </main>
    </div>
  )
}
