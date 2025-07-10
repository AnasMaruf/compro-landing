import Image from "next/image";

function Footer() {
  return (
    <footer className="section-footer">
      <div className="bg-black">
        <div className="section-space">
          <div className="container">
            <div className="grid grid-cols-1 gap-10 md:grid-cols-2 lg:grid-cols-[1fr_minmax(0,0.8fr)] lg:gap-20 text-white">
              <div>
                <div className="space-y-6">
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
              </div>
              <div>Form Contact</div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
