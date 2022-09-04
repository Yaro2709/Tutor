window.template = {
 //заружает представление
 TemplateGet:  function (TemplateUrl) {
    // 1. Создаём новый объект XMLHttpRequest
    var xhr = new XMLHttpRequest();
    // 2. Конфигурируем его: GET-запрос на URL "TemplateUrl"
    xhr.open('GET', TemplateUrl, false);
    // 3. Отсылаем запрос
    xhr.send();
   if (xhr.status >= 200 && xhr.status < 400) {
      // вернуть результат
      return xhr.responseText;
   } else {
       // обработать ошибку
       alert( xhr.status + ': ' + xhr.statusText ); // пример вывода: 404: Not Found
       return "";
   }
},
//класс функций для рендинга
Render:{
    //а в этом классе мы напишем все функции рендера
    func:{
        //рендит переменные
        vars : function(html, vars){
            //ищем все переменные в шаблоне
            var $ = html.match(/{{var.(.*?)}}/g);
            //проверяем нашли ли что то
                        if (Array.isArray($)) {
            //мы нашли переменные в шаблоне. Необходимо их все распарсить.
                        $.forEach(function (item) {
                //item содержит найденую строку {{var.VarName}} 
                //по этому мы должны распарсить ету строку дабы получить только VarName
                               item = item.replace("{{var.", "");
                              item = item.replace("}}", "");
                              //у нас есть имя переменной. Пора проверить передали ли мы такую
                              //и обработать ошибки
                              if (vars[item] === undefined){
                //перенную не передали.
                //пишем об ошибке в консоль и заменяем её значение в шаблоне на null
                console.warn("Переменная "+item+" не найдена");
                html = html.replace("{{var." + item + "}}", "null");
                 } else {
                    //переменную мы нашли. Вставим ка её в шаблон
                    html = html.replace("{{var." + item + "}}", vars[item]);
                }
                    });
                }
                //удалим обьект с переменными
                delete vars;
                //вернём html
                return html;
            }
        },
        //точка входа в рендер.
        Run:function(html, vars){
            html = this.func.vars(html, vars);
            return html;
        }
    },
    //точка входа
    Run: function (TemplateUrl, vars) {
        //загружаем шаблон
        var html = this.TemplateGet(TemplateUrl);
        //отправляем шаблон рендеру
        html = this.Render.Run(html, vars);
        //удаляем обьект с переменными. Он нам больше не нужен, а может занимать много места
        delete vars;
        //результат шаблонизатор вставит в <div id="page"></div>
        document.getElementById("page").innerHTML = html;
    }
};

//вызовем представление
template.Run("test.tpl", {
    VarName : "test"
});
