import BlogsComp from "../components/Blogs/BlogsComp";
import TagManager from 'react-gtm-module';


const tagManagerArgs = {
  gtmId: 'GTM-59GXFW3R'
};

TagManager.initialize(tagManagerArgs);

const Blogs = () => {
  return (
    <div className="min-h-screen pt-14 bg-gray-100">
      <BlogsComp />
    </div>
  );
};

export default Blogs;
