import React from 'react';
import './myprojects.css';
import theSentinel from '../../assets/theSentinel.png';
import homeCurate from '../../assets/HomeCurate.png';
import recipeHaven from '../../assets/recipehaven.png';

function Myprojects() {
  const changeBackground = () => {
    const randomColor = '#' + Math.floor(Math.random() * 16777215).toString(16);
    document.getElementById("projects").style.backgroundColor = randomColor;
  };

  return (
    <>
      <section id="projects" className="project-section">
        <div className="container">
          <h2 className="text-center">My Projects</h2>
          <div className="project-row g-4">

            {/* Project 1 */}
            <div className="col-md-4 d-flex">
              <div className="card h-100 w-100">
                <img src={theSentinel} className="imgTheSentinel" alt="The Sentinel" />
                <div className="card-body">
                  <h5 className="card-title project-title" onClick={changeBackground}>
                    The Sentinel
                  </h5>
                  <p className="card-text">
                    Application for farmers to easily identify the pests and/or diseases that their crops may have.
                  </p>
                  <button className="btn btn-primary" data-bs-toggle="modal" data-bs-target="#project1Modal">
                    Learn More
                  </button>
                </div>
              </div>
            </div>

            {/* Project 2 */}
            <div className="col-md-4 d-flex">
              <div className="card h-100 w-100">
                <img src={homeCurate} className="imgHomeCurate" alt="HomeCurate" />
                <div className="card-body">
                  <h5 className="card-title project-title" onClick={changeBackground}>
                    HomeCurate
                  </h5>
                  <p className="card-text">
                    Visualize the interior or exterior design of any area of your home.
                  </p>
                  <button className="btn btn-primary" data-bs-toggle="modal" data-bs-target="#project2Modal">
                    Learn More
                  </button>
                </div>
              </div>
            </div>

            {/* Project 3 */}
            <div className="col-md-4 d-flex">
              <div className="card h-100 w-100">
                <img src={recipeHaven} className="imgRecipeHaven" alt="RecipeHaven" />
                <div className="card-body">
                  <h5 className="card-title project-title" onClick={changeBackground}>
                    RecipeHaven
                  </h5>
                  <p className="card-text">
                    Browse a wide variety of recipes from many cuisines.
                  </p>
                  <button className="btn btn-primary" data-bs-toggle="modal" data-bs-target="#project3Modal">
                    Learn More
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Modal 1 */}
      <div className="modal fade" id="project1Modal" tabIndex="-1"aria-labelledby="project1ModalLabel" aria-hidden="true">
        <div className="modal-dialog">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title" id="project1ModalLabel">The Sentinel Details</h5>
              <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
            </div>
            <div className="modal-body">
              <p>
                “The Sentinel” is an application for the agricultural sector which analyzes images submitted by farmers in real-time to detect pests or diseases. It provides initial recommendations, forwards data to an agriculturist for expert review, and stores verified cases for future reference.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Modal 2 */}
      <div className="modal fade" id="project2Modal" tabIndex="-1" aria-labelledby="project2ModalLabel" aria-hidden="true">
        <div className="modal-dialog">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title" id="project2ModalLabel">HomeCurate Details</h5>
              <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
            </div>
            <div className="modal-body">
              <p>
                Upload a photo of your space, arrange furniture virtually, and browse a furniture library with detailed product information.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Modal 3 */}
      <div className="modal fade" id="project3Modal" tabIndex="-1" aria-labelledby="project3ModalLabel" aria-hidden="true">
        <div className="modal-dialog">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title" id="project3ModalLabel">RecipeHaven Details</h5>
              <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
            </div>
            <div className="modal-body">
              <p>
                Browse recipes from different cuisines and view ingredient lists and preparation steps for easy cooking inspiration.
              </p>
            </div>
          </div>
        </div>
      </div>
      
    </>
  );
}

export default Myprojects;