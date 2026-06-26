import React from 'react'

export default function PostDetails({post}) {
    

  return (
    <div>
        <div className='border border-1 p-2 w-60 h-72'>
            <div className='flex items-center gap-2 border-b border-gray-300 pb-1' ><img src={post.authorAvatar} alt="" className='h-5 rounded-full' /> <span className='text-sm font-semibold tracking-tighter'>{post.author}</span><span>{post.createdAt.slice(5,10)}</span>
            </div>
            <div>
            </div>
            <div className='text-center'>
              <div className='text-sm overflow-hidden text-blue-600'>{post.title}</div>
              <div className='text-gray-500'>{post.content}</div>
            </div>
            <div>
             <div className='text-sm'>
                👍🏻{post.likes} || 💬{post.comments}  || 🏷️{post.category}
            </div>
            <div>
                {post.tags.map((e)=>(<span className='text-sm text-red-600'>#{e} </span>))}
            </div>
            </div>
        </div>
    </div>
  )
}
