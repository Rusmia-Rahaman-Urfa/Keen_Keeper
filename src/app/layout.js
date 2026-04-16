import './globals.css';

import { FriendProvider } from '../context/FriendContext'; // Fixed path

import Navbar from '../components/Navbar'; // Fixed path

import Footer from '../components/Footer'; // Fixed path

import { ToastContainer } from 'react-toastify';

import 'react-toastify/dist/ReactToastify.css';



export default function RootLayout({ children }) {

  return (

    <html lang="en">

      <body className="bg-[#F9FBFA]">

        <FriendProvider>

          {/* THE FIX: Add the Navbar here */}

          <Navbar />

         

          <main className="min-h-screen">

            {children}

          </main>

         

          <Footer />

         

          <ToastContainer position="bottom-right" />

        </FriendProvider>

      </body>

    </html>

  );

}