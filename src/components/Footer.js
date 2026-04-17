import Image from 'next/image';
import Link from 'next/link';

export default function Footer() {
  return (
    <footer className="bg-[#1D3D33] text-white mt-20 pt-16 pb-8 px-6">
      <div className="container mx-auto text-center">
        <Image src="/KeenKeeper.png" alt="Logo" width={180} height={50} className="mx-auto mb-6 brightness-0 invert" />
        <p className="max-w-md mx-auto opacity-70 mb-8 text-sm">
          Keep your professional and personal relationships alive with automated tracking and smart check-ins.
        </p>
        
        {/* Social Icons - Requirement 8.3 */}
        <div className="flex justify-center gap-6 mb-12">
          <Link href="#"><Image src="/Facebook.png" width={24} height={24} alt="FB" className="opacity-80 hover:opacity-100" /></Link>
          <Link href="#"><Image src="/Instagram.png" width={24} height={24} alt="IG" className="opacity-80 hover:opacity-100" /></Link>
          <Link href="#"><Image src="/Twitter.png" width={24} height={24} alt="TW" className="opacity-80 hover:opacity-100" /></Link>
        </div>

        <div className="border-t border-white/10 pt-8 flex flex-col md:flex-row justify-between text-xs opacity-50">
          <p>© 2026 KeenKeeper. All rights reserved.</p>
          <div className="flex gap-4 mt-4 md:mt-0">
            <Link href="#">Privacy Policy</Link>
            <Link href="#">Terms of Service</Link>
            <Link href="#">Cookies</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}