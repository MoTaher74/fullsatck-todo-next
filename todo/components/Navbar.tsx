import { SignedIn, SignedOut, SignInButton, UserButton } from "@clerk/nextjs";
import ModeToggle from "./ModeToggle";
import Image from 'next/image'

const Navbar =()=>{
return (
<nav className="container mx-auto my-16 px-5  flex items-center justify-between">
   <div>
    <h1 className="text-3xl flex items-center gap-2 ">
<Image src="/logo.svg" alt="logo" width={50} height={50}/>
      Todo 
    </h1>
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