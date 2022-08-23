import {useState} from "react";

const ContextMenuContainer=({children})=>{
  const {showContextMenu, setShowContextMenu} = useState(false)
  return <>children</>
}

export default ContextMenuContainer
