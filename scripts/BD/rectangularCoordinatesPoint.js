 //Флаг шаблона
flag = module(1,1);
//Шаблоны
    switch (flag) {
        //Основные формулы
        case 1:
			VarA1 = module(-5,5);
			VarA2 = module(-5,5);
			
            task    = String.raw`\begin{gather*}
									A (${VarA1}, ${VarA2})
								\end{gather*}`;
            answer  = String.raw`\begin{gather*}  \end{gather*}`;
			img  	= String.raw`\begin{tikzpicture}
									\clip (-7,-7) rectangle (7cm,7cm); % Clips the picture...
									\draw [very thin,gray!40,dashed] (-7,-7) grid (7,7);
									\pgftransformcm{1}{0}{0}{1}{\pgfpoint{0}{0}}
									\draw [black!60] (-7,-7) grid (7,7);
									%Specify the transformation matrix and the center point
									\draw[->, gray!90, line width=1pt] (-7, 0) -- (7, 0) node[right] {$x$};
									\draw[->, gray!90, line width=1pt] (0, -7) -- (0, 7) node[above] {$y$};
									\draw[->, green!70, line width=1pt] (0, 0) -- (1, 0) node[right] {$i$};
									\draw[->, red!70, line width=1pt] (0, 0) -- (0, 1) node[above] {$j$};
									\node[draw,circle,inner sep=2pt,fill, yellow!70] at (${VarA1},  ${VarA2}) {};
								\end{tikzpicture}`;
        break;
        //Дополнительные формулы
        default:
            alert( "400 Bad Request: value is undefined!" );
    }
//Вывод    
document.getElementById("task").innerHTML = task;
document.getElementById("answer").innerHTML = answer;
document.getElementById("img").innerHTML = img;