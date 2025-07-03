
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
    <section className="relative py-12 md:py-16 bg-gradient-to-br from-slate-50 to-blue-50">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left side - Text content */}
          <div className="space-y-8">
            <div className="flex items-center space-x-2 mb-6">
              <div className="glass-effect-dark rounded-full p-2">
                <div className="flex space-x-1">
                  <Shield className="w-5 h-5 text-blue-600" />
                  <MapPin className="w-5 h-5 text-blue-600" />
                  <AlertTriangle className="w-5 h-5 text-blue-600" />
                </div>
              </div>
            </div>

            <h1 className="text-3xl md:text-5xl font-bold leading-tight">
              <span className="gradient-text">Навигационно-связная система</span>
              <br />
              <span className="text-slate-700">для подземных объектов</span>
            </h1>

            <p className="text-lg text-slate-600 leading-relaxed">
              ПО для отслеживания и анализа перемещения персонала и техники в сложных условиях: 
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
              
              <div className="text-sm text-slate-500 space-y-1">
                <div>Телефон: <span className="text-blue-600 font-medium">+7 903 550 66 06</span></div>
                <div>Email: <span className="text-blue-600 font-medium">e.skiba@pgteh.ru</span></div>
              </div>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              <div className="glass-effect-dark rounded-lg p-4">
                <div className="text-2xl font-bold text-blue-600 mb-1">40%</div>
                <div className="text-xs text-slate-600">Снижение времени поиска при ЧС</div>
              </div>
              <div className="glass-effect-dark rounded-lg p-4">
                <div className="text-2xl font-bold text-blue-600 mb-1">35%</div>
                <div className="text-xs text-slate-600">Сокращение ошибок учета времени</div>
              </div>
              <div className="glass-effect-dark rounded-lg p-4">
                <div className="text-2xl font-bold text-blue-600 mb-1">30%</div>
                <div className="text-xs text-slate-600">Снижение рисков НС</div>
              </div>
              <div className="glass-effect-dark rounded-lg p-4">
                <div className="text-2xl font-bold text-blue-600 mb-1">60%</div>
                <div className="text-xs text-slate-600">Дешевле импортных аналогов</div>
              </div>
            </div>
          </div>

          {/* Right side - Generated image placeholder */}
          <div className="flex justify-center lg:justify-end">
            <div className="relative">
              <img 
                src="/lovable-uploads/e2d96428-47ad-42c0-a471-ff6f18dca233.png" 
                alt="Система мониторинга персонала - интерфейс на компьютере и мобильном устройстве" 
                className="rounded-xl shadow-2xl max-w-full h-auto"
              />
              <div className="absolute inset-0 bg-gradient-to-tr from-blue-600/10 to-transparent rounded-xl"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
