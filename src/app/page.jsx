import Link from "next/link";

import { getBlogs } from "../services/blogs";

export default async function Home() {
  const blogs = await getBlogs();

  return (
    <main className="bg-white dark:bg-gray-900 min-h-screen">
      <div className="container px-6 py-10 mx-auto">
        <h1 className="text-3xl font-semibold text-gray-800 capitalize lg:text-4xl dark:text-white">Nuestros blogs</h1>

        <div className="grid grid-cols-1 gap-8 mt-8 md:mt-16 md:grid-cols-2">
          {
            blogs.map(blog => {
              const date = new Date(blog.publishedAt);
              const publishedAt = `${date.getDate()}/${date.getMonth() + 1}/${date.getFullYear()}`

              return (
                <div className="lg:flex" key={blog.id}>
                  <img className="object-cover w-full h-56 rounded-lg lg:w-64" src={blog.image} alt="" />

                  <div className="flex flex-col justify-between py-6 lg:mx-6">
                    <Link href={`/posts/${blog.id}`} className="text-xl font-semibold text-gray-800 hover:underline dark:text-white ">
                      {blog.title}
                    </Link>

                    <span className="text-sm text-gray-500 dark:text-gray-300">Publicado en: {publishedAt}</span>
                  </div>
                </div>
              );
            })
          }
        </div>
      </div>
    </main>
  )
}
