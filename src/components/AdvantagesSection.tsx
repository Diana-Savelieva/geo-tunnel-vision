

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { 
  Wrench, 
  Radio, 
  Target, 
  Mountain, 
  Zap, 
  Search,
  Smartphone,
  TrendingUp,
  Users2,
  Settings,
  BarChart
} from "lucide-react";

const AdvantagesSection = () => {
  const advantages = [
    {
      icon: Wrench,
      title: "Решение под ключ",
      description: "Полный комплекс: программное обеспечение мониторинга и аппаратура связи"
    },
    {
      icon: Radio,
      title: "Дальность связи до 5 км",
      description: "Связь вдоль горных выработок на расстояние до 5 километров"
    },
    {
      icon: Target,
      title: "Точность до 10 метров",
      description: "Высокоточное определение координат персонала, оборудования и транспорта"
    },
    {
      icon: Mountain,
      title: "Связь через породу",
      description: "Передача сигнала сквозь горную породу на расстояние до 1000 метров"
    },
    {
      icon: Zap,
      title: "Низкое энергопотребление",
      description: "Малые размеры оборудования, мощность передатчиков всего 1 Вт"
    },
    {
      icon: Search,
      title: "Поиск под завалами",
      description: "Функция поиска пострадавших под завалами и радиомаяк"
    },
    {
      icon: Smartphone,
      title: "Совместимость со смартфонами",
      description: "Интеграция с мобильными устройствами для удобства использования"
    },
    {
      icon: TrendingUp,
      title: "Повышение безопасности",
      description: "Значительное улучшение уровня безопасности на объекте"
    },
    {
      icon: Users2,
      title: "Трудовая дисциплина",
      description: "Повышение дисциплины и контроль выполнения регламентов"
    },
    {
      icon: Settings,
      title: "Эффективное взаимодействие",
      description: "Улучшение координации между различными подразделениями"
    },
    {
      icon: BarChart,
      title: "Управленческие решения",
      description: "Предоставление данных для принятия обоснованных решений"
    }
  ];

  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-6">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            <span className="gradient-text">Наши преимущества</span>
          </h2>
          <p className="text-lg text-slate-600 max-w-3xl mx-auto leading-relaxed">
            Технологические решения, которые делают нашу систему лидером в области 
            подземного мониторинга персонала
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 max-w-7xl mx-auto">
          {advantages.map((advantage, index) => (
            <Card key={index} className="glass-effect border-slate-200 hover:border-blue-300 transition-all duration-300 hover:scale-105 group bg-white/80">
              <CardHeader className="pb-2">
                <div className="w-10 h-10 bg-gradient-to-br from-blue-50 to-blue-100 rounded-lg flex items-center justify-center mb-2 group-hover:from-blue-100 group-hover:to-blue-200 transition-all duration-300">
                  <advantage.icon className="w-5 h-5 text-blue-600" />
                </div>
                <CardTitle className="text-slate-700 text-base leading-tight">{advantage.title}</CardTitle>
              </CardHeader>
              <CardContent className="pt-0">
                <p className="text-slate-600 text-xs leading-relaxed">{advantage.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AdvantagesSection;

