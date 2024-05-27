import "./SideBar.css"

export default function SideBar({setGeneration}) {
  return (
    <div className="sideBar-container">


      <h3>Go to:</h3>
      <p onClick={()=>setGeneration(1)}>Genaration I</p>
      <p onClick={()=>setGeneration(2)}>Genaration II</p>
      <p onClick={()=>setGeneration(3)}>Genaration III</p>
      <p onClick={()=>setGeneration(4)}>Genaration IV</p>
      <p onClick={()=>setGeneration(5)}>Genaration V</p>
      <p onClick={()=>setGeneration(6)}>Genaration VI</p>
      <p onClick={()=>setGeneration(7)}>Genaration VII</p>
      <p onClick={()=>setGeneration(8)}>Genaration VII</p>
      <p onClick={()=>setGeneration(9)}>Genaration IX</p>

      
    </div>
  )
}
