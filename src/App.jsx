import { lazy, Suspense } from "react";
import { Routes, Route } from "react-router-dom";

const Home = lazy(() => import("./pages/Home"));
const Dashboard = lazy(() => import("./pages/Dashboard"));
const GenerateImages = lazy(() => import("./pages/GenerateImages"));
const RemoveBackground = lazy(() => import("./pages/RemoveBackground"));
const RemoveObject = lazy(() => import("./pages/RemoveObject"));
const WriteArticle = lazy(() => import("./pages/WriteArticle"));
const BlogTitles = lazy(() => import("./pages/BlogTitles"));
const ReviewResume = lazy(() => import("./pages/ReviewResume"));
const Layout = lazy(() => import("./pages/Layout"));
const Community = lazy(() => import("./pages/Community"));

const App = () => {
  return (
    <>
      <Suspense
        fallback={
          <div className="h-screen flex justify-center items-center text-gray-600">
            Loading...
          </div>
        }
      >
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/ai" element={<Layout />}>
            <Route index element={<Dashboard />} />
            <Route path="generate-images" element={<GenerateImages />} />
            <Route path="remove-background" element={<RemoveBackground />} />
            <Route path="remove-object" element={<RemoveObject />} />
            <Route path="write-article" element={<WriteArticle />} />
            <Route path="blog-titles" element={<BlogTitles />} />
            <Route path="review-resume" element={<ReviewResume />} />
            <Route path="community" element={<Community />} />
          </Route>
          <Route
            path="*"
            element={
              <div className="h-screen flex justify-center items-center text-gray-600">
                404 Not Found
              </div>
            }
          />
        </Routes>
      </Suspense>
    </>
  );
};

export default App;
