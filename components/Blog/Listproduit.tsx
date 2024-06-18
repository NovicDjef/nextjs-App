import { Blog } from "@/types/blog";
import Image from "next/image";
import Link from "next/link";

const Listproduit = ({ blog }: { blog: Blog }) => {
  const { title, image, paragraph, author, tags, publishDate } = blog;
  return (
    <>
      <div
        className="wow fadeInUp hover:shadow-two dark:hover:shadow-gray-dark group relative overflow-hidden rounded-sm bg-white shadow-one duration-300 dark:bg-dark"
        data-wow-delay=".1s"
      >
        <Link
          href="/blog-details"
          className="relative block aspect-[37/22] w-full"
        >
          {/* <span className="absolute right-6 top-6 z-20 inline-flex items-center justify-center rounded-full bg-primary px-4 py-2 text-sm font-semibold capitalize text-white">
            {tags[0]}
          </span> */}
          <Image src={image} alt="image" fill />
        </Link>
        <div className="md:px-6 md:py-8 lg:p-8 xl:px-5">
          <h3>
            <Link
              href="/blog-details"
              className=" block text-xl font-bold text-black hover:text-primary dark:text-white dark:hover:text-primary sm:text-sm"
            >
              {title}
            </Link>
          </h3>
      
        </div>
      </div>
    </>
  );
};

export default Listproduit;
