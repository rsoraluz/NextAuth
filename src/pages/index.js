import styles from "@/styles/Home.module.css";
import { useSession, signOut } from "next-auth/react";
import { useRouter } from "next/router";

export default function Home() {
  const { data: session, status } = useSession();
  const router = useRouter();

  console.log("session",session)

  if (status === "loading") {
    return <p>Cargando...</p>;
  }

  if (status === "unauthenticated") {
    router.push("/login")
  }


  return (<div>
    {session ? (<div>
      <h1>{session.user.name}</h1>
      <p>{session.user.email}</p>
       <img src={session.user.image} alt="" /> 
       </div> ) : <p>Cargando</p>
      }   
      <button onClick={()=> signOut()}>Logout</button>
    </div>
  );
}