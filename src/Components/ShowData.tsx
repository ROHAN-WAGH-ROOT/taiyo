import { ImCross } from "react-icons/im";
import { useDispatch } from "react-redux";
import { resetForm, setEdit } from "../Reducer/reduce";
import React from "react";
interface Field {
  name: string;
  email: string;
  address: string;
  phone: string;
}

interface ShowDataProps {
  fields: Field[];
}
const ShowData: React.FC<ShowDataProps> = (
  { fields },
  handleEdit: React.FunctionComponent
) => {
  const dispatch = useDispatch();
  return fields.length > 0 ? (
    <div className="xl:2xl:grid grid-cols-3 gap-5 sm:lg:md:flex sm:lg:md:grid-cols-3">
      {fields.map((ele: any, i: number) => {
        return (
          <div className="border block px-5 py-6 rounded-lg shadow-md w-auto">
            <div className="text-left p-2">
              <div className="mr-2">🧑‍🦰{ele.name}</div>
              <div>📬{ele.email}</div>
              <div>📞{ele.phone}</div>
              <div>🏠{ele.address}</div>
            </div>
            <div className="p-2 text-center mt-2">
              <button
                onClick={() => {
                  dispatch(setEdit({ status: true, id: ele.id }));
                }}
                className="mx-2 px-3 py-1 hover:bg-[#aaa] bg-slate-600 border-2 text-white text-base font-sans font-medium"
              >
                Edit
              </button>
              <button
                onClick={() => dispatch(resetForm(ele.id))}
                className="mx-2 px-3 py-1 hover:bg-[#ec8e8e] bg-red-600 border-2 text-white text-base font-sans font-medium"
              >
                Delete
              </button>
            </div>
          </div>
        );
      })}
    </div>
  ) : (
    <div className="flex border-2 p-8 w-96 m-auto justify-center">
      <span className="bg-black w-16 h-10 rounded-full text-center align-middle m-auto justify-center text-white mr-4">
        <ImCross className="relative top-3 text-center w-4 h-4 justify-center m-auto align-middle " />
      </span>
      <div className="text-left">
        No contact found Please add contact from create contact button
      </div>
    </div>
  );
};
export default ShowData;
