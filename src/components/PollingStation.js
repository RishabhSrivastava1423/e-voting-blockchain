import React, { useEffect, useState } from "react";
import loading from "../assets/loading.webp";

const PollingStation = (props) => {
  const [candidate1Img, chgCandidate1Img] = useState(loading);
  const [candidate2Img, chgCandidate2Img] = useState(loading);
  const [showResult, changeResultsDisplay] = useState(false);
  const [buttonStatus, changeButtonStatus] = useState(false);
  const [candidate1Votes, changeVote1] = useState("--");
  const [candidate2Votes, changeVote2] = useState("--");
  const [prompt, changePrompt] = useState("--");

  useEffect(()=>{
    const getInfo = async()=>{
      let voteCount = await window.contract.getVotes({
        prompt : localStorage.getItem("prompt")
      });
      changeVote1(voteCount[0]);
      changeVote2(voteCount[1]);

      // Img

      chgCandidate1Img(
        await window.contract.getUrl({name: localStorage.getItem("Candidate1")})
      )
      chgCandidate2Img(
        await window.contract.getUrl({name: localStorage.getItem("Candidate2")})
      )

      changePrompt(localStorage.getItem("prompt"));

      let didUserVote = await window.contract.didParticipate({
        prompt:localStorage.getItem("prompt"),
        user:window.accountId
      })

      changeResultsDisplay(didUserVote)
      changeButtonStatus(didUserVote);

    };
    getInfo();
  },[]);

  const addVote = async(index)=>{
    changeButtonStatus(true);

    await window.contract.addVote({
      prompt:localStorage.getItem("prompt"),
      index:index
    })

    await window.contract.recordUser({
      prompt:localStorage.getItem("prompt"),
      user:window.accountId
    })
    let voteCount = await window.contract.getVotes({
      prompt: localStorage.getItem("prompt"),
    });
    changeVote1(voteCount[0]);
    changeVote2(voteCount[1]);
    changeResultsDisplay(true)

  }
  return (

    <div className="container-fluid">
      <div className="row bg-dark " style={{marginTop:"3vh"}}>
        <div className="col justify-content-center d-flex">
          <div className="container" style={{ marginBottom: "3vh" }}>
            <div className="row" style={{ marginTop: "3vh" }}>
              <div
                style={{
                  display: "flex",
                  justifyContent: "center",
                  padding: "3vw",
                }}
              >
                <img
                  style={{
                    width: "23vw",
                    height: "37vh",
                  }}
                  src={candidate1Img}
                />
              </div>
            </div>
            {showResult ? (
              <div
                className="row justify-content-center d-flex"
                style={{ marginTop: "5vh" }}
              >
                <div
                  style={{
                    display: "flex",
                    justifyContent: "center",
                    fontSize: "3vw",
                    padding: "1.5vw",
                    color:"white"
                  }}
                >
                  {candidate1Votes}
                </div>
              </div>
            ) : null}
            <div className="row justify-content-center d-flex">
              <button
                type="button"
                className="btn btn-outline-info"
                onClick={()=> addVote(0)}
                
                disabled={buttonStatus}

              >
                Vote
              </button>
            </div>
          </div>
        </div>
        <div className="col justify-content-center d-flex align-items-center">
          <div className="container"  style={{ display:"flex", justifyContent:"center", alignItems:"center", textAlign:"center", color:"white" }} >
            <p>
            {prompt}
            </p>
          </div>
        </div>
        <div className="col justify-content-center d-flex">
          <div className="container"  style={{ marginBottom: "3vh" }} >
            <div className="row" style={{ marginTop: "3vh" }}>
              <div
                style={{
                  display: "flex",
                  justifyContent: "center",
                  padding: "3vw",
                }}
              >
                <img
                  style={{
                    width: "23vw",
                    height: "37vh",
                  }}
                  src={candidate2Img}
                />
              </div>
            </div>
            {showResult ? (
              <div
                className="row justify-content-center d-flex"
                style={{ marginTop: "5vh" }}
              >
                <div
                  style={{
                    display: "flex",
                    justifyContent: "center",
                    fontSize: "3vw",
                    padding: "1.5vw",
                    color:"white"
                  }}
                >
                  {candidate2Votes}
                </div>
              </div>
            ) : null}
            <div className="row justify-content-center d-flex">
              <button
                type="button"
                className="btn btn-outline-info"
                onClick={()=> addVote(1)}
                disabled={buttonStatus}
              >
                Vote
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PollingStation;
