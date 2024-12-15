import React from 'react';
import {FaBox, FaBrain, FaDatabase, FaDesktop, FaWhatsapp} from "react-icons/fa";
import {FaPeopleGroup, FaRepeat} from "react-icons/fa6";
import FaqCard from "@/components/FaqCard";
import Image from 'next/image';

interface Props{
    initialCopy: string,
    initialImage: string,
    initialMobileImage?: string,
    faqs: {
        question: string,
        answer: string
    }[]
}

function Landing(props : Props) {
    const items = [
        {
            icon: <FaDesktop/>,
            title : "Plataforma todo en uno",
            description: "Una aplicación web con todo lo que necesitas",
            color: "bg-brand_secondary-400",
            fig: "/fig2.png"
        },
        {
            icon: <FaBox/>,
            title : "Método Bilern",
            color: "bg-orange-400",
            description: "Una metodología de estudio fácil y efectiva.",
            fig: "/fig3.png",
        },
        {
            icon: <FaPeopleGroup/>,
            title : "Comunidad",
            description: "Una comunidad de estudiantes como tu",
            color: "bg-brand_primary-400",
            fig: "/fig5.png",
        },
    ]

    return (
        <>
            <section id="inicio" className="
            max-w-[900px] w-full mx-auto px-4
            flex flex-col justify-center items-center mt-12 md:mt-28 text-center bg-gray-50">
                <h1 className="text-3xl md:text-4xl text-gray-800 font-semibold">{props.initialCopy}</h1>
                <h2 className="text-base md:text-xl mt-5 text-gray-500">Tranquilo, este es tu sitio, te ayudamos.</h2>
                <div className="mt-10 mb-10 flex gap-3 flex-col">
                    <a href="https://app.bilern.com/register"
                       className="px-7 text-xs md:text-base rounded-xl font-semibold text-white cursor-pointer py-3.5 bg-brand_primary-500 hover:bg-brand_primary-700">
                        Registrate
                    </a>
                    <p className="text-gray-500 text-xs md:hidden block text-center">¿Ya tienes cuenta?</p>
                    <a href="https://app.bilern.com/login"
                       className=" md:hidden px-7 text-xs md:text-base rounded-xl font-semibold text-white cursor-pointer py-3.5 bg-brand_secondary-500 hover:bg-brand_secondary-700">
                        Inicia sesión
                    </a>
                </div>

                <div className="w-full bg-gray-300 h-[400px] rounded-t-3xl overflow-hidden mt-12">
                    <picture>
                        <source media="(max-width: 600px)" srcSet={props.initialMobileImage}/>
                        <source media="(min-width: 601px)" srcSet={props.initialImage} />
                        <Image src="/desktop-image.jpg" alt="Responsive" width={1000} height={600} />
                    </picture>
                </div>


            </section>

            <section className="w-full bg-white">
            <section className="
                 pt-20
                 pb-20
                 max-w-[900px] w-full mx-auto px-4
                 bg-white">
                    <p className="text-base md:text-xl font-base text-gray-600">¿Sigues dudando en unirte?</p>
                    <h2 className="text-2xl md:text-3xl mt-4 font-semibold text-gray-700">
                        <span className="text-brand_secondary-500">Bilern</span> es una plataforma creada por tres
                        estudiantes de la Universidad de Valladolid que te
                        ofrece todas las herramientas que necesitas para <span className="text-brand_primary-300">llevar tu estudio al siguiente nivel</span>.
                    </h2>
                    <h3 className="mt-5 text-xl text-gray-500">Nuestros pilares son</h3>

                    <div className="grid md:grid-cols-3 gap-6 mt-5">
                        {
                            items.map((x, i) => (
                                <a key={i}
                                   className={`rounded-xl ${x.color} overflow-hidden cursor-pointer hover:scale-110 transition-all duration-300 flex justify-between flex-col items-end`}>
                                    <section className="p-7 w-full text-left">
                                        <h3 className="text-2xl text-white font-semibold">
                                            {x.title}
                                        </h3>
                                    </section>

                                    <div className="h-[220px] rounded-tl-2xl w-[87%] bg-white shadow-2xl">
                                        <img src={x.fig} className='h-[110%] w-full object-cover object-left-top'/>
                                    </div>
                                </a>
                            ))
                        }
                    </div>

                </section>
            </section>

            <section className="w-full bg-gray-50" id="plataforma">
                <section className="
                 pt-20
                 pb-20
                 max-w-[900px] w-full mx-auto px-4">
                    <h2 className="text-2xl md:text-3xl mt-4 font-semibold text-gray-700 text-center w-full ">
                        ¿Cómo funciona nuestra plataforma?
                    </h2>

                    <section className="mt-20 md:grid-cols-2 gap-5 grid items-center">

                        <div>
                            <div
                                className="text-white h-[50px] w-[50px] rounded-xl bg-brand_primary-500 mb-6 flex justify-center items-center text-2xl font-semibold">
                                1
                            </div>
                            <h1 className="text-2xl font-semibold text-gray-700">Sube tus apuntes. </h1>
                            <p className="text-xl text-gray-500 mt-4">
                                Automáticamente extraemos con IA los conceptos más importantes y generaremos preguntas de
                                tipo
                                test, cartas de memorización y otros tipos de tarjetas.
                            </p>
                        </div>

                        <div className="w-full  rounded-2xl flex justify-end items-center">
                            <img src={"fig7.png"} className="max-w-[360px] w-full"/>
                        </div>
                    </section>


                    <section className="md:grid-cols-2 grid gap-5 mt-10 items-center">

                        <div className="md:order-2">
                            <div>
                                <div
                                    className="text-white h-[50px] w-[50px] rounded-xl bg-brand_primary-500 mb-6 flex justify-center items-center text-2xl font-semibold">
                                    2
                                </div>
                                <h1 className="text-2xl font-semibold text-gray-700">Estudia las preguntas generadas con
                                    IA </h1>

                            </div>
                            <p className="text-xl text-gray-500 mt-4">

                                Estudialas mediante el método de memorización probado
                                científicamente de <a className="text-brand_secondary-500 cursor-pointer hover:text-brand_secondary-900">repetición espaciada.</a> </p>

                        </div>


                        <div className="w-full rounded-2xl flex justify-start items-center">
                            <img src={"fig8.png"} className="w-full md:p-4"/>
                        </div>
                    </section>

                    <section className="md:grid-cols-2 grid gap-5 mt-10 flex items-center">
                        <div>

                            <div
                                className="text-white h-[50px] w-[50px] rounded-xl bg-brand_primary-500 mb-6 flex justify-center items-center text-2xl font-semibold">
                                3
                            </div>
                            <h1 className="text-2xl font-semibold text-gray-700">¿Tienes un examen? </h1>
                            <p className="text-xl text-gray-500 mt-4">
                                Añade las fechas de tus exámenes, nosotros organizamos un planning de estudio
                                automáticamente con tu temario.

                            </p>
                        </div>
                        <div className="w-full  rounded-2xl flex justify-end items-center">
                            <img src={"fig10.png"} className="max-w-[360px] w-full"/>
                        </div>
                    </section>

                    <section className="md:grid-cols-2 grid gap-5 mt-10 items-center">

                        <div className="md:order-2">
                            <div>
                                <div
                                    className="text-white h-[50px] w-[50px] rounded-xl bg-brand_primary-500 mb-6 flex justify-center items-center text-2xl font-semibold">
                                    4
                                </div>
                                <h1 className="text-2xl font-semibold text-gray-700">Crea tu rutina de estudio con
                                    Bilern</h1>
                            </div>
                            <p className="text-xl text-gray-500 mt-4">
                                Cuantifica el tu tiempo concentrado con nuestro pomodoro y márcate objetivos de trabajo en nuestro calendario.
                            </p>
                        </div>

                        <div className="w-full  rounded-2xl flex justify-start items-center">
                            <img src={"fig11.png"} className="max-w-[360px] w-full"/>
                        </div>
                    </section>
                </section>


            </section>

            <section className="w-full bg-brand_primary-500" id="metodo">
                <section className="
                 pt-20
                 pb-20
                 max-w-[900px] w-full mx-auto px-4">
                    <div className="grid gap-10">
                        <div>
                            <h1 className="text-2xl md:text-3xl mt-4 font-semibold text-white">Descubre el método
                                Bilern</h1>
                            <p className="mt-8 text-xl text-white mb-12">
                                Nuestra plataforma es una adaptación completa del Método Bilern, una forma de estudio
                                altamente eficiente basada en el algoritmo repetición
                                espaciada publicado por Piotr Woźniak en 1994. Mejoramos tu forma de aprender con métodos
                                científicamente probados:
                            </p>

                            <div className="md:grid-cols-3  gap-5 mb-12 grid">
                                <div className="w-full bg-brand_primary-700 p-5 rounded-xl">
                                    <div
                                        className={"h-[50px] w-[50px] rounded-2xl bg-brand_primary-500 flex justify-center items-center font-semibold text-white"}>
                                        <FaRepeat size={20}></FaRepeat>
                                    </div>
                                    <h1 className="mt-2 mb-3 font-semibold text-white">
                                        Repetición espaciada
                                    </h1>
                                    <p className="text-white mb-6">
                                        Utilizamos la repetición espaciada para hackear la curva del olvido. Te
                                        mostraremos los conceptos en el momento exacto para que te acuerdes en el
                                        examen.
                                    </p>
                                    <a target='_blank' href={"https://ane.pl/index.php/ane/article/view/1003"}
                                       className="px-4 text-xs rounded-xl font-semibold text-brand_primary-800 cursor-pointer py-1.5 bg-brand_secondary-500 hover:bg-brand_secondary-700">
                                        Saber más
                                    </a>
                                </div>


                                <div className="w-full bg-brand_primary-700 p-5 rounded-xl">
                                    <div
                                        className={"h-[50px] w-[50px] rounded-2xl bg-brand_primary-500 flex justify-center items-center font-semibold text-white"}>
                                        <FaBrain size={20}></FaBrain>
                                    </div>
                                    <h1 className="mt-2 mb-3 font-semibold text-white">
                                        Inteligencia artificial
                                    </h1>
                                    <p className="text-white">
                                        Sabemos que últimamente estás hasta las narices de la palabra IA. Pero en
                                        nuestro método es clave para automatizar todas las labores de preparación para
                                        el estudio: creación de apuntes, preguntas de examen, flashcards...
                                    </p>

                                </div>
                                <div className="w-full bg-brand_primary-700 p-5 rounded-xl">
                                    <div
                                        className={"h-[50px] w-[50px] rounded-2xl bg-brand_primary-500 flex justify-center items-center font-semibold text-white"}>
                                        <FaDatabase size={20}></FaDatabase>
                                    </div>
                                    <h1 className="mt-2 mb-3 font-semibold text-white">
                                        Datos
                                    </h1>
                                    <p className="text-white">
                                        La clave de una buena metodología de estudio es la disciplina, pero también los
                                        datos. En Bilern transformamos todos los datos que generas estudiando en
                                        información que te sea útil.
                                    </p>

                                </div>
                            </div>
                        </div>
                        {
                            /*
                                <div className="w-full h-[400px] rounded-2xl bg-gray-200">
                                </div>
                             */
                        }
                    </div>
                </section>
            </section>
            <section className="w-full bg-gray-50" id="comunidad">
                <section className="
                 pt-20
                 pb-20
                 max-w-[900px] w-full mx-auto px-4">

                    <h1 className="text-xl md:text-xl mt-4 text-gray-500">¿Eres estudiante Bilern?</h1>
                    <h2 className="mt-5 text-3xl font-semibold text-gray-800">
                        Los <span className="text-brand_secondary-500">Estudiantes Bilern</span> son personas de alto
                        rendimiento con gran compromiso con su educación
                        que buscan una mejora continua.
                    </h2>
                    <h3 className='mt-5 text-gray-500 mb-4'>
                        Si te has sentido identificado...
                    </h3>
                    <a target="_blank" href={"https://t4h4j0sbnfz.typeform.com/to/BxpSAoEW"} className="flex w-fit items-center gap-4 px-7  text-xs md:text-base rounded-xl font-semibold text-white cursor-pointer py-3.5 bg-brand_primary-500 hover:bg-brand_primary-700">
                        <FaWhatsapp size={20}></FaWhatsapp>
                        Únete a nuestra comunidad
                    </a>
                </section>
            </section>
            <section className="w-full bg-white">
                <section className="
                 pt-20
                 pb-20
                 max-w-[900px] w-full mx-auto px-4">

                    <h2 className="mt-5 text-center w-full text-3xl font-semibold text-gray-800">
                        Preguntas frecuentes
                    </h2>

                    <div className="flex gap-3 flex-col mt-14">
                        {
                            props.faqs.map((faq, i) => (
                                <FaqCard key={i} question={faq.question} answer={faq.answer}/>
                            ))
                        }
                    </div>

                </section>
            </section>
            <section className="w-full bg-gray-50">
                <section className="
                 pt-20
                 pb-20
                 max-w-[900px] w-full mx-auto px-4">
                    <div className="p-20 bg-brand_primary-500 rounded-3xl flex flex-col items-center justify-center">
                        <h1 className="text-center w-full text-2xl font-semibold text-white">
                            ¿Por fin te hemos convencido?
                        </h1>
                        <h2 className="mt-5 text-center w-full text-base text-white">
                            No esperes más y registrate gratuitamente
                        </h2>
                        <a href="https://app.bilern.com/register" className="px-6 mt-10 text-xs md:text-base rounded-xl font-semibold text-brand_primary-800 cursor-pointer py-3 bg-brand_secondary-500 hover:bg-brand_secondary-700">
                            Registrarme
                        </a>
                    </div>
                </section>
            </section>
        </>
    )
        ;
}

export default Landing;