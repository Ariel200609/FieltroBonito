import React, { useState, useEffect } from "react";
import Image2 from '../assets/images/talleres/TALLER BORDADO SOBRE FOTOS.jpg';
import Image3 from '../assets/images/talleres/TALLER DIA DE LA MADRE.jpg';
import Image4 from '../assets/images/talleres/TALLER PUNTOS SIMPLES.jpg';

const talleres = [
    {
        imagen: Image2,
        descripcion: "Taller de bordado sobre fotos.",
    },
    {
        imagen: Image3,
        descripcion: "Taller del dia de la madre.",
    },
    {
        imagen: Image4,
        descripcion: "Taller puntos simples.",
    },
];

const CarruselTalleres: React.FC = () => {
    const [index, setIndex] = useState(0);

    // Cambio automático de imagen cada 5 segundos
    useEffect(() => {
        const interval = setInterval(() => {
        setIndex((prev) => (prev + 1) % talleres.length);
        }, 5000);
        return () => clearInterval(interval);
    }, []);

    const siguiente = () => setIndex((prev) => (prev + 1) % talleres.length);
    const anterior = () =>
        setIndex((prev) => (prev - 1 + talleres.length) % talleres.length);

    return (
        <section
        className="py-16 bg-gradient-to-b from-white to-[#C4D4A4]"
        translate="no"
        >
        <div className="max-w-5xl mx-auto px-4 text-center">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Nuestros Talleres
            </h2>

            {/* Contenedor del carrusel */}
            <div className="relative rounded-2xl overflow-hidden shadow-lg">
            <img
                src={talleres[index].imagen}
                alt={`Taller ${index + 1}`}
                className="w-full h-[250px] sm:h-[350px] md:h-[350px] lg:h-[450px] xl:h-[500px] object-cover object-center transition-all duration-700"
            />

            {/* Botones de navegación */}
            <button
                onClick={anterior}
                className="absolute top-1/2 left-4 -translate-y-1/2 bg-black/40 text-white p-3 rounded-full hover:bg-black/60 transition"
            >
                ‹
            </button>
            <button
                onClick={siguiente}
                className="absolute top-1/2 right-4 -translate-y-1/2 bg-black/40 text-white p-3 rounded-full hover:bg-black/60 transition"
            >
                ›
            </button>
            </div>

            {/* Descripción */}
            <p className="mt-6 text-lg text-gray-700 italic">
            {talleres[index].descripcion}
            </p>

            {/* Indicadores (puntos) */}
            <div className="flex justify-center mt-4 space-x-2">
            {talleres.map((_, i) => (
                <button
                key={i}
                onClick={() => setIndex(i)}
                className={`w-3 h-3 rounded-full ${
                    i === index ? "bg-gray-800" : "bg-gray-400"
                }`}
                />
            ))}
            </div>
        </div>
        </section>
    );
};

export default CarruselTalleres;
