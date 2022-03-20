import Square from "./components/Square"
import { useState,useEffect } from "react"
import{parrens} from "./parrens"
import Header from "./components/Header"
import Result from "./components/Result"
const App = () => {

  const [player,setplayer]=useState<string>("X")
  const [bord, setbord] = useState<any>(["","","","","","","","",""])
  const [result, setwinner] = useState<any>({winner:"none",state:"none"})
  const [message,setmessage] = useState<any>('')
  useEffect(() => {
    checkWin();
    checkIfTie();

    if (player == "X") {
      setplayer("O");
    } else {
      setplayer("X");
    }
  }, [bord]);

    useEffect(() => {
    if (result.state != "none") {
      setmessage(`Game Finished! Winning Player: ${result.winner}`);
      setbord(["","","","","","","","",""]);
      restartGame();
    }
    
       
  }, [result]);

  const change =(square:any)=>{
    setbord(bord.map((val:any,index:number)=>{
      if(index==square && val==''){
        return player
      }
      return val
    }))

  }
const checkWin=()=>{
  parrens.forEach((parren:any)=>{
  const firstparren:string=bord[parren[0]];
  if(firstparren =='')return;
  let foundwiner:boolean=true;
  parren.forEach((index:number)=>{
    if(bord[index] != firstparren){

      foundwiner=false;

    }
  });
   if(foundwiner){
    setwinner({winner:player,state:"win"})
  }
  });
}
const  checkIfTie=()=>{
  //no weners
  if(result.state=="none"){
    let founddraw:boolean=true;
    bord.forEach((val:any)=>{
      if(val==''){
        founddraw=false;
      }
    });
    if(founddraw){
      setwinner({winner:"No one",state:"Tie"})
    }
  }
}
  const restartGame = () => {
    setbord(["", "", "", "", "", "", "", "", ""]);
    setplayer("O");
  };
   
  
  
  return (
    <div className='space-y-2 '>
       <Header />
   <div className="flex align-center w-full h-full justify-center">
  
     <div className=" flex flex-col w-[400px] h-[400px] mt-6 border-[1px]">
    
    <div className="flex-row flex flex-[33%]">
    <Square value={bord[0]} click={()=>change(0)}/>
      <Square value={bord[1]} click={()=>change(1)}/>
        <Square value={bord[2]} click={()=>change(2)}/>
    </div>
      <div className="flex-row flex flex-[33%]">
    <Square value={bord[3]} click={()=>change(3)}/>
      <Square value={bord[4]} click={()=>change(4)}/>
        <Square value={bord[5]} click={()=>change(5)}/>
    </div>

<div className="flex-row flex flex-[33%]">
    <Square value={bord[6]} click={()=>change(6)}/>
      <Square value={bord[7]} click={()=>change(7)}/>
        <Square value={bord[8]} click={()=>change(8)}/>
  </div>
   

    
     </div>
    </div>
  <Result results={message} />
    </div>
  )
}

export default App
function checkwin() {
  throw new Error("Function not implemented.")
}

