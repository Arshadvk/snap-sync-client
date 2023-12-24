import { Routes , Route } from "react-router-dom";
import "./globals.css" ;
import SigninForm from "./_auth/forms/SigninForm";
import SignupForm from "./_auth/forms/SignupForm";
import { Home } from "./_root/pages";
import AuthLayout from "./_auth/AuthLayout";
import RootLayout from "./_root/RootLayout";
import { Toaster } from "./components/ui/toaster";


const App = () => {
  return (
    <main className="flex h-screen">
        <Routes>
            {/*public routes */}

            <Route element={<AuthLayout/>}>
            <Route path="/sign-in" element={<SigninForm/>}/>
            <Route path="/sign-up" element={<SignupForm/>}/>
            </Route>

            {/*private routes */}
            <Route element={<RootLayout/>}>
            <Route index element={<Home/>}/>
            <Route path="/explore" />
            <Route path="/saved" />
            <Route path="/all-users" />
            <Route path="/create-post" />
            <Route path="/update-post/:id" />
            <Route path="/posts/:id" />
            <Route path="/profile/:id" />
            <Route path="/update-profile/:id" />
            </Route>

        </Routes>
        <Toaster />
    </main>
  )
}

export default App
