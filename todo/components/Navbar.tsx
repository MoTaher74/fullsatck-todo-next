import { SignedIn, SignedOut, SignInButton, UserButton } from "@clerk/nextjs";
import ModeToggle from "./ModeToggle";


const Navbar =()=>{
return (
<nav className="container mx-auto my-16  flex items-center justify-between">
   <div>
    <h1 className="text-3xl">TODO</h1>
   </div>
   <div className="flex items-center gap-4">
     <ModeToggle/>
          <SignedIn>
        <UserButton />
      </SignedIn>
      <SignedOut>
        <SignInButton />
      </SignedOut>
   </div>
</nav>

)
}

export default Navbar ;