import React from "react";
import Image from "../components/Image";
import { Link } from "react-router-dom";
import PostMenuAction from "../components/PostMenuAction";
import Search from "../components/Search";
import Comments from "../components/Comments";

const SinglePostPage = () => {
  return (
    <div className="felx flex-col gap-8 my-4">
      {/* details */}
      <div className="flex gap-8">
        <div className="lg:w-3/5 flex flex-col gap-8">
          <h1 className="text-xl md:text-3xl xl:text-4xl 2xl:text-5xl font-semibold">
            {" "}
            Lorem ipsum dolor sit, amet consectetur adipisicing elit.
          </h1>

          <div className="flex items-center gap-2 text-gray-100 text-sm">
            <span>Written By</span>
            <Link className="text-blue-800">Jhon Doe</Link>
            <span>on</span>
            <Link className="text-blue-800">Web Design</Link>
            <span>2 days ago</span>
          </div>
          <p className="text-gray-500 font-medium">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas sit
            magni, provident non soluta cupiditate ipsam voluptate maiores eum
            dolores, ad porro libero ex fuga perspiciatis neque quo nihil!
            Magnam!
          </p>
        </div>

        <div className="hidden lg:block w-2/5">
          <Image src="postImg.jpeg" w="600" className="rounded-2xl" />
        </div>
      </div>
      {/* contetn */}
      <div className="flex flex-col md:flex-row gap-8">
        {/* text */}
        <div className="lg:text-lg m-5 flex flex-col gap-6 text-justify">
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Unde maxime
            dolorum dicta magni et eius consequatur repellat, eaque ab excepturi
            earum nam nobis aut necessitatibus quo, voluptas doloremque
            laudantium quam? Fugiat non illo amet quasi facilis impedit sed et
            nemo. Lorem ipsum dolor sit amet consectetur adipisicing elit. Ut
            modi eum, aspernatur quasi odit reiciendis iusto, quibusdam fugiat
            distinctio excepturi corporis hic voluptatum dolore eaque. Facere
            alias laboriosam aliquam eos qui repellendus expedita, ipsum beatae
            molestiae? Ex praesentium ab dignissimos quod nulla sint eaque
            quaerat dicta, culpa ipsam, illum quisquam. Lorem, ipsum dolor sit
            amet consectetur adipisicing elit. Ad, provident. Laborum
            necessitatibus nisi perspiciatis cumque dolores ipsum quo ipsa
            praesentium, debitis, quas quisquam dolorem fugit consequuntur illo
            quam natus facilis dolorum rem earum! Eaque quidem voluptatibus
            animi culpa velit sunt cum quam. Voluptate tempora quod
            exercitationem minus maiores inventore quam dolorem atque? Nesciunt,
            labore laboriosam maxime sint natus molestiae sit.
          </p>

          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Unde maxime
            dolorum dicta magni et eius consequatur repellat, eaque ab excepturi
            earum nam nobis aut necessitatibus quo, voluptas doloremque
            laudantium quam? Fugiat non illo amet quasi facilis impedit sed et
            nemo. Lorem ipsum dolor sit amet consectetur adipisicing elit. Ut
            modi eum, aspernatur quasi odit reiciendis iusto, quibusdam fugiat
            distinctio excepturi corporis hic voluptatum dolore eaque. Facere
            alias laboriosam aliquam eos qui repellendus expedita, ipsum beatae
            molestiae? Ex praesentium ab dignissimos quod nulla sint eaque
            quaerat dicta, culpa ipsam, illum quisquam. Lorem, ipsum dolor sit
            amet consectetur adipisicing elit. Ad, provident. Laborum
            necessitatibus nisi perspiciatis cumque dolores ipsum quo ipsa
            praesentium, debitis, quas quisquam dolorem fugit consequuntur illo
            quam natus facilis dolorum rem earum! Eaque quidem voluptatibus
            animi culpa velit sunt cum quam. Voluptate tempora quod
            exercitationem minus maiores inventore quam dolorem atque? Nesciunt,
            labore laboriosam maxime sint natus molestiae sit.
          </p>
          <p>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Aperiam
            assumenda incidunt totam dolorum dicta animi eaque quis nisi ducimus
            inventore? Culpa dolor fugit sequi? Neque quia reprehenderit
            provident sed, tempora officiis quam labore illo, cupiditate vero
            corporis explicabo consequatur! Vel incidunt illo labore ab iure
            architecto aut. Ullam sapiente esse aperiam quia expedita quaerat
            aliquam magnam omnis reprehenderit optio suscipit voluptatibus
            architecto, veritatis vero odio provident? Vitae architecto a culpa?
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Voluptates
            aliquid eveniet ea. Vero, minus, voluptatum quaerat quia, tempora
            natus explicabo ipsam hic voluptas atque sint nostrum mollitia a
            provident ipsa praesentium odio modi placeat animi reprehenderit
            molestias accusantium officiis qui dolore. Laudantium id adipisci
            velit beatae repellendus illo. Incidunt eveniet a natus sequi
          </p>
          <p>
            temporibus accusantium mollitia iusto inventore eligendi! Expedita
            cupiditate enim rem quam esse cumque reiciendis unde fuga repellat.
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Eius
            reiciendis omnis quod vitae et quam doloremque voluptates id
            pariatur voluptate voluptatem eveniet eligendi, sapiente accusantium
            officia. Vitae sapiente distinctio molestias. Tenetur quidem atque
            dignissimos molestias saepe mollitia, corporis repudiandae
            consectetur sunt commodi enim aliquid reiciendis omnis, autem
            asperiores deleniti natus at possimus officiis! Sed totam omnis
            vitae, tenetur dolore earum repellendus quam doloribus fuga harum
            voluptate voluptatibus suscipit cumque inventore. Lorem ipsum dolor
            sit amet consectetur, adipisicing elit. Commodi, velit, ullam quas
            aut vero atque neque cumque unde corporis, recusandae alias quaerat
          </p>

          <p>
            {" "}
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Magni
            asperiores distinctio ipsa architecto voluptatum corrupti autem
            libero illo, velit facere error similique suscipit porro dignissimos
            doloribus excepturi minus? At corrupti blanditiis, aliquam esse
            assumenda quasi minus temporibus eaque explicabo ut? Id, eos!
            Voluptate quod quo corrupti hic, possimus cum nam! Lorem, ipsum
            dolor sit amet consectetur adipisicing elit. Earum quisquam, qui ab
            odio eligendi adipisci commodi laborum veniam nemo voluptatem, iure
            inventore perspiciatis alias. Voluptate recusandae qui quaerat quam
            voluptatem nam placeat itaque corrupti consequuntur eligendi dolor
            ipsam fuga illum est omnis, laudantium rem officia explicabo soluta
            expedita non eos.{" "}
          </p>
        </div>
        {/* Menu */}
        <div className="px-4 h-max sticky top-8">
          <h1 className=" mb-4 text-sm font-medium">Author</h1>
          <div className="flex flex-col gap-4">
            <div className="flex items-center gap-8">
              <Image
                src="userImg.jpeg"
                className="w-12 h-12 object-cover"
                w="48"
                h="48"
              />
              <Link className="text-blue-800">Jhon Doe</Link>
            </div>
            <p className="text-sm text-gray-500">
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Sint,
              id?
            </p>
            <div className="flex gap-2">
              <Link>
                <Image src="facebook.svg"></Image>
              </Link>
              <Link>
                <Image src="instagram.svg"></Image>
              </Link>
            </div>
          </div>
          <PostMenuAction />
          <h1 className="mt-8 mb-4 text-sm font-medium">Categories</h1>
          <div className="flex flex-col gap-2 text-sm">
            <Link className="underline">All</Link>
            <Link className="underline" to="/">
              Web Design
            </Link>
            <Link className="underline" to="/">
              Development
            </Link>
            <Link className="underline" to="/">
              Database
            </Link>
            <Link className="underline" to="/">
              Search Engine
            </Link>
            <Link className="underline" to="/">
              Marketing
            </Link>
          </div>
          <h1 className="mt-8 mb-4 text-sm font-medium">Search </h1>
          <Search />
        </div>
      </div>
      <Comments />
    </div>
  );
};

export default SinglePostPage;
