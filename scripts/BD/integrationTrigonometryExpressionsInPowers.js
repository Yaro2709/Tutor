//Флаг шаблона
flag = module(1,5);
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
            VarA = module(2,50);
            task    = "$$\\displaylines{\\int \\sin^{2}("+VarA+""+VarU+")d"+VarU+"}$$";
            answer  = "$$\\displaylines{\\int \\sin^{2}("+VarA+""+VarU+")d"+VarU+" = \\\\ = \\int \\frac{1}{2} \\Big(1- \\cos(2 \\cdot "+VarA+""+VarU+")\\Big)d"+VarU+" = \\\\ = \\frac{1}{2} \\int d"+VarU+" - \\frac{1}{2} \\cdot \\frac{1}{"+2 * VarA+"} \\int \\cos ("+2 * VarA+""+VarU+") d("+2 * VarA+""+VarU+") = \\\\ = \\frac{1}{2}"+VarU+" - \\frac{1}{"+2 * 2 * VarA+"} \\sin("+2 * VarA+""+VarU+") + C}$$";
        break;
        case 2:
            VarA = module(2,50);
            task    = "$$\\displaylines{\\int \\cos^{2}("+VarA+""+VarU+")d"+VarU+"}$$";
            answer  = "$$\\displaylines{\\int \\cos^{2}("+VarA+""+VarU+")d"+VarU+" = \\\\ = \\int \\frac{1}{2} \\Big(1 + \\cos(2 \\cdot "+VarA+""+VarU+")\\Big)d"+VarU+" = \\\\ = \\frac{1}{2} \\int d"+VarU+" + \\frac{1}{2} \\cdot \\frac{1}{"+2 * VarA+"} \\int \\cos ("+2 * VarA+""+VarU+") d("+2 * VarA+""+VarU+") = \\\\ = \\frac{1}{2}"+VarU+" + \\frac{1}{"+2 * 2 * VarA+"} \\sin("+2 * VarA+""+VarU+") + C}$$";
        break;
        case 3:
            VarA = module(2,50);
            task    = "$$\\displaylines{\\int \\sin^{3}("+VarA+""+VarU+")d"+VarU+"}$$";
            answer  = "$$\\displaylines{\\int \\sin^{3}("+VarA+""+VarU+")d"+VarU+" = \\\\ = \\int \\sin^{2}("+VarA+""+VarU+") \\sin("+VarA+""+VarU+")d"+VarU+" = \\\\ = -\\frac{1}{"+VarA+"} \\int \\sin^{2}("+VarA+""+VarU+")d\\big(\\cos("+VarA+""+VarU+")\\big) = \\\\ = -\\frac{1}{"+VarA+"}\\int (1-\\cos^{2}("+VarA+""+VarU+"))d\\big(\\cos("+VarA+""+VarU+")\\big) = \\\\ = -\\frac{1}{"+VarA+"} \\int d\\big(\\cos("+VarA+""+VarU+")\\big) - \\frac{1}{"+VarA+"} \\int \\cos^{2}("+VarA+""+VarU+") d\\big(\\cos("+VarA+""+VarU+")\\big) = \\\\ = -\\frac{1}{"+VarA+"} \\cos("+VarA+""+VarU+") + \\frac{1}{"+VarA * 3+"} \\cos^{3}("+VarA+""+VarU+") + C}$$";
        break;
        case 4:
            VarA = module(2,50);
            task    = "$$\\displaylines{\\int \\cos^{3}("+VarA+""+VarU+")d"+VarU+"}$$";
            answer  = "$$\\displaylines{\\int \\cos^{3}("+VarA+""+VarU+")d"+VarU+" = \\\\ = \\int \\cos^{2}("+VarA+""+VarU+") \\cos("+VarA+""+VarU+")d"+VarU+" = \\\\ = \\frac{1}{"+VarA+"} \\int \\cos^{2}("+VarA+""+VarU+")d\\big(\\sin("+VarA+""+VarU+")\\big) = \\\\ = \\frac{1}{"+VarA+"}\\int (1-\\sin^{2}("+VarA+""+VarU+"))d\\big(\\sin("+VarA+""+VarU+")\\big) = \\\\ = \\frac{1}{"+VarA+"} \\int d\\big(\\sin("+VarA+""+VarU+")\\big) - \\frac{1}{"+VarA+"} \\int \\sin^{2}("+VarA+""+VarU+") d\\big(\\sin("+VarA+""+VarU+")\\big) = \\\\ = \\frac{1}{"+VarA+"} \\sin("+VarA+""+VarU+") - \\frac{1}{"+VarA * 3+"} \\sin^{3}("+VarA+""+VarU+") + C}$$";
        break;
        case 5:
            VarA = module(2,15);
            task    = "$$\\displaylines{\\int \\sin^{4}("+VarA+""+VarU+")d"+VarU+"}$$";
            answer  = "$$\\displaylines{\\int \\sin^{4}("+VarA+""+VarU+")d"+VarU+" = \\\\ = \\int \\Big(\\frac{1}{2}\\big(1-\\cos("+2*VarA+""+VarU+")\\big)\\Big)^{2}d"+VarU+" = \\\\ = \\int \\frac{1}{4} \\Big(1 - 2\\cos("+2*VarA+""+VarU+")+\\cos^{2}("+2*VarA+""+VarU+")\\Big)d"+VarU+" = \\\\ = \\frac{1}{4}\\int d"+VarU+" - \\frac{1}{4} \\int 2\\cos("+2*VarA+""+VarU+")d"+VarU+" + \\frac{1}{4} \\int \\cos^{2} ("+2*VarA+""+VarU+") d"+VarU+" = \\\\ = \\frac{1}{4}"+VarU+" - \\frac{1}{2} \\cdot \\frac{1}{"+2*VarA+"} \\int \\cos("+2*VarA+""+VarU+") d("+2*VarA+""+VarU+") + \\frac{1}{4} \\int \\frac{1}{2} \\Big(1 + \\cos(2 \\cdot "+2*VarA+" "+VarU+")\\Big)d"+VarU+" = \\\\ = \\frac{1}{4}"+VarU+" - \\frac{1}{"+4*VarA+"} \\sin("+2*VarA+""+VarU+") + \\frac{1}{"+4*2+"} \\int d"+VarU+" + \\frac{1}{"+4*2+"} \\int \\cos("+4*VarA+""+VarU+")d"+VarU+" = \\\\ = \\frac{1}{4}"+VarU+" - \\frac{1}{"+4*VarA+"} \\sin("+2*VarA+""+VarU+") + \\frac{1}{"+4*2+"}"+VarU+" + \\frac{1}{"+4*2+"} \\cdot \\frac{1}{"+4*VarA+"} \\sin("+4*VarA+""+VarU+") + C = \\\\ = \\frac{3}{8}"+VarU+" - \\frac{1}{"+4*VarA+"} \\sin("+2*VarA+""+VarU+") + \\frac{1}{"+4*2*4*VarA+"} \\sin("+4*VarA+""+VarU+") + C}$$";
        break;
        //Дополнительные формулы
        default:
            alert( "400 Bad Request: value is undefined!" );
    }
//Вывод    
document.getElementById("task").innerHTML = task;
document.getElementById("answer").innerHTML = answer;