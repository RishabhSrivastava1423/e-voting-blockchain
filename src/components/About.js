import React from "react";
import AboutDev from "./AboutDev";
import Rishabh from "../assets/Rishabh.jpg";
const About = (props) => {
  
  //Rishabh Srivastava
  const rishabhDesc =
    "Passionate software developer with experience building production-grade applications. Fast learner and always open to work on new technologies. Experience in working as a part of a team and  individually. Hard working and dependable.";
  const displayBlock = () => {
    var temp = document.getElementById("blockchain").style.display;
    if (temp === "block") {
      document.getElementById("blockchain").style.display = "none";
    } else {
      document.getElementById("blockchain").style.display = "block";
    }
  };
  const displayStructure = () => {
    var temp = document.getElementById("structure").style.display;
    if (temp === "block") {
      document.getElementById("structure").style.display = "none";
    } else {
      document.getElementById("structure").style.display = "block";
    }
  };
  const displayWorking = () => {
    var temp = document.getElementById("working").style.display;
    if (temp === "block") {
      document.getElementById("working").style.display = "none";
    } else {
      document.getElementById("working").style.display = "block";
    }
  };
  const displayPeer = () => {
    var temp = document.getElementById("peer").style.display;
    if (temp === "block") {
      document.getElementById("peer").style.display = "none";
    } else {
      document.getElementById("peer").style.display = "block";
    }
  };

  return (
    <div className="container">
      <div className="row" style={{ marginTop: "15px", padding:"15px" }}>
        <div className="col">
          <h3>
            What is BlockChain?{" "}
            <span
              type="button"
              onClick={displayBlock}
              style={{ float: "right" }}
            >
              {" "}
              <i className="fa-solid fa-plus"></i>
            </span>
          </h3>
          <p style={{ display: "none" }} id="blockchain">
            {" "}
            A Blockchain is a chain of blocks that contain information. The data
            which is stored inside a block depends on the type of blockchain.
            Blockchains are typically managed by a peer-to-peer network for use
            as a publicly distributed ledger, where nodes collectively adhere to
            a protocol to communicate and validate new blocks. Although
            blockchain records are not unalterable as forks are possible,
            blockchains may be considered secure by design and exemplify a
            distributed computing system with high Byzantine fault tolerance.
          </p>
        </div>
      </div>
      <div className="row" style={{ marginTop: "15px", padding:"15px" }}>
        <div className="col">
          <h3>
            Structure of Blockchain?{" "}
            <span
              type="button"
              onClick={displayStructure}
              style={{ float: "right" }}
            >
              {" "}
              <i className="fa-solid fa-plus"></i>
            </span>
          </h3>
          <p style={{ display: "none" }} id="structure">
            {" "}
            A blockchain is a decentralized, distributed, and oftentimes public,
            digital ledger consisting of records called blocks that are used to
            record transactions across many computers so that any involved block
            cannot be altered retroactively, without the alteration of all
            subsequent blocks. The use of a blockchain removes the
            characteristic of infinite reproducibility from a digital asset. It
            confirms that each unit of value was transferred only once, solving
            the long-standing problem of double-spending
          </p>
        </div>
      </div>
      <div className="row" style={{ marginTop: "15px", padding:"15px" }}>
        <div className="col">
          <h3>
            Working Of Blockchain?{" "}
            <span
              type="button"
              onClick={displayWorking}
              style={{ float: "right" }}
            >
              {" "}
              <i className="fa-solid fa-plus"></i>
            </span>
          </h3>
          <p style={{ display: "none" }} id="working">
            {" "}
            Blockchain works via a multistep process, which in simple terms
            happens as follows:
            <ul>
              <li>
                An authorized participant inputs a transaction, which must be
                authenticated by the technology.
              </li>
              <li>
                That action creates a block that represents that specific
                transaction or data.
              </li>
              <li>The block is sent to every computer node in the network.</li>
              <li>
                Authorized nodes verify the transaction and add the block to the
                existing blockchain. (Nodes in public blockchain networks are
                referred to as miners; they're typically paid for this task --
                often in a process called Proof of Work, or PoW -- usually in
                the form of cryptocurrency.)
              </li>
              <li>
                The update is distributed across the network, which finalizes
                the transaction.{" "}
              </li>
            </ul>
          </p>
        </div>
      </div>
      <div className="row" style={{ marginTop: "15px", padding:"15px" }}>
        <div className="col">
          <h3>
            Peer-to-Peer Network{" "}
            <span
              type="button"
              onClick={displayPeer}
              style={{ float: "right" }}
            >
              {" "}
              <i className="fa-solid fa-plus"></i>
            </span>
          </h3>
          <p style={{ display: "none" }} id="peer">
            {" "}
            Peer to peer network, commonly known as P2P is a decentralized network communications model that consists of a group of devices (nodes) that collectively store and share files where each node acts as an individual peer. In this network, P2P communication is done without any central administration or server, which means all nodes have equal power and perform the same tasks. P2P architecture is suitable for various use cases and can be categorized into structured, unstructured, and hybrid peer-to-peer networks. The unstructured peer-to-peer networks are formed by nodes randomly from connection to each other, but they are inefficient than structured ones. In structured peer-to-peer systems, the nodes are organized, and every node can efficiently search the network for the desired data. Hybrid models are actually a combination of P2P and client-server models, and when compared to the structured and unstructured P2P systems, these networks tend to present improved overall performance.
          </p>
        </div>
      </div>
      <div className="row" style={{ marginTop: "10px", padding:"15px" }}>
        <h3>Developed By </h3>
        <div className="col">
          {" "}
          <AboutDev name="Rishabh Srivastava" desc={rishabhDesc} img={Rishabh}/>{" "}
        </div>
      </div>
    </div>
  );
};

export default About;
