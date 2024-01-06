import { EpicStackLogo, logos } from './logos/logos'

const GETTING_STARTED_URL =
	'https://github.com/epicweb-dev/epic-stack/blob/main/docs/getting-started.md'

export default function App() {
	return (
		<div className="grid min-h-screen place-items-center">
			<div className="grid place-items-center gap-16 px-4 py-16 xl:grid-cols-2">
				<div className="flex max-w-md flex-col items-center text-center">
					<EpicStackLogo className="size-20 text-slate-900" />
					<h1 className="mt-8 text-4xl font-medium text-slate-900 md:text-5xl">
						<a href="https://www.epicweb.dev/stack">The Epic Stack</a>
					</h1>
					<p className="mt-6 text-xl/7 text-slate-600">
						Check the{' '}
						<a
							className="underline hover:no-underline"
							href={GETTING_STARTED_URL}
						>
							Getting Started guide
						</a>{' '}
						file for how to get your project off the ground!
					</p>
				</div>
				<ul className="flex max-w-3xl flex-wrap justify-center gap-2 sm:gap-4">
					{logos.map(logo => (
						<li key={logo.href}>
							<a
								href={logo.href}
								className="grid size-20 place-items-center rounded-2xl bg-violet-100 p-4 transition hover:-rotate-6 hover:bg-violet-200 sm:size-24"
							>
								<img src={logo.src} alt="" className="w-16" />
							</a>
						</li>
					))}
				</ul>
			</div>
		</div>
	)
}
