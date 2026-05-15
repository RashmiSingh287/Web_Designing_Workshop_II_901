function App() {
  return (
    <div>
      <h1>Welcome rashmi in react</h1>
      <p>this is my first react app</p>
    </div>
  );
}

export default App;

//import App from "./App";
function StudentCard(props)
{
    return (
        <div>
        <h1>Student Card Information</h1>
        <h2>Name: {props.name}</h2>
        <p>Age: {props.age}</p>
        <p>Course: {props.course}</p>
        <p>Marks: {props.marks}</p>
        </div>
    );
}

export default StudentCard;

import StudentCard from "./StudentCard.jsx";
function App() {
  return (
    <div>
      <h1 style={{color:'blue' , textAlign:'center', backgroundColor:'lightcoral'}}>Welcome Pawani dubey in react</h1>
      <p style={{color:'purple' , textAlign:'center'}} >this is my first react app</p>
      <StudentCard name="Pawani Dubey" course="Computer Science Engineering" Age="19" Marks="100"/>
    </div>
  );
}
export default App;
