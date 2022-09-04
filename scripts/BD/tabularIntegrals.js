//Флаг шаблона
flag = module(1,20);
//Генератор u
var ArrayU  = ['a', 'b', 'c', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];
var rand    = Math.floor(Math.random() * ArrayU.length); //Получаем случайный ключ массива
var VarU       = ArrayU[rand];
//Генератор a
VarA = module(2,50);
//Шаблоны
    switch (flag) {
        //Основные формулы
        case 1:
            VarB    = VarA + 1;
            task    = "$$\\displaylines{\\int{"+VarU+"^{"+VarA+"}}d"+VarU+"}$$";
            answer  = "$$\\displaylines{\\frac{"+VarU+"^{"+VarA+" + 1}}{"+VarA+" + 1}+C = \\frac{"+VarU+"^{"+VarB+"}}{"+VarB+"}+C}$$";
        break;
        case 2:
            task    = "$$\\displaylines{\\int\\frac{d"+VarU+"}{"+VarU+"}}$$";
            answer  = "$$\\displaylines{\\mathrm{ln}|"+VarU+"|+C}$$";
        break;
        case 3:
           task    = "$$\\displaylines{\\int "+VarA+"^"+VarU+" d"+VarU+"}$$";
            answer  = "$$\\displaylines{\\frac{"+VarA+"^"+VarU+"}{\\mathrm{ln}("+VarA+")} + C}$$";
        break;
        case 4:
            task    = "$$\\displaylines{\\int e^"+VarU+" d"+VarU+"}$$";
            answer  = "$$\\displaylines{e^"+VarU+" + C}$$";
        break;
        case 5:
            task    = "$$\\displaylines{\\int \\sin ("+VarU+") d"+VarU+"}$$";
            answer  = "$$\\displaylines{- \\cos ("+VarU+") + C}$$";
        break;
        case 6:
            task    = "$$\\displaylines{\\int \\cos ("+VarU+") d"+VarU+"}$$";
            answer  = "$$\\displaylines{\\sin ("+VarU+") + C}$$";
        break;
        case 7:
            task    = "$$\\displaylines{\\int \\frac{d"+VarU+"}{\\cos^2("+VarU+")} + C}$$";
            answer  = "$$\\displaylines{\\mathrm{tg} ("+VarU+") + C}$$";
        break;
        case 8:
            task    = "$$\\displaylines{\\int \\frac{d"+VarU+"}{\\sin^2("+VarU+")}}$$";
            answer  = "$$\\displaylines{- \\mathrm{ctg} ("+VarU+") + C}$$";
        break;
        case 9:
            task    = "$$\\displaylines{\\int \\frac{d"+VarU+"}{1 + "+VarU+"^2}}$$";
            answer  = "$$\\displaylines{\\mathrm{arctg} ("+VarU+") + C}$$";
        break;
        case 10:
            task    = "$$\\displaylines{\\int \\frac{d"+VarU+"}{\\sqrt{1 - "+VarU+"^2}}}$$";
            answer  = "$$\\displaylines{\\mathrm{arcsin} ("+VarU+") + C}$$";
        break;
        case 11:
            task    = "$$\\displaylines{\\int \\frac{d"+VarU+"}{\\sqrt{"+VarA+"^2 - "+VarU+"^2}}}$$";
            answer  = "$$\\displaylines{\\mathrm{arcsin} \\Big(\\frac{"+VarU+"}{"+VarA+"}\\Big) + C}$$";
        break;
        case 12:
            task    = "$$\\displaylines{\\int \\frac{d"+VarU+"}{\\sqrt{"+VarU+"^2 + "+VarA+"^2}}}$$";
            answer  = "$$\\displaylines{\\mathrm{ln} |"+VarU+" + \\sqrt{"+VarU+"^2 + "+VarA+"^2}| + C}$$";
        break;
        case 13:
            task    = "$$\\displaylines{\\int \\frac{d"+VarU+"}{\\sqrt{"+VarU+"^2 - "+VarA+"^2}}}$$";
            answer  = "$$\\displaylines{\\mathrm{ln} |"+VarU+" + \\sqrt{"+VarU+"^2 - "+VarA+"^2}| + C}$$";
        break;
        case 14:
            task    = "$$\\displaylines{\\int \\frac{d"+VarU+"}{"+VarA+"^2 + "+VarU+"^2}}$$";
            answer  = "$$\\displaylines{\\frac{1}{"+VarA+"}\\mathrm{arctg} \\Big(\\frac{"+VarU+"}{"+VarA+"}\\Big) + C}$$";
        break;
        case 15:
            VarB    = 2*VarA;
            task    = "$$\\displaylines{\\int \\frac{d"+VarU+"}{"+VarA+"^2 - "+VarU+"^2}}$$";
            answer  = "$$\\displaylines{\\frac{1}{"+VarB+"}\\mathrm{ln} \\Big|\\frac{"+VarA+"+"+VarU+"}{"+VarA+"-"+VarU+"} \\Big|+ C}$$";
        break;
        //Дополнительные комбинации
        case 16:
            task    = "$$\\displaylines{\\int \\frac{d"+VarU+"}{\\sqrt{"+VarA+" - "+VarU+"^2}}}$$";
            answer  = "$$\\displaylines{\\mathrm{arcsin} \\Big(\\frac{"+VarU+"}{\\sqrt{"+VarA+"}}\\Big) + C}$$";
        break;
        case 17:
            task    = "$$\\displaylines{\\int \\frac{d"+VarU+"}{\\sqrt{"+VarU+"^2 + "+VarA+"}}}$$";
            answer  = "$$\\displaylines{\\mathrm{ln} |"+VarU+" + \\sqrt{"+VarU+"^2 + "+VarA+"}| + C}$$";
        break;
        case 18:
            task    = "$$\\displaylines{\\int \\frac{d"+VarU+"}{\\sqrt{"+VarU+"^2 - "+VarA+"}}}$$";
            answer  = "$$\\displaylines{\\mathrm{ln} |"+VarU+" + \\sqrt{"+VarU+"^2 - "+VarA+"}| + C}$$";
        break;
        case 19:
            task    = "$$\\displaylines{\\int \\frac{d"+VarU+"}{"+VarA+" + "+VarU+"^2}}$$";
            answer  = "$$\\displaylines{\\frac{1}{\\sqrt{"+VarA+"}}\\mathrm{arctg} \\Big(\\frac{"+VarU+"}{\\sqrt{"+VarA+"}}\\Big) + C}$$";
        break;
        case 20:
            VarA = module(2,7);
            VarB    = 2*VarA;
            VarD    = VarA*VarA;
            task    = "$$\\displaylines{\\int \\frac{d"+VarU+"}{"+VarD+" - "+VarU+"^2}}$$";
            answer  = "$$\\displaylines{\\frac{1}{"+VarB+"}\\mathrm{ln} \\Big|\\frac{"+VarA+"+"+VarU+"}{"+VarA+"-"+VarU+"} \\Big|+ C}$$";
        break;
        //Дополнительные формулы
        default:
            alert( "400 Bad Request: value is undefined!" );
    }
//Вывод    
document.getElementById("task").innerHTML = task;
document.getElementById("answer").innerHTML = answer;