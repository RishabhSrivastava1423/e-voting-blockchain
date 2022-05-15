import React , {useEffect, useState} from "react";

const Home = (props) => {
  const [promptList, changePromptList] = useState([]);

  useEffect(() => {
    const getPrompts = async () => {
      changePromptList(await window.contract.getAllPrompt());
      console.log(await window.contract.getAllPrompt());
    };
    getPrompts();
  }, []);

  return (
    <div className="container">
      <table
        className="table table-dark table-bordered border-info me-2"
        style={{
          color: "white",
          fontWeight: "bold",
          margin: "6vh",
        }}
      >
        <thead>
          <tr>
            <th scope="col">#</th>
            <th scope="col">List Of Polls</th>
            <th scope="col">Go To Poll</th>
          </tr>
        </thead>
        <tbody>
          {promptList.map((element, index) => {
            return (
              <tr key={index}>
                <td>{index + 1}</td>
                <td>{element}</td>
                <td>
                  {" "}
                  <button type="button" onClick={()=>props.changeCandidates(element)} className="btn btn-outline-info" style={{
                      width:"100%"
                  }}>
                    Go to Poll
                  </button>
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
};

export default Home;
