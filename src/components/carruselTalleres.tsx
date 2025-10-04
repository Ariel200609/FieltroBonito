import React, { useState, useEffect } from "react";

const talleres = [
    {
        imagen: "/talleres/taller1.webp",
        descripcion: "Taller de fieltro seco: creación de figuras decorativas.",
    },
    {
        imagen: "/talleres/taller2.webp",
        descripcion: "Taller infantil: aprendiendo a crear con lana y colores.",
    },
    {
        imagen: "/talleres/taller3.webp",
        descripcion: "Workshop avanzado de técnicas de fieltro húmedo.",
    },
    {
        imagen: "/talleres/taller4.webp",
        descripcion: "Taller personalizado: proyectos creativos con fieltro.",
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
                className="w-full h-[400px] object-cover transition-all duration-700"
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
