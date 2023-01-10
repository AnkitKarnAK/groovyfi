import { AnalyticsWrapper } from './components/analytics';
import '@/styles/globals.css';

export default function RootLayout({
	children,
}: {
	children: React.ReactNode;
}) {
	return (
		<html lang='en'>
			<head>
				<title>Next.js</title>
			</head>
			<body>
				<div className='relative flex'>
					<div>Sidebar</div>
					<div className='flex-1 flex flex-col bg-[radial-gradient(ellipse_at_right,_var(--tw-gradient-stops))] from-blue-700 via-blue-800 to-gray-900'>
						<div>Searchbar</div>
						<div className='px-6 h-[calc(100vh-72px)] overflow-y-scroll hide-scrollbar flex xl:flex-row flex-col-reverse'>
							<div className='flex-1 h-fit pb-40'>{children}</div>
							<div className='xl:sticky relative top-0 h-fit'>
								<div>TopPlay </div>
							</div>
						</div>
					</div>

					<div className='absolute h-28 bottom-0 left-0 right-0 flex animate-slideup bg-gradient-to-br from-white/10 to-blue-600 backdrop-blur-lg rounded-t-3xl z-10'>
						<div>MusicPlayer </div>
					</div>
				</div>
				<AnalyticsWrapper />
			</body>
		</html>
	);
}
