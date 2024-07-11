import React from 'react'
import Link from 'next/link'
import './post.css'

const Post = () => {
    return (
        <article className='Post'>
            <Link href='./'>
                <div class="postContainer grid">
                    <div className='postBanner flex justify-center align-center'>
                        <img className='postImg' src='https://quinncreative.wordpress.com/wp-content/uploads/2014/07/lorem_ipsum_by_neosh.jpg' />
                    </div>
                    <div className='postContent grid'>
                        <div className='postInfo'>
                            <h4 className='postTitle'>Lorem Ipsum</h4>
                            <p className='postDescription'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam consequat erat quis quam volutpat scelerisque. Nulla in gravida diam. Nulla efficitur ligula libero. Maecenas lobortis, diam in consectetur pretium, augue mauris volutpat nulla, sed mattis quam nibh sit amet lacus. Phasellus placerat est non purus viverra tincidunt. Quisque erat libero, congue in mauris in, fringilla feugiat erat. Morbi auctor egestas ex et ultricies. Donec vel ante eu eros ornare sagittis et eget nulla. Maecenas volutpat vel lacus nec efficitur. Sed pellentesque laoreet purus vitae dictum. Duis ac mollis lectus. Cras bibendum vehicula felis vel efficitur.</p>
                            <div className='postTags'>
                                <div className='postTag'>Lorem</div>
                                <div className='postTag'>Lorem</div>
                                <div className='postTag'>Lorem</div>
                                <div className='postTag'>Lorem</div>
                                <div className='postTag'>Lorem</div>
                                <div className='postTag'>Lorem</div>
                                <div className='postTag'>Lorem</div>
                                <div className='postTag'>Lorem</div>
                                <div className='postTag'>Lorem</div>
                                <div className='postTag'>Lorem</div>
                                <div className='postTag'>Lorem</div>
                                <div className='postTag'>Lorem</div>
                            </div>
                        </div>
                        
                        <div className='postData flex'>
                            <div className='postTimePosted'>1 h ago</div>
                            <div className='postTimeRead'>4 min of reading</div>
                        </div>
                    </div>
                </div>
            </Link>
        </article>
    )
}

export default Post