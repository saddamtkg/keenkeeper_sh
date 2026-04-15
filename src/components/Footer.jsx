import Image from 'next/image';
import Link from 'next/link';

const Footer = () => {
  return (
    <div className="footer-section py-20 bg-[#244d3f]">
      <div className="my-container ">
        <div className="flex flex-col justify-center items-center">
          <Image
            src="/assets/logo-xl.png"
            alt="footer logo"
            width={412}
            height={60}
          />
          <p className="text-[16px] text-base-100 mt-4 mb-6">
            Your personal shelf of meaningful connections. Browse, tend, and
            nurture the relationships that matter most.
          </p>
        </div>
        <div>
          <h3 className="text-2xl text-center text-base-100 font-medium">
            Social Links
          </h3>
          <div className="flex gap-4 justify-center items-center mt-4">
            <Image
              src="/assets/instagram.png"
              alt="footer logo"
              width={40}
              height={40}
            />
            <Image
              src="/assets/facebook.png"
              alt="footer logo"
              width={40}
              height={40}
            />
            <Image
              src="/assets/twitter.png"
              alt="footer logo"
              width={40}
              height={40}
            />
          </div>
        </div>
        <div className="divider divider-[#1a8862] mt-10 mb-8"></div>
        <div className="text-base-100">
          <p>© 2026 KeenKeeper. All rights reserved.</p>
          <div>
            <Link href="/">Privacy Policy</Link>
            <Link href="/">Terms of Service</Link>
            <Link href="/">Cookies</Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
