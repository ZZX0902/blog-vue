import addBlog from './components/addBlog'
import blogheader from './components/blogheader'
import showblog from './components/showblog'

export const routes =[
  {path:'/addBlog',name:'addBloglink',component:addBlog},
  {path:'/blogheader',name:'blogheaderlink',component:blogheader},
  {path:'/',name:'showbloglink',component:showblog},


]
