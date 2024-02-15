//Флаг шаблона
flag = module(1,1);
//Шаблоны
    switch (flag) {
        //Основные формулы
        case 1:
			VarA1 = module(-3,3);
			VarA2 = module(-3,3);
			VarK = module(-2,2);
			VarC1 = VarK * VarA1;
			VarC2 = VarK * VarA2;
            task    = String.raw`\begin{gather*}
									\vec a (${VarA1}, ${VarA2}) \\
									k = ${VarK}\\
									\vec c = k \vec a
								\end{gather*}`;
            answer  = String.raw`\begin{gather*}  \end{gather*}`;
			img  	= String.raw`\begin{tikzpicture}
									\clip (-7,-7) rectangle (7cm,7cm); % Clips the picture...
									\draw [very thin,gray!40,dashed] (-7,-7) grid (7,7);
									\pgftransformcm{0}{1}{1}{0}{\pgfpoint{0}{0}}
									\draw [black!60] (-7,-7) grid (7,7);
									%Specify the transformation matrix and the center point
									\draw[->, gray!90, line width=1pt] (-7, 0) -- (7, 0) node[right] {$x$};
									\draw[->, gray!90, line width=1pt] (0, -7) -- (0, 7) node[above] {$y$};
									\draw[->, green!70, line width=1pt] (0, 0) -- (1, 0) node[right] {$i$};
									\draw[->, red!70, line width=1pt] (0, 0) -- (0, 1) node[above] {$j$};
									\draw[->, orange!70, line width=1pt] (0, 0) -- (${VarA1}, ${VarA2}) node[above] {$a$};
									\draw[->, yellow!70, line width=1pt] (0, 0) -- (${VarC1}, ${VarC2}) node[above] {$c$};
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