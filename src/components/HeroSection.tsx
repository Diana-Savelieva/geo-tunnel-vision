
import { Button } from "@/components/ui/button";
import { Shield, MapPin, AlertTriangle } from "lucide-react";

const HeroSection = () => {
  const scrollToContact = () => {
    const contactSection = document.getElementById('contact-section');
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="relative py-16 md:py-24 flex items-center justify-center overflow-hidden">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-blue-50 via-white to-slate-50" />
      
      {/* Animated background elements */}
      <div className="absolute inset-0">
        <div className="absolute top-20 left-20 w-72 h-72 bg-blue-500/5 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-20 right-20 w-96 h-96 bg-blue-600/5 rounded-full blur-3xl animate-pulse delay-1000" />
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-blue-400/3 rounded-full blur-3xl" />
      </div>

      <div className="relative z-10 container mx-auto px-6 text-center">
        <div className="flex justify-center mb-8">
          <div className="glass-effect-dark rounded-full p-4">
            <div className="flex space-x-2">
              <Shield className="w-8 h-8 text-blue-600" />
              <MapPin className="w-8 h-8 text-blue-600" />
              <AlertTriangle className="w-8 h-8 text-blue-600" />
            </div>
          </div>
        </div>

        <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight">
          <span className="gradient-text">Навигационно-связная система</span>
          <br />
          <span className="text-slate-700">для подземных объектов</span>
        </h1>

        <p className="text-lg md:text-xl text-slate-600 mb-8 max-w-4xl mx-auto leading-relaxed">
          ПО для отслеживания и анализа перемещения персонала и техники в сложных условиях: 
          подземные сооружения, шахты, метрополитены, строительные площадки и объекты гражданской обороны. 
          Точное позиционирование без GPS сигнала.
        </p>

        <div className="flex justify-center mb-12">
          <Button 
            size="lg" 
            className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 text-lg"
            onClick={scrollToContact}
          >
            Оставить заявку
          </Button>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-4xl mx-auto">
          <div className="glass-effect-dark rounded-lg p-6">
            <div className="text-3xl font-bold text-blue-600 mb-2">40%</div>
            <div className="text-sm text-slate-600">Снижение времени поиска при ЧС</div>
          </div>
          <div className="glass-effect-dark rounded-lg p-6">
            <div className="text-3xl font-bold text-blue-600 mb-2">35%</div>
            <div className="text-sm text-slate-600">Сокращение ошибок учета времени</div>
          </div>
          <div className="glass-effect-dark rounded-lg p-6">
            <div className="text-3xl font-bold text-blue-600 mb-2">30%</div>
            <div className="text-sm text-slate-600">Снижение рисков НС</div>
          </div>
          <div className="glass-effect-dark rounded-lg p-6">
            <div className="text-3xl font-bold text-blue-600 mb-2">60%</div>
            <div className="text-sm text-slate-600">Дешевле импортных аналогов</div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
