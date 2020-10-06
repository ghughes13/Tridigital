import React, { useEffect } from "react";
import Layout from "../components/layout/Layout";
import SEO from "../components/seo/Seo";
import { Container, Row, Col } from "react-bootstrap";
import { Waypoint } from "react-waypoint";
import "../styles/page-resources.scss";
import { graphql } from "gatsby";
import ResourceCard from "../components/resource_card/ResourceCard";

const Resources = ({ data }) => {
  const post = data.allWordpressPost.edges;
  let moreBlogs = [];

  useEffect(() => {
    for (let i = 0; i < post.length - 22; i++) {
      moreBlogs.push();
    }

    document.querySelectorAll(".cat-btns a").forEach(btn =>
      btn.addEventListener("click", e => {
        document.querySelector("#search-blogs").value = "";
        let id;
        if (e.path[0].tagName === "A") {
          id = e.path[0].id;
        } else if (e.path[1].tagName === "A") {
          id = e.path[1].id;
        } else if (e.path[2].tagName === "A") {
          id = e.path[2].id;
        }
        document.querySelector(".load-more-container").style.display = "flex";
        document
          .querySelectorAll(".load-more-container .card")
          .forEach(card => {
            card.style.display = "none";
            if (card.classList.contains(id)) {
              card.style.display = "block";
            }
          });
        hideInitialBlogs();
      })
    );
  });

  const hideInitialBlogs = () => {
    document
      .querySelectorAll(".initial-blogs")
      .forEach(container => (container.style.display = "none"));
  };

  const showMoreCards = e => {
    e.preventDefault();
    document.querySelector(".load-more-container").style.display = "flex";
    document.querySelector(".load-more").style.display = "none";
  };

  const searchBlogs = () => {
    let val = document.querySelector("#search-blogs").value;
    hideInitialBlogs();
    document.querySelector(".load-more-container").style.display = "flex";
    document.querySelectorAll(".load-more-container .card").forEach(card => {
      card.style.display = "none";
      if (card.children[1].innerText.includes(val)) {
        card.style.display = "block";
      }
    });
  };

  return (
    <Layout navTheme="light">
      <SEO title="Legendary Sales - Honey CRM" />
      <div className="resources-page reach">
        <Container className="purple-swish container-1">
          <Waypoint
            onEnter={() => {
              document
                .querySelectorAll(".price-card")
                .forEach(card => card.classList.add("animate"));
            }}
          />
          <Row>
            <Col className="white-text">
              <h1 className="white-text">The Channel Content Library</h1>
              <p className="white-text hero-subtext">
                Tips & tricks to up your sales & marketing game
              </p>
            </Col>
          </Row>
          <Row>
            <ResourceCard colLength={"full-width-card"} post={post[0]} />
          </Row>
        </Container>
        <Container className="resource-content container-2">
          <Row className="input-els">
            <div className="flex justify-space-between flex-dir-row">
              <div className="select">
                <select>
                  <option>All Categories</option>
                </select>
              </div>
              <label className="hide-me" htmlFor="search-blogs">
                search blogs
              </label>
              <input
                type="text"
                id="search-blogs"
                name="search-blogs"
                placeholder="Search"
                onChange={() => {
                  searchBlogs();
                }}
              />
            </div>
          </Row>
          <Row className="cat-btns">
            <div className="flex-justify-evenly flex-dir-row cat-btns">
              <button
                className="btn orange margin-left-50 category updates"
                id="updates"
              >
                <span className="btn__mask"></span>
                <span className="btn__text">
                  <img
                    src={require("../images/svgs/resources/star.svg")}
                    alt="star"
                  />
                  Updates
                </span>
              </button>

              <button
                className="btn blue margin-left-50 category blogs"
                id="blog"
              >
                <span className="btn__mask"></span>
                <span className="btn__text">
                  <img
                    src={require("../images/svgs/resources/pen.svg")}
                    alt="pen"
                  />
                  Blogs
                </span>
              </button>

              <button
                className="btn green margin-left-50 category guides"
                id="guides"
              >
                <span className="btn__mask"></span>
                <span className="btn__text">
                  <img
                    src={require("../images/svgs/resources/guides.svg")}
                    alt="guides"
                  />
                  Guides
                </span>
              </button>

              <button
                className="btn pink margin-left-50 category Videos"
                id="videos"
              >
                <span className="btn__mask"></span>
                <span className="btn__text">
                  <img
                    src={require("../images/svgs/resources/video.svg")}
                    alt="video"
                  />
                  Videos
                </span>
              </button>
            </div>
          </Row>
          <Row className="initial-blogs">
            <ResourceCard
              colLength={"two-thirds"}
              post={post[1]}
              className="card"
            />
            <ResourceCard colLength={"one-third"} post={post[2]} />
            <ResourceCard colLength={"two-thirds"} post={post[3]} />
          </Row>
          <Row className="initial-blogs">
            <ResourceCard colLength={"one-third"} post={post[4]} />
            <ResourceCard colLength={"two-thirds"} post={post[5]} />
            <ResourceCard colLength={"two-thirds"} post={post[6]} />
          </Row>
          <Row id="loadMoreRow" className="initial-blogs">
            <button
              className=" load-more pink pink-button margin-left-50"
              onClick={e => showMoreCards(e)}
            >
              Load More...
            </button>
          </Row>
          <Row className="load-more-container">
            {post.map(post => {
              return (
                <ResourceCard
                  key={post.node.id}
                  colLength={"one-third"}
                  post={post}
                />
              );
            })}
          </Row>
        </Container>
      </div>
    </Layout>
  );
};

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
        }
      }
    }
  }
`;

export default Resources;
