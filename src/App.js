 
import { info } from "autoprefixer";
import { useEffect, useState } from "react";
import "./App.css";
import Loading from "./Loading";
import Tours from "./Tours";


const url = "https://course-api.com/react-tours-project";

function App() {
const [loading ,setLoading] =useState(true);
const [tours, setTours] = useState([]);

const removeTour =(id) => {
  const newTours = tours.filter((tour) => tour.id !== id);
setTours(newTours);
}



const fetchTours = async () => {
setLoading(true);  try {
  const response = await fetch(url);
  const tours = await response.json();
  setLoading(false);
  setTours(tours);
} catch (error) {
  setLoading(false);
  console.log(error);
}
}

useEffect(()=>{ 
  fetchTours();
}, []);

 

if(loading){
return (
  <>
    <Loading />
  </>
);
}


if(tours.length === 0){
  return (
    <div className="flex flex-col  justify-center items-center">
      <p className="m-5  font-bold text-xl text-slate-900">no tours left</p>
      <button
        className="m-5 px-10 py-3 bg-green-900 rounded-md font-bold text-white"
        onClick={fetchTours}
      >
        Refresh
      </button>
    </div>
  );
}




  return (
    <>
      <Tours tours={tours} removeTour={removeTour} />
    </>
  ); 
}

export default App;
