import { useSetRecoilState } from "recoil";
import { filterAtom } from "../store/atoms/Todo";

export default function Filter() {
  const setFilter = useSetRecoilState(filterAtom);
  return (
    <div>
      <input
        type="text"
        placeholder="filter"
        onChange={(e) => {
          setFilter(e.target.value);
        }}
      />
    </div>
  );
}
