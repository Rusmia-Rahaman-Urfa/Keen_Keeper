import 'react-toastify/dist/ReactToastify.css';
import './globals.css';
import { FriendProvider } from '@/context/FriendContext';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { ToastContainer } from 'react-toastify';

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="bg-[#F9FBFA]">
        <FriendProvider>
          <Navbar /> 
          <main className="min-h-screen">
            {children}
          </main>
          <Footer />
          <ToastContainer position="bottom-right" theme="colored" />
        </FriendProvider>
      </body>
    </html>
  );
}