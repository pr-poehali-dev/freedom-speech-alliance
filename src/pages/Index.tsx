import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import Icon from '@/components/ui/icon';
import { useToast } from '@/hooks/use-toast';

const Index = () => {
  const [activeSection, setActiveSection] = useState('home');
  const { toast } = useToast();

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast({
      title: "Заявка отправлена",
      description: "Мы свяжемся с вами в ближайшее время",
    });
    setFormData({ name: '', email: '', phone: '', message: '' });
  };

  const news = [
    {
      id: 1,
      date: '15 ноября 2024',
      title: 'Партия "Мнение камня" проводит общегородское собрание',
      excerpt: 'Приглашаем всех неравнодушных граждан на открытую встречу, где обсудим актуальные вопросы защиты свободы слова и традиционных ценностей.',
      category: 'События'
    },
    {
      id: 2,
      date: '8 ноября 2024',
      title: 'Принята программа партии на 2025 год',
      excerpt: 'На заседании партийного совета утверждены ключевые направления работы: защита прав граждан на свободное выражение мнений и укрепление традиционных семейных ценностей.',
      category: 'Программа'
    },
    {
      id: 3,
      date: '1 ноября 2024',
      title: 'Открыт прием в региональные отделения',
      excerpt: 'По всей стране начинают работу региональные представительства партии. Каждый желающий может вступить и стать частью общественного движения.',
      category: 'Новости'
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
        <div className="container flex h-16 items-center justify-between">
          <div className="flex items-center gap-2">
            <div className="text-2xl font-bold text-secondary">Мнение камня</div>
          </div>
          <nav className="flex gap-6">
            <button
              onClick={() => setActiveSection('home')}
              className={`text-sm font-medium transition-colors hover:text-primary ${
                activeSection === 'home' ? 'text-primary' : 'text-muted-foreground'
              }`}
            >
              Главная
            </button>
            <button
              onClick={() => setActiveSection('join')}
              className={`text-sm font-medium transition-colors hover:text-primary ${
                activeSection === 'join' ? 'text-primary' : 'text-muted-foreground'
              }`}
            >
              Вступить
            </button>
            <button
              onClick={() => setActiveSection('news')}
              className={`text-sm font-medium transition-colors hover:text-primary ${
                activeSection === 'news' ? 'text-primary' : 'text-muted-foreground'
              }`}
            >
              Новости
            </button>
          </nav>
        </div>
      </header>

      {activeSection === 'home' && (
        <>
          <section className="relative w-full py-20 md:py-32 lg:py-40 bg-secondary">
            <div className="absolute inset-0 overflow-hidden">
              <img
                src="https://cdn.poehali.dev/projects/c4f78b65-21dd-4c09-9f64-8445fde11d04/files/94d0b6e7-1ea5-4b2e-bfc9-bbad5fb683a8.jpg"
                alt="Мнение камня"
                className="w-full h-full object-cover opacity-20"
              />
            </div>
            <div className="container relative z-10">
              <div className="max-w-3xl">
                <h1 className="text-4xl font-bold tracking-tight text-white sm:text-5xl md:text-6xl lg:text-7xl mb-6">
                  Мнение камня
                </h1>
                <p className="text-xl text-gray-200 mb-8 leading-relaxed">
                  Партия для тех, кто защищает свободу слова и традиционные ценности. Твёрдые принципы, честные позиции.
                </p>
                <Button 
                  size="lg" 
                  onClick={() => setActiveSection('join')}
                  className="text-lg px-8"
                >
                  Вступить в партию
                  <Icon name="ArrowRight" className="ml-2" size={20} />
                </Button>
              </div>
            </div>
          </section>

          <section className="py-20 bg-background">
            <div className="container">
              <h2 className="text-3xl font-bold text-center mb-12">Наши принципы</h2>
              <div className="grid md:grid-cols-3 gap-8">
                <Card className="border-2 hover:shadow-lg transition-shadow">
                  <CardHeader>
                    <div className="mb-4 w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center">
                      <Icon name="MessageSquare" className="text-primary" size={24} />
                    </div>
                    <CardTitle>Свобода слова</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground leading-relaxed">
                      Мы выступаем за право каждого гражданина свободно выражать свои мысли и убеждения без страха цензуры и преследования.
                    </p>
                  </CardContent>
                </Card>

                <Card className="border-2 hover:shadow-lg transition-shadow">
                  <CardHeader>
                    <div className="mb-4 w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center">
                      <Icon name="Users" className="text-primary" size={24} />
                    </div>
                    <CardTitle>Традиционные ценности</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground leading-relaxed">
                      Укрепление института семьи, уважение к культурному наследию и традициям нашего народа.
                    </p>
                  </CardContent>
                </Card>

                <Card className="border-2 hover:shadow-lg transition-shadow">
                  <CardHeader>
                    <div className="mb-4 w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center">
                      <Icon name="Shield" className="text-primary" size={24} />
                    </div>
                    <CardTitle>Защита прав</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground leading-relaxed">
                      Активная защита конституционных прав граждан, противодействие навязыванию чуждых идеологий.
                    </p>
                  </CardContent>
                </Card>
              </div>
            </div>
          </section>

          <section className="py-20 bg-muted/30">
            <div className="container">
              <div className="max-w-3xl mx-auto text-center">
                <h2 className="text-3xl font-bold mb-6">Программа партии</h2>
                <div className="space-y-6 text-left">
                  <div className="flex gap-4">
                    <div className="flex-shrink-0 mt-1">
                      <div className="w-8 h-8 rounded-full bg-primary text-white flex items-center justify-center font-semibold">
                        1
                      </div>
                    </div>
                    <div>
                      <h3 className="font-semibold text-lg mb-2">Защита свободы слова</h3>
                      <p className="text-muted-foreground leading-relaxed">
                        Законодательные инициативы по защите права граждан на свободное выражение мнений в СМИ, интернете и публичных пространствах.
                      </p>
                    </div>
                  </div>

                  <div className="flex gap-4">
                    <div className="flex-shrink-0 mt-1">
                      <div className="w-8 h-8 rounded-full bg-primary text-white flex items-center justify-center font-semibold">
                        2
                      </div>
                    </div>
                    <div>
                      <h3 className="font-semibold text-lg mb-2">Поддержка традиционных семейных ценностей</h3>
                      <p className="text-muted-foreground leading-relaxed">
                        Программы поддержки многодетных семей, защита института брака между мужчиной и женщиной.
                      </p>
                    </div>
                  </div>

                  <div className="flex gap-4">
                    <div className="flex-shrink-0 mt-1">
                      <div className="w-8 h-8 rounded-full bg-primary text-white flex items-center justify-center font-semibold">
                        3
                      </div>
                    </div>
                    <div>
                      <h3 className="font-semibold text-lg mb-2">Противодействие навязыванию идеологий</h3>
                      <p className="text-muted-foreground leading-relaxed">
                        Защита детей и молодежи от пропаганды нетрадиционных ценностей в образовательных учреждениях.
                      </p>
                    </div>
                  </div>

                  <div className="flex gap-4">
                    <div className="flex-shrink-0 mt-1">
                      <div className="w-8 h-8 rounded-full bg-primary text-white flex items-center justify-center font-semibold">
                        4
                      </div>
                    </div>
                    <div>
                      <h3 className="font-semibold text-lg mb-2">Сохранение культурного наследия</h3>
                      <p className="text-muted-foreground leading-relaxed">
                        Поддержка национальной культуры, истории и традиций. Развитие патриотического воспитания.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>
        </>
      )}

      {activeSection === 'join' && (
        <section className="py-20">
          <div className="container">
            <div className="max-w-2xl mx-auto">
              <div className="text-center mb-12">
                <h1 className="text-4xl font-bold mb-4">Вступить в партию</h1>
                <p className="text-lg text-muted-foreground">
                  Станьте частью движения за свободу слова и традиционные ценности
                </p>
              </div>

              <Card>
                <CardHeader>
                  <CardTitle>Заявка на вступление</CardTitle>
                  <CardDescription>
                    Заполните форму, и мы свяжемся с вами для завершения процедуры вступления
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div className="space-y-2">
                      <Label htmlFor="name">Полное имя *</Label>
                      <Input
                        id="name"
                        placeholder="Иванов Иван Иванович"
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        required
                      />
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="email">Email *</Label>
                      <Input
                        id="email"
                        type="email"
                        placeholder="email@example.com"
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        required
                      />
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="phone">Телефон *</Label>
                      <Input
                        id="phone"
                        type="tel"
                        placeholder="+7 (999) 123-45-67"
                        value={formData.phone}
                        onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                        required
                      />
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="message">Почему вы хотите вступить в партию?</Label>
                      <Textarea
                        id="message"
                        placeholder="Расскажите о своей мотивации..."
                        value={formData.message}
                        onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                        rows={5}
                      />
                    </div>

                    <Button type="submit" className="w-full" size="lg">
                      Отправить заявку
                      <Icon name="Send" className="ml-2" size={18} />
                    </Button>
                  </form>
                </CardContent>
              </Card>

              <div className="mt-8 p-6 bg-muted/50 rounded-lg">
                <h3 className="font-semibold mb-3 flex items-center gap-2">
                  <Icon name="Info" size={20} className="text-primary" />
                  Информация о членстве
                </h3>
                <ul className="space-y-2 text-sm text-muted-foreground">
                  <li>• Членский взнос: 500 рублей ежегодно</li>
                  <li>• Право участвовать в собраниях и голосованиях</li>
                  <li>• Доступ к закрытым мероприятиям партии</li>
                  <li>• Возможность выдвигаться на выборные должности</li>
                </ul>
              </div>
            </div>
          </div>
        </section>
      )}

      {activeSection === 'news' && (
        <section className="py-20">
          <div className="container">
            <div className="max-w-4xl mx-auto">
              <h1 className="text-4xl font-bold mb-12 text-center">Новости партии</h1>
              
              <div className="space-y-6">
                {news.map((item) => (
                  <Card key={item.id} className="hover:shadow-lg transition-shadow">
                    <CardHeader>
                      <div className="flex items-center gap-4 mb-2">
                        <span className="text-xs font-medium bg-primary/10 text-primary px-3 py-1 rounded-full">
                          {item.category}
                        </span>
                        <span className="text-sm text-muted-foreground flex items-center gap-1">
                          <Icon name="Calendar" size={14} />
                          {item.date}
                        </span>
                      </div>
                      <CardTitle className="text-2xl">{item.title}</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <p className="text-muted-foreground leading-relaxed">
                        {item.excerpt}
                      </p>
                    </CardContent>
                  </Card>
                ))}
              </div>

              <div className="mt-12 text-center">
                <Button variant="outline" size="lg">
                  Загрузить ещё
                  <Icon name="ChevronDown" className="ml-2" size={18} />
                </Button>
              </div>
            </div>
          </div>
        </section>
      )}

      <footer className="border-t py-12 bg-secondary text-white">
        <div className="container">
          <div className="grid md:grid-cols-3 gap-8">
            <div>
              <h3 className="font-bold text-lg mb-4">Мнение камня</h3>
              <p className="text-sm text-gray-300">
                Политическая партия защиты свободы слова и традиционных ценностей
              </p>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Контакты</h4>
              <div className="space-y-2 text-sm text-gray-300">
                <p className="flex items-center gap-2">
                  <Icon name="Mail" size={16} />
                  info@mnenie-kamnya.ru
                </p>
                <p className="flex items-center gap-2">
                  <Icon name="Phone" size={16} />
                  +7 (495) 123-45-67
                </p>
              </div>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Следите за нами</h4>
              <div className="flex gap-4">
                <button className="hover:text-primary transition-colors">
                  <Icon name="Facebook" size={20} />
                </button>
                <button className="hover:text-primary transition-colors">
                  <Icon name="Twitter" size={20} />
                </button>
                <button className="hover:text-primary transition-colors">
                  <Icon name="Youtube" size={20} />
                </button>
              </div>
            </div>
          </div>
          <div className="border-t border-gray-700 mt-8 pt-8 text-center text-sm text-gray-400">
            © 2024 Партия "Мнение камня". Все права защищены.
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
