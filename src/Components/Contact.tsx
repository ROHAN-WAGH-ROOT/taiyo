import React, { useState, useEffect } from "react";
import { addField, setEdit, updateField } from "../Reducer/reduce";
import ShowData from "./ShowData";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useDispatch, useSelector } from "react-redux";

export default function Contact() {
  let gen = Math.floor(Math.random() * 999999999999);
  const [checkData, setCheckData] = useState(false);
  const formData = useSelector((state: any) => state.fields);
  const edit = useSelector((state: any) => state.edit);
  const dispatch = useDispatch();
  const [id, setId] = useState(gen);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [address, setAddress] = useState("");

  useEffect(() => {
    if (edit.status) {
      formData
        .filter((ele: any) => ele.id === edit.id)
        .map((data: any) => {
          setId(data.id);
          setName(data.name);
          setEmail(data.email);
          setPhone(data.phone);
          setAddress(data.address);
          return null;
        });
    }
  }, [edit.status, edit.id, formData]);
  const formVaalues = (value: React.FormEvent<HTMLFormElement>) => {
    value.preventDefault();
    if (name === "" || name === undefined) {
      toast("🧑‍🦰 Enter Name!", {
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
      });
      setCheckData(true);
    } else if (email === "" || name === undefined) {
      toast("📬 Enter Email!", {
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
      });

      setCheckData(true);
    } else if (phone === "" || name === undefined) {
      toast("📞 Enter Phone!", {
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
      });

      setCheckData(true);
    } else if (address === "" || name === undefined) {
      toast("🏠 Enter address!", {
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
      });
      setCheckData(true);
    } else {
      setCheckData(false);
      if (edit.status) {
        setId(edit.id);
        dispatch(updateField({ id, name, email, phone, address }));
      } else {
        setId(gen);
        dispatch(addField({ id, name, email, phone, address }));
      }
      handleReset();
      setName("");
      setEmail("");
      setPhone("");
      setAddress("");
      setCheckData(false);
    }
  };

  const handleReset = () => {
    dispatch(setEdit(false));
    setName("");
    setEmail("");
    setPhone("");
    setAddress("");
    setCheckData(false);
  };
  return (
    <div>
      {!checkData && (
        <div className="flex flex-col text-center m-auto w-52">
          <button
            className="border px-4 py-2 bg-black text-white hover:bg-slate-500"
            onClick={() => setCheckData(true)}
          >
            Create Contact
          </button>
        </div>
      )}
      {(checkData || edit.status) && (
        <div className="flex border-2 p-10 rounded-lg top-10 z-10">
          {/* <div className="text-center">Create Contact Screen</div> */}
          <form
            onSubmit={formVaalues}
            onReset={handleReset}
            className="flex flex-col w-96 text-center m-auto xl:2xl:justify-center"
          >
            <input
              className="m-2 py-3 px-3 outline-none border-[#aaa] focus-visible:placeholder-amber-700"
              placeholder="name"
              name="name"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
            <input
              className="m-2 py-3 px-3 outline-none border-[#aaa] focus-visible:placeholder-amber-700"
              placeholder="email"
              name="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            <input
              className="m-2 py-3 px-3 outline-none border-[#aaa] focus-visible:placeholder-amber-700"
              placeholder="phone"
              name="phone"
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
            />
            <textarea
              className="m-2 py-3 px-3 outline-none border-[#aaa] focus-visible:placeholder-amber-700"
              placeholder="address"
              name="address"
              value={address}
              onChange={(e) => setAddress(e.target.value)}
            />
            <div className="mt-5">
              <button
                className="outline-none w-32 border py-2 px-5 font-sans font-medium text-xl bg-black text-white hover:bg-[#8270C1]"
                type="submit"
              >
                {edit.status ? "update" : "save"}
              </button>
              <button
                type="reset"
                className="outline-none w-32 border py-2 px-5 font-sans font-medium text-xl hover:bg-[#aaa] bg-black text-white"
              >
                cancel
              </button>
            </div>
          </form>
        </div>
      )}
      {!edit.status && !checkData && (
        <div className="block mt-10 ml-0">
          <ShowData fields={formData} />
        </div>
      )}
      <ToastContainer
        position="top-right"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="light"
      />
    </div>
  );
}
