'use client';

import React, { useState } from 'react';

export default function AgustinaPortfolio() {
  const [selectedImage, setSelectedImage] = useState(null);
  const [selectedVideo, setSelectedVideo] = useState(null);
  const [language, setLanguage] = useState('en'); // 'en' for English, 'es' for Spanish

  const scrollToSection = (sectionId) => {
    document.getElementById(sectionId).scrollIntoView({ 
      behavior: 'smooth' 
    });
  };

  // Translations object
  const translations = {
    en: {
      digitalMarketing: "Digital Marketing Creative",
      photography: "Photography",
      videos: "Videos",
      photographySubtitle: "Capturing brand stories through compelling visual narratives that engage and inspire audiences.",
      videosSubtitle: "Creating dynamic video content that tells your brand's story and drives meaningful engagement.",
      downloadCVEn: "Download CV (English)",
      downloadCVEs: "Download CV (Español)",
      readyToCreate: "Ready to create something amazing?",
      footerText: "Let's bring your brand's vision to life through compelling visual storytelling.",
      email: "Email",
      photographyProjects: [
        { title: "Brand Campaign 1", description: "Social media photography for fashion brand" },
        { title: "Product Photography", description: "E-commerce product shoot" },
        { title: "Lifestyle Content", description: "Instagram lifestyle photography" },
        { title: "Corporate Branding", description: "Professional headshots and branding" },
        { title: "Event Photography", description: "Brand activation event coverage" },
        { title: "Creative Direction", description: "Art directed photo campaign" }
      ],
      videoProjects: [
        { title: "Brand Video Campaign", description: "30-second promotional video for tech startup" },
        { title: "Social Media Content", description: "Instagram Reels series for fashion brand" },
        { title: "Product Demo Video", description: "Explainer video for mobile app" },
        { title: "Corporate Video", description: "Company culture and values video" },
        { title: "Event Highlights", description: "Conference recap and highlights reel" },
        { title: "Animation Project", description: "Animated explainer for SaaS product" }
      ]
    },
    es: {
      digitalMarketing: "Creativa de Marketing Digital",
      photography: "Fotografía",
      videos: "Videos",
      photographySubtitle: "Capturando historias de marca a través de narrativas visuales convincentes que involucran e inspiran a las audiencias.",
      videosSubtitle: "Creando contenido de video dinámico que cuenta la historia de tu marca y genera un compromiso significativo.",
      downloadCVEn: "Descargar CV (English)",
      downloadCVEs: "Descargar CV (Español)",
      readyToCreate: "¿Listo para crear algo increíble?",
      footerText: "Demos vida a la visión de tu marca a través de narrativas visuales convincentes.",
      email: "Email",
      photographyProjects: [
        { title: "Campaña de Marca 1", description: "Fotografía para redes sociales de marca de moda" },
        { title: "Fotografía de Producto", description: "Sesión de fotos para e-commerce" },
        { title: "Contenido Lifestyle", description: "Fotografía lifestyle para Instagram" },
        { title: "Branding Corporativo", description: "Retratos profesionales y branding" },
        { title: "Fotografía de Eventos", description: "Cobertura de activaciones de marca" },
        { title: "Dirección Creativa", description: "Campaña fotográfica con dirección de arte" }
      ],
      videoProjects: [
        { title: "Campaña de Video de Marca", description: "Video promocional de 30 segundos para startup tech" },
        { title: "Contenido para Redes Sociales", description: "Serie de Instagram Reels para marca de moda" },
        { title: "Video Demo de Producto", description: "Video explicativo para aplicación móvil" },
        { title: "Video Corporativo", description: "Video de cultura y valores de empresa" },
        { title: "Highlights de Eventos", description: "Resumen y highlights de conferencia" },
        { title: "Proyecto de Animación", description: "Explicativo animado para producto SaaS" }
      ]
    }
  };

  const t = translations[language];

  // Placeholder images - replace these with actual project images
  const photographyProjects = [
    { id: 1, src: "https://images.unsplash.com/photo-1586717791821-3f44a563fa4c?w=400&h=300&fit=crop" },
    { id: 2, src: "https://images.unsplash.com/photo-1542744094-3a31f272c490?w=400&h=300&fit=crop" },
    { id: 3, src: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=400&h=300&fit=crop" },
    { id: 4, src: "https://images.unsplash.com/photo-1441986300917-64674bd600d8?w=400&h=300&fit=crop" },
    { id: 5, src: "https://images.unsplash.com/photo-1542744173-8e7e53415bb0?w=400&h=300&fit=crop" },
    { id: 6, src: "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?w=400&h=300&fit=crop" }
  ];

  // Placeholder videos - replace these with actual project videos
  const videoProjects = [
    { id: 1, thumbnail: "https://images.unsplash.com/photo-1574267432553-4b4628081c31?w=400&h=250&fit=crop", videoUrl: "https://www.example.com/video1.mp4" },
    { id: 2, thumbnail: "https://images.unsplash.com/photo-1551836022-deb4988cc6c0?w=400&h=250&fit=crop", videoUrl: "https://www.example.com/video2.mp4" },
    { id: 3, thumbnail: "https://images.unsplash.com/photo-1533750516457-a7f992034fec?w=400&h=250&fit=crop", videoUrl: "https://www.example.com/video3.mp4" },
    { id: 4, thumbnail: "https://images.unsplash.com/photo-1522869635100-9f4c5e86aa37?w=400&h=250&fit=crop", videoUrl: "https://www.example.com/video4.mp4" },
    { id: 5, thumbnail: "https://images.unsplash.com/photo-1524758631624-e2822e304c36?w=400&h=250&fit=crop", videoUrl: "https://www.example.com/video5.mp4" },
    { id: 6, thumbnail: "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=400&h=250&fit=crop", videoUrl: "https://www.example.com/video6.mp4" }
  ];

  return (
    <div className="min-h-screen">
      {/* Language Toggle */}
      <div className="fixed top-4 right-4 z-40 flex gap-2">
        <button
          onClick={() => setLanguage('en')}
          className={`w-12 h-12 rounded-full shadow-lg transition-all duration-300 flex items-center justify-center overflow-hidden ${
            language === 'en' ? 'ring-2 ring-white ring-opacity-80 scale-110' : 'opacity-70 hover:opacity-100 hover:scale-105'
          }`}
        >
          <img 
            src="/us-flag.png" 
            alt="English" 
            className="w-full h-full object-cover"
          />
        </button>
        <button
          onClick={() => setLanguage('es')}
          className={`w-12 h-12 rounded-full shadow-lg transition-all duration-300 flex items-center justify-center overflow-hidden ${
            language === 'es' ? 'ring-2 ring-white ring-opacity-80 scale-110' : 'opacity-70 hover:opacity-100 hover:scale-105'
          }`}
        >
          <img 
            src="/argentina-flag.png" 
            alt="Español" 
            className="w-full h-full object-cover"
          />
        </button>
      </div>

      {/* Header Section */}
      <div 
        className="relative h-screen flex items-center justify-center bg-gradient-to-r from-orange-600 via-orange-400 to-amber-800"
      >
        <div className="absolute inset-0 bg-black bg-opacity-20"></div>
        <div className="relative z-10 text-center text-white px-4">
          <h1 className="text-6xl md:text-8xl font-bold mb-4 tracking-tight">
            Agustina
          </h1>
          <h2 className="text-3xl md:text-5xl font-light mb-2 tracking-wide">
            Gonzalez Lombardo
          </h2>
          <p className="text-xl md:text-2xl mb-12 font-light opacity-90">
            {t.digitalMarketing}
          </p>
          
          {/* Navigation Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8 ">
            <button 
              onClick={() => scrollToSection('photography')}
              className="bg-white bg-opacity-20 backdrop-blur-sm border border-white border-opacity-30 text-orange-600 px-8 py-4 text-lg font-medium rounded-full hover:bg-opacity-30 transition-all duration-300 transform hover:scale-105"
            >
              {t.photography}
            </button>
            <button 
              onClick={() => scrollToSection('videos')}
              className="bg-white bg-opacity-20 backdrop-blur-sm border border-white border-opacity-30 text-orange-600 px-8 py-4 text-lg font-medium rounded-full hover:bg-opacity-30 transition-all duration-300 transform hover:scale-105"
            >
              {t.videos}
            </button>
          </div>

          {/* CV Download Buttons */}
          <div className="flex flex-col sm:flex-row gap-3 justify-center">
            <a 
              href="/Agustina_Gonzalez_Lombardo_CV_English.pdf"
              download="Agustina_Gonzalez_Lombardo_CV_English.pdf"
              className="bg-white text-orange-600 px-6 py-3 text-sm font-medium rounded-full hover:bg-gray-100 transition-all duration-300 transform hover:scale-105 flex items-center justify-center gap-2"
            >
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
              </svg>
              {t.downloadCVEn}
            </a>
            <a 
              href="/Agustina_Gonzalez_Lombardo_CV_Espanol.pdf"
              download="Agustina_Gonzalez_Lombardo_CV_Espanol.pdf"
              className="bg-white text-orange-600 px-6 py-3 text-sm font-medium rounded-full hover:bg-gray-100 transition-all duration-300 transform hover:scale-105 flex items-center justify-center gap-2"
            >
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
              </svg>
              {t.downloadCVEs}
            </a>
          </div>
        </div>
        
        {/* Scroll indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <div className="w-6 h-10 border-2 border-white rounded-full flex justify-center">
            <div className="w-1 h-3 bg-white rounded-full mt-2"></div>
          </div>
        </div>
      </div>

      {/* Photography Section */}
      <section id="photography" className="py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-4">{t.photography}</h2>
            <div className="w-24 h-1 bg-gradient-to-r from-orange-500 to-amber-600 mx-auto mb-6"></div>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              {t.photographySubtitle}
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {photographyProjects.map((project, index) => (
              <div 
                key={project.id}
                className="group cursor-pointer bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2"
                onClick={() => setSelectedImage({...project, ...t.photographyProjects[index]})}
              >
                <div className="relative overflow-hidden">
                  <img 
                    src={project.src} 
                    alt={t.photographyProjects[index].title}
                    className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-300"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black to-transparent opacity-0 group-hover:opacity-70 transition-opacity duration-300"></div>
                  <div className="absolute bottom-4 left-4 text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <h3 className="text-lg font-semibold">{t.photographyProjects[index].title}</h3>
                    <p className="text-sm">{t.photographyProjects[index].description}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Videos Section */}
      <section id="videos" className="py-20 px-4 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-4">{t.videos}</h2>
            <div className="w-24 h-1 bg-gradient-to-r from-orange-500 to-amber-600 mx-auto mb-6"></div>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              {t.videosSubtitle}
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {videoProjects.map((project, index) => (
              <div 
                key={project.id}
                className="group cursor-pointer bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2"
                onClick={() => setSelectedVideo({...project, ...t.videoProjects[index]})}
              >
                <div className="relative overflow-hidden">
                  <img 
                    src={project.thumbnail} 
                    alt={t.videoProjects[index].title}
                    className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-300"
                  />
                  {/* Play button overlay */}
                  <div className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-0 group-hover:bg-opacity-50 transition-all duration-300">
                    <div className="w-16 h-16 bg-white bg-opacity-90 rounded-full flex items-center justify-center transform scale-0 group-hover:scale-100 transition-transform duration-300">
                      <svg className="w-6 h-6 text-gray-800 ml-1" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M8 5v14l11-7z"/>
                      </svg>
                    </div>
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-semibold text-gray-800 mb-2">{t.videoProjects[index].title}</h3>
                  <p className="text-gray-600">{t.videoProjects[index].description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h3 className="text-2xl font-bold mb-4">{t.readyToCreate}</h3>
          <p className="text-gray-400 mb-8">{t.footerText}</p>
          <div className="flex justify-center space-x-6">
            <a href="mailto:agustina@example.com" className="text-gray-400 hover:text-white transition-colors">
              {t.email}
            </a>
            <a href="#" className="text-gray-400 hover:text-white transition-colors">
              LinkedIn
            </a>
            <a href="#" className="text-gray-400 hover:text-white transition-colors">
              Instagram
            </a>
          </div>
        </div>
      </footer>

      {/* Image Modal */}
      {selectedImage && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black bg-opacity-90" onClick={() => setSelectedImage(null)}>
          <div className="relative max-w-4xl max-h-full">
            <img 
              src={selectedImage.src} 
              alt={selectedImage.title}
              className="max-w-full max-h-full object-contain rounded-lg"
            />
            <button 
              className="absolute top-4 right-4 text-white text-2xl hover:text-gray-300"
              onClick={() => setSelectedImage(null)}
            >
              ×
            </button>
            <div className="absolute bottom-4 left-4 text-white">
              <h3 className="text-xl font-semibold">{selectedImage.title}</h3>
              <p className="text-gray-300">{selectedImage.description}</p>
            </div>
          </div>
        </div>
      )}

      {/* Video Modal */}
      {selectedVideo && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black bg-opacity-90" onClick={() => setSelectedVideo(null)}>
          <div className="relative max-w-4xl w-full">
            <div className="bg-white rounded-lg p-6">
              <div className="flex justify-between items-center mb-4">
                <h3 className="text-xl font-semibold">{selectedVideo.title}</h3>
                <button 
                  className="text-gray-500 hover:text-gray-700 text-2xl"
                  onClick={() => setSelectedVideo(null)}
                >
                  ×
                </button>
              </div>
              <p className="text-gray-600 mb-4">{selectedVideo.description}</p>
              <div className="bg-gray-100 h-64 rounded-lg flex items-center justify-center">
                <p className="text-gray-500">Video player placeholder - Add your video URL: {selectedVideo.videoUrl}</p>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}