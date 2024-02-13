//Флаг шаблона
flag = module(1,1);
//Шаблоны
    switch (flag) {
        //Основные формулы
        case 1:
			VarA1 = module(-2,2);
			VarB1 = module(-2,2);
			VarA2 = module(-2,2);
			VarB2 = module(-2,2);
			
			VarA = VarA1 - VarA2;
            VarB = VarB1 - VarB2;
			
			textA1 = "";
			if(VarA1 == 0){
				textA1 = String.raw``;
			}else if(VarA1 == 1){
				textA1 = String.raw`1`;
			}else{
				textA1 = String.raw`${VarA1}`;
			}
			
			sign1 = "";
			if(VarA1 == 0){
				sign1 = String.raw``;
			} else if((VarB1 > 0) && (VarA1 != 0)){
				sign1 = String.raw`+`;
			}else if(VarB1 == 0){
				sign1 = String.raw``;
			}else {
				sign1 = String.raw``;
			}
			
			//если все значения нули, то итогове значение ноль
			if((VarA1 == 0) && (VarB1 == 0)){
				sign1 = String.raw`0`;
			}
			
			textB1 = "";
			if(VarB1 == 0){
				textB1 = String.raw``;
			}else if(VarB1 == 1){
				textB1 = String.raw`i`;
			}else if(VarB1 == -1){
				textB1 = String.raw`-i`;
			}else{
				textB1 = String.raw`${VarB1} i`;
			}

			textA2 = "";
			if(VarA2 == 0){
				textA2 = String.raw``;
			}else if(VarA2 == 1){
				textA2 = String.raw`1`;
			}else{
				textA2 = String.raw`${VarA2}`;
			}
			
			sign2 = "";
			if(VarA2 == 0){
				sign2 = String.raw``;
			} else if((VarB2 > 0) && (VarA2 != 0)){
				sign2 = String.raw`+`;
			}else if(VarB2 == 0){
				sign2 = String.raw``;
			}else {
				sign2 = String.raw``;
			}
			
			//если все значения нули, то итогове значение ноль
			if((VarA2 == 0) && (VarB2 == 0)){
				sign2 = String.raw`0`;
			}
			
			textB2 = "";
			if(VarB2 == 0){
				textB2 = String.raw``;
			}else if(VarB2 == 1){
				textB2 = String.raw`i`;
			}else if(VarB2 == -1){
				textB2 = String.raw`-i`;
			}else{
				textB2 = String.raw`${VarB2} i`;
			}
			
			textA = "";
			if(VarA == 0){
				textA = String.raw``;
			}else if(VarA == 1){
				textA = String.raw`1`;
			}else{
				textA = String.raw`${VarA}`;
			}
			
			sign= "";
			if(VarA == 0){
				sign = String.raw``;
			} else if((VarB > 0) && (VarA != 0)){
				sign = String.raw`+`;
			}else if(VarB == 0){
				sign = String.raw``;
			}else {
				sign = String.raw``;
			}
			
			//если все значения нули, то итогове значение ноль
			if((VarA == 0) && (VarB == 0)){
				sign = String.raw`0`;
			}
			
			textB = "";
			if(VarB == 0){
				textB = String.raw``;
			}else if(VarB == 1){
				textB = String.raw`i`;
			}else if(VarB == -1){
				textB = String.raw`-i`;
			}else{
				textB = String.raw`${VarB} i`;
			}
			
			
            task    = String.raw`\begin{gather*} 
									z = z_1 - z_2 \\ 
									z_1 = ${textA1} ${sign1} ${textB1} \\ 
									z_2 = ${textA2} ${sign2} ${textB2} 
								\end{gather*}`;
            answer  = String.raw`\begin{gather*} 
									z = ${textA} ${sign} ${textB}  
								\end{gather*}`;
        break;
        //Дополнительные формулы
        default:
            alert( "400 Bad Request: value is undefined!" );
    }
//Вывод    
document.getElementById("task").innerHTML = task;
document.getElementById("answer").innerHTML = answer;