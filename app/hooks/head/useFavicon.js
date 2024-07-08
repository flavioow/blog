import { useEffect } from 'react'

const useFavicon = (href) => {
	useEffect(() => {
		let link = document.querySelector('link[rel*="icon"]') || document.createElement('link')

		link.type = 'image/svg+xml'
		link.rel = 'icon'
		link.href = href

		document.head.appendChild(link)
	}, [href])
}

export default useFavicon