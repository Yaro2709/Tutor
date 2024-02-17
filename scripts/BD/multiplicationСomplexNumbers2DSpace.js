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
			
			VarA1A1 = VarA1 * VarA2;
			VarA1B2 = VarA1 * VarB2;
			VarA2B1 = VarA2 * VarB1;
			VarB1B2 = VarB1 * VarB2;
			
			VarA = VarA1A1 - VarB1B2;
			VarB = VarA1B2 + VarA2B1;
			
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
			
			sign3 = "";
			if(VarA1B2 >= 0){
				sign3 = String.raw`+`;
			}else {
				sign3 = String.raw``;
			}
			
			sign4 = "";
			if(VarA2B1 >= 0){
				sign4 = String.raw`+`;
			}else {
				sign4 = String.raw``;
			}
			
			sign5 = "";
			if(VarB1B2 >= 0){
				sign5 = String.raw`+`;
			}else {
				sign5 = String.raw``;
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
									z = z_1 z_2 \\ 
									z_1 = ${textA1} ${sign1} ${textB1} \\ 
									z_2 = ${textA2} ${sign2} ${textB2} 
								\end{gather*}`;
            answer  = String.raw`\begin{gather*} 
									z = (${textA1} ${sign1} ${textB1})(${textA2} ${sign2} ${textB2}) = ${VarA1A1} ${sign3} ${VarA1B2}i ${sign4} ${VarA2B1}i ${sign5} ${VarB1B2} i^2 = ${textA} ${sign} ${textB}
								\end{gather*}`;
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
									\draw[->, orange!70, line width=1pt] (0, 0) -- (${VarB1}, ${VarA1}) node[above] {$z_1$};
									\draw[->, orange!70, line width=1pt] (0, 0) -- (${VarB2}, ${VarA2}) node[above] {$z_2$};
									\draw[->, yellow!70, line width=1pt] (0, 0) -- (${VarB}, ${VarA}) node[above] {$z$};
									
									\filldraw[orange!70] (0,0) coordinate(O);
									\filldraw[orange!70] (1,0) coordinate(A);
									\filldraw[orange!70] (0.5,2) coordinate(B);
									\filldraw[orange!70] (3,1) coordinate(C);
									\filldraw[orange!70] (-0.5,6.5) coordinate(D);
									
									%\pic[draw, -, Orange!70, "$\alpha$", thick, angle eccentricity=1.2, angle radius=1.5cm] {angle = A--O--C};
									%\pic[draw, -, Orange!70, "$\alpha$", thick, angle eccentricity=1.2, angle radius=1.5cm] {angle = B--O--D};
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