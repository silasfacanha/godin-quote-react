import React, { useState, useRef } from "react";
import axios from "axios";
import "./App.css";
import Hero from "./components/Hero";
import QuoteArea from "./components/QuoteArea";
import QuoteSpace from "./components/QuoteSpace";
import QuoteBtn from "./components/QuoteBtn";
import SubjectQuote from "./components/SubjectQuote";
import { CopyToClipboard } from "react-copy-to-clipboard";
import { useSpeechSynthesis } from "react-speech-kit";
import { ToastContainer, toast } from "react-toastify";
function App() {
  const [quote, setQuote] = useState("");
  const [source, setSource] = useState("");
  const [year, setYear] = useState();

  const quoteAPI = async (url) => {
    let arrayOfQuotes = [];
    try {
      const data = await axios.get(url);
      arrayOfQuotes = data.data;
      console.log(arrayOfQuotes);
    } catch (error) {
      console.log(error);
    }
    try {
      setQuote(arrayOfQuotes.quote);
      setSource(arrayOfQuotes.source);
      setYear(arrayOfQuotes.year);
    } catch (error) {
      console.log(error);
    }
  };

  /*useEffect(() => {
    quoteAPI();
  });*/

  let quoteSourceandAuthor = `${quote}  ${source}${", "}${year}`;
  const { speak } = useSpeechSynthesis();
  const handleListenClick = () => {
    speak({ text: quoteSourceandAuthor });
  };

  return (
    <div className="App">
      <Hero />
      <QuoteArea />
      <QuoteSpace>
        {quote} {source} {year}
      </QuoteSpace>
      <div className="SetofSubjects">
        <div>
          <SubjectQuote
            subject="Culture"
            onClick={() => {
              quoteAPI("https://godin-api-express.herokuapp.com/cultureQuote");
            }}
          />
        </div>

        <div>
          <SubjectQuote
            subject="Marketing"
            onClick={() => {
              quoteAPI(
                "https://godin-api-express.herokuapp.com/marketingQuote"
              );
            }}
          />
        </div>
        <div>
          <SubjectQuote
            subject="Work"
            onClick={() => {
              quoteAPI("https://godin-api-express.herokuapp.com/workQuote");
            }}
          />
        </div>
        <div>
          <SubjectQuote
            subject="Ideas"
            onClick={() => {
              quoteAPI("https://godin-api-express.herokuapp.com/ideasQuote");
            }}
          />
        </div>
        <div>
          <SubjectQuote
            subject="Life"
            onClick={() => {
              quoteAPI("https://godin-api-express.herokuapp.com/lifeQuote");
            }}
          />
        </div>
        <div>
          <SubjectQuote
            subject="Any"
            onClick={() => {
              quoteAPI("https://godin-api-express.herokuapp.com/randomQuote");
            }}
          />
        </div>
      </div>

      <div className="SetofQuoteBtns">
        <CopyToClipboard text={quoteSourceandAuthor}>
          <QuoteBtn action="Copy" onClick={toast("Copied Quote")} />
        </CopyToClipboard>

        <QuoteBtn
          action="Twitter"
          href={`https://twitter.com/intent/tweet?text=${quote} ${source} ${year}`}
          target="blank"
          rel="noopener noreferrer"
          className="tweetBtn"
        />
        <QuoteBtn action="Listen" onClick={handleListenClick} />
      </div>
    </div>
  );
}

export default App;
