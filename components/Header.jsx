import styles from "../styles/Header.module.css"
import Link from "next/link"
import { cn } from "tailwind-cn"

export default function Header() {
	return (
		<>
			<div
				className={cn(
					styles.headerWrapper,
					"flex items-center justify-center gap-4"
				)}
			>
				<div className={styles.header}>
					<Link href="/" passHref className="flex items-center gap-2">
						<svg
							className={styles.logo}
							width="28"
							height="28"
							x="0.0"
							y="0.0"
							viewBox="0 0 44 44"
						>
							<path d="M43.01 35.34c.15.1.24.26.23.43v5.59c0 .2-.12.38-.3.47-1.74.82-3.57 1.23-5.4 1.23-1.82 0-3.64-.4-5.37-1.21-.02 0-.03 0-.04-.01-3.19-1.51-6.72-1.51-9.92 0-3.47 1.63-7.3 1.64-10.78.01 0 0-.01-.01-.02-.01-3.19-1.51-6.72-1.51-9.92 0-.16.08-.35.06-.5-.03a.524.524 0 0 1-.24-.44v-5.59c0-.2.12-.38.3-.47 3.48-1.63 7.31-1.64 10.79-.01 0 0 .01.01.02.01 3.19 1.5 6.72 1.51 9.92 0 3.47-1.63 7.3-1.63 10.77-.01.02 0 .03 0 .04.01 3.19 1.51 6.72 1.51 9.92 0 .16-.08.35-.06.5.03zm0-33.53c.15.1.24.26.23.44v5.58c0 .2-.12.38-.3.47-1.74.82-3.57 1.23-5.4 1.23-1.82 0-3.64-.4-5.37-1.21-.02-.01-.03-.01-.04-.02-3.19-1.5-6.72-1.5-9.92 0-3.47 1.63-7.3 1.64-10.78.01 0 0-.01-.01-.02-.01-3.19-1.5-6.72-1.51-9.92 0-.16.08-.35.06-.5-.03a.524.524 0 0 1-.24-.44V2.24c0-.2.12-.38.3-.47C4.53.14 8.36.13 11.84 1.76c0 0 .01.01.02.01 3.19 1.5 6.72 1.5 9.92 0 3.47-1.63 7.3-1.63 10.77-.01.02.01.03.01.04.02 3.19 1.51 6.72 1.5 9.92 0 .16-.08.35-.07.5.03zm0 11.18c.15.1.24.26.23.44v5.59c0 .2-.12.38-.3.47-1.74.82-3.57 1.23-5.4 1.23-1.82 0-3.64-.4-5.37-1.21-.02-.01-.03-.01-.04-.02-3.19-1.51-6.72-1.51-9.92 0-3.47 1.63-7.3 1.64-10.78.01 0 0-.01-.01-.02-.01-3.19-1.5-6.72-1.5-9.92 0-.16.08-.35.06-.5-.03a.524.524 0 0 1-.24-.44v-5.59c0-.2.12-.38.3-.47 3.48-1.63 7.31-1.64 10.79-.01 0 0 .01.01.02.01 3.19 1.5 6.72 1.5 9.92 0 3.47-1.64 7.3-1.64 10.77-.02.02.01.03.01.04.02 3.19 1.51 6.72 1.5 9.92 0 .16-.08.35-.07.5.03zm0 11.18c.15.09.24.26.23.43v5.6c0 .2-.12.38-.3.47-1.74.82-3.57 1.23-5.4 1.23-1.82 0-3.64-.4-5.37-1.21-.02-.01-.03-.01-.04-.02-3.19-1.5-6.72-1.51-9.92 0-3.47 1.63-7.3 1.64-10.78.01 0 0-.01-.01-.02-.01-3.2-1.51-6.72-1.51-9.92 0-.16.08-.35.06-.5-.03a.524.524 0 0 1-.24-.44v-5.59c0-.2.12-.38.3-.47 3.48-1.63 7.31-1.64 10.79-.01 0 0 .01.01.02.01 3.19 1.5 6.72 1.51 9.92 0 3.47-1.63 7.3-1.63 10.77-.01.02 0 .03 0 .04.01 3.19 1.5 6.72 1.51 9.92 0 .16-.08.35-.07.5.03z"></path>
						</svg>
						<h2 className="text-white font-bold">Nerifood</h2>
					</Link>
					{/*<ul>
					 <Link href="/diet-menus" passHref>
						<li>Diet menus</li>
					</Link>
					<li>Countries</li>
					<li>Vegan</li>
					<li>Design your recipe</li> 
  </ul>*/}
				</div>
			</div>
			<div className="w-full border-regular-blue border-y-2 grid grid-cols-[auto_auto] gap-2 justify-center items-center text-regular-blue px-4 py-4">
				<p>Do you want to improve your english conversation skills?</p>
				<span>
					<a
						href="https://www.englishtalks.one"
						target="_blank"
						className="flex justify-center items-center gap-2 rounded-full text-yellow-300 py-3 px-5 hover:text-yellow-100 transition w-fit border-2 border-yellow-300 hover:border-yellow-100 bg-gradient-to-br from-pink-700 to-pink-900 font-bold"
					>
						Start now
					</a>
				</span>
			</div>
		</>
	)
}
