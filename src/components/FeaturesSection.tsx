
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { 
  MapPin, 
  AlertTriangle, 
  FileText, 
  MessageSquare, 
  Clock, 
  Shield,
  Users,
  BarChart3
} from "lucide-react";

const FeaturesSection = () => {
  const features = [
    {
      icon: MapPin,
      title: "Точное позиционирование",
      description: "Определение местоположения с точностью до 10 метров в подземных условиях без GPS"
    },
    {
      icon: AlertTriangle,
      title: "Контроль опасных зон",
      description: "Автоматическое оповещение при входе в зоны повышенной опасности"
    },
    {
      icon: FileText,
      title: "Отчетность и аналитика",
      description: "Формирование детальных отчетов в формате .xlsx с автоматической отправкой"
    },
    {
      icon: MessageSquare,
      title: "Коммуникация",
      description: "Двусторонняя связь с носимыми устройствами, SOS-сигналы и сообщения"
    },
    {
      icon: Clock,
      title: "Учет рабочего времени",
      description: "Автоматическая регистрация перемещений и контроль смен персонала"
    },
    {
      icon: Shield,
      title: "Экстренное реагирование",
      description: "Быстрое обнаружение и координация спасательных операций при ЧС"
    },
    {
      icon: Users,
      title: "Групповой мониторинг",
      description: "Отслеживание перемещения групп объектов и анализ их взаимодействия"
    },
    {
      icon: BarChart3,
      title: "3D визуализация",
      description: "Отображение на 2D/3D картах с воспроизведением маршрутов движения"
    }
  ];

  return (
    <section className="py-24 bg-white/50">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            <span className="gradient-text">Основной функционал</span>
          </h2>
          <p className="text-xl text-slate-600 max-w-3xl mx-auto leading-relaxed">
            Комплексное решение для мониторинга и обеспечения безопасности персонала 
            в сложных подземных условиях
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((feature, index) => (
            <Card key={index} className="glass-effect border-slate-200 hover:border-blue-300 transition-all duration-300 hover:scale-105">
              <CardHeader>
                <div className="w-12 h-12 bg-blue-600/10 rounded-lg flex items-center justify-center mb-4">
                  <feature.icon className="w-6 h-6 text-blue-600" />
                </div>
                <CardTitle className="text-slate-700 text-lg">{feature.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-slate-600 text-sm leading-relaxed">{feature.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;
