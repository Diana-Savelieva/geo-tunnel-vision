
import { CheckCircle, Mountain, Train, Construction, Package, Shield } from "lucide-react";

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
      icon: Mountain,
      title: "Горнодобывающие компании",
      subtitle: "Шахты и рудники"
    },
    {
      icon: Train,
      title: "Метрополитены",
      subtitle: "Подземные станции и туннели"
    },
    {
      icon: Construction,
      title: "Строительные площадки",
      subtitle: "Туннели и подземные объекты"
    },
    {
      icon: Package,
      title: "Подземные хранилища",
      subtitle: "Склады и логистические центры"
    },
    {
      icon: Shield,
      title: "Объекты гражданской обороны",
      subtitle: "Бомбоубежища и укрытия"
    }
  ];

  return (
    <section className="py-24 bg-gradient-to-br from-blue-50 via-white to-slate-50">
      <div className="container mx-auto px-6">
        {/* Problems Section */}
        <div className="max-w-6xl mx-auto mb-20">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-slate-700">
              Проблемы в шахтах, которые мы решаем
            </h2>
            <p className="text-xl text-slate-600 leading-relaxed max-w-3xl mx-auto">
              Наша система устраняет ключевые проблемы безопасности и эффективности 
              на подземных объектах
            </p>
          </div>

          {/* Top row - 3 problems */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
            {problems.slice(0, 3).map((problem, index) => (
              <div key={index} className="glass-effect rounded-xl p-6 hover:scale-105 transition-all duration-300 text-center">
                <CheckCircle className="w-8 h-8 text-green-600 mx-auto mb-4" />
                <h3 className="text-slate-700 font-semibold text-lg mb-2">{problem.title}</h3>
                <p className="text-slate-600 leading-relaxed">{problem.description}</p>
              </div>
            ))}
          </div>

          {/* Bottom row - 2 problems centered */}
          <div className="flex justify-center">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-2xl">
              {problems.slice(3).map((problem, index) => (
                <div key={index + 3} className="glass-effect rounded-xl p-6 hover:scale-105 transition-all duration-300 text-center">
                  <CheckCircle className="w-8 h-8 text-green-600 mx-auto mb-4" />
                  <h3 className="text-slate-700 font-semibold text-lg mb-2">{problem.title}</h3>
                  <p className="text-slate-600 leading-relaxed">{problem.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Target Audience Section */}
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h3 className="text-4xl md:text-5xl font-bold mb-6 text-slate-700">
              Кому подходит наша система?
            </h3>
            <p className="text-xl text-slate-600 leading-relaxed max-w-3xl mx-auto">
              Решение для различных отраслей и типов подземных объектов
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-6 justify-center">
            {targetAudience.map((audience, index) => (
              <div key={index} className="glass-effect rounded-xl p-6 text-center hover:scale-105 transition-all duration-300 group">
                <div className="w-16 h-16 bg-blue-600/10 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:bg-blue-600/20 transition-colors">
                  <audience.icon className="w-8 h-8 text-blue-600" />
                </div>
                <h4 className="text-slate-700 font-bold text-lg mb-2">{audience.title}</h4>
                <p className="text-slate-600 text-sm leading-relaxed">{audience.subtitle}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProblemsSection;
