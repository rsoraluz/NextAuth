import { useEffect } from "react";

const Anuncio=()=>{
    useEffect(()=>{
        window.googletag = window.googletag || {};
        googletag.cmd=googletag.cmd || {}
        googletag.cmd.push (function () {
           
              googletag.defineSlot('/21886670345/eltiempo.pe_300x600_side_rail_left', [[300,600],[160,600],[300,250],[300,300]], 'eltiempo_pe_side_rail_left').addService(googletag.pubads()); 
              googletag.pubads().enabledSingleRequest()
              googletag.enableservices()
        })
        googletag.cmd.push(function(){
            googletag.display('eltiempo_pe_side_rail_left')
        })        
    },[])
}
export default Anuncio