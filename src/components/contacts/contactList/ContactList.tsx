import React from "react";
import { Link } from "react-router-dom";
import Man from "../../../asssets/images/man.png";
import Woman from "../../../asssets/images/woman.png";

const ContactList = () => {
  return (
    <React.Fragment>
      <section className="contact-search p-3">
        <div className="container">
          <div className="grid">
            <div className="row">
              <div className="col">
                <p className="h3 fw-bold">
                  Contact Manager
                  <Link to={"/contacts/add"} className="ms-2 btn btn-success">
                    <i className="fa fa-plus-circle me-2" />
                    New
                  </Link>
                </p>
                <p className="fst-italic">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Vel expedita, non, eligendi accusantium
                  ratione quia quis animi error, vero quas velit voluptate cupiditate perferendis incidunt quibusdam
                  maxime quo dignissimos. Obcaecati.
                </p>
              </div>
            </div>
            <div className="row">
              <div className="col-md-6">
                <form className="row">
                  <div className="col">
                    <div className="mb-2">
                      <input type="text" className="form-control" placeholder="Search Names" />
                    </div>
                  </div>
                  <div className="col">
                    <div className="mb-2">
                      <input type="submit" className="btn btn-outline-dark" value="Search" />
                    </div>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="contact-list">
        <div className="container">
          <div className="row">
            <div className="col-md-6">
              <div className="card">
                <div className="card-body d-flex justify-content-around">
                  <div className="row align-items-center">
                    <div className="col-md-4">
                      <img src={Man} alt="" className="contact-img" />
                    </div>
                    <div className="col-md-7">
                      <ul className="list-group">
                        <li className="list-group-item list-group-item-action">
                          Name: <span className="fw-bold">Jack</span>
                        </li>
                        <li className="list-group-item list-group-item-action">
                          Mobile: <span className="fw-bold">05556669292</span>
                        </li>
                        <li className="list-group-item list-group-item-action">
                          Email: <span className="fw-bold">jackydexxxaaaaaa@gmail.com</span>
                        </li>
                      </ul>
                    </div>
                    <div className="col-md-1 d-flex flex-column align-items-center">
                      <Link to={"/contacts/view/:contactId"} className="btn btn-warning my-1">
                        <i className="fa fa-eye" />
                      </Link>
                      <Link to={"/contacts/edit/:contactId"} className="btn btn-primary my-1">
                        <i className="fa fa-pencil" />
                      </Link>
                      <button className="btn btn-danger my-1">
                        <i className="fa fa-trash" />
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-md-6">
              <div className="card">
                <div className="card-body d-flex justify-content-around">
                  <div className="row align-items-center">
                    <div className="col-md-4">
                      <img src={Woman} alt="" className="contact-img" />
                    </div>
                    <div className="col-md-7">
                      <ul className="list-group">
                        <li className="list-group-item list-group-item-action">
                          Name: <span className="fw-bold">Marry</span>
                        </li>
                        <li className="list-group-item list-group-item-action">
                          Mobile: <span className="fw-bold">09995552323</span>
                        </li>
                        <li className="list-group-item list-group-item-action">
                          Email: <span className="fw-bold">marrydexxxaaa@gmail.com</span>
                        </li>
                      </ul>
                    </div>
                    <div className="col-md-1 d-flex flex-column align-items-center">
                      <Link to={"/contacts/view/:contactId"} className="btn btn-warning my-1">
                        <i className="fa fa-eye" />
                      </Link>
                      <Link to={"/contacts/edit/:contactId"} className="btn btn-primary my-1">
                        <i className="fa fa-pencil" />
                      </Link>
                      <button className="btn btn-danger my-1">
                        <i className="fa fa-trash" />
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </React.Fragment>
  );
};

export default ContactList;
