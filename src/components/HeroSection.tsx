
import { Button } from "@/components/ui/button";
import { ArrowRight, Shield, MapPin, AlertTriangle } from "lucide-react";

const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-slate-900 via-blue-950 to-slate-900" />
      
      {/* Animated background elements */}
      <div className="absolute inset-0">
        <div className="absolute top-20 left-20 w-72 h-72 bg-blue-500/10 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-20 right-20 w-96 h-96 bg-blue-600/10 rounded-full blur-3xl animate-pulse delay-1000" />
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-blue-400/5 rounded-full blur-3xl" />
      </div>

      <div className="relative z-10 container mx-auto px-6 text-center">
        <div className="flex justify-center mb-8">
          <div className="glass-effect rounded-full p-4">
            <div className="flex space-x-2">
              <Shield className="w-8 h-8 text-blue-400" />
              <MapPin className="w-8 h-8 text-blue-400" />
              <AlertTriangle className="w-8 h-8 text-blue-400" />
            </div>
          </div>
        </div>

        <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight">
          <span className="gradient-text">Мониторинг персонала</span>
          <br />
          <span className="text-white">на подземных объектах</span>
        </h1>

        <p className="text-xl md:text-2xl text-slate-300 mb-8 max-w-3xl mx-auto leading-relaxed">
          Инновационная система контроля и безопасности для шахт, метро и подземных сооружений. 
          Точное позиционирование без GPS сигнала.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12">
          <Button size="lg" className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 text-lg">
            Узнать больше
            <ArrowRight className="ml-2 w-5 h-5" />
          </Button>
          <Button variant="outline" size="lg" className="border-blue-400 text-blue-400 hover:bg-blue-400 hover:text-white px-8 py-4 text-lg">
            Связаться с нами
          </Button>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-4xl mx-auto">
          <div className="glass-effect rounded-lg p-6">
            <div className="text-3xl font-bold text-blue-400 mb-2">40%</div>
            <div className="text-sm text-slate-400">Снижение времени поиска при ЧС</div>
          </div>
          <div className="glass-effect rounded-lg p-6">
            <div className="text-3xl font-bold text-blue-400 mb-2">35%</div>
            <div className="text-sm text-slate-400">Сокращение ошибок учета времени</div>
          </div>
          <div className="glass-effect rounded-lg p-6">
            <div className="text-3xl font-bold text-blue-400 mb-2">30%</div>
            <div className="text-sm text-slate-400">Снижение рисков НС</div>
          </div>
          <div className="glass-effect rounded-lg p-6">
            <div className="text-3xl font-bold text-blue-400 mb-2">60%</div>
            <div className="text-sm text-slate-400">Дешевле импортных аналогов</div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
