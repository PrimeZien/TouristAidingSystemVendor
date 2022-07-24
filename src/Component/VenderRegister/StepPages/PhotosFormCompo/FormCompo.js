import Button from "@mui/material/Button";
import React from "react";
import Upload from "../../../../Assets/AccommodationRegistration/Upload.png";
import "./FormCompo.css";

function FormCompo() {
  return (
    <div>
      <div className="container-xl px-4 mt-4 ">
        <div className="row row-margin d-flex justify-content-center">
          <div className="col-lg-8">
            <div className="card mb-4 body-radius">
              <div className="card-body">
                <form>
                  <div className="mb-3">
                    <label
                      className=" mb-7 fw-normal fs-5 label-color"
                      htmlFor="currentPassword"
                    >
                      Property Photos
                    </label>
                    <br />
                    <label
                      className="small mb-2 fw-light"
                      htmlFor="currentPassword"
                    >
                      The building's exterior, parking space(s), entrance, and
                      any available facilities.
                    </label>
                    <div className="content-file-upload text-center">
                      <img src={Upload} alt="Upload File" />
                      <p className="small mb-2 fw-light">
                        Drag and drop your pics here
                      </p>
                      <Button
                        variant="contained"
                        component="label"
                        sx={{
                          backgroundColor: "#03676E",
                          "&:hover": {
                            backgroundColor: "#07b89d",
                            color: "white",
                          },
                        }}
                      >
                        UPLOAD PHOTOS
                        <input type="file" hidden />
                      </Button>
                    </div>
                  </div>
                </form>
              </div>
            </div>

            <button type="button" className=" next-pre-btn pre-btn  ">
              PREVIOUS
            </button>
            <button type="button" className=" next-pre-btn next-btn">
              NEXT
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default FormCompo;