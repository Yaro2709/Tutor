//Флаг шаблона
flag = module(1,34);
//Шаблоны
    switch (flag) {
        //Основные формулы
        //sinx
        case 1:
            task    = "$$\\sin0$$";
            answer  = "$$0$$";
        break;
        case 2:
            task    = "$$\\sin \\frac{\\pi}{6}$$";
            answer  = "$$\\frac{1}{2}$$";
        break;
        case 3:
            task    = "$$\\sin \\frac{\\pi}{4}$$";
            answer  = "$$\\frac{\\sqrt{2}}{2}$$";
        break;
        case 4:
            task    = "$$\\sin \\frac{\\pi}{3}$$";
            answer  = "$$\\frac{\\sqrt{3}}{2}$$";
        break;
        case 5:
            task    = "$$\\sin \\frac{\\pi}{2}$$";
            answer  = "$$1$$";
        break;
        case 6:
            task    = "$$\\sin \\frac{2\\pi}{3}$$";
            answer  = "$$\\frac{\\sqrt{3}}{2}$$";
        break;
        case 7:
            task    = "$$\\sin \\frac{3\\pi}{4}$$";
            answer  = "$$\\frac{\\sqrt{2}}{2}$$";
        break;
        case 8:
            task    = "$$\\sin \\frac{5\\pi}{6}$$";
            answer  = "$$\\frac{1}{2}$$";
        break;
        case 9:
            task    = "$$\\sin \\pi$$";
            answer  = "$$0$$";
        break;
        case 10:
            task    = "$$\\sin\\frac{7\\pi}{6}$$";
            answer  = "$$-\\frac{1}{2}$$";
        break;
        case 11:
            task    = "$$\\sin\\frac{5\\pi}{4}$$";
            answer  = "$$-\\frac{\\sqrt{2}}{2}$$";
        break;
        case 12:
            task    = "$$\\sin\\frac{4\\pi}{3}$$";
            answer  = "$$-\\frac{\\sqrt{3}}{2}$$";
        break;
        case 13:
            task    = "$$\\sin\\frac{3\\pi}{2}$$";
            answer  = "$$-1$$";
        break;
        case 14:
            task    = "$$\\sin\\frac{5\\pi}{3}$$";
            answer  = "$$-\\frac{\\sqrt{3}}{2}$$";
        break;
        case 15:
            task    = "$$\\sin\\frac{7\\pi}{4}$$";
            answer  = "$$-\\frac{\\sqrt{2}}{2}$$";
        break;
        case 16:
            task    = "$$\\sin\\frac{11\\pi}{6}$$";
            answer  = "$$-\\frac{1}{2}$$";
        break;
        case 17:
            task    = "$$\\sin 2\\pi$$";
            answer  = "$$0$$";
        break;
        //cosx
        case 18:
            task    = "$$\\cos0$$";
            answer  = "$$1$$";
        break;
        case 19:
            task    = "$$\\cos\\frac{\\pi}{6}$$";
            answer  = "$$\\frac{\\sqrt{3}}{2}$$";
        break;
        case 20:
            task    = "$$\\cos\\frac{\\pi}{4}$$";
            answer  = "$$\\frac{\\sqrt{2}}{2}$$";
        break;
        case 21:
            task    = "$$\\cos\\frac{\\pi}{3}$$";
            answer  = "$$\\frac{1}{2}$$";
        break;
        case 22:
            task    = "$$\\cos\\frac{\\pi}{2}$$";
            answer  = "$$0$$";
        break;
        case 23:
            task    = "$$\\cos\\frac{2\\pi}{3}$$";
            answer  = "$$-\\frac{1}{2}$$";
        break;
        case 24:
            task    = "$$\\cos\\frac{3\\pi}{4}$$";
            answer  = "$$-\\frac{\\sqrt{2}}{2}$$";
        break;
        case 25:
            task    = "$$\\cos\\frac{5\\pi}{6}$$";
            answer  = "$$-\\frac{\\sqrt{3}}{2}$$";
        break;
        case 26:
            task    = "$$\\cos \\pi$$";
            answer  = "$$-1$$";
        break;
        case 27:
            task    = "$$\\cos\\frac{7\\pi}{6}$$";
            answer  = "$$-\\frac{\\sqrt{3}}{2}$$";
        break;
        case 28:
            task    = "$$\\cos\\frac{5\\pi}{4}$$";
            answer  = "$$-\\frac{\\sqrt{2}}{2}$$";
        break;
        case 29:
            task    = "$$\\cos\\frac{4\\pi}{3}$$";
            answer  = "$$-\\frac{1}{2}$$";
        break;
        case 30:
            task    = "$$\\cos\\frac{3\\pi}{2}$$";
            answer  = "$$0$$";
        break;
        case 31:
            task    = "$$\\cos\\frac{5\\pi}{3}$$";
            answer  = "$$\\frac{1}{2}$$";
        break;
        case 32:
            task    = "$$\\cos\\frac{7\\pi}{4}$$";
            answer  = "$$\\frac{\\sqrt{2}}{2}$$";
        break;
        case 33:
            task    = "$$\\cos\\frac{11\\pi}{6}$$";
            answer  = "$$\\frac{\\sqrt{3}}{2}$$";
        break;
        case 34:
            task    = "$$\\cos2\\pi$$";
            answer  = "$$1$$";
        break;
        //Дополнительные формулы
        default:
            alert( "400 Bad Request: value is undefined!" );
    }
//Вывод    
document.getElementById("task").innerHTML = task;
document.getElementById("answer").innerHTML = answer;