import React from 'react';

const WholeDetailsCard = ({s , i}) => {
    return (
        <div className='biodata' key={i}>
               <div className="whole-details">
                    <h5>About Whole Details</h5>
                    <div className="details-table-show">
                    <div className="details-text">
                        <p>Full Name</p>
                    </div>
                    <div className="details-dynamic">
                        <p>{s?.name}</p>
                    </div>
                </div>
                    <div className="details-table-show">
                    <div className="details-text">
                        <p>Current Age</p>
                    </div>
                    <div className="details-dynamic">
                        <p>{s?.age}</p>
                    </div>
                </div>
                    <div className="details-table-show">
                    <div className="details-text">
                        <p>Division</p>
                    </div>
                    <div className="details-dynamic">
                        <p>{s?.division}</p>
                    </div>
                </div>


                    <div className="details-table-show">
                    <div className="details-text">
                        <p>Old Address</p>
                    </div>
                    <div className="details-dynamic">
                        <p>{s?.oldAddress}</p>
                    </div>



                </div>
                    <div className="details-table-show">
                    <div className="details-text">
                        <p>New Address</p>
                    </div>
                    <div className="details-dynamic">
                        <p>{s?.newAddress}</p>
                    </div>
                </div>


                
                    <div className="details-table-show">
                    <div className="details-text">
                        <p>Gender</p>
                    </div>
                    <div className="details-dynamic">
                        <p>{s?.sex}</p>
                    </div>
                </div>
                    <div className="details-table-show">
                    <div className="details-text">
                        <p>Date of birth</p>
                    </div>
                    <div className="details-dynamic">
                        <p>{s?.birthDate}</p>
                    </div>
                </div>
                    <div className="details-table-show">
                    <div className="details-text">
                        <p>Religious</p>
                    </div>
                    <div className="details-dynamic">
                        <p>{s?.religious}</p>
                    </div>
                </div>
                    <div className="details-table-show">
                    <div className="details-text">
                        <p>Marital Status</p>
                    </div>
                    <div className="details-dynamic">
                        <p>{s?.maritalStatus}</p>
                    </div>
                </div>
                    <div className="details-table-show">
                    <div className="details-text">
                        <p>Height</p>
                    </div>
                    <div className="details-dynamic">
                        <p>{s?.height} "</p>
                    </div>
                </div>
                    <div className="details-table-show">
                    <div className="details-text">
                        <p>Weight</p>
                    </div>
                    <div className="details-dynamic">
                        <p>{s?.weight} kg</p>
                    </div>
                </div>
                    <div className="details-table-show">
                    <div className="details-text">
                        <p>Blood Group</p>
                    </div>
                    <div className="details-dynamic">
                        <p>{s?.bloodGroup}</p>
                    </div>
                </div>
                    <div className="details-table-show">
                    <div className="details-text">
                        <p>Family Member</p>
                    </div>
                    <div className="details-dynamic">
                        <p>{s?.familyMember}</p>
                    </div>
                </div>
                    <div className="details-table-show">
                    <div className="details-text">
                        <p>Mother is Dead</p>
                    </div>
                    <div className="details-dynamic">
                        <p>{s?.motherIsDead}</p>
                    </div>
                </div>
                    <div className="details-table-show">
                    <div className="details-text">
                        <p>Father is Dead</p>
                    </div>
                    <div className="details-dynamic">
                        <p>{s?.fatherIsDead}</p>
                    </div>
                </div>
                    <div className="details-table-show">
                    <div className="details-text">
                        <p>Brother</p>
                    </div>
                    <div className="details-dynamic">
                        <p>{s?.brother}</p>
                    </div>
                </div>
                    <div className="details-table-show">
                    <div className="details-text">
                        <p>Sister</p>
                    </div>
                    <div className="details-dynamic">
                        <p>{s?.sister}</p>
                    </div>
                </div>
                    <div className="details-table-show">
                    <div className="details-text">
                        <p>Family Economic Status</p>
                    </div>
                    <div className="details-dynamic">
                        <p>{s?.familyEconomicStatus}</p>
                    </div>
                </div>
                    <div className="details-table-show">
                    <div className="details-text">
                        <p>Education Method</p>
                    </div>
                    <div className="details-dynamic">
                        <p>{s?.educationMethod}</p>
                    </div>
                </div>
                    <div className="details-table-show">
                    <div className="details-text">
                        <p>Middle Education</p>
                    </div>
                    <div className="details-dynamic">
                        <p>{s?.middleEducation}</p>
                    </div>
                </div>
                    <div className="details-table-show">
                    <div className="details-text">
                        <p>Higher Education</p>
                    </div>
                    <div className="details-dynamic">
                        <p>{s?.higherEducation}</p>
                    </div>
                </div>
                    <div className="details-table-show">
                    <div className="details-text">
                        <p>Profession</p>
                    </div>
                    <div className="details-dynamic">
                        <p>{s?.profession}</p>
                    </div>
                </div>
                    <div className="details-table-show">
                    <div className="details-text">
                        <p>Salary</p>
                    </div>
                    <div className="details-dynamic">
                        <p>{s?.salary}</p>
                    </div>
                </div>






                  </div>
        </div>
    );
};

export default WholeDetailsCard;