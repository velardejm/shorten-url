function ShortenLink() {
  return (
    <div className="bg-indigo-950 rounded-xl relative -top-16">
      <div className="rounded-xl bg bg-[url('/images/bg-shorten-mobile.svg')] bg-[top_-25px_right_0px] flex flex-col p-4">
        <input className="mb-4 rounded-lg p-2" type="text" placeholder="Shorten a link here..." />
        <button className="btn rounded-lg">Shorten It!</button>
      </div>
    </div>
  );
}

export default ShortenLink;
