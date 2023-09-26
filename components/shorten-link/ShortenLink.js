import { useState } from "react";

import Links from "./Links";
import Link from "next/link";

function ShortenLink() {
  const [input, setInput] = useState('');
  const [shortenedLinks, setShortenedLinks] = useState([]);
  const [isError, setIsError] = useState(false);
  const [errorMsg, setErrorMsg] = useState('');

  function onChangeHandler(e) {
    setInput(e.target.value);
    if (isError) {
      setIsError(false);
    }
  }

  function onKeyDownHandler(e) {
    if (e.key === "Enter") {
      onClickHandler();
    }
  }

  async function onClickHandler() {

    if (input === '') {
      return;
    }

    const fetchResponse = await fetch(`/api/shorten/${input}`);
    const data = await fetchResponse.json();
    if (data.ok) {
      const newShortenedLink = {
        originalLink: data.result.original_link,
        shortLink: data.result.full_short_link
      }
      setShortenedLinks([...shortenedLinks, newShortenedLink]);
    } else {
      setErrorMsg(data.error);
      setIsError(true);
    }

    setInput('');
  }

  return (
    <div className="rounded-xl relative -top-16">
      <div className="bg-indigo-950 rounded-xl bg bg-[url('/images/bg-shorten-mobile.svg')] bg-[top_-25px_right_0px] flex flex-col p-4">
        <input onChange={onChangeHandler} onKeyDown={onKeyDownHandler} value={input} className="mb-4 rounded-lg p-2" type="text" placeholder="Shorten a link here..." />
        <p className={`italic text-red-400 relative -top-2 text-xs font-bold ${isError ? '' : 'hidden'}`}>{errorMsg}</p>
        <button className="btn rounded-lg" onClick={onClickHandler}>Shorten It!</button>
      </div>

      <div className={`${shortenedLinks.length ? 'mt-5' : ''}`}>
        <Links shortenedLinks={shortenedLinks} />
      </div>
    </div>
  );
}

export default ShortenLink;
