import React, {useRef, useState} from "react";

const Poll = (props) => {
    const candidate1 = useRef();
    const candidate2 = useRef();

    const candidate1Img = useRef();
    const candidate2Img = useRef();

    const promptRef = useRef();
    const [disableButton, changeDisable] = useState(false);


    const sendToBlockChain = async() => {
      changeDisable(true);
      await window.contract.addUrl({
        name: candidate1.current.value,
        url : candidate1Img.current.value
      });
      await window.contract.addUrl({
        name: candidate2.current.value,
        url : candidate2Img.current.value
      });
      await window.contract.addCandidatePair({
        prompt:promptRef.current.value,
        name1: candidate1.current.value,
        name2: candidate2.current.value
      })
      await window.contract.addToPromptArray({prompt:promptRef.current.value})
      alert("head back to home page");
    }
  return (
    <div
      className="container bg-dark"
      style={{
        marginTop: "14px",
        width: "35vw",
        height: "70vh",
        padding: "15px",
        color: "white",
      }}
    >
      <form autoComplete="off">
        <div className="mb-3">
          <label htmlFor="candidate1" className="form-label">
            Candidate 1st Name
          </label>
          <input
            type="text"
            className="form-control"
            id="candidate1"
            ref={candidate1}
            // minLength={5}
            // maxLength={30}
            placeholder="Enter Candidate name (min of 5 characters)"
            pattern="^[A-Za-z\s]{1,}[\.]{0,1}[A-Za-z\s]{4,29}$"
          />
        </div>
        <div className="mb-3">
          <label htmlFor="candidate1Img" className="form-label">
            Candidate 1 Image URL
          </label>
          <input
            type="text"
            className="form-control"
            id="candidate1Img"
            ref={candidate1Img}
            placeholder="Candidate 1 Image url"
            // pattern='“((http|https)://)(www.)?” 
            // + “[a-zA-Z0-9@:%._\\+~#?&//=]{2,256}\\.[a-z]” 
            // + “{2,6}\\b([-a-zA-Z0-9@:%._\\+~#?&//=]*)”'
          />
        </div>
        
        <div className="mb-3">
          <label htmlFor="candidate2" className="form-label">
            Candidate 2nd Name
          </label>
          <input
            type="text"
            className="form-control"
            id="candidate2"
            ref={candidate2}
            minLength={5}
            placeholder="Enter Candidate name (min of 5 characters)"
            pattern="^[A-Za-z\s]{1,}[\.]{0,1}[A-Za-z\s]{4,29}$"
          />
        </div>
        <div className="mb-3">
          <label htmlFor="candidate2Img" className="form-label">
            Candidate 2 Image URL
          </label>
          <input
            type="text"
            className="form-control"
            id="candidate2Img"
            ref={candidate2Img}
            placeholder="Candidate 2 Image url"
            // pattern='“((http|https)://)(www.)?” 
            // + “[a-zA-Z0-9@:%._\\+~#?&//=]{2,256}\\.[a-z]” 
            // + “{2,6}\\b([-a-zA-Z0-9@:%._\\+~#?&//=]*)”'
          />
        </div>
        <div className="mb-3">
          <label htmlFor="title" className="form-label">
           Title
          </label>
          <input
            type="text"
            className="form-control"
            id="title"
            ref={promptRef}
            minLength={10}
            placeholder="Enter Title"
          />
        </div>
        
      </form>
      <button type="button" className="btn btn-outline-info float-end" onClick={sendToBlockChain} disabled={disableButton}>
          Add Poll
        </button>
    </div>
  );
};

export default Poll;
