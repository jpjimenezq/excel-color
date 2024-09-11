"use client";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import {
  Facebook,
  Instagram,
  Twitter,
  Mail,
  Phone,
  MapPin,
} from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

export default function HomePage() {
  const [selectedLanguage, setSelectedLanguage] = useState("MX");

  return (
    <div className="flex flex-col min-h-screen bg-white text-black">
      <header className="px-4 lg:px-6 h-14 flex items-center">
        <Link className="flex items-center justify-center" href="#">
          <Image
            src="/logo.png"
            alt="Logo"
            width={40}
            height={40}
            className="h-6 w-6"
          />
          <span className="sr-only">Pinturas ExcelColor</span>
        </Link>
        <nav className="ml-auto flex items-center gap-4 sm:gap-6">
          <div className="relative flex items-center">
            <Button
              onClick={() =>
                setSelectedLanguage(selectedLanguage === "MX" ? "US" : "MX")
              }
              className="flex items-center space-x-2 text-sm font-medium"
            >
              {selectedLanguage === "MX" ? (
                <>
                  <Image
                    src="/mexico-flag.png"
                    alt="MX"
                    width={20}
                    height={20}
                  />
                  <span>Español</span>
                </>
              ) : (
                <>
                  <Image src="/us-flag.png" alt="US" width={20} height={20} />
                  <span>Inglés</span>
                </>
              )}
            </Button>
          </div>
          <Link
            className="text-sm font-medium hover:underline underline-offset-4 flex items-center"
            href="#servicios"
          >
            Servicios
          </Link>
          <Link
            className="text-sm font-medium hover:underline underline-offset-4 flex items-center"
            href="#galeria"
          >
            Galería
          </Link>
          <Link
            className="text-sm font-medium hover:underline underline-offset-4 flex items-center"
            href="#contacto"
          >
            Contacto
          </Link>
        </nav>
      </header>
      <main className="flex-1">
        <section
          className="w-full py-12 md:py-24 lg:py-32 xl:py-48 bg-cover bg-center"
          style={{
            backgroundImage: "url('/Principal.png?height=600&width=800')",
          }}
        >
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center space-y-4 text-center backdrop-blur-md bg-white/50 p-6 rounded-lg">
              <div className="space-y-2">
                <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl lg:text-6xl/none text-black">
                  Pinturas ExcelColor
                </h1>
                <p className="mx-auto max-w-[700px] text-black md:text-xl">
                  Transformamos espacios con color y calidad. Servicios de
                  pintura para interiores y exteriores.
                </p>
              </div>
              <Button className="flex items-center space-x-2 text-sm font-medium">
                Solicitar Presupuesto
              </Button>
            </div>
          </div>
        </section>
        <section
          id="servicios"
          className="w-full py-12 md:py-24 lg:py-32 bg-gray-100"
        >
          <div className="container px-4 md:px-6">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-center mb-8">
              Nuestros Servicios
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              <div className="flex flex-col items-center text-center">
                <Image
                  src="/Interior.png"
                  alt="Pintura Interior"
                  width={500}
                  height={500}
                  className="mb-4"
                />
                <h3 className="text-xl font-bold mb-2">Pintura Interior</h3>
                <p>
                  Transformamos tus espacios interiores con colores vibrantes y
                  acabados perfectos.
                </p>
              </div>
              <div className="flex flex-col items-center text-center">
                <Image
                  src="/Exterior.png"
                  alt="Pintura Exterior"
                  width={380}
                  height={400}
                  className="mb-4"
                />
                <h3 className="text-xl font-bold mb-2">Pintura Exterior</h3>
                <p>
                  Protegemos y embellecemos la fachada de tu hogar con pinturas
                  duraderas y resistentes.
                </p>
              </div>
              <div className="flex flex-col items-center text-center">
                <Image
                  src="/Especiales.png"
                  alt="Servicios Especiales"
                  width={405}
                  height={400}
                  className="mb-4"
                />
                <h3 className="text-xl font-bold mb-2">Servicios Especiales</h3>
                <p>
                  Ofrecemos servicios de texturizado, estucado y otros acabados
                  especiales para tus paredes.
                </p>
              </div>
            </div>
          </div>
        </section>
        <section id="galeria" className="w-full py-12 md:py-24 lg:py-32">
          <div className="container px-4 md:px-6">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-center mb-8">
              Galería de Proyectos
            </h2>
            <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
              {[1, 2, 3, 4, 5, 6].map((i) => (
                <Image
                  key={i}
                  src={`/Pro${i}.png`}
                  alt={`Proyecto ${i}`}
                  width={400}
                  height={300}
                  className="w-full h-auto object-cover rounded-lg"
                />
              ))}
            </div>
          </div>
        </section>
        <section
          id="contacto"
          className="w-full py-12 md:py-24 lg:py-32 bg-gray-100"
        >
          <div className="container px-4 md:px-6">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-center mb-8">
              Contáctanos
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div>
                <form className="space-y-4">
                  <Input placeholder="Nombre" />
                  <Input type="email" placeholder="Correo Electrónico" />
                  <Input placeholder="Teléfono" />
                  <Textarea placeholder="Mensaje" />
                  <Button type="submit">Enviar Mensaje</Button>
                </form>
              </div>
              <div className="space-y-4">
                <div className="flex items-center space-x-2">
                  <Phone className="h-5 w-5" />
                  <span>+1 234 567 890</span>
                </div>
                <div className="flex items-center space-x-2">
                  <Mail className="h-5 w-5" />
                  <span>info@pinturasexcelcolor.com</span>
                </div>
                <div className="flex items-center space-x-2">
                  <MapPin className="h-5 w-5" />
                  <span>123 Calle Principal, Ciudad, País</span>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
      <footer className="flex flex-col gap-2 sm:flex-row py-6 w-full shrink-0 items-center px-4 md:px-6 border-t">
        <p className="text-xs text-gray-500">
          © 2023 Pinturas ExcelColor. Todos los derechos reservados.
        </p>
        <nav className="sm:ml-auto flex gap-4 sm:gap-6">
          <Link className="w-5 h-5" href="#">
            <Facebook className="h-4 w-4" />
            <span className="sr-only">Facebook</span>
          </Link>
          <Link className="w-5 h-5" href="#">
            <Instagram className="h-4 w-4" />
            <span className="sr-only">Instagram</span>
          </Link>
          <Link className="w-5 h-5" href="#">
            <Twitter className="h-4 w-4" />
            <span className="sr-only">Twitter</span>
          </Link>
        </nav>
      </footer>
    </div>
  );
}
