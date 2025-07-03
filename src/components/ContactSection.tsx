
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Phone, Mail, Building, FileText, ArrowRight } from "lucide-react";

const ContactSection = () => {
  return (
    <section id="contact-section" className="py-24 bg-gradient-to-br from-slate-50 via-blue-50 to-white">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            <span className="gradient-text">Оставить заявку</span>
          </h2>
          <p className="text-xl text-slate-600 max-w-3xl mx-auto leading-relaxed">
            Получите консультацию по внедрению системы мониторинга на вашем объекте
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
          {/* Contact Info */}
          <div className="space-y-8">
            <Card className="glass-effect border-slate-200">
              <CardHeader>
                <CardTitle className="text-slate-700 text-2xl mb-4">ООО "Прогресс ГеоТех"</CardTitle>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="flex items-center space-x-4">
                  <div className="w-10 h-10 bg-blue-600 rounded-lg flex items-center justify-center">
                    <Phone className="w-5 h-5 text-white" />
                  </div>
                  <div>
                    <p className="text-slate-500 text-sm">Телефон</p>
                    <p className="text-slate-700 text-lg">+7 903 550 66 06</p>
                  </div>
                </div>

                <div className="flex items-center space-x-4">
                  <div className="w-10 h-10 bg-blue-600 rounded-lg flex items-center justify-center">
                    <Mail className="w-5 h-5 text-white" />
                  </div>
                  <div>
                    <p className="text-slate-500 text-sm">Email</p>
                    <p className="text-slate-700 text-lg">e.skiba@pgteh.ru</p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="w-10 h-10 bg-blue-600 rounded-lg flex items-center justify-center">
                    <Building className="w-5 h-5 text-white" />
                  </div>
                  <div>
                    <p className="text-slate-500 text-sm">Реквизиты</p>
                    <div className="text-slate-700">
                      <p>ОГРН: 1257700143920</p>
                      <p>ИНН: 7733466050</p>
                      <p>КПП: 773301001</p>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="glass-effect border-slate-200">
              <CardHeader>
                <CardTitle className="text-slate-700 text-xl flex items-center">
                  <FileText className="w-6 h-6 mr-2 text-blue-600" />
                  Наши услуги
                </CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-3 text-slate-600">
                  <li>• Разработка и внедрение web-приложений</li>
                  <li>• Консультации по цифровизации процессов</li>
                  <li>• Интеграция с существующими системами</li>
                  <li>• Контроль доступа и мониторинг</li>
                  <li>• Аналитика и отчетность</li>
                </ul>
              </CardContent>
            </Card>
          </div>

          {/* CTA Section */}
          <div className="space-y-8">
            <Card className="glass-effect border-blue-200 bg-gradient-to-br from-blue-50/50 to-white/50">
              <CardHeader>
                <CardTitle className="text-slate-700 text-2xl">Начните уже сегодня</CardTitle>
              </CardHeader>
              <CardContent className="space-y-6">
                <p className="text-slate-600 text-lg leading-relaxed">
                  Получите персональную консультацию и узнайте, как наша система 
                  поможет повысить безопасность и эффективность на вашем объекте.
                </p>
                
                <div className="space-y-4">
                  <Button className="w-full bg-blue-600 hover:bg-blue-700 text-white py-4 text-lg">
                    Получить консультацию
                    <ArrowRight className="ml-2 w-5 h-5" />
                  </Button>
                  <Button variant="outline" className="w-full border-blue-400 text-blue-600 hover:bg-blue-50 py-4 text-lg">
                    Скачать презентацию
                  </Button>
                </div>

                <div className="pt-6 border-t border-slate-200">
                  <h4 className="text-slate-700 font-semibold mb-4">Почему выбирают нас:</h4>
                  <div className="grid grid-cols-2 gap-4 text-sm">
                    <div className="bg-slate-100/70 rounded-lg p-3 text-center">
                      <div className="text-2xl font-bold text-blue-600">40-60%</div>
                      <div className="text-slate-500">дешевле импорта</div>
                    </div>
                    <div className="bg-slate-100/70 rounded-lg p-3 text-center">
                      <div className="text-2xl font-bold text-blue-600">5 км</div>
                      <div className="text-slate-500">дальность связи</div>
                    </div>
                    <div className="bg-slate-100/70 rounded-lg p-3 text-center">
                      <div className="text-2xl font-bold text-blue-600">10 м</div>
                      <div className="text-slate-500">точность GPS</div>
                    </div>
                    <div className="bg-slate-100/70 rounded-lg p-3 text-center">
                      <div className="text-2xl font-bold text-blue-600">1000 м</div>
                      <div className="text-slate-500">через породу</div>
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
