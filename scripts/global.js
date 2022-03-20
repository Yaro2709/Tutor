var compile = function (functionObject) {
    return function (it) {
        return functionObject.toString().match(/\/\*([\s\S]*?)\*\//)[1].replace(/\$\{\w.+\}/g, function (variable) {
            return it[variable];
        });
    }
};

var value = it;
variable = variable.replace('${', '').replace('}', '');
variable.split('.').forEach(function (section) {
    value = value[section];
});
return value;
/*Генератор шаблона
var compile = function (functionObject) {
    return functionObject.toString().match(/\/\*([\s\S]*?)\*\//)[1];
};
*/
/*Метод замены
.replace(/\$\{\w.+\}/g, function (variable) {
    return otherValue;
});
*/
/*Устраняет проблемы с переменными вида <h2>${data.title}</h2>
var value = it;
variable = variable.replace('${', '').replace('}', '');
variable.split('.').forEach(function (section) {
    value = value[section];
});
return value;
*/
/*Тест шаблон
var test3 = {
    data: {
        title: 'title string 3',
        content: 'content string 3'
    }
};
var toHtml3 = compile(function () {/*
 <div>
 <h2>${data.title}</h2>
 <div class="content">${data.content}</div>
 </div>
 *
});
toHtml3(test3);
*/

var navigationAt = {};
var navigation = compile(function () {/*
    <nav class="navbar navbar-expand-md  fixed-top bg-dark navbar-dark">
        <div class="container-xl">
            <a class="navbar-brand" href="#">
                <img src="./img/logo.png" alt="" width="30" height="30" class="d-inline-block align-text-top">
                Tutor
            </a>
            <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarsExample07XL" aria-controls="navbarsExample07XL" aria-expanded="false" aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"></span>
            </button>
            <div class="collapse navbar-collapse" id="navbarsExample07XL">
                <ul class="navbar-nav mr-auto">
                    <li class="nav-item">
                        <a class="nav-link" href="./index.html">Сложение XX-XXXX</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link" href="./index2.html">Сложение XXXXX-XXXXXXX</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link" href="./matrix.html">Матрицы X-XX</a>
                    </li>
                </ul>
            </div>
        </div>
    </nav> 
 */
});
