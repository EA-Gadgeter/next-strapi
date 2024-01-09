import { notFound } from "next/navigation";

import { getBlog } from "../../../services/blogs";

export default async function PostPage({ params }) {
  const { id } = params;

  const blog = await getBlog(id);

  if (!blog) return notFound();

  const date = new Date(blog.publishedAt);

  return (
    <div className="max-w-screen-xl mx-auto">
    <main className="mt-10">

      <div className="mb-4 md:mb-0 w-full max-w-screen-md mx-auto relative" style={{ height: "24em" }}>
        <div className="absolute left-0 bottom-0 w-full h-full z-10"
          style={{ backgroundImage: "linear-gradient(180deg,transparent,rgba(0,0,0,.7))" }}></div>
        <img src={blog.image} className="absolute left-0 top-0 w-full h-full z-0 object-cover" />
        <div className="p-4 absolute bottom-0 left-0 z-20">
          <a href="#"
            className="px-4 py-1 bg-black text-gray-200 inline-flex items-center justify-center mb-2">Deportes</a>
          <h2 className="text-4xl font-semibold text-gray-100 leading-tight">
            {blog.title}
          </h2>
          <div className="flex mt-3">
            <div>
              <p className="font-semibold text-gray-200 text-sm"> Fernanda Ojeda </p>
              <p className="font-semibold text-gray-400 text-xs"> {date.getDate()} del {date.toLocaleString('es-MX', { month: 'long' })} de {date.getUTCFullYear()} </p>
            </div>
          </div>
        </div>
      </div>

      <div className="px-4 lg:px-0 mt-12 text-gray-700 max-w-screen-md mx-auto text-lg leading-relaxed">
        <p className="pb-6">Advantage old had otherwise sincerity dependent additions. It in adapted natural hastily is
          justice. Six draw
          you him full not mean evil. Prepare garrets it expense windows shewing do an. She projection advantages
          resolution son indulgence. Part sure on no long life am at ever. In songs above he as drawn to. Gay was
          outlived peculiar rendered led six.</p>

        <div className="border-l-4 border-gray-500 pl-4 mb-6 italic rounded">
          Sportsman do offending supported extremity breakfast by listening. Decisively advantages nor
          expression
          unpleasing she led met. Estate was tended ten boy nearer seemed. As so seeing latter he should thirty whence.
          Steepest speaking up attended it as. Made neat an on be gave show snug tore.
        </div>

        <p className="pb-6">Exquisite cordially mr happiness of neglected distrusts. Boisterous impossible unaffected he me
          everything.
          Is fine loud deal an rent open give. Find upon and sent spot song son eyes. Do endeavor he differed carriage
          is learning my graceful. Feel plan know is he like on pure. See burst found sir met think hopes are marry
          among. Delightful remarkably new assistance saw literature mrs favourable.</p>

        <h2 className="text-2xl text-gray-800 font-semibold mb-4 mt-4">Uneasy barton seeing remark happen his has</h2>

        

        <p className="pb-6">Detract yet delight written farther his general. If in so bred at dare rose lose good. Feel and
          make two real
          miss use easy. Celebrated delightful an especially increasing instrument am. Indulgence contrasted sufficient
          to unpleasant in in insensible favourable. Latter remark hunted enough vulgar say man. Sitting hearted on it
          without me.</p>

      </div>
    </main>

    <footer className="border-t mt-32 pt-12 pb-32 px-4 lg:px-0">
      <div className="flex">

        <div className="w-full md:w-1/3 lg:w-1/4">
          <h6 className="font-semibold text-gray-700 mb-4">Company</h6>
          <ul>
            <li> <a href="" className="block text-gray-600 py-2">Team</a> </li>
            <li> <a href="" className="block text-gray-600 py-2">About us</a> </li>
            <li> <a href="" className="block text-gray-600 py-2">Press</a> </li>
          </ul>
        </div>

        <div className="w-full md:w-1/3 lg:w-1/4">
          <h6 className="font-semibold text-gray-700 mb-4">Content</h6>
          <ul>
            <li> <a href="" className="block text-gray-600 py-2">Blog</a> </li>
            <li> <a href="" className="block text-gray-600 py-2">Privacy Policy</a> </li>
            <li> <a href="" className="block text-gray-600 py-2">Terms & Conditions</a> </li>
            <li> <a href="" className="block text-gray-600 py-2">Documentation</a> </li>
          </ul>
        </div>

      </div>
    </footer>
  </div>
  )
}