
import { CheckCircle, Building, Factory, Construction, Hospital, Plane } from "lucide-react";

const ProblemsSection = () => {
  const problems = [
    {
      title: "Экстренное обнаружение и спасение",
      description: "при чрезвычайных ситуациях"
    },
    {
      title: "Оптимизация маршрутов",
      description: "передвижения персонала в шахтах"
    },
    {
      title: "Контроль смен",
      description: "и автоматизация учета рабочего времени"
    },
    {
      title: "Контроль зон повышенной опасности",
      description: "с мгновенным оповещением"
    },
    {
      title: "Контроль выполнения инструкций",
      description: "по безопасности и регламентов"
    }
  ];

  const targetAudience = [
    {
      icon: Building,
      title: "Горнодобывающие компании",
      description: "Шахты и рудники"
    },
    {
      icon: Factory,
      title: "Метрополитены",
      description: "Подземные станции и туннели"
    },
    {
      icon: Construction,
      title: "Строительные площадки",
      description: "Туннели и подземные объекты"
    },
    {
      icon: Hospital,
      title: "Подземные хранилища",
      description: "Склады и логистические центры"
    },
    {
      icon: Plane,
      title: "Объекты гражданской обороны",
      description: "Бомбоубежища и укрытия"
    }
  ];

  return (
    <section className="py-24 bg-gradient-to-br from-blue-50 via-white to-slate-50">
      <div className="container mx-auto px-6">
        {/* Problems Section */}
        <div className="max-w-6xl mx-auto mb-20">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              <span className="gradient-text">Проблемы в шахтах,</span>
              <br />
              <span className="text-slate-700">которые мы решаем</span>
            </h2>
            <p className="text-xl text-slate-600 leading-relaxed max-w-3xl mx-auto">
              Наша система устраняет ключевые проблемы безопасности и эффективности 
              на подземных объектах
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {problems.map((problem, index) => (
              <div key={index} className={`glass-effect rounded-xl p-6 hover:scale-105 transition-all duration-300 ${
                index === 2 ? 'md:col-span-2 lg:col-span-1' : ''
              } ${index === 3 ? 'lg:col-span-2' : ''}`}>
                <div className="flex items-start space-x-4">
                  <CheckCircle className="w-6 h-6 text-green-600 flex-shrink-0 mt-1" />
                  <div>
                    <h3 className="text-slate-700 font-semibold text-lg mb-2">{problem.title}</h3>
                    <p className="text-slate-600 leading-relaxed">{problem.description}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Target Audience Section */}
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h3 className="text-3xl md:text-4xl font-bold text-slate-700 mb-4">
              Кому подходит наша система?
            </h3>
            <p className="text-lg text-slate-600 leading-relaxed">
              Решение для различных отраслей и типов подземных объектов
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {targetAudience.map((audience, index) => (
              <div key={index} className="glass-effect rounded-xl p-8 text-center hover:scale-105 transition-all duration-300 group">
                <div className="w-16 h-16 bg-blue-600/10 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:bg-blue-600/20 transition-colors">
                  <audience.icon className="w-8 h-8 text-blue-600" />
                </div>
                <h4 className="text-slate-700 font-bold text-xl mb-3">{audience.title}</h4>
                <p className="text-slate-600 leading-relaxed">{audience.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProblemsSection;
