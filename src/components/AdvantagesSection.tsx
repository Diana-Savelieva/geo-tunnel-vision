
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
    <section className="py-24 bg-slate-900">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            <span className="gradient-text">Наши преимущества</span>
          </h2>
          <p className="text-xl text-slate-300 max-w-3xl mx-auto leading-relaxed">
            Технологические решения, которые делают нашу систему лидером в области 
            подземного мониторинга персонала
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {advantages.map((advantage, index) => (
            <Card key={index} className="glass-effect border-slate-700 hover:border-blue-500/50 transition-all duration-300 hover:scale-105 group">
              <CardHeader>
                <div className="w-14 h-14 bg-gradient-to-br from-blue-600 to-blue-700 rounded-lg flex items-center justify-center mb-4 group-hover:from-blue-500 group-hover:to-blue-600 transition-all duration-300">
                  <advantage.icon className="w-7 h-7 text-white" />
                </div>
                <CardTitle className="text-white text-xl">{advantage.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-slate-300 leading-relaxed">{advantage.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="mt-20 text-center">
          <div className="glass-effect rounded-2xl p-12 max-w-4xl mx-auto">
            <h3 className="text-3xl font-bold text-white mb-6">Области применения</h3>
            <p className="text-xl text-slate-300 leading-relaxed mb-8">
              Система предназначена для организации и ведения работ в различных подземных объектах
            </p>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-blue-400 font-semibold">
              <div>Шахты и рудники</div>
              <div>Метрополитен</div>
              <div>Строительство туннелей</div>
              <div>Горноспасательные работы</div>
              <div>Городские коммуникации</div>
              <div>Бомбоубежища</div>
              <div>Подземные хранилища</div>
              <div>Укрытия ГО</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AdvantagesSection;
