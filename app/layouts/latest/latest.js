import React from 'react'
import Link from 'next/link'
import './latest.css'

const Latest = () => {
	return (
		<div className='Latest'>
			<Link href='./'  className='latestContainer grid'>
				<div className='latestBanner flex justify-center align-center'>
					<img className='latestImg' src='https://cdn-images-1.medium.com/max/250/1*Pym1Q3ZATveDLVE_PQwqwQ@2x.jpeg' />
				</div>
				<div className='latestContent flex justify-between'>
					<div>
						<h3 className='latestTitle'>Lorem Ipsum</h3>
						<p className='latestDescription'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam consequat erat quis quam volutpat scelerisque. Nulla in gravida diam. Nulla efficitur ligula libero. Maecenas lobortis, diam in consectetur pretium, augue mauris volutpat nulla, sed mattis quam nibh sit amet lacus. Phasellus placerat est non purus viverra tincidunt. Quisque erat libero, congue in mauris in, fringilla feugiat erat. Morbi auctor egestas ex et ultricies. Donec vel ante eu eros ornare sagittis et eget nulla. Maecenas volutpat vel lacus nec efficitur. Sed pellentesque laoreet purus vitae dictum. Duis ac mollis lectus. Cras bibendum vehicula felis vel efficitur.</p>
						<div className='latestTags'>
							<div className='latestTag'>Lorem</div>
							<div className='latestTag'>Lorem</div>
							<div className='latestTag'>Lorem</div>
							<div className='latestTag'>Lorem</div>
							<div className='latestTag'>Lorem</div>
							<div className='latestTag'>Lorem</div>
							<div className='latestTag'>Lorem</div>
							<div className='latestTag'>Lorem</div>
							<div className='latestTag'>Lorem</div>
							<div className='latestTag'>Lorem</div>
							<div className='latestTag'>Lorem</div>
							<div className='latestTag'>Lorem</div>
						</div>
					</div>
					<div>
						<div className='latestData'>
							<p className='latestTimePosted'>Há 4 min</p>
							<p className='latestTimeRead'>3 min de leitura</p>
						</div>
					</div>
				</div>
			</Link>
		</div>
	)
}

export default Latest