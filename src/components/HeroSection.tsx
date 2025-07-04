

import { Button } from "@/components/ui/button";

const HeroSection = () => {
  const scrollToContact = () => {
    const contactSection = document.getElementById('contact-section');
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <>
      <section className="relative py-12 md:py-16 bg-gradient-to-br from-slate-50 to-blue-50">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Left side - Text content */}
            <div className="space-y-8">
              <div className="flex items-center space-x-2 mb-6">
                <div className="flex items-center">
                  <img 
                    src="/lovable-uploads/bf64424f-49fc-432e-aa22-5002965f254f.png" 
                    alt="ПРОГЕОТЕХ логотип" 
                    className="h-8 w-auto"
                  />
                </div>
              </div>

              <h1 className="text-3xl md:text-5xl font-bold leading-tight">
                <span className="gradient-text">Платформа мониторинга персонала</span>
                <br />
                <span className="text-slate-700">на подземных объектах</span>
              </h1>

              <p className="text-lg text-slate-600 leading-relaxed">
                Решение для отслеживания и анализа перемещения персонала и техники в сложных условиях: 
                подземные сооружения, шахты, метрополитены, строительные площадки и объекты гражданской обороны. 
                Точное позиционирование без GPS сигнала.
              </p>

              <div className="flex flex-col sm:flex-row gap-4">
                <Button 
                  size="lg" 
                  className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 text-lg"
                  onClick={scrollToContact}
                >
                  Оставить заявку
                </Button>
              </div>
            </div>

            {/* Right side - System interface screenshot */}
            <div className="flex justify-center lg:justify-end">
              <div className="relative">
                <img 
                  src="/lovable-uploads/10c1b8d3-8049-4da3-93fa-8ee295f6bf44.png" 
                  alt="Интерфейс системы мониторинга ПРОГЕОТЕХ" 
                  className="rounded-xl shadow-2xl max-w-full h-auto w-full object-contain"
                />
                <div className="absolute inset-0 bg-gradient-to-tr from-blue-600/5 to-transparent rounded-xl"></div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-12 bg-white">
        <div className="container mx-auto px-6">
          {/* Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-6xl mx-auto">
            <div className="glass-effect rounded-lg p-8 text-center">
              <div className="text-4xl font-bold text-blue-600 mb-3">40%</div>
              <div className="text-base text-slate-600">Снижение времени поиска при ЧС</div>
            </div>
            <div className="glass-effect rounded-lg p-8 text-center">
              <div className="text-4xl font-bold text-blue-600 mb-3">35%</div>
              <div className="text-base text-slate-600">Сокращение ошибок учета времени</div>
            </div>
            <div className="glass-effect rounded-lg p-8 text-center">
              <div className="text-4xl font-bold text-blue-600 mb-3">30%</div>
              <div className="text-base text-slate-600">Снижение рисков НС</div>
            </div>
            <div className="glass-effect rounded-lg p-8 text-center">
              <div className="text-4xl font-bold text-blue-600 mb-3">60%</div>
              <div className="text-base text-slate-600">Дешевле импортных аналогов</div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default HeroSection;

