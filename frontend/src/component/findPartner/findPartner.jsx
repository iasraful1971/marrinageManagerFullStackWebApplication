import { Blockquote, Button, Grid, Select } from "@mantine/core";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import Pagination from "../../more/Pagination";
import { Spinner } from "../../more/Spinner";
import { get_schedules } from "../../store/actions/scheduleAction";
import Layout from "../basc/layout/Layout";
import BioDataCard from "./BioDataCard";
const FindPartner = () => {
  const { currentPage } = useParams();

  const dispatch = useDispatch();
  const [sex, setSex] = useState("");
  const [maritalStatus, setMaritalStatus] = useState("");
  const [division, setDivision] = useState("");

  const { allSchedule, scheduleCounts, perPage } = useSelector(
    (state) => state.ScheduleReducer
  );

 const [click , setClick] = useState(true);


  useEffect(() => {
    dispatch(get_schedules(currentPage ? currentPage.split("-")[1] : 1));
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [currentPage]);

  const filteredSchedule = click ? allSchedule :  allSchedule.filter((schedule) => schedule.sex === sex && schedule.maritalStatus===maritalStatus && schedule.division === division
  );

  console.log(filteredSchedule);

  const handleSearch = () => {
    setClick(false)
  };

  return (
    <>
      <Layout>
        <div className="find-partner">
          <div className="margin-container">
            <div className="filter-container">
         
              <Grid>
          
                <Grid.Col md={12} lg={6}>
                  <div className="filter-box">
                    
                    <div className="input-area">
                      <div>
                        {" "}
                        <Select
                          label="I am Looking"
                          placeholder="Pick one"
                          searchable
                          onChange={setSex}
                          value={sex}
                          nothingFound="No options"
                          data={["Male", "Female"]}
                        />
                      </div>
                      <div>
                        {" "}
                        <Select
                          label="Marital Status"
                          placeholder="Pick one"
                          searchable
                          onChange={setMaritalStatus}
                          value={maritalStatus}
                          nothingFound="No options"
                          data={["Married", "Single", "Divorced"]}
                        />
                      </div>
                      <div>
                        {" "}
                        <Select
                          label="Division"
                          placeholder="Pick one"
                          searchable
                          onChange={setDivision}
                          value={division}
                          nothingFound="No options"
                          data={[
                            "Dhaka",
                            "Khulna",
                            "Sylhet",
                            "Rangpur",
                            "Rajshahi",
                            "Chittagong",
                            "Comilla",
                            "Myminsingh",
                          ]}
                        />
                      </div>
                    </div>
                    <div className="btn-area">
                      <Button
                        variant="gradient"
                        gradient={{ from: "indigo", to: "cyan" }}
                        onClick={handleSearch}
                      >
                        FIND BIO DATA
                     
                      </Button>
                      <Button
                        variant="gradient"
                        gradient={{ from: "purple", to: "dark" }}
                        onClick={() => setClick(true)}
                      >
                          CLEAR FILTER
                      </Button>
                    </div>
                  </div>
                </Grid.Col>
                <Grid.Col md={12} lg={6} className="text">
                  <Blockquote color="red" cite="Bayhaqi, Shu'abul Iman - 5486">
                    <h1>
                      {" "}
                      A person who marries fulfills half of his religion. For
                      the other half let him fear Allah.
                    </h1>
                  </Blockquote>
                </Grid.Col>
              </Grid>
            </div>

            <div className="getting-all-biodata">
              <div className="biodata-grid">
                {allSchedule.length === 0 && <Spinner />}

                { filteredSchedule ? (
                  filteredSchedule.map((s, i) => <BioDataCard s={s} i={i} />)
                ) : (
                  <h1 style={{textAlign: "center" , padding: "50px 0"}}>There no Bio Data</h1>
                )}
               

              </div>
              {
                    filteredSchedule.length ===0 &&  <h1 style={{textAlign: "center" , padding: "50px 0"}}>Data Not Found.</h1>
                }
            </div>
            <div className="pagination-area">
             {
              allSchedule.length === 8 ?  <Pagination
              pageNumber={currentPage ? currentPage.split("-")[1] : 1}
              perPage={perPage}
              itemCount={scheduleCounts}
              path="/find-partner"
            />:  ""
             }
            </div>
           
          </div>
        </div>
      </Layout>
    </>
  );
};

export default FindPartner;
