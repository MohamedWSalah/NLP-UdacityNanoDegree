import { checkURL } from "./checkURL.js";

function handleSubmit(event) {
  event.preventDefault();
  //getting the url text
  let urlText = document.getElementById("article-url").value;

  if (checkURL(urlText)) {
    //submit to backend
    console.log(urlText);
    const param = {
      method: "POST",
      credentials: "same-origin",
      mode: "cors",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ urlText }),
    };

    fetch("http://localhost:8081/submit", param)
      .then((res) => res.json())
      .then((res) => {
        console.log(res);
        document.getElementById(
          "text"
        ).innerHTML = `Text: ${res.sentence_list[0].text}`;
        document.getElementById(
          "agreement"
        ).innerHTML = `Agreement: ${res.agreement}`;
        document.getElementById(
          "subjectivity"
        ).innerHTML = `Subjectivity: ${res.subjectivity}`;
        document.getElementById(
          "confidence"
        ).innerHTML = `Confidence: ${res.confidence}`;
        document.getElementById("irony").innerHTML = `Irony: ${res.irony}`;
        document.getElementById(
          "scoreTag"
        ).innerHTML = `Score tag: ${res.score_tag}`;
      })
      .catch((err) => console.log(err));

    console.log("Done...");
  } else {
    alert("Invalid URL");
  }
}

export { handleSubmit };
