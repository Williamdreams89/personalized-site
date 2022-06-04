import React from "react";
import "./portfolio.css";
import { useState, useEffect } from "react";
import { FaLink, FaPlus } from "react-icons/fa";
// import Wrapper from './components/Wrapper';
import SimpleReactLightbox from 'simple-react-lightbox'

const images = [
  {
    id: "1",
    imageName: "image1.jpg",
    tag: "Django",
    label: "Django1",
    title: "Medical Lab Services Website",
  },
  {
    id: "2",
    imageName: "image2.jpg",
    tag: "React",
    label: "React1",
    title: "Scaffold Website",
  },
  {
    id: "3",
    imageName: "image3.jpg",
    tag: "React",
    label: "React2",
    title: "Portfolio Website",
  },
  {
    id: "4",
    imageName: "image4.jpg",
    tag: "Django",
    label: "Django2",
    title: "Todolist Website",
  },
  {
    id: "5",
    imageName: "image5.jpg",
    tag: "React",
    label: "React3",
    title: "Ecommerce  Store",
  },
];

function Portfolio() {
  // set useState to manage all the tags and filtered images
  const [tag, setTag] = useState("all");

  // Filtered images by tags would be stored in the filtered images
  const [filteredImages, setFilteredImages] = useState([]);

  // You can get these filtered images by the useEffect hook which is
  // actually going to monitor the tag changes onclick
  useEffect(() => {
    tag === "all"
      ? setFilteredImages(images)
      : setFilteredImages(images.filter((image) => image.tag === tag));
  }, [tag]);

  return (
    <div className="portfolio__section" id="portfolio">
      <div className="portfolio__header">
        <h1>
          Portfolio
          <hr className="horizontal__line" />
        </h1>
      </div>
      <div className="portfolio__parent__container">
        <div className="portfolio__inner__headings">
          <h4>
            Portfolio
            <hr className="horizontal" />
          </h4>
          <h1>My Works</h1>
        </div>
        <div className="portfolio__container">
          <div className="portfolio__item">
            {/* Invoke the reusable button and create a prop for the setTag*/}
            <div className="portfolio__buttons" handleSetTag={setTag}>
              <TagButton
                name="all"
                className="portfolio__btn"
                handleSetTag={setTag}
              />
              <TagButton
                name="Django"
                className="portfolio__btn"
                handleSetTag={setTag}
              />
              <TagButton
                name="React"
                className="portfolio__btn"
                handleSetTag={setTag}
              />
              <TagButton
                name="Flutter"
                className="portfolio__btn"
                handleSetTag={setTag}
              />
            </div>

            {/* Display filtered images according to useState initial value */}
            <SimpleReactLightbox >
            <div className="portfolio__images__container">
              {filteredImages.map((image) => (
                <div className="portfolio__wrap">
                  <div key={image.id} className="">
                    <img
                      src={`/portfolio__images/${image.imageName}`}
                      className="portfolio__image"
                    />
                    <div className="portfolio__info">
                      <h4>{image.label}</h4>
                      <p>{image.tag}</p>

                      <div className="portfolio__links">
                        <a
                          href={`/portfolio__images/${image.imageName}`}
                          className=""
                          title="View Image"
                        >
                          <FaPlus />
                        </a>
                        <a
                          href={`/portfolio__images/${image.imageName}`}
                          className="portfolio__lightbox"
                          title={`Visit ${image.title}`}
                        >
                          <FaLink />
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
            </SimpleReactLightbox>
          </div>
        </div>
      <div className="portfolio__space"></div>
      </div>
    </div>
  );
}

// Create a reusable tagButton Component

const TagButton = ({ name, handleSetTag }) => {
  return (
    <button className="portfolio__btn" onClick={() => handleSetTag(name)}>
      {name.toUpperCase()}
    </button>
  );
};

export default Portfolio;
