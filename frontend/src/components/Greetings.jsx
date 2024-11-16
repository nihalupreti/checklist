const Greetings = ({ userName, date }) => {
  return (
    <div className="inline-flex flex-col">
      <h1 className="text-3xl font-semibold">Hello {userName}!</h1>
      <h3 className="text-gray-700">Today, {date}</h3>
    </div>
  );
};

export default Greetings;
