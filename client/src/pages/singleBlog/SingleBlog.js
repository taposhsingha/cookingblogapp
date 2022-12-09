import React from "react";
import { Link } from "react-router-dom";
import Navbar from "../../components/navbar/Navbar";

function SingleBlog() {
  return (
    <div>
      <Navbar />
      <div className="flex justify-center">
        <div className="w-11/12 h-[800px]  space-y-3">
          <h1 className="mt-5 text-[28px] font-bold">Blog Title</h1>
          <div className="w-10/12 rounded-md">
            <img
              className="w-full h-[400px] object-cover rounded-md"
              alt="img"
            />
          </div>
          <div className="ml-5 flex space-x-3">
            <img
              className="rounded-full w-[40px] h-[40px] border-b-2"
              alt="img"
            />
            <div>
              <h1>User name</h1>
              <h2>posted 2 days ago</h2>
            </div>
          </div>
          <div className="ml-5 flex space-x-16">
            <Link
              className="bt-style bg-purple-600 hover:bg-purple-300"
              to={`/write?edit=2`}
            >
              Edit
            </Link>
            <Link
              className="bt-style bg-orange-600 hover:bg-orange-300"
              to={`/write?edit=2`}
            >
              Delete
            </Link>
          </div>
          <div className="w-10/12 ml-5 mt-3">
            <p className="leading-loose text-justify">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua.
              Facilisis sed odio morbi quis. Et malesuada fames ac turpis.
              Scelerisque eleifend donec pretium vulputate. Aliquam eleifend mi
              in nulla posuere sollicitudin aliquam. Consectetur libero id
              faucibus nisl tincidunt eget nullam non nisi. Non tellus orci ac
              auctor augue mauris augue neque. Egestas congue quisque egestas
              diam in. Dui vivamus arcu felis bibendum ut tristique et.
              Malesuada nunc vel risus commodo viverra maecenas accumsan lacus
              vel. Convallis tellus id interdum velit laoreet id. Malesuada
              proin libero nunc consequat interdum varius sit amet mattis.
              Egestas pretium aenean pharetra magna ac placerat. Phasellus
              vestibulum lorem sed risus. Consectetur adipiscing elit
              pellentesque habitant morbi. Nulla facilisi etiam dignissim diam.
              Ipsum suspendisse ultrices gravida dictum fusce ut placerat. Amet
              cursus sit amet dictum. Enim praesent elementum facilisis leo vel
              fringilla est ullamcorper eget. Ac felis donec et odio
              pellentesque diam volutpat commodo sed. Ut tellus elementum
              sagittis vitae et leo duis ut. Quis imperdiet massa tincidunt nunc
              pulvinar sapien et ligula ullamcorper. Sed velit dignissim sodales
              ut eu sem integer. Ultricies integer quis auctor elit sed
              vulputate mi sit. Nunc id cursus metus aliquam eleifend mi in
              nulla. Amet justo donec enim diam vulputate ut pharetra sit. Eget
              nunc scelerisque viverra mauris in aliquam sem fringilla. Ac
              placerat vestibulum lectus mauris ultrices eros. Volutpat ac
              tincidunt vitae semper quis lectus nulla. Elementum integer enim
              neque volutpat ac tincidunt vitae. Nec dui nunc mattis enim ut
              tellus elementum. Ac placerat vestibulum lectus mauris ultrices.
              Purus in massa tempor nec feugiat. Viverra maecenas accumsan lacus
              vel facilisis. Vulputate ut pharetra sit amet aliquam id diam
              maecenas ultricies. Senectus et netus et malesuada fames ac. Et
              malesuada fames ac turpis egestas. Sit amet aliquam id diam
              maecenas. Nisi vitae suscipit tellus mauris. Nibh venenatis cras
              sed felis eget velit aliquet sagittis. Sit amet nisl purus in
              mollis nunc sed id semper. Ipsum nunc aliquet bibendum enim
              facilisis gravida neque convallis a. Mus mauris vitae ultricies
              leo integer malesuada nunc. Ac feugiat sed lectus vestibulum
              mattis. Aliquam eleifend mi in nulla posuere sollicitudin aliquam.
              Scelerisque viverra mauris in aliquam sem fringilla ut morbi. Et
              egestas quis ipsum suspendisse ultrices. Luctus accumsan tortor
              posuere ac ut consequat. Tempor id eu nisl nunc mi ipsum faucibus
              vitae aliquet. Aliquet enim tortor at auctor urna nunc id cursus
              metus. Vulputate enim nulla aliquet porttitor lacus. Tellus at
              urna condimentum mattis pellentesque id nibh tortor id. Massa
              tincidunt nunc pulvinar sapien et ligula ullamcorper malesuada.
              Facilisis sed odio morbi quis commodo odio aenean sed adipiscing.
              Neque sodales ut etiam sit amet nisl purus. Montes nascetur
              ridiculus mus mauris vitae. Cursus metus aliquam eleifend mi in.
              Convallis aenean et tortor at risus viverra. Sed odio morbi quis
              commodo odio aenean sed. Dui id ornare arcu odio ut sem. Feugiat
              in fermentum posuere urna. Parturient montes nascetur ridiculus
              mus mauris. Ultrices mi tempus imperdiet nulla malesuada
              pellentesque. Egestas maecenas pharetra convallis posuere morbi
              leo. Hendrerit dolor magna eget est lorem ipsum dolor sit amet.
              Amet risus nullam eget felis eget nunc lobortis. Tincidunt eget
              nullam non nisi est. Pretium quam vulputate dignissim suspendisse
              in est ante in. Nec sagittis aliquam malesuada bibendum arcu.
              Viverra orci sagittis eu volutpat odio facilisis mauris sit amet.
              Faucibus et molestie ac feugiat sed. Vel risus commodo viverra
              maecenas accumsan lacus vel facilisis. Nulla aliquet porttitor
              lacus luctus. Tristique magna sit amet purus gravida quis blandit
              turpis cursus. Sed enim ut sem viverra aliquet. Justo nec ultrices
              dui sapien eget mi. Nunc sed augue lacus viverra vitae congue. Id
              volutpat lacus laoreet non curabitur gravida arcu ac tortor.
              Dapibus ultrices in iaculis nunc sed augue lacus. Scelerisque
              fermentum dui faucibus in ornare. Nec sagittis aliquam malesuada
              bibendum.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default SingleBlog;
