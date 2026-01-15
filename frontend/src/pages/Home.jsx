const Home = () => {
  return (
    <div className="w-screen">
      <div className="flex flex-col md:flex-row">
        <div className="bg-lgreen flex-1 h-50 md:h-100">Reading</div>
        <div className="bg-bananayellow flex-1 h-50 md:h-100">Spelling</div>
      </div>
    </div>
  );
};

export default Home;
