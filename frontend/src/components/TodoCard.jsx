import CheckBox from "./CheckBox";

const TodoCard = ({ title, due }) => {
  return (
    <div className="flex shadow-md rounded-md justify-between">
      <div className="flex items-center">
        <div>
          <CheckBox />
        </div>
        <div className="font-semibold">{title}</div>
      </div>
      <div className="flex items-center">
        <div className="bg-red-200 p-1.5 rounded-md text-red-700 font-medium">
          {due}
        </div>
        <button className="bg-gray-200 rounded-md m-2">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth="1"
            stroke="currentColor"
            className="size-9"
          >
            <path
              className="stroke-gray-600"
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M12 7.5a.75.75 0 1 1 0-1.5.75.75 0 0 1 0 1.5ZM12 12a.75.75 0 1 1 0-1.5.75.75 0 0 1 0 1.5ZM12 16.5a.75.75 0 1 1 0-1.5.75.75 0 0 1 0 1.5Z"
            />
          </svg>
        </button>
      </div>
    </div>
  );
};

export default TodoCard;
