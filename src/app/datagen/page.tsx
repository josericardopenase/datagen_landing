import Image from "next/image";
import {FiArrowUpRight} from "react-icons/fi";
import {PiTargetBold} from "react-icons/pi";
import {TbCodeOff} from "react-icons/tb";
import {IoRocket} from "react-icons/io5";
import {BiCog, BiData, BiImage, BiTrash} from "react-icons/bi";
import React from "react";
import {FaSailboat} from "react-icons/fa6";
import {FaBalanceScale} from "react-icons/fa";

export default function Home() {

    const items = [
        {
            title: "Generate detection datasets",
            description: "",
            icon: <FaSailboat></FaSailboat>
        },
        {
            title: "Data augmentation",
            description: "",
            icon: <BiImage></BiImage>
        },
        {
            title: "Dataset balancing",
            description: "",
            icon: <FaBalanceScale></FaBalanceScale>
        },
        {
            title: "Edge case generation",
            description: "",
            icon: <BiCog></BiCog>
        },
    ]

  return (
      <>
          <section id="inicio" className="
                max-w-[900px] w-full mx-auto px-4
                flex flex-col justify-center items-center mt-12 md:mt-28 text-center ">
              <h1 className="text-3xl md:text-4xl text-light-100 font-semibold">
                Generate Synthetic Datasets for small object detection with
                Zero Labeling
              </h1>
              <h2 className="text-base md:text-xl mt-5 text-light-500">
                  We use Generative AI pipelines to create datasets for you.
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

              <div className="w-full h-[400px] rounded-t-3xl overflow-hidden mt-12 hidden lg:block">
                  <picture>
                      <Image src="/img6.png" alt="Responsive" width={1000} height={600}/>
                  </picture>
              </div>

          </section>

          <section className="w-full bg-dark-800 py-10 md:py-16">

              <section className="
                    max-w-[900px] w-full mx-auto px-4
                    flex flex-col justify-center items-center  text-center
                    text-white
                        gap-10
                     ">
                  <h1 className="text-3xl md:text-3xl text-light-100 font-semibold">Common use cases</h1>
                  <div className="grid lg:grid-cols-2 gap-3 w-full">
                      {
                          items.map((x) => (
                              <div className="w-full items-center flex bg-dark-700 p-4 gap-3  rounded-2xl cursor-pointer">
                                  <div className="min-w-[60px] text-light-300 text-2xl min-h-[60px] flex justify-center items-center rounded-xl bg-dark-800">
                                      {
                                          x.icon
                                      }
                                  </div>
                                  <div className="text-left">
                                      <h1 className="font-semibold">
                                      {
                                          x.title
                                      }
                                      </h1>
                                      <h2 className="text-xs text-light-600">
                                          {x.description}
                                      </h2>
                                  </div>
                              </div>
                          ))

                      }
                  </div>
              </section>
          </section>


          <section className="w-full bg-dark-800 py-10 md:py-16">
              <section className="
                    max-w-[900px] w-full mx-auto px-4
                    flex flex-col justify-center items-center  text-center
                    text-white
                        gap-10
                     ">
                  <h1 className="text-3xl md:text-3xl text-light-100 font-semibold">¿How it works?</h1>
                  <section className="w-full grid lg:grid-cols-2 mt-10 gap-4">
                      <div className="p-4 text-left rounded-xl">
                          <div
                              className="font-bold italic text-2xl w-[50px] h-[50px] bg-dark-700 rounded-xl mb-3 flex justify-center items-center">
                              1.
                          </div>
                          <h1 className="font-semibold text-xl ">
                              Upload images of your desired backgrounds and objects, or provide a description to generate both.                          </h1>
                          <p className="mt-3 text-light-500">
                              Simply drag and drop your background images and foreground objects, and we'll create a dataset based on your examples
                          </p>
                      </div>
                      <div>
                          <Image width={1000} height={500} src="/img7.png" alt="hola"
                                 className="rounded-3xl"></Image>
                      </div>
                  </section>

                  <section className="w-full grid lg:grid-cols-2 mt-10 gap-4">
                      <div className="p-4 text-left rounded-xl grid lg:order-1">
                          <div
                              className="font-bold italic text-2xl w-[50px] h-[50px] bg-dark-700 rounded-xl mb-3 flex justify-center items-center">
                              2.
                          </div>
                          <h1 className="font-semibold text-xl ">
                              Select one of our pipelines to generate small objects effortlessly.
                          </h1>
                          <p className="mt-3 text-light-500">

                              We offer a variety of pipelines tailored for different purposes, including boat detection, car detection, animal detection, and more.
                          </p>
                      </div>
                      <div>
                          <Image width={1000} height={500} src="/img.png" alt="hola"
                                 className="rounded-3xl"></Image>
                      </div>
                  </section>

                  <section className="w-full grid lg:grid-cols-2 mt-10 gap-4">
                      <div className="p-4 text-left rounded-xl grid">
                          <div
                              className="font-bold italic text-2xl w-[50px] h-[50px] bg-dark-700 rounded-xl mb-3 flex justify-center items-center">
                              3.
                          </div>
                          <h1 className="font-semibold text-xl ">
                              Choose from a wide range of state-of-the-art models to run your selected pipeline.
                          </h1>
                          <p className="mt-3 text-light-500">
                              We offer all the state-of-the-art models you need, both open-source and proprietary—choose the best fit for your pipeline.                          </p>
                      </div>
                      <div>
                          <Image width={1000} height={500} src="/img2.png" alt="hola"
                                 className="rounded-3xl"></Image>
                      </div>
                  </section>
                  <section className="w-full grid lg:grid-cols-2 mt-10 gap-4">
                      <div className="p-4 text-left rounded-xl grid  lg:order-1">
                          <div
                              className="font-bold italic text-2xl w-[50px] h-[50px] bg-dark-700 rounded-xl mb-3 flex justify-center items-center">
                              4.
                          </div>
                          <h1 className="font-semibold text-xl ">

                              Download your dataset in your preferred format.
                          </h1>
                          <p className="mt-3 text-light-500">
                              We provide various dataset folder structures optimized for seamless compatibility with the models you want to use.
                          </p>
                      </div>
                      <div>
                          <Image width={1000} height={500} src="/img8.png" alt="hola"
                                 className="rounded-3xl"></Image>
                      </div>
                  </section>
                  <section className="w-full grid lg:grid-cols-2 mt-10 gap-4">
                      <div className="p-4 text-left rounded-xl grid">
                          <div
                              className="font-bold italic text-2xl w-[50px] h-[50px] bg-dark-700 rounded-xl mb-3 flex justify-center items-center">
                              5.
                          </div>
                          <h1 className="font-semibold text-xl ">
                              Prefer coding over UIs? Generate your dataset easily with our RESTful API.
                          </h1>
                          <p className="mt-3 text-light-500">
                              Integrate your applications effortlessly with our AI pipelines using our full RESTful API simple and seamless.
                          </p>
                      </div>
                      <div>
                          <Image width={1000} height={500} src="/img5.png" alt="hola"
                                 className="rounded-3xl"></Image>
                      </div>
                  </section>

              </section>


          </section>

          </>
          );
          }
