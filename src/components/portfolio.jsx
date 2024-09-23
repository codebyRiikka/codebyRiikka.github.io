
/* eslint-disable react/prop-types */
import { useState } from 'react';
import Slider from 'react-slick';
import Modal from 'react-modal';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub } from '@fortawesome/free-brands-svg-icons';

Modal.setAppElement('#root');

function Portfolio() {
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const [activeImages, setActiveImages] = useState([]);
  const [currentImage, setCurrentImage] = useState(0);

  const projects = [
    {
      title: 'Functional website template for escape room',
      description: `I worked on this project with a schoolmate as our first "real" programming project for school.

                    The idea was to create a web page template that could be used to add text and video materials for an escape room game.
                    The web page template was intended to be a significant part of the escape room game, providing instructions and tasks for the puzzles.

                    Once a player solved a puzzle, they would move on to the next one until all puzzles were solved and the game was completed.
                    I also created a tools page through which the creator/admin of the escape room game can create a new escape room (materials) for the web page template,
                    edit an existing one, or delete an escape room.

                    The project lasted approximately 6 weeks and was an intensive period. We used JavaScript, Node.js, HTML, and CSS for the project.
                    `,
      imgSrc: ['tervetuloaph.png', 'escaperoomPuzzle1.png', 'escroomFirstpuzzle.png', 'puzzlehint.png', 'gratzEscaped.png', 'adminpassword.png', 'admintoolspage.png', 'lisaapakohuone.png'],
      repoLink: 'https://github.com/codebyRiikka/PAKOHUONEPELI',
    },
    {
      title: 'Phonebook task in FS-course',
      description: `In this task, the goal was to great a phonebook where the contact information is stored on a server. All new contacts are saved to the server.

                    Other features include searching for a contact in the phonebook using a search field, updating existing contact information, and deleting a contact.

                    Updated (28.8.24): Later on the FS-course there was a task, where you need to make own back-end for the phonebook. After the back-end was done, next mission was to make complete build from these front- & back-ends,
                    and then upload the fullstack -versio to internet by using Render.

                    Updated (4.9.24): The final task in this assignment was to modify the backend so that all phone contacts is retrieved from the MongoDB database, and likewise, new data is stored there, and editing the data is also possible.
                    At this point, the app is not for private use, so everyone can add contact info, which will be visible and editable to everyone. In the future, the app could be developed for private use.

                    HTML, CSS, React, JS, Node.js and MongoDB used in this task.
                    `,
      imgSrc: ['phonebookMainpage.png', 'phonebookFiltersearch.png', 'phonebookReplace.png', 'pbPersonDelete.png', 'phonebookserverdata.png', 'pbPersonDeleteSuccess.png', 'pbServerPersondeleteSuccess.png'],
      repoLink: 'https://github.com/codebyRiikka/phonebook-backend',
    },
    {
      title: 'Information of Countries-task in FS-course',
      description: `In this task, the goal was to utilize the https://studies.cs.helsinki.fi/restcountries/ service, which provides information about countries in a machine-readable format (REST API).

                    The task was to implement an application that retrieves data from this interface for the user. Features included filtering search results
                    using a search field, displaying up to 10 different countries at a time, and obtaining information about a specific country by clicking on it
                    or refining the search to a specific country. 
                    The information displayed includes the country's capital, population,spoken languages and
                    realtime weather report.

                    HTML, CSS and React used in this task.
                    `,
      imgSrc: ['country-information.png', 'country-info-error.png', 'country-info-search.png', 'country-info-details.png'],
      repoLink: 'https://github.com/codebyRiikka/fullstack-webdev-exercises/tree/main/osa2/InformationOfCountries',
    },
  ];

  // React-modal
  const openModal = (images, idx) => {
    setActiveImages(images);
    setCurrentImage(idx);
    setModalIsOpen(true);
  };

  const closeModal = () => {
    setModalIsOpen(false);
  };

  // Slick slider settings
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />,
    appendDots: dots => (
      <div style={{ position: "absolute", bottom: "-5px", left: "50%", transform: "translateX(-50%)" }}>
        <ul style={{ margin: "0px" }}> {dots} </ul>
      </div>
    ),
  };
  
  return (
    <section id="portfolio" className="py-16 bg-gradient-to-b from-indigo-900 via-purple-500 to-white">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-8 text-white opacity-0 animate-fadeIn">My Projects</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 ">
          {projects.map((project, index) => (
            <div key={index} className="bg-white shadow-md rounded-lg p-6">
              {project.imgSrc.length > 0 && (
                <Slider {...settings}>
                  {project.imgSrc.map((src, idx) => (
                    <div key={idx} onClick={() => openModal(project.imgSrc, idx)}>
                      <img 
                        src={`/Images/${src}`} 
                        alt={project.title} 
                        className="mb-4 rounded-lg w-full h-80 object-contain cursor-pointer"
                      />
                    </div>
                  ))}
                </Slider>
              )}
              <h3 className="text-2xl font-semibold text-center text-gray-800 mt-6 mb-8">{project.title}</h3>
              <p className="mb-4 text-gray-700 h-48 overflow-y-auto leadind-relaxed whitespace-pre-line break-words">{project.description}</p>
              <a href={project.repoLink} 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="inline-flex items-center text-blue-700 mt-6 mb-4 bg-gray-100 px-4 py-2 rounded-lg hover:bg-blue-500 hover:text-white transition-colors duration-300 ease-in-out">
                  <FontAwesomeIcon icon={faGithub} className="mr-2" />
                {project.repoLink !== '#' ? 'GitHub Repository' : 'Coming soon'}
              </a>
            </div>
          ))}
        </div>
      </div>

      {/*Modal for enlarged images */}
      <Modal
        isOpen = {modalIsOpen}
        onRequestClose = {closeModal}
        style = {{
            content: {
                top: '50%',
                left: '50%',
                right: 'auto',
                bottom: 'auto',
                marginRight: '-50%',
                transform: 'translate(-50%, -50%)',
                width: '80%',
                height: '80%',
                overflow: 'auto',
                zIndex: '1000',
            },
            overlay: {
                zIndex: '999',
            },
        }}
        >
        <div className="relative">
          <button onClick={closeModal} className="absolute top-0 right-0 p-2 bg-gray-800 text-white rounded-full">Close</button>
          <Slider {...settings} initialSlide={currentImage}>
            {activeImages.map((src, idx) => (
              <div key={idx}>
                <img 
                    src={`/Images/${src}`} 
                    alt={`Slide ${idx}`} 
                    className="w-full h-auto max-h-[calc(100vh-100px)] object-contain" />
              </div>
            ))}
          </Slider>
        </div>
      </Modal>
    </section>
  );
}

function SampleNextArrow(props) {
    const { onClick } = props;
    return (
      <button type="button" className="absolute right-0 top-0 z-30 flex h-full cursor-pointer items-center justify-center px-4" onClick={onClick}>
        <span className="inline-flex h-10 w-10 items-center justify-center rounded-full bg-gray-800/50 hover:bg-gray-800/70">
          <svg className="h-4 w-4 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 6 10">
            <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M1 9l4-4-4-4" />
          </svg>
        </span>
      </button>
    );
}

function SamplePrevArrow(props) {
    const { onClick } = props;
    return (
      <button type="button" className="absolute left-0 top-0 z-30 flex h-full cursor-pointer items-center justify-center px-4" onClick={onClick}>
        <span className="inline-flex h-10 w-10 items-center justify-center rounded-full bg-gray-800/50 hover:bg-gray-800/70">
          <svg className="h-4 w-4 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 6 10">
            <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 1l-4 4 4 4" />
          </svg>
        </span>
      </button>
    );
}

export default Portfolio;

  