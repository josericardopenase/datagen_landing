import Image from "next/image";
import {FiArrowUpRight} from "react-icons/fi";
import {PiTargetBold} from "react-icons/pi";
import {TbCodeOff} from "react-icons/tb";
import {IoRocket} from "react-icons/io5";

export default function Home() {
  return (
      <>
          <section id="inicio" className="
                max-w-[900px] w-full mx-auto px-4
                flex flex-col justify-center items-center mt-12 md:mt-28 text-center ">
              <h1 className="text-3xl md:text-4xl text-light-100 font-semibold">Integrating Generative AI into your applications has never been easier.</h1>
              <h2 className="text-base md:text-xl mt-5 text-light-500">
                  We are the open-source, no-code solution for creating AI processing pipelines.
              </h2>

              <div className="mt-10 mb-10 flex gap-3 flex-col">
                  <a
                      className="pl-6 flex items-center gap-3 py-2 px-3 text-sm bg-white text-gray-800 font-semibold rounded-full  cursor-pointer"
                  >
                      Get started
                      <div
                          className="w-[30px] h-[30px] bg-dark-800 rounded-full flex justify-center items-center text-white">
                          <FiArrowUpRight size={15}></FiArrowUpRight>

                      </div>
                  </a>
              </div>

              <div className="w-full h-[400px] rounded-t-3xl overflow-hidden mt-12">
                  <picture>
                      <Image src="/home.png" alt="Responsive" width={1000} height={600}/>
                  </picture>
              </div>
          </section>
          <section className="w-full bg-dark-800 md:py-16">
              <section className="
                    max-w-[900px] w-full mx-auto px-4
                    flex flex-col justify-center items-center  text-center
                    text-white
                        gap-10
                     ">
                  <h1 className="text-3xl md:text-3xl text-light-100 font-semibold">¿How it works?</h1>
                  <section className="w-full grid grid-cols-2 mt-10 gap-4">
                      <div className="p-4 text-left rounded-xl">
                          <div
                              className="font-bold italic text-2xl w-[50px] h-[50px] bg-dark-700 rounded-xl mb-3 flex justify-center items-center">
                              1.
                          </div>
                          <h1 className="font-semibold text-xl ">
                              Create your AI use case effortlessly with our Next Gen Builder.
                          </h1>
                          <p className="mt-3 text-light-500">

                              Simply drag and drop AI task blocks like image removal, object detection, image generation, and more, then connect them to build your use case.
                          </p>
                      </div>
                      <div>
                          <Image width={1000} height={500} src="/img.png" alt="hola" className="rounded-3xl"></Image>
                      </div>
                  </section>

                  <section className="w-full grid grid-cols-2 mt-10 gap-4">
                      <div className="p-4 text-left rounded-xl grid order-1">
                          <div
                              className="font-bold italic text-2xl w-[50px] h-[50px] bg-dark-700 rounded-xl mb-3 flex justify-center items-center">
                              2.
                          </div>
                          <h1 className="font-semibold text-xl ">
                              Choose between the most cutting-edge open-source or proprietary models.
                          </h1>
                          <p className="mt-3 text-light-500" >
                              Once your use case is built, simply select the cutting-edge models to run your task blocks. We offer the best options from both open-source and proprietary models.                          </p>
                      </div>
                      <div>
                          <Image width={1000} height={500} src="/img2.png" alt="hola" className="rounded-3xl"></Image>
                      </div>
                  </section>

                  <section className="w-full grid grid-cols-2 mt-10 gap-4">
                      <div className="p-4 text-left rounded-xl grid">
                          <div
                              className="font-bold italic text-2xl w-[50px] h-[50px] bg-dark-700 rounded-xl mb-3 flex justify-center items-center">
                              3.
                          </div>
                          <h1 className="font-semibold text-xl ">
                              Deploy instantly in the platform you want
                          </h1>
                          <p className="mt-3 text-light-500">
                              You can choose between your favourite cloud providers to deploy your applications
                              or if hardware is not something you worry about, just self-host it.
                          </p>
                      </div>
                      <div>
                          <Image width={1000} height={500} src="/img3.png" alt="hola" className="rounded-3xl"></Image>
                      </div>
                  </section>

                  <section className="w-full grid grid-cols-2 mt-10 gap-4">
                      <div className="p-4 text-left rounded-xl grid order-1">
                          <div
                              className="font-bold italic text-2xl w-[50px] h-[50px] bg-dark-700 rounded-xl mb-3 flex justify-center items-center">
                              4.
                          </div>
                          <h1 className="font-semibold text-xl ">
                              ¿Have you build something great? Share it or Sell it 🤑
                          </h1>
                          <p className="mt-3 text-light-500">
                              If you think you have developed a AI pipeline that could be used by
                              other people, just sell it or share it in our pipeline storage.
                          </p>
                      </div>
                      <div>
                          <Image width={1000} height={500} src="/img4.png" alt="hola" className="rounded-3xl"></Image>
                      </div>
                  </section>
              </section>


          </section>
          <section className="w-full bg-dark-800 md:py-16">
              <section className="
                    max-w-[900px] w-full mx-auto px-4
                    flex flex-col justify-center items-center  text-center
                    text-white
                     ">
                  <h1 className="text-3xl md:text-3xl text-light-100 font-semibold">¿What makes us special?</h1>
                  <section className="w-full grid grid-cols-3 mt-10 gap-4">
                      <div className="bg-dark-700 p-7 text-left rounded-xl">
                          <div
                              className="w-[50px] h-[50px] bg-dark-500 rounded-xl mb-3 flex justify-center items-center">
                              <PiTargetBold size={25}></PiTargetBold>
                          </div>
                          <h1 className="font-semibold text-xl ">
                              Focus on the use case not the AI
                          </h1>
                          <p className="mt-3">
                          Think about your business use case first, then we offer you
                              the best state of the art models to make it perform goty.
                          </p>
                      </div>
                      <div className="bg-dark-700 p-7 text-left rounded-xl">
                          <div
                              className="w-[50px] h-[50px] bg-dark-500 rounded-xl mb-3 flex justify-center items-center">
                              <TbCodeOff size={25}></TbCodeOff>
                          </div>
                          <h1 className="font-semibold text-xl ">
                              No code from up the ground
                          </h1>
                          <p className="mt-3">
                              ¿You dont know how to code? Don´t worry, we are build up from the ground to be a
                              entirely no-code platform.
                          </p>
                      </div>

                      <div className="bg-dark-700 p-7 text-left rounded-xl">
                          <div
                              className="w-[50px] h-[50px] bg-dark-500 rounded-xl mb-3 flex justify-center items-center">
                              <IoRocket size={25}></IoRocket>
                          </div>
                          <h1 className="font-semibold text-xl ">
                              Totally scalable
                          </h1>
                          <p className="mt-3">
                              You can choose to deploy your AI pipelines with your favourite cloud providers or
                              even self host it if you want. You pay, you choose.
                          </p>
                      </div>
                  </section>
              </section>
          </section>


      </>
  );
}
