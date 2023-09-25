import { useState } from "react";

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

    const fetchResponse = await fetch(`/api/shorten/${input}`);
    const data = await fetchResponse.json();
    if (data.ok) {
      const newShortenedLink = {
        originalLink: data.result.original_link,
        shortLink: data.result.full_short_link
      }
      setShortenedLinks([...shortenedLinks, newShortenedLink])
    } else {
      setErrorMsg(data.error);
      setIsError(true);
    }

    setInput('');
  }

  return (
    <div className="bg-indigo-950 rounded-xl relative -top-16">
      <div className="rounded-xl bg bg-[url('/images/bg-shorten-mobile.svg')] bg-[top_-25px_right_0px] flex flex-col p-4">
        <input onChange={onChangeHandler} onKeyDown={onKeyDownHandler} value={input} className="mb-4 rounded-lg p-2" type="text" placeholder="Shorten a link here..." />
        <p className={`italic text-red-400 relative -top-2 text-xs font-bold ${isError ? '' : 'hidden'}`}>{errorMsg}</p>
        <button onClick={onClickHandler} className="btn rounded-lg">Shorten It!</button>
      </div>

      <div>
        {shortenedLinks.map((link, index) => {
          return <p className="text-white" key={index}>{link.shortLink}</p>
        }) }
      </div>
    </div>
  );
}

export default ShortenLink;
