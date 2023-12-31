"use client"
import React from "react";
import Link from "next/link";

function HeroLayanan() {
  return (
    <section className="relative">
      {/* Illustration behind hero content */}

      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="pt-16 pb-8 md:pt-40 md:pb-20">
          <div className="text-center pb-8 md:pb-16">
            <h1
              className="regular-32 md:regular-40 2xl:regular-72 mb-4"
              data-aos="zoom-y-out"
            >
              <strong>Setor{" "}</strong>
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-green-800 via-green-50 to-green-201">
                <strong>Sampah</strong>
              </span>
            </h1>
            <div className="max-w-3xl mx-auto">
              <p
                className="text-sm md:text-xl lg:text-lg text-gray-120 mb-8"
                data-aos="zoom-y-out"
                data-aos-delay="150"
              >
                Aplikasi Setor Sampah adalah inovasi kami untuk mendukung
                penanganan sampah di lingkungan gunung, dirancang untuk
                efisiensi pengelolaan sampah di wilayah pegunungan. Memudahkan
                Anda saat menyetor sampah setelah menjelajahi alam. Lihat
                panduan pengguna lengkap di bawah ini.
              </p>
              <div
                className="max-w-xs mx-auto sm:max-w-none sm:flex sm:justify-center"
                data-aos="zoom-y-out"
                data-aos-delay="300"
              >
                <div className="flex justify-center items-center mt-8 space-x-4">
                  <Link
                    className="bg-green-50 text-white font-bold py-2 px-4 rounded-full md:text-lg sm:w-full transition-all duration-300 transform hover:scale-105 bg-gradient-to-l from-green-800 via-green-50 to-green-201"
                    href="/setorsampah"
                  >
                    Setor Sampahmu Disini
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default HeroLayanan;
