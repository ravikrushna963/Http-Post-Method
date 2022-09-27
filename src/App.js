import { useEffect, useState } from "react";
import "./App.css";

function App() {
  const [statusCode, setStatusCode] = useState("");
  const [reqBody, setReqBody] = useState("");
  const [renderResp, setRenderResp] = useState("");
  const [showData, setShowData] = useState(false);

  useEffect(() => {
    let requestUrl = "https://gorest.co.in/public-api/users";
    let options = {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
        Authorization:
          "Bearer 88d52bbcb1d08c8abc4749b31118796c1f44c633b20b9ba4c4bfb18e01d1b3f0",
      },
      body: reqBody,
    };

    fetch(requestUrl, options)
      .then(function (response) {
        return response.json();
      })
      .then(function (jsonData) {
        console.log(jsonData.data);
        setRenderResp(JSON.stringify(jsonData));
        setStatusCode(jsonData.code);
      });
  }, [showData]);

  const onChangeInput = (e) => {
    setReqBody(e.target.value);
  };

  const onClickButton = () => {
    setShowData(!showData);
  };

  const url = " https://gorest.co.in/public-api/users";
  // const renderRes = reqBody === "" ? null : reqBody;

  return (
    <div className="p-3 bg-container">
      <h1 className="heading mb-4">Post method practice</h1>
      <p className="request-url-text">
        REQUEST URL : <span className="request-url">{url}</span>
      </p>
      <textarea
        id="requestBody"
        placeholder="Enter Request Body"
        rows="5"
        cols="50"
        className="p-2 request-body"
        onChange={onChangeInput}
      ></textarea>
      <button
        id="sendPostRequestBtn"
        className="mt-3 p-2 button"
        onClick={onClickButton}
      >
        Send Post Request
      </button>
      <hr />
      <div className="p-2 mt-2">
        <p className="para1">Request Status</p>
        <p id="requestStatus" className="request-status">
          {showData && statusCode}
        </p>
      </div>
      <hr />
      <div className="p-2 mt-2">
        <p className="para1">Response Body</p>
        <p id="httpResponse" className="http-response">
          {showData && renderResp}
        </p>
      </div>
    </div>
  );
}

export default App;