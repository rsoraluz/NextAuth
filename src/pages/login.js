import { signIn, useSession } from "next-auth/react"
import { useRouter } from "next/router"
import styles from "@/styles/login.module.css"
import Anuncio from "@/Components/Anuncio1"

export default function Login(){

    const router=useRouter()
    const { status}= useSession()

    if(status!= "loading" && status === "authenticated"){
        router.push("/")
    }
    else if(status!= "loading" && status === "unauthenticated"){
        console.log("Error de password")
    }

    function hanledClickGoogle(){
        signIn("google")
      
    }
    function hanledClickGitHub(){
        signIn("github")
      
     }

    function hanledClickFacebook(){
        signIn("facebook")
      
     }

     Anuncio()

    
    
    return(
        <div>
            <button className={styles.btn} onClick={ hanledClickGoogle } >Sigin with google</button>
       
            <button className={styles.btn} onClick={ hanledClickGitHub } >Sigin with GitHub</button>

            <button className={styles.btn} onClick={ hanledClickFacebook } >Sigin with Facebook</button>

           <div id="ltiempo_pe_side_rail_left" style={{width:"320px",height:"100px"}}>

           </div>
        </div>
       
        
    )
}