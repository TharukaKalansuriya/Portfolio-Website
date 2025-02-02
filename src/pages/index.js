import Layout from '@/components/Layout';
import Head from 'next/head';
import profilePic from "../../public/images/profile/mypic2.png";
import Image from 'next/image';
import AnimatedText from '@/components/AnimatedText';
import Link from 'next/link';
import { LinkArrow } from '@/components/Icons';

export default function Home() {
  return (
    <>
      <Head>
        <title>Tharuka T.K. | Portfolio</title>

      </Head>
      <main
        className="flex items-center text-dark w-full"

      >
        <Layout className="w-full">
          <div className="flex flex-wrap items-center justify-between w-full h-full">
            {/* Profile Picture Section */}
            <div className="w-auto md:w-1/2 text-center md:text-left flex justify-center items-center">
              <Image
                src={profilePic}
                alt="Tharuka T.K.'s Profile Picture"
                className="w-[60%] h-auto max-w-sm md:max-w-md lg:max-w-lg rounded-lg"
                priority
              />
            </div>

            {/* Animated Text and Description */}
            <div className="w-full md:w-1/2 mt-4 md:mt-0 text-center md:text-left flex flex-col justify-center items-center md:items-start">
              <AnimatedText
                text="Transforming Ideas into Apps, Web Solutions, and IoT"
                className="!text-4xl md:!text-5xl lg:!text-6xl !text-left"
              />
              <p className="my-4 text-base font-medium md:text-sm text-center md:text-left max-w-lg">
                As a skilled full-stack developer, I am dedicated to turning ideas into innovative web applications.
                Explore my latest projects and articles, showcasing my expertise in React.js and web development.
              </p>
              <div className='flex items-center self-start mt-2'>
                <Link href="/tharukaK.pdf" target={"_blank"}
                  className="flex items-center bg-dark text-light p-2.5 px-6
            rounded-lg text-lg font-semibold hover:bg-light hover:text-dark 
            border-2 border-solid border-transparent hover:border-dark"
                  download={true}
                >Resume
                  <LinkArrow className={"w-6 ml-1"} />

                </Link>
                <Link href="mailto:tharukakalansuiriya@gmail.com" className="ml-4 text-lg font-medium capitalize text-dark underline">
                  E-Mail
                </Link>

              </div>
            </div>
          </div>
        </Layout>
      </main>
    </>
  );
}
