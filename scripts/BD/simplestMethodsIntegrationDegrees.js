//Работа со степенями
//Флаг шаблона
flag = module(1,3);
//Генератор u
var ArrayU  	= ['a', 'b', 'c', 'f', 'g', 'h', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];
var rand    	= Math.floor(Math.random() * ArrayU.length); //Получаем случайный ключ массива
var VarU       	= ArrayU[rand];
//Шаблоны
    switch (flag) {
		//работа с диффернциалом в интеграле
		case 1: //1260, 1293, 1308
			//Генератор коэфициентов полиномов
			P1 = module(1,20);
			P2 = module(2,20);
			P3 = module(2,20);
			P4 = module(2,20);
			//Генерация полиномов
			var ArrayP  	= [
								''+P1+''+VarU+'', 
								''+P1+''+VarU+'', 
								''+P1+''+VarU+'', 
								''+P1+''+VarU+'', 
								''+P2+''+VarU+'^2 + '+P1+''+VarU+'', 
								''+P2+''+VarU+'^2 + '+P1+''+VarU+'', 
								''+P3+''+VarU+'^3 + '+P2+''+VarU+'^2 + '+P1+''+VarU+'', 
								''+P3+''+VarU+'^3 + '+P2+''+VarU+'^2 + '+P1+''+VarU+'', 
								''+P4+''+VarU+'^4 + '+P3+''+VarU+'^3 + '+P2+''+VarU+'^2 + '+P1+''+VarU+'', 
								''+P3+''+VarU+'^3 + '+P1+''+VarU+'', 
								''+P4+''+VarU+'^4 + '+P2+''+VarU+'^2 + '+P1+''+VarU+'',
								''+P3+''+VarU+'^3 + '+P2+''+VarU+'^2'
							];
			var rand    	= Math.floor(Math.random() * ArrayP.length); //Получаем случайный ключ массива
			var VarP       	= ArrayP[rand];
			//Генератор функций =
			var ArrayF  	= ['\\sin{('+VarP+')}', '\\cos{('+VarP+')}', '\\mathrm{tg}{('+VarP+')}', '\\mathrm{ctg}{('+VarP+')}', '\\mathrm{arcsin}{('+VarP+')}', '\\mathrm{arctg}{('+VarP+')}', '\\mathrm{ln}{('+VarP+')}', 'e^{('+VarP+')}'];
			var rand    	= Math.floor(Math.random() * ArrayF.length); //Получаем случайный ключ массива
			var VarF       	= ArrayF[rand];
			
            task    = String.raw`\begin{gather*} \int ${VarF} d(${VarF}) \end{gather*}`;
            answer  = String.raw`\begin{gather*} 
									\int ${VarF} d(${VarF})
									=\frac{(${VarF})^2}{2}+C
								\end{gather*}`;
        break;
		case 2: //1261
			//Генератор коэфициентов полиномов
			P1 = module(1,20);
			P2 = module(2,20);
			P3 = module(2,20);
			P4 = module(2,20);
			//Генерация полиномов
			var ArrayP  	= [
								''+P1+''+VarU+'', 
								''+P1+''+VarU+'', 
								''+P1+''+VarU+'', 
								''+P1+''+VarU+'', 
								''+P2+''+VarU+'^2 + '+P1+''+VarU+'', 
								''+P2+''+VarU+'^2 + '+P1+''+VarU+'', 
								''+P3+''+VarU+'^3 + '+P2+''+VarU+'^2 + '+P1+''+VarU+'', 
								''+P3+''+VarU+'^3 + '+P2+''+VarU+'^2 + '+P1+''+VarU+'', 
								''+P4+''+VarU+'^4 + '+P3+''+VarU+'^3 + '+P2+''+VarU+'^2 + '+P1+''+VarU+'', 
								''+P3+''+VarU+'^3 + '+P1+''+VarU+'', 
								''+P4+''+VarU+'^4 + '+P2+''+VarU+'^2 + '+P1+''+VarU+'',
								''+P3+''+VarU+'^3 + '+P2+''+VarU+'^2'
							];
			var rand    	= Math.floor(Math.random() * ArrayP.length); //Получаем случайный ключ массива
			var VarP       	= ArrayP[rand];
			//Генератор функций =
			var ArrayF  	= ['\\sin{('+VarP+')}', '\\cos{('+VarP+')}', '\\mathrm{tg}{('+VarP+')}', '\\mathrm{ctg}{('+VarP+')}', '\\mathrm{arcsin}{('+VarP+')}', '\\mathrm{arctg}{('+VarP+')}', '\\mathrm{ln}{('+VarP+')}', 'e^{('+VarP+')}'];
			var rand    	= Math.floor(Math.random() * ArrayF.length); //Получаем случайный ключ массива
			var VarF       	= ArrayF[rand];
			//Степень
			S1 = module(2,20);
			S2 = S1 + 1;
			
            task    = String.raw`\begin{gather*} \int ${VarF}^{${S1}} d(${VarF}) \end{gather*}`;
            answer  = String.raw`\begin{gather*} 
									\int ${VarF}^{${S1}} d(${VarF})
									=\frac{(${VarF})^{${S2}}}{${S2}}+C
								\end{gather*}`;
        break;		
		case 3: //1292, 1293
			//Генератор коэфициентов полиномов
			P1 = module(1,20);
			P2 = module(2,20);
			P3 = module(2,20);
			P4 = module(2,20);
			//Генерация полиномов
			var ArrayP  	= [
								''+P1+''+VarU+'', 
								''+P1+''+VarU+'', 
								''+P1+''+VarU+'', 
								''+P1+''+VarU+'', 
								''+P2+''+VarU+'^2 + '+P1+''+VarU+'', 
								''+P2+''+VarU+'^2 + '+P1+''+VarU+'', 
								''+P3+''+VarU+'^3 + '+P2+''+VarU+'^2 + '+P1+''+VarU+'', 
								''+P3+''+VarU+'^3 + '+P2+''+VarU+'^2 + '+P1+''+VarU+'', 
								''+P4+''+VarU+'^4 + '+P3+''+VarU+'^3 + '+P2+''+VarU+'^2 + '+P1+''+VarU+'', 
								''+P3+''+VarU+'^3 + '+P1+''+VarU+'', 
								''+P4+''+VarU+'^4 + '+P2+''+VarU+'^2 + '+P1+''+VarU+'',
								''+P3+''+VarU+'^3 + '+P2+''+VarU+'^2'
							];
			var rand    	= Math.floor(Math.random() * ArrayP.length); //Получаем случайный ключ массива
			var VarP       	= ArrayP[rand];
			//Генератор функций =
			var ArrayF  	= ['\\sin{('+VarP+')}', '\\cos{('+VarP+')}', '\\mathrm{tg}{('+VarP+')}', '\\mathrm{ctg}{('+VarP+')}', '\\mathrm{arcsin}{('+VarP+')}', '\\mathrm{arctg}{('+VarP+')}', '\\mathrm{ln}{('+VarP+')}', 'e^{('+VarP+')}'];
			var rand    	= Math.floor(Math.random() * ArrayF.length); //Получаем случайный ключ массива
			var VarF       	= ArrayF[rand];
			
            task    = String.raw`\begin{gather*} \int\frac{d\left(${VarF}\right)}{${VarF}} \end{gather*}`;
            answer  = String.raw`\begin{gather*} 									
									\int\frac{d\left(${VarF}\right)}{${VarF}}
									=\ln\left|${VarF}\right|+C
								\end{gather*}`;
        break;
		/*
        //Основные формулы
		//работа со степенью
        case 1: //1233
            task    = String.raw`\begin{gather*} \int\sqrt{x}dx \end{gather*}`;
            answer  = String.raw`\begin{gather*} 
									\int\sqrt{x}dx
									=\int{x^\frac{1}{2}}dx
									=\frac{x^{\frac{1}{2}+1}}{\frac{1}{2}+1}
									=\frac{x^\frac{3}{2}}{\frac{3}{2}}
									=\frac{2x\sqrt{x}}{3}+C.
								\end{gather*}`;
        break;
        case 2: //1235
            task    = String.raw`\begin{gather*} \int\frac{dx}{x^2} \end{gather*}`;
            answer  = String.raw`\begin{gather*} 
									\int\frac{dx}{x^2}
									=\int{x^{-2}}dx
									=\frac{x^{-1}}{-1}+C
									=-\frac{1}{x}+C 
								\end{gather*}`;
        break;
		case 3: //1237
            task    = String.raw`\begin{gather*} \int{a^x e^x}dx \end{gather*}`;
            answer  = String.raw`\begin{gather*} 
									\int{a^x e^x}dx
									=\int{(ae)^x}dx
									=\frac{(ae)^x}{\ln(ae)}+C
									=\frac{(ae)^x}{\ln{a}+\ln{e}}+C
									=\frac{(ae)^x}{\ln{a}+1}+C
								\end{gather*}`;
        break;
		//степень + вынос константы
        case 4: //1238
            task    = String.raw`\begin{gather*} \int\frac{dx}{2\sqrt{x}} \end{gather*}`;
            answer  = String.raw`\begin{gather*} 
									\int\frac{dx}{2\sqrt{x}}
									=\frac{1}{2}\int{x^{-\frac{1}{2}}}dx
									=\frac{1}{2}\cdot\frac{x^{-\frac{1}{2}+1}}{-\frac{1}{2}+1}+C
									=x^\frac{1}{2}+C
									=\sqrt{x}+C
								\end{gather*}`;
        break;
        case 5: //1239
            task    = String.raw`\begin{gather*} \int\frac{dh}{\sqrt{2gh}} \end{gather*}`;
            answer  = String.raw`\begin{gather*} 
									\int\frac{dh}{\sqrt{2gh}}
									=\frac{1}{\sqrt{2g}}\int\frac{dh}{\sqrt{h}}
									=\frac{1}{\sqrt{2g}}\int{h^{-\frac{1}{2}}}dh
									=\frac{1}{\sqrt{2g}}\cdot\frac{h^{-\frac{1}{2}+1}}{-\frac{1}{2}+1}+C
									=\frac{1}{\sqrt{2g}}\cdot{2}\sqrt{h}+C
									=\sqrt{\frac{2h}{g}}+C
								\end{gather*}`;
        break;
        case 6: //1240
            task    = String.raw`\begin{gather*} \int{3{,}4x^{-0{,}17}}dx \end{gather*}`;
            answer  = String.raw`\begin{gather*} 
									\int{3{,}4x^{-0{,}17}}dx
									=3{,}4\int{x^{-0{,}17}}dx
									=3{,}4\cdot\frac{x^{-0{,}17+1}}{-0{,}17+1}+C
									=3{,}4\cdot\frac{x^{0{,}83}}{0{,}83}+C
									=\frac{340x^{0{,}83}}{83}+C
								\end{gather*}`;
        break;
		case 6: //1249
            task    = String.raw`\begin{gather*} \int\frac{dx}{\sqrt{3-3x^2}} \end{gather*}`;
            answer  = String.raw`\begin{gather*} 
									\int\frac{dx}{\sqrt{3-3x^2}}
									=\int\frac{dx}{\sqrt{3\left(1-x^2\right)}}
									=\frac{1}{\sqrt{3}}\cdot\int\frac{dx}{\sqrt{1-x^2}}
									=\frac{1}{\sqrt{3}}\cdot\arcsin{x}+C
								\end{gather*}`;
        break;
		//сумма интегралов - интеграл суммы
		case 7: //1241
            task    = String.raw`\begin{gather*} \int(1-2u)du \end{gather*}`;
            answer  = String.raw`\begin{gather*}
									\int(1-2u)du
									=\int{1}du-2\int{u}du
									=u-2\cdot\frac{u^2}{2}+C
									=u-u^2+C
								\end{gather*}`;
        break;
		case 0: //1244
            task    = String.raw`\begin{gather*} \int\left(2x^{-1{,}2}+3x^{-0{,}8}-5x^{0{,}38}\right)dx \end{gather*}`;
            answer  = String.raw`\begin{gather*}
									\int\left(2x^{-1{,}2}+3x^{-0{,}8}-5x^{0{,}38}\right)dx

									=2\cdot\frac{x^{-0{,}2}}{-0{,}2}+3\cdot\frac{x^{0{,}2}}{0{,}2}-5\cdot\frac{x^{1{,}38}}{1{,}38}+C
									=-10x^{-0{,}2}+15x^{0{,}2}-\frac{250x^{1{,}38}}{69}+C
								\end{gather*}`;
        break;
		//раскрытие скобок
        case 8: //1242
            task    = String.raw`\begin{gather*} \int\left(\sqrt{x}+1\right)\left(x-\sqrt{x}+1\right)dx \end{gather*}`;
            answer  = String.raw`\begin{gather*} 
									\int\left(\sqrt{x}+1\right)\left(x-\sqrt{x}+1\right)dx
									=\int\left(x\sqrt{x}-x+\sqrt{x}+x-\sqrt{x}+1\right)dx
									=\int\left(x\sqrt{x}+1\right)dx=\\

									=\int\left(x^\frac{3}{2}+1\right)dx
									=\int{x^\frac{3}{2}}dx+\int{1}dx
									=\frac{x^{\frac{3}{2}+1}}{\frac{3}{2}+1}+x+C
									=\frac{x^{\frac{5}{2}}}{\frac{5}{2}}+x+C
									=\frac{2x^2\sqrt{x}}{5}+x+C 
								\end{gather*}`;
        break;
		
		//деление каждого члена на значение дроби
		case 9: //1243
            task    = String.raw`\begin{gather*} \int\frac{\sqrt{x}-x^3e^x+x^2}{x^3}dx \end{gather*}`;
            answer  = String.raw`\begin{gather*} 
									\int\frac{\sqrt{x}-x^3e^x+x^2}{x^3}dx
									=\int\left(\frac{\sqrt{x}}{x^3}-\frac{x^3e^x}{x^3}+\frac{x^2}{x^3}\right)dx=\\

									=\int\left(x^{-\frac{5}{2}}-e^x+\frac{1}{x}\right)dx
									=\frac{x^{-\frac{3}{2}}}{-\frac{3}{2}}-e^x+\ln{x}+C
									=-\frac{2}{3x\sqrt{x}}-e^x+\ln{x}+C
								\end{gather*}`;
        break;
		case 10: //1248
            task    = String.raw`\begin{gather*} \int\frac{\sqrt[3]{x^2}-\sqrt[4]{x}}{\sqrt{x}}dx \end{gather*}`;
            answer  = String.raw`\begin{gather*} 
									\int\frac{\sqrt[3]{x^2}-\sqrt[4]{x}}{\sqrt{x}}dx
									=\int\left(\frac{\sqrt[3]{x^2}}{\sqrt{x}}-\frac{\sqrt[4]{x}}{\sqrt{x}}\right)dx
									=\int\left(x^\frac{1}{6}-x^{-\frac{1}{4}}\right)
									=\frac{x^\frac{7}{6}}{\frac{7}{6}}-\frac{x^\frac{3}{4}}{\frac{3}{4}}+C
									=\frac{6x\sqrt[6]{x}}{7}-\frac{4\sqrt[4]{x^3}}{3}+C
								\end{gather*}`;
        break;
		case 0: //1250
            task    = String.raw`\begin{gather*} \int\frac{3\cdot{2^x}-2\cdot{3^x}}{2^x}dx \end{gather*}`;
            answer  = String.raw`\begin{gather*} 
									\int\frac{3\cdot{2^x}-2\cdot{3^x}}{2^x}dx
									=\int\left(\frac{3\cdot{2^x}}{2^x}-\frac{2\cdot{3^x}}{2^x}\right)dx=\\
									=\int\left(3-2\cdot\left(\frac{3}{2}\right)^x\right)dx
									=3x-2\cdot\frac{\left(\frac{3}{2}\right)^x}{\ln\frac{3}{2}}+C
									=3x-\frac{3^x}{2^{x-1}\ln\frac{3}{2}}+C									
								\end{gather*}`;
        break;
		//деление каждого члена на значение дроби + фомрула сокращенного умножения
		case 0: //1245
            task    = String.raw`\begin{gather*} \int\left(\frac{1-z}{z}\right)^2dz \end{gather*}`;
            answer  = String.raw`\begin{gather*} 
									\int\left(\frac{1-z}{z}\right)^2dz
									=\int\left(\frac{1}{z}-1\right)^2dz
									=\int\left(\left(\frac{1}{z}\right)^2-2\cdot\frac{1}{z}+1\right)dz=\\

									=\int\left(z^{-2}-2\cdot\frac{1}{z}+1\right)dz
									=\frac{z^{-1}}{-1}-2\ln|z|+z+C
									=-\frac{1}{z}-2\ln|z|+z+C
								\end{gather*}`;
        break;
		case 10: //1246
            task    = String.raw`\begin{gather*} \int\frac{(1-x)^2}{x\sqrt{x}}dx \end{gather*}`;
            answer  = String.raw`\begin{gather*} 
									\int\frac{(1-x)^2}{x\sqrt{x}}dx
									=\int\frac{1-2x+x^2}{x\sqrt{x}}dx
									=\int\left(\frac{1}{x\sqrt{x}}-\frac{2x}{x\sqrt{x}}+\frac{x^2}{x\sqrt{x}}\right)dx=\\

									=\int\left(x^{-\frac{3}{2}}-2x^{-\frac{1}{2}}+x^{\frac{1}{2}}\right)dx
									=\frac{x^{-\frac{1}{2}}}{-\frac{1}{2}}-2\cdot\frac{x^{\frac{1}{2}}}{\frac{1}{2}}+\frac{x^{\frac{3}{2}}}{\frac{3}{2}}+C
									=-\frac{2}{\sqrt{x}}-4\sqrt{x}+\frac{2x\sqrt{x}}{3}+C
								\end{gather*}`;
        break;
		case 0: //1247
            task    = String.raw`\begin{gather*} \int\frac{\left(1+\sqrt{x}\right)^3}{\sqrt[3]{x}}dx \end{gather*}`;
            answer  = String.raw`\begin{gather*} 
									\int\frac{\left(1+x^\frac{1}{2}\right)^3}{x^\frac{1}{3}}dx
									=\int\frac{1+3x^\frac{1}{2}+3x+x^\frac{3}{2}}{x^\frac{1}{3}}dx
									=\int\left(\frac{1}{x^\frac{1}{3}}+\frac{3x^\frac{1}{2}}{x^\frac{1}{3}}+\frac{3x}{x^\frac{1}{3}}+\frac{x^\frac{3}{2}}{x^\frac{1}{3}}\right)dx=\\

									=\int\left(x^{-\frac{1}{3}}+3x^\frac{1}{6}+3x^\frac{2}{3}+x^\frac{7}{6}\right)dx
									=\frac{x^\frac{2}{3}}{\frac{2}{3}}+3\cdot\frac{x^\frac{7}{6}}{\frac{7}{6}}+3\cdot\frac{x^\frac{5}{3}}{\frac{5}{3}}+\frac{x^\frac{13}{6}}{\frac{13}{6}}+C=\\
									=\frac{3\sqrt[3]{x^2}}{2}+\frac{18x\sqrt[6]{x}}{7}+\frac{9x\sqrt[3]{x^2}}{5}+\frac{6x^2\sqrt[6]{x}}{13}+C
								\end{gather*}`;
        break;
		//разделение числителя + деление каждого члена на значение дроби
		case 0: //1256
            task    = String.raw`\begin{gather*} \int\frac{1+2x^2}{x^2\left(1+x^2\right)}dx \end{gather*}`;
            answer  = String.raw`\begin{gather*} 
									\int\frac{1+2x^2}{x^2\left(1+x^2\right)}dx
									=\int\frac{1+x^2+x^2}{x^2\left(1+x^2\right)}dx
									=\int\left(\frac{1+x^2}{x^2\left(1+x^2\right)}+\frac{x^2}{x^2\left(1+x^2\right)}\right)dx=\\

									=\int\left(x^{-2}+\frac{1}{1+x^2}\right)dx
									=\frac{x^{-1}}{-1}+\arctg{x}+C
									=-\frac{1}{x}+\arctg{x}+C						
								\end{gather*}`;
        break;
		//разделение числителя + деление каждого члена на значение дроби + формулы сокращенного умножения
		case 0: //1257
            task    = String.raw`\begin{gather*} \int\frac{(1+x)^2}{x\left(1+x^2\right)}dx \end{gather*}`;
            answer  = String.raw`\begin{gather*} 
									\int\frac{(1+x)^2}{x\left(1+x^2\right)}dx
									=\int\frac{1+2x+x^2}{x\left(1+x^2\right)}dx=\\

									=\int\left(\frac{1+x^2}{x\left(1+x^2\right)}+\frac{2x}{x\left(1+x^2\right)}\right)dx
									=\int\left(\frac{1}{x}+\frac{2}{1+x^2}\right)dx
									=\ln|x|+2\arctg{x}+C
								\end{gather*}`;
        break;
		//работа с диффернциалом в интеграле + степень
		case 0: //1262
            task    = String.raw`\begin{gather*} \int\frac{d\left(1+x^2\right)}{\sqrt{1+x^2}} \end{gather*}`;
            answer  = String.raw`\begin{gather*} 
									\int\frac{d\left(1+x^2\right)}{\sqrt{1+x^2}}
									=\int\left(1+x^2\right)^{-\frac{1}{2}}d\left(1+x^2\right)
									=\frac{\left(1+x^2\right)^{\frac{1}{2}}}{\frac{1}{2}}+C
									=2\sqrt{1+x^2}+C
								\end{gather*}`;
        break;
		case 0: //1284
            task    = String.raw`\begin{gather*} \int\cos{3x}d(3x) \end{gather*}`;
            answer  = String.raw`\begin{gather*} 
									\int\cos{3x}d(3x)
									=\sin{3x}+C
								\end{gather*}`;
        break;
		case 0: //1285
            task    = String.raw`\begin{gather*} \int\frac{d(1+\ln{x})}{\cos^2(1+\ln{x})} \end{gather*}`;
            answer  = String.raw`\begin{gather*} 
									\int\frac{d(1+\ln{x})}{\cos^2(1+\ln{x})}
									=\tg(1+\ln{x})+C
								\end{gather*}`;
        break;
		case 0: //1315
            task    = String.raw`\begin{gather*} \int\frac{d\left(\frac{x}{3}\right)}{\sqrt{1-\left(\frac{x}{3}\right)^2}} \end{gather*}`;
            answer  = String.raw`\begin{gather*} 
									\int\frac{d\left(\frac{x}{3}\right)}{\sqrt{1-\left(\frac{x}{3}\right)^2}}
									=\arcsin\frac{x}{3}+C
								\end{gather*}`;
        break;
		//занесение под диффернциал + степень
		case 0: //1263
            task    = String.raw`\begin{gather*} \int(x+1)^{15}dx \end{gather*}`;
            answer  = String.raw`\begin{gather*} 
									\int(x+1)^{15}dx
									=\int(x+1)^{15}d(x+1)
									=\frac{(x+1)^{16}}{16}+C
								\end{gather*}`;
        break;
		case 0: //1264
            task    = String.raw`\begin{gather*} \int\frac{dx}{(2x-3)^5} \end{gather*}`;
            answer  = String.raw`\begin{gather*} 
									\int\frac{dx}{(2x-3)^5}
									=\left[\begin{aligned}& d(2x-3)=(2x-3)'dx=2dx;\\& dx=\frac{1}{2}d(2x-3).\end{aligned}\right]
									=\frac{1}{2}\cdot\int\frac{d(2x-3)}{(2x-3)^5}=\\

									=\frac{1}{2}\cdot\int(2x-3)^{-5}d(2x-3)
									=\frac{1}{2}\cdot\frac{(2x-3)^{-4}}{-4}+C
									=-\frac{1}{8(2x-3)^4}+C
								\end{gather*}`;
        break;
		case 0: //1265
            task    = String.raw`\begin{gather*} \int\frac{dx}{(2x-3)^5} \end{gather*}`;
            answer  = String.raw`\begin{gather*} 
									\int\frac{dx}{(2x-3)^5}
									=\left[\begin{aligned}& d(2x-3)=(2x-3)'dx=2dx;\\& dx=\frac{1}{2}d(2x-3).\end{aligned}\right]
									=\frac{1}{2}\cdot\int\frac{d(2x-3)}{(2x-3)^5}=\\

									=\frac{1}{2}\cdot\int(2x-3)^{-5}d(2x-3)
									=\frac{1}{2}\cdot\frac{(2x-3)^{-4}}{-4}+C
									=-\frac{1}{8(2x-3)^4}+C
								\end{gather*}`;
        break;
		case 0: //1266
            task    = String.raw`\begin{gather*} \int\sqrt[5]{(8-3x)^6}dx \end{gather*}`;
            answer  = String.raw`\begin{gather*} 
									\int\sqrt[5]{(8-3x)^6}dx
									=\left[\begin{aligned}& d(8-3x)=-3dx;\\& dx=-\frac{1}{3}d(8-3x).\end{aligned}\right]
									=-\frac{1}{3}\int\sqrt[5]{(8-3x)^6}d(8-3x)=\\

									=-\frac{1}{3}\int(8-3x)^{\frac{6}{5}}d(8-3x)
									=-\frac{1}{3}\cdot\frac{(8-3x)^{\frac{11}{5}}}{\frac{11}{5}}+C
									=-\frac{5\sqrt[5]{(8-3x)^{11}}}{33}+C
								\end{gather*}`;
        break;
		case 0: //1267
            task    = String.raw`\begin{gather*} \int\sqrt{8-2x}dx \end{gather*}`;
            answer  = String.raw`\begin{gather*} 
									\int\sqrt{8-2x}dx
									=\left[\begin{aligned}& d(8-2x)=-2dx;\\& dx=-\frac{1}{2}d(8-2x).\end{aligned}\right]
									=-\frac{1}{2}\int\sqrt{8-2x}\;d(8-2x)=\\

									=-\frac{1}{2}\int(8-2x)^{\frac{1}{2}}d(8-2x)
									=-\frac{1}{2}\cdot\frac{(8-2x)^{\frac{3}{2}}}{\frac{3}{2}}+C
									=-\frac{\sqrt{(8-2x)^3}}{3}+C
								\end{gather*}`;
        break;
		case 0: //1269
            task    = String.raw`\begin{gather*} \int{2x}\sqrt{x^2+1}dx \end{gather*}`;
            answer  = String.raw`\begin{gather*} 
									\int{2x}\sqrt{x^2+1}dx
									=\int\left(x^2+1\right)^\frac{1}{2}d\left(x^2+1\right)
									=\frac{\left(x^2+1\right)^\frac{3}{2}}{\frac{3}{2}}+C
									=\frac{2\sqrt{\left(x^2+1\right)^3}}{3}+C
								\end{gather*}`;
        break;
		case 0: //1270
            task    = String.raw`\begin{gather*} \int{x}\sqrt{1-x^2}dx \end{gather*}`;
            answer  = String.raw`\begin{gather*} 
									\int{x}\sqrt{1-x^2}dx
									=\left[\begin{aligned}& d\left(1-x^2\right)=-2xdx;\\& xdx=-\frac{1}{2}d\left(1-x^2\right).\end{aligned}\right]=\\

									=-\frac{1}{2}\int\left(1-x^2\right)^{\frac{1}{2}}d\left(1-x^2\right)
									=-\frac{1}{2}\cdot\frac{\left(1-x^2\right)^{\frac{3}{2}}}{\frac{3}{2}}+C
									=-\frac{\sqrt{\left(1-x^2\right)^3}}{3}+C
								\end{gather*}`;
        break;
		case 0: //1271
            task    = String.raw`\begin{gather*} \int{x^2}\sqrt[5]{x^3+2}dx \end{gather*}`;
            answer  = String.raw`\begin{gather*} 
									\int{x^2}\sqrt[5]{x^3+2}dx
									=\left[\begin{aligned}& d\left(x^3+2\right)=3x^2dx;\\& x^2dx=\frac{1}{3}d\left(x^3+2\right).\end{aligned}\right]=\\

									=\frac{1}{3}\int\left(x^3+2\right)^{\frac{1}{5}}d\left(x^3+2\right)
									=\frac{1}{3}\cdot\frac{\left(x^3+2\right)^{\frac{6}{5}}}{\frac{6}{5}}+C
									=\frac{5\sqrt[5]{\left(x^3+2\right)^6}}{18}+C
								\end{gather*}`;
        break;
		case 0: //1272
            task    = String.raw`\begin{gather*} \int\frac{xdx}{\sqrt{x^2+1}} \end{gather*}`;
            answer  = String.raw`\begin{gather*} 
									\int\frac{xdx}{\sqrt{x^2+1}}
									=\left[\begin{aligned}& d\left(x^2+1\right)=2xdx;\\& xdx=\frac{1}{2}d\left(x^2+1\right).\end{aligned}\right]=\\

									=\frac{1}{2}\int\left(x^2+1\right)^{-\frac{1}{2}}d\left(x^2+1\right)
									=\frac{1}{2}\cdot\frac{\left(x^2+1\right)^{\frac{1}{2}}}{\frac{1}{2}}+C
									=\sqrt{x^2+1}+C
								\end{gather*}`;
        break;
		case 0: //1273
            task    = String.raw`\begin{gather*} \int\frac{x^4dx}{\sqrt{4+x^5}} \end{gather*}`;
            answer  = String.raw`\begin{gather*} 
									\int\frac{x^4dx}{\sqrt{4+x^5}}
									=\left[\begin{aligned}& d\left(4+x^5\right)=5x^4dx;\\& x^4dx=\frac{1}{5}d\left(4+x^5\right).\end{aligned}\right]=\\

									=\frac{1}{5}\int\left(4+x^5\right)^{-\frac{1}{2}}d\left(4+x^5\right)
									=\frac{1}{5}\cdot\frac{\left(4+x^5\right)^{\frac{1}{2}}}{\frac{1}{2}}+C
									=\frac{2\sqrt{4+x^5}}{5}+C
								\end{gather*}`;
        break;
		case 0: //1274
            task    = String.raw`\begin{gather*} \int\frac{x^3dx}{\sqrt[3]{x^4+1}} \end{gather*}`;
            answer  = String.raw`\begin{gather*} 
									\int\frac{x^3dx}{\sqrt[3]{x^4+1}}
									=\left[\begin{aligned}& d\left(x^4+1\right)=4x^3dx;\\& x^3dx=\frac{1}{4}d\left(x^4+1\right).\end{aligned}\right]=\\

									=\frac{1}{4}\int\left(x^4+1\right)^{-\frac{1}{3}}d\left(x^4+1\right)
									=\frac{1}{4}\cdot\frac{\left(x^4+1\right)^{\frac{2}{3}}}{\frac{2}{3}}+C
									=\frac{3\sqrt[3]{\left(x^4+1\right)^2}}{8}+C
								\end{gather*}`;
        break;
		case 0: //1275
            task    = String.raw`\begin{gather*} \int\frac{(6x-5)dx}{2\sqrt{3x^2-5x+6}} \end{gather*}`;
            answer  = String.raw`\begin{gather*} 
									\int\frac{(6x-5)dx}{2\sqrt{3x^2-5x+6}}
									=\left[d\left(3x^2-5x+6\right)=(6x-5)dx\right]=\\

									=\frac{1}{2}\int\left(3x^2-5x+6\right)^{-\frac{1}{2}}d\left(3x^2-5x+6\right)
									=\frac{1}{2}\cdot\frac{\left(3x^2-5x+6\right)^{\frac{1}{2}}}{\frac{1}{2}}+C
									=\sqrt{3x^2-5x+6}+C
								\end{gather*}`;
        break;
		case 0: //1276
            task    = String.raw`\begin{gather*} \int\sin^3x\cos{x}dx \end{gather*}`;
            answer  = String.raw`\begin{gather*} 
									\int\sin^3x\cos{x}dx
									=\left[d\left(\sin{x}\right)=\cos{x}dx\right]
									=\int\sin^3xd(\sin{x})
									=\frac{\sin^4x}{4}+C
								\end{gather*}`;
        break;
		case 0: //1277
            task    = String.raw`\begin{gather*} \int\frac{\sin{x}dx}{\cos^2x} \end{gather*}`;
            answer  = String.raw`\begin{gather*} 
									\int\frac{\sin{x}dx}{\cos^2x}
									=\left[\begin{aligned}& d\left(\cos{x}\right)=-\sin{x}dx;\\& \sin{x}dx=-d(\cos{x}).\end{aligned}\right]
									=-\int\left(\cos{x}\right)^{-2}d(\cos{x})
									=-\frac{(\cos{x})^{-1}}{-1}+C
									=\frac{1}{\cos{x}}+C
								\end{gather*}`;
        break;
		case 0: //1278
            task    = String.raw`\begin{gather*} \int\frac{\cos{x}dx}{\sqrt[3]{\sin^2x}} \end{gather*}`;
            answer  = String.raw`\begin{gather*} 
									\int\frac{\cos{x}dx}{\sqrt[3]{\sin^2x}}
									=\left[d(\sin{x})=\cos{x}dx\right]
									=\int\left(\sin{x}\right)^{-\frac{2}{3}}d(\sin{x})
									=\frac{(\sin{x})^\frac{1}{3}}{\frac{1}{3}}+C
									=3\cdot\sqrt[3]{\sin{x}}+C
								\end{gather*}`;
        break;
		case 0: //1279 - здесь есть применнеие тождеств тригонометрии
            task    = String.raw`\begin{gather*} \int\cos^3x\sin{2x}dx \end{gather*}`;
            answer  = String.raw`\begin{gather*} 
									\int\cos^3x\sin{2x}dx
									=\int\cos^3x\cdot{2}\sin{x}\cos{x}dx
									=2\int\cos^4x\sin{x}dx=\\

									=\left[\begin{aligned}& d\left(\cos{x}\right)=-\sin{x}dx;\\& \cos{x}dx=-d\left(\cos{x}\right).\end{aligned}\right]
									=-2\int\cos^4xd(\cos{x})
									=-2\cdot\frac{\cos^5x}{5}+C
									=-\frac{2\cos^5x}{5}+C
								\end{gather*}`;
        break;
		case 0: //1280
            task    = String.raw`\begin{gather*} \int\frac{\sqrt{\ln{x}}}{x}dx \end{gather*}`;
            answer  = String.raw`\begin{gather*} 
									\int\frac{\sqrt{\ln{x}}}{x}dx
									=\left[d(\ln{x})=\frac{dx}{x}\right]
									=\int\left(\ln{x}\right)^\frac{1}{2}d\left(\ln{x}\right)
									=\frac{\left(\ln{x}\right)^\frac{3}{2}}{\frac{3}{2}}+C
									=\frac{2\cdot\sqrt{\ln^3x}}{3}+C
								\end{gather*}`;
        break;
		case 0: //1281
            task    = String.raw`\begin{gather*} \int\frac{(\arctg{x})^2 dx}{1+x^2} \end{gather*}`;
            answer  = String.raw`\begin{gather*} 
									\int\frac{(\arctg{x})^2 dx}{1+x^2}
									=\left[d(\arctg{x})=\frac{dx}{1+x^2}\right]
									=\int(\arctg{x})^2d(\arctg{x})
									=\frac{(\arctg{x})^3}{3}+C
								\end{gather*}`;
        break;
		case 0: //1282
            task    = String.raw`\begin{gather*} \int\frac{dx}{(\arcsin{x})^3\cdot\sqrt{1-x^2}} \end{gather*}`;
            answer  = String.raw`\begin{gather*} 
									\int\frac{dx}{(\arcsin{x})^3\cdot\sqrt{1-x^2}}
									=\left[d(\arcsin{x})=\frac{dx}{\sqrt{1-x^2}}\right]=\\

									=\int(\arcsin{x})^{-3}d(\arcsin{x})
									=\frac{(\arcsin{x})^{-2}}{-2}+C
									=-\frac{1}{2\cdot(\arcsin{x})^2}+C
								\end{gather*}`;
        break;
		case 0: //1283
            task    = String.raw`\begin{gather*} \int\frac{dx}{\cos^2x\cdot\sqrt{1+\tg{x}}} \end{gather*}`;
            answer  = String.raw`\begin{gather*} 
									\int\frac{dx}{\cos^2x\cdot\sqrt{1+\tg{x}}}
									=\left[d(1+\tg{x})=\frac{dx}{\cos^2x}\right]=\\

									=\int(1+\tg{x})^{-\frac{1}{2}}d(1+\tg{x})
									=\frac{(1+\tg{x})^{\frac{1}{2}}}{\frac{1}{2}}+C
									=2\sqrt{1+\tg{x}}+C
								\end{gather*}`;
        break;
		case 0: //1286
            task    = String.raw`\begin{gather*} \int\cos{3x}dx \end{gather*}`;
            answer  = String.raw`\begin{gather*} 
									\int\cos{3x}dx
									=\left[\begin{aligned}& d(3x)=3dx;\\& dx=\frac{1}{3}d(3x).\end{aligned}\right]
									=\frac{1}{3}\int\cos{3x}d(3x)
									=\frac{1}{3}\sin{3x}+C
									=\frac{\sin{3x}}{3}+C
								\end{gather*}`;
        break;
		case 0: //1288
            task    = String.raw`\begin{gather*} \int\sin(2x-3)dx \end{gather*}`;
            answer  = String.raw`\begin{gather*} 
									\int\sin(2x-3)dx
									=\left[\begin{aligned}& d(2x-3)=2dx;\\& dx=\frac{1}{2}d(2x-3).\end{aligned}\right]
									=\frac{1}{2}\int\sin(2x-3)d(2x-3)
									=-\frac{1}{2}\cos(2x-3)+C
								\end{gather*}`;
        break;
		case 0: //1289
            task    = String.raw`\begin{gather*} \int\cos(1-2x)dx \end{gather*}`;
            answer  = String.raw`\begin{gather*} 
									\int\cos(1-2x)dx
									=\left[\begin{aligned}&d(1-2x)=-2dx;\\&dx=-\frac{1}{2}d(1-2x).\end{aligned}\right]
									=-\frac{1}{2}\int\cos(1-2x)d(1-2x)
									=-\frac{1}{2}\sin(1-2x)+C
								\end{gather*}`;
        break;
		case 0: //1290
            task    = String.raw`\begin{gather*} \int\left(\cos\left(2x-\frac{\pi}{4}\right)\right)^{-2}dx \end{gather*}`;
            answer  = String.raw`\begin{gather*} 
									\int\left(\cos\left(2x-\frac{\pi}{4}\right)\right)^{-2}dx
									=\left[\begin{aligned}& d\left(2x-\frac{\pi}{4}\right)=2dx;\\& dx=\frac{1}{2}d\left(2x-\frac{\pi}{4}\right).\end{aligned}\right]
									=\frac{1}{2}\int\frac{d\left(2x-\frac{\pi}{4}\right)}{\cos^2\left(2x-\frac{\pi}{4}\right)}
									=\frac{1}{2}\tg\left(2x-\frac{\pi}{4}\right)+C
								\end{gather*}`;
        break;
		case 0: //1291
            task    = String.raw`\begin{gather*} \int{e^x}\sin\left(e^x\right)dx \end{gather*}`;
            answer  = String.raw`\begin{gather*} 
									\int{e^x}\sin\left(e^x\right)dx
									=\left[d\left(e^x\right)=e^xdx\right]
									=\int\sin\left(e^x\right)d\left(e^x\right)
									=-\cos\left(e^x\right)+C
								\end{gather*}`;
        break;
		case 0: //1294
            task    = String.raw`\begin{gather*} \int\frac{(2x-3)dx}{x^2-3x+8} \end{gather*}`;
            answer  = String.raw`\begin{gather*} 
									\int\frac{(2x-3)dx}{x^2-3x+8}
									=\left[d\left(x^2-3x+8\right)=(2x-3)dx\right]
									=\int\frac{d\left(x^2-3x+8\right)}{x^2-3x+8}
									=\ln\left|x^2-3x+8\right|+C
								\end{gather*}`;
        break;
		case 0: //1295
            task    = String.raw`\begin{gather*} \int\frac{dx}{2x-1} \end{gather*}`;
            answer  = String.raw`\begin{gather*} 
									\int\frac{dx}{2x-1}
									=\left[\begin{aligned}&d(2x-1)=2dx;\\&dx=\frac{1}{2}d(2x-1).\end{aligned}\right]
									=\frac{1}{2}\int\frac{d(2x-1)}{2x-1}
									=\frac{1}{2}\ln|2x-1|+C
								\end{gather*}`;
        break;
		case 0: //1297
            task    = String.raw`\begin{gather*} \int\frac{xdx}{x^2+1} \end{gather*}`;
            answer  = String.raw`\begin{gather*} 
									\int\frac{xdx}{x^2+1}
									=\left[\begin{aligned}& d\left(x^2+1\right)=2xdx;\\& xdx=\frac{1}{2}d\left(x^2+1\right).\end{aligned}\right]
									=\frac{1}{2}\int\frac{d\left(x^2+1\right)}{x^2+1}
									=\frac{1}{2}\ln\left(x^2+1\right)+C
									=\frac{\ln\left(x^2+1\right)}{2}+C
								\end{gather*}`;
        break;
		case 0: //1298
            task    = String.raw`\begin{gather*} \int\frac{x^2dx}{x^3+1} \end{gather*}`;
            answer  = String.raw`\begin{gather*} 
									\int\frac{x^2dx}{x^3+1}
									=\left[\begin{aligned}& d\left(x^3+1\right)=3x^2dx;\\& x^2dx=\frac{1}{3}d\left(x^3+1\right).\end{aligned}\right]
									=\frac{1}{3}\int\frac{d\left(x^3+1\right)}{x^3+1}
									=\frac{1}{3}\ln\left|x^3+1\right|+C
									=\frac{\ln\left|x^3+1\right|}{3}+C
								\end{gather*}`;
        break;
		case 0: //1299
            task    = String.raw`\begin{gather*} \int\frac{e^xdx}{e^x+1} \end{gather*}`;
            answer  = String.raw`\begin{gather*} 
									\int\frac{e^xdx}{e^x+1}
									=\left[d\left(e^x+1\right)=e^xdx\right]
									=\int\frac{d\left(e^x+1\right)}{e^x+1}
									=\ln\left(e^x+1\right)+C
								\end{gather*}`;
        break;
		case 0: //1300
            task    = String.raw`\begin{gather*} \int\frac{e^{2x}dx}{e^{2x}+a^2} \end{gather*}`;
            answer  = String.raw`\begin{gather*} 
									\int\frac{e^{2x}dx}{e^{2x}+a^2}
									=\left[\begin{aligned}& d\left(e^{2x}+a^2\right)=2e^{2x}dx;\\& e^{2x}dx=\frac{1}{2}d\left(e^{2x}+a^2\right).\end{aligned}\right]
									=\frac{1}{2}\int\frac{d\left(e^{2x}+a^2\right)}{e^{2x}+a^2}
									=\frac{1}{2}\cdot\ln\left(e^{2x}+a^2\right)+C
									=\frac{\ln\left(e^{2x}+a^2\right)}{2}+C
								\end{gather*}`;
        break;
		case 0: //1313
            task    = String.raw`\begin{gather*} \int{e^{x^2}}xdx \end{gather*}`;
            answer  = String.raw`\begin{gather*} 
									\int{e^{x^2}}xdx
									=\left[\begin{aligned}& d\left(x^2\right)=2xdx;\\& xdx=\frac{1}{2}d\left(x^2\right).\end{aligned}\right]
									=\frac{1}{2}\int{e^{x^2}}d\left(x^2\right)
									=\frac{e^{x^2}}{2}+C
								\end{gather*}`;
        break;
		case 0: //1314
            task    = String.raw`\begin{gather*} \int{e^{-x^3}}x^2dx \end{gather*}`;
            answer  = String.raw`\begin{gather*} 
									\int{e^{-x^3}}x^2dx
									=\left[\begin{aligned}& d\left(-x^3\right)=-3x^2dx;\\& x^2dx=-\frac{1}{3}d\left(-x^3\right).\end{aligned}\right]
									=-\frac{1}{3}\int{e^{-x^3}}d\left(-x^3\right)
									=-\frac{e^{-x^3}}{3}+C
								\end{gather*}`;
        break;
		//занесение под диффернциал + константа
		case 0: //1287
            task    = String.raw`\begin{gather*} \int(\cos\alpha-\cos{2x})dx \end{gather*}`;
            answer  = String.raw`\begin{gather*} 
									\int(\cos\alpha-\cos{2x})dx
									=\int\cos\alpha\,dx-\frac{1}{2}\int\cos{2x}\,d(2x)
									=\cos\alpha\cdot{x}-\frac{\sin{2x}}{2}+C
								\end{gather*}`;
        break;
		//занесение под диффернциал
		case 0: //1309
            task    = String.raw`\begin{gather*} \int{e^{\sin{x}}}\cos{x}dx \end{gather*}`;
            answer  = String.raw`\begin{gather*} 
									\int{e^{\sin{x}}}\cos{x}dx
									=\biggl[d(\sin{x})=\cos{x}dx\biggr]
									=\int{e^{\sin{x}}}d(\sin{x})
									=e^{\sin{x}}+C
								\end{gather*}`;
        break;
		case 0: //1310
            task    = String.raw`\begin{gather*} \int{a^{3x}}dx \end{gather*}`;
            answer  = String.raw`\begin{gather*} 
									\int{a^{3x}}dx
									=\left[\begin{aligned}&d(3x)=3dx;\\&dx=\frac{1}{3}d(3x).\end{aligned}\right]
									=\frac{1}{3}\cdot\int{a^{3x}}d(3x)
									=\frac{a^{3x}}{3\ln{a}}+C
								\end{gather*}`;
        break;
		case 0: //1311
            task    = String.raw`\begin{gather*} \int{a^{-x}}dx \end{gather*}`;
            answer  = String.raw`\begin{gather*} 
									\int{a^{-x}}dx
									=\left[\begin{aligned}&d(-x)=-dx;\\&dx=-d(-x).\end{aligned}\right]
									=-\int{a^{-x}}d(-x)
									=-\frac{a^{-x}}{\ln{a}}+C
								\end{gather*}`;
        break;
		case 0: //1312
            task    = String.raw`\begin{gather*} \int{e^{-3x+1}}dx \end{gather*}`;
            answer  = String.raw`\begin{gather*} 
									\int{e^{-3x+1}}dx
									=\left[\begin{aligned}& d(-3x+1)=-3dx;\\& dx=-\frac{1}{3}d(-3x+1).\end{aligned}\right]
									=-\frac{1}{3}\int{e^{-3x+1}}d(-3x+1)
									=-\frac{e^{-3x+1}}{3}+C
								\end{gather*}`;
        break;
		case 0: //1316
            task    = String.raw`\begin{gather*} \int\frac{dx}{\sqrt{1-25x^2}} \end{gather*}`;
            answer  = String.raw`\begin{gather*} 
									\int\frac{dx}{\sqrt{1-25x^2}}
									=\int\frac{dx}{\sqrt{1-(5x)^2}}
									=\left[\begin{aligned}& d(5x)=5dx;\\& dx=\frac{1}{5}d(5x).\end{aligned}\right]
									=\frac{1}{5}\int\frac{d(5x)}{\sqrt{1-(5x)^2}}
									=\frac{\arcsin{5x}}{5}+C
								\end{gather*}`;
        break;
		case 0: //1317
            task    = String.raw`\begin{gather*} \int\frac{dx}{1+9x^2} \end{gather*}`;
            answer  = String.raw`\begin{gather*} 
									\int\frac{dx}{1+9x^2}
									=\int\frac{dx}{1+(3x)^2}
									=\left[\begin{aligned}& d(3x)=3dx;\\& dx=\frac{1}{3}d(3x).\end{aligned}\right]
									=\frac{1}{3}\int\frac{d(3x)}{1+(3x)^2}
									=\frac{\arctg{3x}}{3}+C
								\end{gather*}`;
        break;
		case 0: //1318
            task    = String.raw`\begin{gather*} \int\frac{dx}{\sqrt{4-x^2}} \end{gather*}`;
            answer  = String.raw`\begin{gather*} 
									\int\frac{dx}{\sqrt{4-x^2}}
									=\int\frac{dx}{\sqrt{2^2-x^2}}
									=\arcsin\frac{x}{2}+C
								\end{gather*}`;
        break;
		case 0: //1319
            task    = String.raw`\begin{gather*} \int\frac{dx}{2x^2+9} \end{gather*}`;
            answer  = String.raw`\begin{gather*} 
									\int\frac{dx}{2x^2+9}
									=\frac{1}{2}\int\frac{dx}{x^2+\frac{9}{2}}
									=\frac{1}{2}\int\frac{dx}{x^2+\left(\frac{3}{\sqrt{2}}\right)^2}
									=\frac{1}{2}\cdot\frac{1}{\frac{3}{\sqrt{2}}}\cdot\arctg\frac{x}{\frac{3}{\sqrt{2}}}+C
									=\frac{\arctg\frac{\sqrt{2}x}{3}}{3\sqrt{2}}+C
								\end{gather*}`;
        break;
		//использование тригонометрических тождеств - может использовать другие методы при решение
		case 0: //1251
            task    = String.raw`\begin{gather*} \int\frac{1+\cos^2{x}}{1+\cos{2x}}dx \end{gather*}`;
            answer  = String.raw`\begin{gather*} 
									\int\frac{1+\cos^2{x}}{1+\cos{2x}}dx
									=\int\frac{1+\cos^2{x}}{1+2\cos^2x-1}dx=\\

									=\frac{1}{2}\cdot\int\frac{1+\cos^2{x}}{\cos^2x}dx
									=\frac{1}{2}\cdot\int\left(\frac{1}{\cos^2x}+1\right)dx
									=\frac{1}{2}\cdot\left(\tg{x}+x\right)+C									
								\end{gather*}`;
        break;
		case 0: //1252
            task    = String.raw`\begin{gather*} \int\frac{\cos{2x}}{\cos^2x\sin^2x}dx \end{gather*}`;
            answer  = String.raw`\begin{gather*} 
									\int\frac{\cos{2x}}{\cos^2x\sin^2x}dx
									=\int\frac{\cos^2x-\sin^2x}{\cos^2x\sin^2x}dx=\\

									=\int\left(\frac{\cos^2x}{\cos^2x\sin^2x}-\frac{\sin^2x}{\cos^2x\sin^2x}\right)dx
									=\int\left(\frac{1}{\sin^2x}-\frac{1}{\cos^2x}\right)dx
									=-\ctg{x}-\tg{x}+C								
								\end{gather*}`;
        break;
		case 0: //1253
            task    = String.raw`\begin{gather*} \int\tg^2xdx \end{gather*}`;
            answer  = String.raw`\begin{gather*} 
									\int\tg^2xdx
									=\int\frac{\sin^2x}{\cos^2x}dx
									=\int\frac{1-\cos^2x}{\cos^2x}dx
									=\int\left(\frac{1}{\cos^2x}-1\right)dx
									=\tg{x}-x+C							
								\end{gather*}`;
        break;
		case 0: //1254
            task    = String.raw`\begin{gather*} \int\ctg^2xdx \end{gather*}`;
            answer  = String.raw`\begin{gather*} 
									\int\ctg^2xdx
									=\int\frac{\cos^2x}{\sin^2x}dx
									=\int\frac{1-\sin^2x}{\sin^2x}dx
									=\int\left(\frac{1}{\sin^2x}-1\right)dx
									=-\ctg{x}-x+C			
								\end{gather*}`;
        break;
		case 0: //1255
            task    = String.raw`\begin{gather*} \int{2\sin^2\frac{x}{2}}dx \end{gather*}`;
            answer  = String.raw`\begin{gather*} 
									\int{2\sin^2\frac{x}{2}}dx
									=\int{2\cdot\frac{1-\cos{x}}{2}}dx
									=\int\left(1-\cos{x}\right)dx
									=x-\sin{x}+C			
								\end{gather*}`;
        break;
		case 0: //1258
            task    = String.raw`\begin{gather*} \int\frac{dx}{\cos{2x}+\sin^2x} \end{gather*}`;
            answer  = String.raw`\begin{gather*} 
									\int\frac{dx}{\cos{2x}+\sin^2x}
									=\int\frac{dx}{\cos^2x-\sin^2x+\sin^2x}
									=\int\frac{dx}{\cos^2x}
									=\tg{x}+C
								\end{gather*}`;
        break;
		case 0: //1259 интересные закономерности???
            task    = String.raw`\begin{gather*} \int\left(\arcsin{x}+\arccos{x}\right)dx \end{gather*}`;
            answer  = String.raw`\begin{gather*} 
									\int\left(\arcsin{x}+\arccos{x}\right)dx
									=\int\frac{\pi}{2}dx
									=\frac{\pi}{2}\int{dx}
									=\frac{\pi}{2}x+C
								\end{gather*}`;
        break;
		case 0: //1301 
            task    = String.raw`\begin{gather*} \int\tg{x}dx \end{gather*}`;
            answer  = String.raw`\begin{gather*} 
									\int\tg{x}dx
									=\int\frac{\sin{x}}{\cos{x}}dx
									=\left[\begin{aligned}&d(\cos{x})=-\sin{x}dx;\\&\sin{x}dx=-d(\cos{x}).\end{aligned}\right]
									=-\int\frac{d(\cos{x})}{\cos{x}}
									=-\ln|\cos{x}|+C
								\end{gather*}`;
        break;
		case 0: //1302 
            task    = String.raw`\begin{gather*} \int\ctg{x}dx \end{gather*}`;
            answer  = String.raw`\begin{gather*} 
									\int\ctg{x}dx
									=\int\frac{\cos{x}}{\sin{x}}dx
									=\left[d(\sin{x})=\cos{x}dx\right]
									=\int\frac{d(\sin{x})}{\sin{x}}
									=\ln|\sin{x}|+C
								\end{gather*}`;
        break;
		case 0: //1303
            task    = String.raw`\begin{gather*} \int\tg{3x}dx \end{gather*}`;
            answer  = String.raw`\begin{gather*} 
									\int\tg{3x}dx
									=\int\frac{\sin{3x}}{\cos{3x}}dx
									=\left[\begin{aligned}& d(\cos{3x})=-3\sin{3x}dx;\\& \sin{3x}dx=-\frac{1}{3}d(\cos{3x}).\end{aligned}\right]
									=-\frac{1}{3}\int\frac{d(\cos{3x})}{\cos{3x}}
									=-\frac{\ln|\cos{3x}|}{3}+C
								\end{gather*}`;
        break;
		case 0: //1304
            task    = String.raw`\begin{gather*} \int\ctg(2x+1)dx \end{gather*}`;
            answer  = String.raw`\begin{gather*} 
									\int\ctg(2x+1)dx
									=\int\frac{\cos(2x+1)}{\sin(2x+1)}dx=\\

									=\left[\begin{aligned}& d(\sin(2x+1))=2\cos(2x+1)dx;\\& \cos(2x+1)dx=\frac{1}{2}d(\sin(2x+1)).\end{aligned}\right]
									=\frac{1}{2}\int\frac{d(\sin(2x+1))}{\sin(2x+1)}
									=\frac{\ln|\sin(2x+1)|}{2}+C
								\end{gather*}`;
        break;
		case 0: //1305
            task    = String.raw`\begin{gather*} \int\frac{\sin{2x}}{1+\cos^2x}dx \end{gather*}`;
            answer  = String.raw`\begin{gather*} 
									\int\frac{\sin{2x}}{1+\cos^2x}dx
									=\left[\begin{aligned}& d\left(1+\cos^2x\right)=-2\cos{x}\sin{x}dx=-\sin{2x}dx;\\& \sin{2x}dx=-d\left(1+\cos^2x\right).\end{aligned}\right]=\\

									=-\int\frac{d\left(1+\cos^2x\right)}{1+\cos^2x}
									=-\ln\left(1+\cos^2x\right)+C
								\end{gather*}`;
        break;
		
		
		case 0:
            task    = String.raw`\begin{gather*} \end{gather*}`;
            answer  = String.raw`\begin{gather*} 
									
								\end{gather*}`;
        break;
		*/
        //Дополнительные формулы
        default:
            alert( "400 Bad Request: value is undefined!" );
    }
//Вывод    
document.getElementById("task").innerHTML = task;
document.getElementById("answer").innerHTML = answer;