function ShortenLink() {
  return (
    <div className="bg-indigo-950 rounded-xl">
      <div className="bg bg-[url('/images/bg-shorten-mobile.svg')] bg-[top_0px_right_0px] flex flex-col p-3">
        <input className="mb-2 rounded-lg" type="text" placeholder="Shorten a link here..." />
        <button className="bg-teal-300 rounded-lg">Shorten It!</button>
      </div>
    </div>
  );
}

export default ShortenLink;
