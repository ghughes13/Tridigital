import React from "react";
import Layout from "../components/layout/Layout";
import "../styles/page-blog-posts.scss";
import { graphql } from "gatsby";
import ResourceCard from "../components/resource_card/ResourceCard";

export default function BlogPost(qlData) {
  let blogID = qlData.pathContext.id;
  let data = qlData.data;
  let currentBlog;

  for (let i = 0; i < data.allWordpressPost.edges.length; i++) {
    if (data.allWordpressPost.edges[i].node.id === blogID) {
      currentBlog = data.allWordpressPost.edges[i];
    }
  }

  const post = currentBlog.node;
  const date = new Date(post.date).toString().split(" ");
  const formatedDate = date[1] + " " + date[2] + ", " + date[3];
  const category = post.categories[0].name.split(" ").join("-");

  const copyURL = () => {
    document.querySelector(".siteUrl").select();
    document.execCommand("copy");
  };

  return (
    <Layout navTheme="light">
      <div className="single-post">
        <div
          className="feat-img"
          style={{
            backgroundImage: `url(${post.featured_media.localFile.url})`,
          }}
        ></div>
        <div className="main-content">
          <div className="socials">
            <a href="www.facebook.com">
              <img
                src={require("../images/svgs/resources/facebook.svg")}
                alt="facebook"
              />
            </a>
            <a href="www.twitter.com">
              <img
                src={require("../images/svgs/resources/twitter.svg")}
                alt="twitter"
              />
            </a>
            <a href="www.linkedin.com">
              <img
                src={require("../images/svgs/resources/linkedin.svg")}
                alt="linkedin"
              />
            </a>
            <button className="copyURLBtn" onClick={copyURL}>
              <img
                src={require("../images/svgs/resources/link.svg")}
                alt="link"
              />
            </button>
          </div>
          <div className="meta">
            <div className="img">
              <img src={post.author.avatar_urls.wordpress_24} alt="featured" />
            </div>
            <div className="meta-infos">
              <p>
                by <span className="name">{post.author.name}</span> -{" "}
                {formatedDate}
              </p>
              <p className={category.toLowerCase()}></p>
            </div>
          </div>
          <h1>{post.title}</h1>
          <div
            className="post-content"
            dangerouslySetInnerHTML={{ __html: post.content }}
          />
          <div className="wait-theres-more">
            <h2 className="centered-text theres-more-text">
              But wait... there’s more! <br /> Click below to keep learning!
            </h2>
            <div className="resource-cards">
              <ResourceCard
                colLength={"two-thirds"}
                post={data.allWordpressPost.edges[0]}
              />
              <ResourceCard
                colLength={"one-third"}
                post={data.allWordpressPost.edges[1]}
              />
            </div>
          </div>
        </div>
      </div>
      <input
        className="vis-none siteUrl"
        type="text"
        value="https://www.tridigitalmarketing.com/"
      />
    </Layout>
  );
}

export const query = graphql`
  {
    allWordpressPost {
      edges {
        node {
          id
          title
          date
          excerpt
          content
          slug
          featured_media {
            localFile {
              url
            }
          }
          categories {
            name
          }
          author {
            name
            avatar_urls {
              wordpress_96
            }
          }
        }
      }
    }
  }
`;
