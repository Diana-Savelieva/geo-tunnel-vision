
import { CheckCircle } from "lucide-react";

const ProblemsSection = () => {
  const problems = [
    "Экстренное обнаружение и спасение при чрезвычайных ситуациях",
    "Оптимизация маршрутов передвижения персонала в шахтах",
    "Контроль смен и автоматизация учета рабочего времени",
    "Контроль зон повышенной опасности",
    "Контроль за выполнением инструкций по безопасности"
  ];

  return (
    <section className="py-24 bg-gradient-to-r from-blue-50 to-slate-100">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              <span className="gradient-text">Проблемы в шахтах,</span>
              <br />
              <span className="text-slate-700">которые мы решаем</span>
            </h2>
            <p className="text-xl text-slate-600 leading-relaxed">
              Наша система устраняет ключевые проблемы безопасности и эффективности 
              на подземных объектах
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="space-y-6">
              {problems.slice(0, 3).map((problem, index) => (
                <div key={index} className="flex items-start space-x-4 glass-effect rounded-lg p-6">
                  <CheckCircle className="w-6 h-6 text-green-600 flex-shrink-0 mt-1" />
                  <p className="text-slate-700 text-lg leading-relaxed">{problem}</p>
                </div>
              ))}
            </div>
            <div className="space-y-6">
              {problems.slice(3).map((problem, index) => (
                <div key={index + 3} className="flex items-start space-x-4 glass-effect rounded-lg p-6">
                  <CheckCircle className="w-6 h-6 text-green-600 flex-shrink-0 mt-1" />
                  <p className="text-slate-700 text-lg leading-relaxed">{problem}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="text-center mt-16">
            <div className="glass-effect rounded-xl p-8 max-w-2xl mx-auto">
              <h3 className="text-2xl font-bold text-slate-700 mb-4">Кому подходит наша система?</h3>
              <p className="text-slate-600 text-lg leading-relaxed">
                Горнодобывающие компании, метрополитены, строительные площадки, 
                хранилища и объекты гражданской обороны
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProblemsSection;
