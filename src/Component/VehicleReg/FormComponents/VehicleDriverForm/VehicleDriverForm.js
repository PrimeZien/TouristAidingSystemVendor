import React from "react";
import '../VehicleInfoFormCompo/VehicleInfoForm.css'
import { useNavigate } from "react-router";

const VehicleDriverForm = () => {
    const navigate = useNavigate();
    const navigateToVehiclePhoto = () => {
        navigate('/vender-vehicle-reg-photo');
    };
    return <div><div className="container-xl px-4 mt-4 ">
        <div className="row row-margin d-flex justify-content-center">
            <div className="col-lg-8">
                <div className="card mb-4 body-radius">
                    <div className="card-body">
                        <div class="row">
                            <div class="col-md-6 mb-3">
                                <h6>First Name</h6>
                                <input type="text" class="form-control" id="firstName" placeholder="Ex:Toyota Corolla" />
                            </div>
                            <div class="col-md-6 mb-3">
                                <h6>Last Name</h6>
                                <input type="text" class="form-control" id="firstName" placeholder="Number of Sheets" />
                            </div>
                        </div>
                        <div class="row">
                            <div class="col-md-12 mb-3">
                                <h6>Name with Initials</h6>
                                <input type="text" class="form-control" id="firstName" placeholder="" />
                            </div>
                        </div>
                        <div class="row">
                            <div class="col-md-6 mb-3">
                                <h6>Date of Birth</h6>
                                <input type="date" class="form-control" id="firstName" placeholder="" />
                            </div>
                            <div class="col-md-6 mb-3">
                                <h6>Mobile Number</h6>
                                <input type="text" class="form-control" id="firstName" placeholder="" />
                            </div>
                        </div>
                        <div class="row">
                            <div class="col-md-6 mb-3">
                                <h6>NIC No</h6>
                                <input type="text" class="form-control" id="firstName" placeholder="" />
                            </div>
                            <div class="col-md-6 mb-3">
                                <h6>Email</h6>
                                <input type="text" class="form-control" id="firstName" placeholder="" />
                            </div>

                        </div>
                        <div class="row">
                            <div class="col-md-12 mb-3">
                                <h6>Address</h6>
                                <input type="text" class="form-control" id="firstName" placeholder="" />
                            </div>
                        </div>
                        <div class="row">
                            <div class="col-md-6 mb-3">
                                <h6>City</h6>
                                <input type="text" class="form-control" id="firstName" placeholder="" />
                            </div>
                            <div class="col-md-6 mb-3">
                                <h6>Province</h6>
                                <input type="text" class="form-control" id="firstName" placeholder="" />
                            </div>

                        </div>
                        <div class="row">
                            <div class="col-md-6 mb-3">
                                <h6>Postal Code</h6>
                                <input type="text" class="form-control" id="firstName" placeholder="" />
                            </div>
                            <div class="col-md-6 mb-3">
                                <h6>Tourism Registration Number</h6>
                                <input type="text" class="form-control" id="firstName" placeholder="Ex:Toyota Corolla" />
                            </div>


                        </div>
                        <div class="row">
                            <div class="col-md-12 mb-3">
                                <h6>Scanned Copy of Droving Liscence(Both Sides)</h6>
                                <input class="form-control" type="file" id="formFileMultiple" multiple />
                            </div>


                        </div>
                    </div>
                </div>

                <button type="button" className=" next-pre-btn pre-btn  " onClick={navigateToVehiclePhoto}>
                    PREVIOUS
                </button>
                <button type="button" className=" next-pre-btn next-btn">
                    FINISH
                </button>
            </div>
        </div>
    </div>
    </div>
};

export default VehicleDriverForm;