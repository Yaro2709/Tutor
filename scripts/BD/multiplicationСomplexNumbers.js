//Флаг шаблона
flag = module(1,1);
//Шаблоны
    switch (flag) {
        //Основные формулы
        case 1:
			VarA1 = module(-10,10);
			VarB1 = module(-10,10);
			VarA2 = module(-10,10);
			VarB2 = module(-10,10);
			
			VarA = VarA1 + VarA2;
            VarB = VarB1 + VarB2;
			
            task    = String.raw`\begin{gather*} 
									z = z_1 + z_2 \\ 
									z_1 = ${VarA1} + ${VarB1} i \\ 
									z_2 = ${VarA2} + ${VarB2} i \end{gather*}`;
            answer  = String.raw`\begin{gather*} 
									z = ${VarA} + i ${VarB}  
								\end{gather*}`;
        break;
        //Дополнительные формулы
        default:
            alert( "400 Bad Request: value is undefined!" );
    }
//Вывод    
document.getElementById("task").innerHTML = task;
document.getElementById("answer").innerHTML = answer;