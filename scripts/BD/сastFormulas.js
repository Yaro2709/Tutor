//Флаг шаблона
flag = module(1,16);
//Шаблоны
    switch (flag) {
        //Основные формулы
        //cosx
        case 1:
            task    = String.raw`\begin{gather*} \cos (\frac{\pi}{2}-x)  \end{gather*}`;
            answer  = String.raw`\begin{gather*} \sin (x)  \end{gather*}`;
        break;
        case 2:
            task    = String.raw`\begin{gather*} \cos (\frac{\pi}{2}+x) \end{gather*}`;
            answer  = String.raw`\begin{gather*} -\sin (x) \end{gather*}`;
        break;
		case 3:
            task    = String.raw`\begin{gather*} \cos (\pi-x) \end{gather*}`;
            answer  = String.raw`\begin{gather*}-\cos (x) \end{gather*}`;
        break;
        case 4:
            task    = String.raw`\begin{gather*} \cos (\pi+x) \end{gather*}`;
            answer  = String.raw`\begin{gather*}-\cos (x) \end{gather*}`;
        break;
        case 5:
            task    = String.raw`\begin{gather*} \cos (\frac{3\pi}{2}-x) \end{gather*}`;
            answer  = String.raw`\begin{gather*}-\sin (x) \end{gather*}`;
        break;
        case 6:
            task    = String.raw`\begin{gather*} \cos (\frac{3\pi}{2}+x) \end{gather*}`;
            answer  = String.raw`\begin{gather*} \sin (x) \end{gather*}`;
        break;
		case 7:
            task    = String.raw`\begin{gather*} \cos (2\pi-x) \end{gather*}`;
            answer  = String.raw`\begin{gather*} \cos (x) \end{gather*}`;
        break;
        case 8:
            task    = String.raw`\begin{gather*} \cos (2\pi+x) \end{gather*}`;
            answer  = String.raw`\begin{gather*} \cos (x) \end{gather*}`;
        break;
        //sinx
        case 9:
            task    = String.raw`\begin{gather*} \sin (\frac{\pi}{2}-x) \end{gather*}`;
            answer  = String.raw`\begin{gather*} \cos (x) \end{gather*}`;
        break;
        case 10:
            task    = String.raw`\begin{gather*} \sin (\frac{\pi}{2}+x) \end{gather*}`;
            answer  = String.raw`\begin{gather*} \cos (x) \end{gather*}`;
        break;
		case 11:
            task    = String.raw`\begin{gather*} \sin (\pi-x) \end{gather*}`;
            answer  = String.raw`\begin{gather*} \sin (x) \end{gather*}`;
        break;
        case 12:
            task    = String.raw`\begin{gather*} \sin (\pi+x)  \end{gather*}`;
            answer  = String.raw`\begin{gather*}-\sin (x) \end{gather*}`;
        break;
        case 13:
            task    = String.raw`\begin{gather*} \sin (\frac{3\pi}{2}-x) \end{gather*}`;
            answer  = String.raw`\begin{gather*}-\cos (x) \end{gather*}`;
        break;
        case 14:
            task    = String.raw`\begin{gather*} \sin (\frac{3\pi}{2}-x) \end{gather*}`;
            answer  = String.raw`\begin{gather*}-\cos (x) \end{gather*}`;
        break;
		case 15:
            task    = String.raw`\begin{gather*} \sin (2\pi-x) \end{gather*}`;
            answer  = String.raw`\begin{gather*}-\\sin (x) \end{gather*}`;
        break;
        case 16:
            task    = String.raw`\begin{gather*} \sin (2\pi+x) \end{gather*}`;
            answer  = String.raw`\begin{gather*} \sin (x) \end{gather*}`;
        break;
        //Дополнительные формулы
        default:
            alert( "400 Bad Request: value is undefined!" );
    }
//Вывод    
document.getElementById("task").innerHTML = task;
document.getElementById("answer").innerHTML = answer;