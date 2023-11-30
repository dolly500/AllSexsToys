import React from "react";
import { useSelector } from "react-redux";
import Footer from "../components/Layout/Footer";
import Header from "../components/Layout/Header";
import Loader from "../components/Layout/Loader";
import PostCard from "../components/Posts/PostCard";
import styles from "../styles/styles";


const PostsPage = () => {
  const { allPosts, isLoading } = useSelector((state) => state.posts);
  return (
    <>
      {isLoading ? (
        <Loader />
      ) : (
        <div>
          <Header activeHeading={4} />
          <div className={`${styles.section} my-8`}>
            <div className={`${styles.heading}`}>
              <h1>Blog Posts</h1>
            </div>

            <PostCard active={true} data={allPosts && allPosts[0]} />
          </div>

          <Footer />
        </div>
      )}
    </>
  );
};

export default PostsPage;
