//Флаг шаблона
flag = module(1,3);
//Генератор u
var ArrayU  = ['a', 'b', 'c', 'f', 'g', 'h', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];
var rand    = Math.floor(Math.random() * ArrayU.length); //Получаем случайный ключ массива
var VarU       = ArrayU[rand];
//Генератор a
VarA = module(2,50);
//Шаблоны
    switch (flag) {
        //Основные формулы
        case 1:
            VarA = module(25,50);
            VarB = module(2,24);
            VarC = VarA - VarB;
            VarD = VarA + VarB;
            task    = "$$\\displaylines{\\int \\cos("+VarA+""+VarU+") \\cos("+VarB+""+VarU+") d"+VarU+"}$$";
            answer  = "$$\\displaylines{\\int \\cos("+VarA+""+VarU+") \\cos("+VarB+""+VarU+") d"+VarU+" = \\\\ = \\int \\frac{1}{2} \\Big(\\cos("+VarA+""+VarU+"-"+VarB+""+VarU+") + \\cos("+VarA+""+VarU+"+"+VarB+""+VarU+") \\Big)d"+VarU+" = \\\\ = \\frac{1}{2} \\int \\Big(cos("+VarC+""+VarU+") + cos("+VarD+""+VarU+") \\Big)d"+VarU+" = \\\\ = \\frac{1}{2} \\cdot \\frac{1}{"+VarC+"} \\int cos("+VarC+""+VarU+") d("+VarC+""+VarU+") + \\frac{1}{2} \\cdot \\frac{1}{"+VarD+"} \\int cos("+VarD+""+VarU+")d("+VarD+""+VarU+") = \\\\ = \\frac{1}{"+2 * VarC+"} \\sin("+VarC+""+VarU+") + \\frac{1}{"+2 * VarD+"} \\sin("+VarD+""+VarU+") + C}$$";
        break;
        case 2:
            VarA = module(25,50);
            VarB = module(2,24);
            VarC = VarA - VarB;
            VarD = VarA + VarB;
            task    = "$$\\displaylines{\\int \\sin("+VarA+""+VarU+") \\sin("+VarB+""+VarU+") d"+VarU+"}$$";
            answer  = "$$\\displaylines{\\int \\sin("+VarA+""+VarU+") \\sin("+VarB+""+VarU+") d"+VarU+" = \\\\ = \\int \\frac{1}{2} \\Big(\\cos("+VarA+""+VarU+"-"+VarB+""+VarU+") - \\cos("+VarA+""+VarU+"+"+VarB+""+VarU+") \\Big)d"+VarU+" = \\\\ = \\frac{1}{2} \\int \\Big(cos("+VarC+""+VarU+") - cos("+VarD+""+VarU+") \\Big)d"+VarU+" = \\\\ = \\frac{1}{2} \\cdot \\frac{1}{"+VarC+"} \\int cos("+VarC+""+VarU+") d("+VarC+""+VarU+") - \\frac{1}{2} \\cdot \\frac{1}{"+VarD+"} \\int cos("+VarD+""+VarU+")d("+VarD+""+VarU+") = \\\\ = \\frac{1}{"+2 * VarC+"} \\sin("+VarC+""+VarU+") - \\frac{1}{"+2 * VarD+"} \\sin("+VarD+""+VarU+") + C}$$";
        break;
        case 3:
            VarA = module(25,50);
            VarB = module(2,24);
            VarC = VarA + VarB;
            VarD = VarA - VarB;
            task    = "$$\\displaylines{\\int \\sin("+VarA+""+VarU+") \\cos("+VarB+""+VarU+") d"+VarU+"}$$";
            answer  = "$$\\displaylines{\\int \\sin("+VarA+""+VarU+") \\cos("+VarB+""+VarU+") d"+VarU+" = \\\\ = \\int \\frac{1}{2} \\Big(\\sin("+VarA+""+VarU+"+"+VarB+""+VarU+") + \\sin("+VarA+""+VarU+"-"+VarB+""+VarU+") \\Big)d"+VarU+" = \\\\ = \\frac{1}{2} \\int \\Big(sin("+VarC+""+VarU+") + sin("+VarD+""+VarU+") \\Big)d"+VarU+" = \\\\ = \\frac{1}{2} \\cdot \\frac{1}{"+VarC+"} \\int sin("+VarC+""+VarU+") d("+VarC+""+VarU+") + \\frac{1}{2} \\cdot \\frac{1}{"+VarD+"} \\int sin("+VarD+""+VarU+")d("+VarD+""+VarU+") = \\\\ = - \\frac{1}{"+2 * VarC+"} \\cos("+VarC+""+VarU+") - \\frac{1}{"+2 * VarD+"} \\cos("+VarD+""+VarU+") + C}$$";
        break;
        //Дополнительные формулы
        default:
            alert( "400 Bad Request: value is undefined!" );
    }
//Вывод    
document.getElementById("task").innerHTML = task;
document.getElementById("answer").innerHTML = answer;