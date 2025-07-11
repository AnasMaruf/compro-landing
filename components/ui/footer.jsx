import Image from "next/image";
import { Input } from "./input";
import { Textarea } from "./textarea";
import { Button } from "./button";

function Footer() {
  return (
    <footer className="section-footer">
      <div className="bg-black">
        <div className="section-space">
          <div className="container">
            <div className="grid grid-cols-1 gap-10 md:grid-cols-2 lg:grid-cols-[1fr_minmax(0,0.8fr)] lg:gap-20 ">
              <div>
                <div className="space-y-6 text-secondary">
                  {" "}
                  <h2>
                    Let's start a{" "}
                    <span>
                      <Image
                        src="/shape-light-lime-5-arms-star.svg"
                        alt="icon shape text"
                        width={74}
                        height={70}
                        className="relative inline-block w-8 md:w-10 lg:w-14"
                      />
                    </span>{" "}
                    project together
                  </h2>{" "}
                  <p className="section-description">
                    We work closely with our clients to understand their
                    objectives, target audience, and unique needs. We use our
                    creative skills to translate these requirements and
                    practical design solutions.
                  </p>
                </div>
                <div className="grid grid-cols-1 items-center">
                  <ul className="flex flex-col gap-3 mt-12">
                    <li>
                      <span className="block font-title text-[21px] font-bold leading-[1.42] text-primary">
                        Give us a call:
                      </span>
                      <a
                        href="tel:123456789"
                        className="text-secondary text-[21px] leading-[1.42]"
                      >
                        (123) 456-7898
                      </a>
                    </li>
                    <li>
                      <span className="block font-title text-[21px] font-bold leading-[1.42] text-primary">
                        Send us an email:
                      </span>
                      <a
                        href="mailto:yourmail@email.com"
                        className="text-secondary text-[21px] leading-[1.42]"
                      >
                        yourmail@email.com
                      </a>
                    </li>
                  </ul>
                  <div className="mt-11 flex w-full gap-4">
                    <a
                      href="https://x.com"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="group/link relative inline-flex h-[34px] w-[34px] items-center justify-center rounded-[50%] border border-secondary bg-black transition-all duration-300 hover:border-black hover:bg-primary hover:shadow-[0_1.5px_0_0] hover:shadow-secondary"
                    >
                      <Image
                        src="/icon-logo-buttery-white-twitter.svg"
                        alt="icon-logo-buttery-white-twitter"
                        width="19"
                        height="16"
                        className="opacity-100 transition-all duration-300 group-hover/link:opacity-0"
                      />
                      <Image
                        src="/icon-logo-black-twitter.svg"
                        alt="icon-logo-black-twitter"
                        width="19"
                        height="16"
                        className="absolute opacity-0 transition-all duration-300 group-hover/link:opacity-100"
                      />
                    </a>
                    <a
                      href="https://facebook.com"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="group/link relative inline-flex h-[34px] w-[34px] items-center justify-center rounded-[50%] border border-secondary bg-black transition-all duration-300 hover:border-black hover:bg-primary hover:shadow-[0_1.5px_0_0] hover:shadow-secondary"
                    >
                      <Image
                        src="/icon-logo-buttery-white-facebook.svg"
                        alt="icon-logo-buttery-white-facebook"
                        width="10"
                        height="17"
                        className="opacity-100 transition-all duration-300 group-hover/link:opacity-0"
                      />
                      <Image
                        src="/icon-logo-black-facebook.svg"
                        alt="icon-logo-black-facebook"
                        width="10"
                        height="17"
                        className="absolute opacity-0 transition-all duration-300 group-hover/link:opacity-100"
                      />
                    </a>
                    <a
                      href="https://instagram.com"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="group/link relative inline-flex h-[34px] w-[34px] items-center justify-center rounded-[50%] border border-secondary bg-black transition-all duration-300 hover:border-black hover:bg-primary hover:shadow-[0_1.5px_0_0] hover:shadow-secondary"
                    >
                      <Image
                        src="/icon-logo-buttery-white-instagram.svg"
                        alt="icon-logo-buttery-white-instagram"
                        width="17"
                        height="18"
                        className="opacity-100 transition-all duration-300 group-hover/link:opacity-0"
                      />
                      <Image
                        src="/icon-logo-black-instagram.svg"
                        alt="icon-logo-black-instagram"
                        width="17"
                        height="18"
                        className="absolute opacity-0 transition-all duration-300 group-hover/link:opacity-100"
                      />
                    </a>
                    <a
                      href="https://linkedin.com"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="group/link relative inline-flex h-[34px] w-[34px] items-center justify-center rounded-[50%] border border-secondary bg-black transition-all duration-300 hover:border-black hover:bg-primary hover:shadow-[0_1.5px_0_0] hover:shadow-secondary"
                    >
                      <Image
                        src="/icon-logo-buttery-white-linkedin.svg"
                        alt="icon-logo-buttery-white-linkedin"
                        width="17"
                        height="18"
                        className="opacity-100 transition-all duration-300 group-hover/link:opacity-0"
                      />
                      <Image
                        src="/icon-logo-black-linkedin.svg"
                        alt="icon-logo-black-linkedin"
                        width="17"
                        height="18"
                        className="absolute opacity-0 transition-all duration-300 group-hover/link:opacity-100"
                      />
                    </a>
                  </div>
                </div>
              </div>
              <div>
                <div>
                  <h5 className="mb-[30px] block text-secondary">
                    Send us a message
                  </h5>
                  <form className="flex flex-col gap-y-6">
                    <Input placeholder="Your name" />
                    <Input type="email" placeholder="Your email address" />
                    <Input type="tel" placeholder="Your phone number" />
                    <Textarea placeholder="Write your message here ..." />
                    <Button
                      type="submit"
                      className="relative justify-start pr-20 md:pr-[118px]"
                      size="lg"
                    >
                      Send Message
                      <span className="absolute right-[5px] inline-flex h-[50px] w-[50px] items-center justify-center rounded-[50%] bg-black">
                        <Image
                          src="/icon-buttery-white-arrow-right.svg"
                          alt="icon-buttery-white-arrow-right"
                          width="34"
                          height="28"
                        />
                      </span>
                    </Button>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
