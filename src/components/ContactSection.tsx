
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Phone, Mail, Building, ArrowRight } from "lucide-react";

const ContactSection = () => {
  return (
    <section id="contact-section" className="py-24 bg-gradient-to-br from-slate-900 to-blue-900">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-white">
            Оставить заявку
          </h2>
          <p className="text-xl text-slate-300 max-w-3xl mx-auto leading-relaxed">
            Получите консультацию по внедрению системы мониторинга на вашем объекте
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
          {/* Contact Info */}
          <div className="space-y-8">
            <Card className="glass-effect border-slate-700 bg-slate-800/50">
              <CardHeader>
                <CardTitle className="text-white text-2xl mb-4">ООО "Прогресс ГеоТех"</CardTitle>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="flex items-center space-x-4">
                  <div className="w-10 h-10 bg-blue-600 rounded-lg flex items-center justify-center">
                    <Phone className="w-5 h-5 text-white" />
                  </div>
                  <div>
                    <p className="text-slate-400 text-sm">Телефон</p>
                    <p className="text-white text-lg">+7 903 550 66 06</p>
                  </div>
                </div>

                <div className="flex items-center space-x-4">
                  <div className="w-10 h-10 bg-blue-600 rounded-lg flex items-center justify-center">
                    <Mail className="w-5 h-5 text-white" />
                  </div>
                  <div>
                    <p className="text-slate-400 text-sm">Email</p>
                    <p className="text-white text-lg">e.skiba@pgteh.ru</p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="w-10 h-10 bg-blue-600 rounded-lg flex items-center justify-center">
                    <Building className="w-5 h-5 text-white" />
                  </div>
                  <div>
                    <p className="text-slate-400 text-sm">Реквизиты</p>
                    <div className="text-white">
                      <p>ОГРН: 1257700143920</p>
                      <p>ИНН: 7733466050</p>
                      <p>КПП: 773301001</p>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* CTA Section */}
          <div className="space-y-8">
            <Card className="glass-effect border-blue-500/30 bg-gradient-to-br from-blue-900/30 to-slate-800/30">
              <CardHeader>
                <CardTitle className="text-white text-2xl">Начните уже сегодня</CardTitle>
              </CardHeader>
              <CardContent className="space-y-6">
                <p className="text-slate-300 text-lg leading-relaxed">
                  Получите персональную консультацию и узнайте, как наша система 
                  поможет повысить безопасность и эффективность на вашем объекте.
                </p>
                
                <div className="space-y-4">
                  <Button className="w-full bg-blue-600 hover:bg-blue-700 text-white py-4 text-lg">
                    Получить консультацию
                    <ArrowRight className="ml-2 w-5 h-5" />
                  </Button>
                  <Button variant="outline" className="w-full border-blue-400 text-blue-400 hover:bg-blue-50/10 py-4 text-lg">
                    Скачать презентацию
                  </Button>
                </div>

                <div className="pt-6 border-t border-slate-600">
                  <h4 className="text-white font-semibold mb-4">Наши услуги:</h4>
                  <ul className="space-y-2 text-slate-300 text-sm">
                    <li>• Разработка и внедрение web-приложений</li>
                    <li>• Консультации по цифровизации процессов</li>
                    <li>• Интеграция с существующими системами</li>
                    <li>• Контроль доступа и мониторинг</li>
                    <li>• Аналитика и отчетность</li>
                  </ul>
                </div>

                <div className="pt-6 border-t border-slate-600">
                  <h4 className="text-white font-semibold mb-4">Почему выбирают нас:</h4>
                  <div className="grid grid-cols-2 gap-4 text-sm">
                    <div className="bg-slate-700/50 rounded-lg p-3 text-center">
                      <div className="text-2xl font-bold text-blue-400">40-60%</div>
                      <div className="text-slate-300">дешевле импорта</div>
                    </div>
                    <div className="bg-slate-700/50 rounded-lg p-3 text-center">
                      <div className="text-2xl font-bold text-blue-400">5 км</div>
                      <div className="text-slate-300">дальность связи</div>
                    </div>
                    <div className="bg-slate-700/50 rounded-lg p-3 text-center">
                      <div className="text-2xl font-bold text-blue-400">10 м</div>
                      <div className="text-slate-300">точность GPS</div>
                    </div>
                    <div className="bg-slate-700/50 rounded-lg p-3 text-center">
                      <div className="text-2xl font-bold text-blue-400">1000 м</div>
                      <div className="text-slate-300">через породу</div>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
