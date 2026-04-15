import Image from 'next/image';
import Link from 'next/link';

const Footer = () => {
  return (
    <div className="footer-section pt-20 pb-8 bg-[#244d3f]">
      <div className="my-container ">
        <div className="flex flex-col justify-center items-center">
          <Link href="/">
            <Image
              src="/assets/logo-xl.png"
              alt="footer logo"
              width={412}
              height={60}
              className="w-52 xs:w-80 sm:w-96 md:w-[412px] h-auto"
            />
          </Link>
          <p className="text-sm xs:text-base sm:text-[16px] text-base-100 mt-4 mb-6 px-4 text-center">
            Your personal shelf of meaningful connections. Browse, tend, and
            nurture the relationships that matter most.
          </p>
        </div>
        <div>
          <h3 className="text-xl xs:text-2xl text-center text-base-100 font-medium">
            Social Links
          </h3>
          <div className="flex gap-4 justify-center items-center mt-4">
            <Link
              href="https://www.instagram.com/?hl=en"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Image
                src="/assets/instagram.png"
                alt="footer logo"
                width={40}
                height={40}
              />
            </Link>
            <Link
              href="https://www.facebook.com/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Image
                src="/assets/facebook.png"
                alt="footer logo"
                width={40}
                height={40}
              />
            </Link>
            <Link
              href="https://x.com/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Image
                src="/assets/twitter.png"
                alt="footer logo"
                width={40}
                height={40}
              />
            </Link>
          </div>
        </div>
        <div className="divider divider-[#1a8862] mt-10 mb-8"></div>
        <div className="text-[#fafafa] flex justify-center items-center gap-5 flex-wrap sm:justify-between">
          <p>© 2026 KeenKeeper. All rights reserved.</p>
          <div className="flex gap-4 flex-wrap items-center mt-2 ">
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
