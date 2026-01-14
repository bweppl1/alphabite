const ReadingCard = () => {
  const checkAnswer = () => {};
  return (
    <div className="max-w-5xl flex flex-col text-center mx-auto">
      <h1 className="text-4xl p-4 md:p-8 font-black text-raphaelred tracking-wide">
        READING
      </h1>
      <div className="w-3xl bg-darkvanilla rounded-xl p-2 md:p-5 flex flex-col">
        {/* word image */}
        <div className="w-50 h-50 bg-michelangeloorange mx-auto my-2 md:my-4 p-2 md:p-4 rounded-xl">
          image placeholder
        </div>
        {/* user input */}
        <input
          placeholder="type here"
          className="border-0 p-2 md:p-4 mx-auto rounded-xl text-2xl md:text-5xl bg-vanilla"
        />
        {/* action buttons */}
        <div className="flex flex-row w-full gap-5 py-2 md:py-4 justify-center">
          <h2
            onClick={checkAnswer}
            className="py-2 px-6 bg-lgreen rounded-xl font-charcoal cursor-pointer"
          >
            Submit
          </h2>
          <h2
            onClick={checkAnswer}
            className="py-2 px-6 bg-raphaelred rounded-xl font-lightcharcoal cursor-pointer"
          >
            Pass
          </h2>
        </div>
      </div>
    </div>
  );
};

export default ReadingCard;
