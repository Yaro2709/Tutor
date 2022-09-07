//Флаг шаблона
flag = module(1,12);
//Шаблоны
    switch (flag) {
        //Основные формулы
        //cosx
        case 1:
            task    = "$$\\cos (\\pi-x)$$";
            answer  = "$$- \\cos (x)$$";
        break;
        case 2:
            task    = "$$\\cos (\\pi+x)$$";
            answer  = "$$- \\cos (x)$$";
        break;
        case 3:
            task    = "$$\\cos (\\frac{\\pi}{2}-x)$$";
            answer  = "$$\\sin (x)$$";
        break;
        case 4:
            task    = "$$\\cos (\\frac{\\pi}{2}+x)$$";
            answer  = "$$-\\sin (x)$$";
        break;
        case 5:
            task    = "$$\\cos (\\frac{3\\pi}{2}-x)$$";
            answer  = "$$-\\sin (x)$$";
        break;
        case 6:
            task    = "$$\\cos (\\frac{\\pi}{2}+x)$$";
            answer  = "$$\\sin (x)$$";
        break;
        //sinx
        case 7:
            task    = "$$\\sin (\\pi-x)$$";
            answer  = "$$\\sin (x)$$";
        break;
        case 8:
            task    = "$$\\sin (\\pi+x) $$";
            answer  = "$$-\\sin (x)$$";
        break;
        case 9:
            task    = "$$\\sin (\\frac{\\pi}{2}-x)$$";
            answer  = "$$\\cos (x)$$";
        break;
        case 10:
            task    = "$$\\sin (\\frac{\\pi}{2}+x)$$";
            answer  = "$$\\cos (x)$$";
        break;
        case 11:
            task    = "$$\\sin (\\frac{3\\pi}{2}-x)$$";
            answer  = "$$-\\cos (x)$$";
        break;
        case 12:
            task    = "$$\\sin (\\frac{3\\pi}{2}-x)$$";
            answer  = "$$-\\cos (x)$$";
        break;
        //Дополнительные формулы
        default:
            alert( "400 Bad Request: value is undefined!" );
    }
//Вывод    
document.getElementById("task").innerHTML = task;
document.getElementById("answer").innerHTML = answer;