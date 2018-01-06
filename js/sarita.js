(function (lib, img, cjs, ss) {

var p; // shortcut to reference prototypes

// library properties:
lib.properties = {
	width: 1920,
	height: 1080,
	fps: 24,
	color: "#FFFFFF",
	manifest: [
		{src:"images/ahava_future_web2.jpg?1484087396219", id:"ahava_future_web2"},
		{src:"images/dron.png?1484087396219", id:"dron"}
	]
};



// symbols:



(lib.ahava_future_web2 = function() {
	this.initialize(img.ahava_future_web2);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,1920,1080);


(lib.dron = function() {
	this.initialize(img.dron);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,295,164);


(lib.plusplus = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#FD910D").ss(3,1,1).p("AgEgLIjSAAAgEjdIAADSIAADpADXgLIjbAA");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-23,-23.7,46.1,47.5);


(lib.dron_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.dron();
	this.instance.setTransform(-147.5,-82);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-147.5,-82,295,164);


(lib.button = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#FD910D").ss(3,1,1).p("At4kmIbxAAIAAJNI7xAAg");

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("rgba(50,125,167,0.588)").s().p("At4EnIAApNIbxAAIAAJNg");

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.shape_1},{t:this.shape}]},1).to({state:[{t:this.shape_1},{t:this.shape}]},2).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = null;


(lib.plus = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.plusplus();

	this.timeline.addTween(cjs.Tween.get(this.instance).to({rotation:180},24).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-23,-23.7,46.1,47.5);


// stage content:



(lib.srita = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_0 = function() {
		/* Click to Go to Web Page
		Clicking on the specified symbol instance loads the URL in a new browser window.
		
		Instructions:
		1. Replace http://www.adobe.com with the desired URL address.
		   Keep the quotation marks ("").
		*/
		
		this.btn_site.addEventListener("click", fl_ClickToGoToWebPage_2);
		
		function fl_ClickToGoToWebPage_2() {
			window.open("https://seo-up.co.il/achva2/home1.html", "_blank");
		}
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(191));

	// Layer 8
	this.btn_site = new lib.button();
	this.btn_site.setTransform(952.7,726.5,1.775,1.374,0,0,0,-0.1,0);
	new cjs.ButtonHelper(this.btn_site, 0, 1, 2, false, new lib.button(), 3);

	this.timeline.addTween(cjs.Tween.get(this.btn_site).wait(191));

	// Layer 7
	this.plus1 = new lib.plus();
	this.plus1.setTransform(552.8,301.4);

	this.timeline.addTween(cjs.Tween.get(this.plus1).wait(191));

	// Layer 6
	this.plus2 = new lib.plus();
	this.plus2.setTransform(1169.4,298.4);

	this.timeline.addTween(cjs.Tween.get(this.plus2).wait(191));

	// Layer 5
	this.plus3 = new lib.plus();
	this.plus3.setTransform(1109.8,678.9);

	this.timeline.addTween(cjs.Tween.get(this.plus3).wait(191));

	// Layer 4
	this.plus4 = new lib.plus();
	this.plus4.setTransform(1527.9,694.9);

	this.timeline.addTween(cjs.Tween.get(this.plus4).wait(191));

	// Layer 3
	this.instance = new lib.dron_1();
	this.instance.setTransform(-57.7,-90.1);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({x:761.4,y:326.7},91).to({x:732.5,y:346},9).to({x:1428.7,y:-104.1},90).wait(1));

	// Layer 2
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(50,125,167,0.588)").s().p("AgiGuIAAtbIBEAAIAANbg");
	this.shape.setTransform(1511.4,342);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("rgba(50,125,167,0.588)").s().p("AhHGuIAAtbICPAAIAANbg");
	this.shape_1.setTransform(1507.7,342);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("rgba(50,125,167,0.588)").s().p("AhsGuIAAtbIDZAAIAANbg");
	this.shape_2.setTransform(1503.9,342);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("rgba(50,125,167,0.588)").s().p("AiSGuIAAtbIElAAIAANbg");
	this.shape_3.setTransform(1500.1,342);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("rgba(50,125,167,0.588)").s().p("Ai4GuIAAtbIFxAAIAANbg");
	this.shape_4.setTransform(1496.4,342);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("rgba(50,125,167,0.588)").s().p("AjdGuIAAtbIG7AAIAANbg");
	this.shape_5.setTransform(1492.6,342);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("rgba(50,125,167,0.588)").s().p("AkDGuIAAtbIIHAAIAANbg");
	this.shape_6.setTransform(1488.9,342);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("rgba(50,125,167,0.588)").s().p("AkoGuIAAtbIJRAAIAANbg");
	this.shape_7.setTransform(1485.1,342);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("rgba(50,125,167,0.588)").s().p("AlOGuIAAtbIKdAAIAANbg");
	this.shape_8.setTransform(1481.4,342);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("rgba(50,125,167,0.588)").s().p("Al0GuIAAtbILoAAIAANbg");
	this.shape_9.setTransform(1477.6,342);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("rgba(50,125,167,0.588)").s().p("AmZGuIAAtbIMzAAIAANbg");
	this.shape_10.setTransform(1473.9,342);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("rgba(50,125,167,0.588)").s().p("Am+GuIAAtbIN9AAIAANbg");
	this.shape_11.setTransform(1470.1,342);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("rgba(50,125,167,0.588)").s().p("AnkGuIAAtbIPJAAIAANbg");
	this.shape_12.setTransform(1466.4,342);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("rgba(50,125,167,0.588)").s().p("AoKGuIAAtbIQVAAIAANbg");
	this.shape_13.setTransform(1462.6,342);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("rgba(50,125,167,0.588)").s().p("AovGuIAAtbIRfAAIAANbg");
	this.shape_14.setTransform(1458.8,342);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("rgba(50,125,167,0.588)").s().p("ApVGuIAAtbISrAAIAANbg");
	this.shape_15.setTransform(1455.1,342);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("rgba(50,125,167,0.588)").s().p("Ap6GuIAAtbIT1AAIAANbg");
	this.shape_16.setTransform(1451.3,342);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("rgba(50,125,167,0.588)").s().p("AqgGuIAAtbIVBAAIAANbg");
	this.shape_17.setTransform(1447.6,342);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("rgba(50,125,167,0.588)").s().p("ArGGuIAAtbIWMAAIAANbg");
	this.shape_18.setTransform(1443.8,342);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("rgba(50,125,167,0.588)").s().p("ArrGuIAAtbIXXAAIAANbg");
	this.shape_19.setTransform(1440.1,342);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("rgba(50,125,167,0.588)").s().p("AsRGuIAAtbIYiAAIAANbg");
	this.shape_20.setTransform(1436.3,342);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("rgba(50,125,167,0.588)").s().p("As2GuIAAtbIZtAAIAANbg");
	this.shape_21.setTransform(1432.6,342);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("rgba(50,125,167,0.588)").s().p("AtbGuIAAtbIa3AAIAANbg");
	this.shape_22.setTransform(1428.8,342);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("rgba(50,125,167,0.588)").s().p("AuBGuIAAtbIcDAAIAANbg");
	this.shape_23.setTransform(1425,342);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f("rgba(50,125,167,0.588)").s().p("AunGuIAAtbIdPAAIAANbg");
	this.shape_24.setTransform(1421.3,342);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f("rgba(50,125,167,0.588)").s().p("AvMGuIAAtbIeZAAIAANbg");
	this.shape_25.setTransform(1417.5,342);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f("rgba(50,125,167,0.588)").s().p("AvyGuIAAtbIflAAIAANbg");
	this.shape_26.setTransform(1413.8,342);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.f("rgba(50,125,167,0.588)").s().p("AwXGuIAAtbMAgvAAAIAANbg");
	this.shape_27.setTransform(1410,342);

	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.f("rgba(50,125,167,0.588)").s().p("Aw9GuIAAtbMAh7AAAIAANbg");
	this.shape_28.setTransform(1406.3,342);

	this.shape_29 = new cjs.Shape();
	this.shape_29.graphics.f("rgba(50,125,167,0.588)").s().p("AxjGuIAAtbMAjGAAAIAANbg");
	this.shape_29.setTransform(1402.5,342);

	this.shape_30 = new cjs.Shape();
	this.shape_30.graphics.f("rgba(50,125,167,0.588)").s().p("AyIGuIAAtbMAkRAAAIAANbg");
	this.shape_30.setTransform(1398.8,342);

	this.shape_31 = new cjs.Shape();
	this.shape_31.graphics.f("rgba(50,125,167,0.588)").s().p("AytGuIAAtbMAlbAAAIAANbg");
	this.shape_31.setTransform(1395,342);

	this.shape_32 = new cjs.Shape();
	this.shape_32.graphics.f("rgba(50,125,167,0.588)").s().p("AzTGuIAAtbMAmnAAAIAANbg");
	this.shape_32.setTransform(1391.3,342);

	this.shape_33 = new cjs.Shape();
	this.shape_33.graphics.f("rgba(50,125,167,0.588)").s().p("Az5GuIAAtbMAnzAAAIAANbg");
	this.shape_33.setTransform(1387.5,342);

	this.shape_34 = new cjs.Shape();
	this.shape_34.graphics.f("rgba(50,125,167,0.588)").s().p("A0eGuIAAtbMAo9AAAIAANbg");
	this.shape_34.setTransform(1383.7,342);

	this.shape_35 = new cjs.Shape();
	this.shape_35.graphics.f("rgba(50,125,167,0.588)").s().p("A1EGuIAAtbMAqJAAAIAANbg");
	this.shape_35.setTransform(1380,342);

	this.shape_36 = new cjs.Shape();
	this.shape_36.graphics.f("rgba(50,125,167,0.588)").s().p("A1pGuIAAtbMArTAAAIAANbg");
	this.shape_36.setTransform(1376.2,342);

	this.shape_37 = new cjs.Shape();
	this.shape_37.graphics.f("rgba(50,125,167,0.588)").s().p("A2PGuIAAtbMAsfAAAIAANbg");
	this.shape_37.setTransform(1372.5,342);

	this.shape_38 = new cjs.Shape();
	this.shape_38.graphics.f("rgba(50,125,167,0.588)").s().p("A21GuIAAtbMAtqAAAIAANbg");
	this.shape_38.setTransform(1368.7,342);

	this.shape_39 = new cjs.Shape();
	this.shape_39.graphics.f("rgba(50,125,167,0.588)").s().p("A3aGuIAAtbMAu1AAAIAANbg");
	this.shape_39.setTransform(1365,342);

	this.shape_40 = new cjs.Shape();
	this.shape_40.graphics.f("rgba(50,125,167,0.588)").s().p("A3/GuIAAtbMAv/AAAIAANbg");
	this.shape_40.setTransform(1361.2,342);

	this.shape_41 = new cjs.Shape();
	this.shape_41.graphics.f("rgba(50,125,167,0.588)").s().p("A4lGuIAAtbMAxLAAAIAANbg");
	this.shape_41.setTransform(1357.5,342);

	this.shape_42 = new cjs.Shape();
	this.shape_42.graphics.f("rgba(50,125,167,0.588)").s().p("A5LGuIAAtbMAyWAAAIAANbg");
	this.shape_42.setTransform(1353.7,342);

	this.shape_43 = new cjs.Shape();
	this.shape_43.graphics.f("rgba(50,125,167,0.588)").s().p("A5wGuIAAtbMAzhAAAIAANbg");
	this.shape_43.setTransform(1349.9,342);

	this.shape_44 = new cjs.Shape();
	this.shape_44.graphics.f("rgba(50,125,167,0.588)").s().p("A6WGuIAAtbMA0tAAAIAANbg");
	this.shape_44.setTransform(1346.2,342);

	this.shape_45 = new cjs.Shape();
	this.shape_45.graphics.f("rgba(50,125,167,0.588)").s().p("A67GuIAAtbMA13AAAIAANbg");
	this.shape_45.setTransform(1342.4,342);

	this.shape_46 = new cjs.Shape();
	this.shape_46.graphics.f("rgba(50,125,167,0.588)").s().p("A6PGuIAAtbMA0fAAAIAANbg");
	this.shape_46.setTransform(1346.9,342);

	this.shape_47 = new cjs.Shape();
	this.shape_47.graphics.f("rgba(50,125,167,0.588)").s().p("A5iGuIAAtbMAzFAAAIAANbg");
	this.shape_47.setTransform(1351.3,342);

	this.shape_48 = new cjs.Shape();
	this.shape_48.graphics.f("rgba(50,125,167,0.588)").s().p("A42GuIAAtbMAxtAAAIAANbg");
	this.shape_48.setTransform(1355.8,342);

	this.shape_49 = new cjs.Shape();
	this.shape_49.graphics.f("rgba(50,125,167,0.588)").s().p("A4JGuIAAtbMAwTAAAIAANbg");
	this.shape_49.setTransform(1360.2,342);

	this.shape_50 = new cjs.Shape();
	this.shape_50.graphics.f("rgba(50,125,167,0.588)").s().p("A3dGuIAAtbMAu7AAAIAANbg");
	this.shape_50.setTransform(1364.7,342);

	this.shape_51 = new cjs.Shape();
	this.shape_51.graphics.f("rgba(50,125,167,0.588)").s().p("A2xGuIAAtbMAtiAAAIAANbg");
	this.shape_51.setTransform(1369.1,342);

	this.shape_52 = new cjs.Shape();
	this.shape_52.graphics.f("rgba(50,125,167,0.588)").s().p("A2EGuIAAtbMAsJAAAIAANbg");
	this.shape_52.setTransform(1373.6,342);

	this.shape_53 = new cjs.Shape();
	this.shape_53.graphics.f("rgba(50,125,167,0.588)").s().p("A1YGuIAAtbMAqwAAAIAANbg");
	this.shape_53.setTransform(1378,342);

	this.shape_54 = new cjs.Shape();
	this.shape_54.graphics.f("rgba(50,125,167,0.588)").s().p("A0rGuIAAtbMApXAAAIAANbg");
	this.shape_54.setTransform(1382.5,342);

	this.shape_55 = new cjs.Shape();
	this.shape_55.graphics.f("rgba(50,125,167,0.588)").s().p("Az+GuIAAtbMAn9AAAIAANbg");
	this.shape_55.setTransform(1386.9,342);

	this.shape_56 = new cjs.Shape();
	this.shape_56.graphics.f("rgba(50,125,167,0.588)").s().p("AzSGuIAAtbMAmlAAAIAANbg");
	this.shape_56.setTransform(1391.4,342);

	this.shape_57 = new cjs.Shape();
	this.shape_57.graphics.f("rgba(50,125,167,0.588)").s().p("AymGuIAAtbMAlNAAAIAANbg");
	this.shape_57.setTransform(1395.8,342);

	this.shape_58 = new cjs.Shape();
	this.shape_58.graphics.f("rgba(50,125,167,0.588)").s().p("Ax5GuIAAtbMAjzAAAIAANbg");
	this.shape_58.setTransform(1400.2,342);

	this.shape_59 = new cjs.Shape();
	this.shape_59.graphics.f("rgba(50,125,167,0.588)").s().p("AxNGuIAAtbMAibAAAIAANbg");
	this.shape_59.setTransform(1404.7,342);

	this.shape_60 = new cjs.Shape();
	this.shape_60.graphics.f("rgba(50,125,167,0.588)").s().p("AwgGuIAAtbMAhBAAAIAANbg");
	this.shape_60.setTransform(1409.1,342);

	this.shape_61 = new cjs.Shape();
	this.shape_61.graphics.f("rgba(50,125,167,0.588)").s().p("Av0GuIAAtbIfpAAIAANbg");
	this.shape_61.setTransform(1413.6,342);

	this.shape_62 = new cjs.Shape();
	this.shape_62.graphics.f("rgba(50,125,167,0.588)").s().p("AvHGuIAAtbIePAAIAANbg");
	this.shape_62.setTransform(1418,342);

	this.shape_63 = new cjs.Shape();
	this.shape_63.graphics.f("rgba(50,125,167,0.588)").s().p("AubGuIAAtbIc3AAIAANbg");
	this.shape_63.setTransform(1422.5,342);

	this.shape_64 = new cjs.Shape();
	this.shape_64.graphics.f("rgba(50,125,167,0.588)").s().p("AtuGuIAAtbIbdAAIAANbg");
	this.shape_64.setTransform(1426.9,342);

	this.shape_65 = new cjs.Shape();
	this.shape_65.graphics.f("rgba(50,125,167,0.588)").s().p("AtCGuIAAtbIaFAAIAANbg");
	this.shape_65.setTransform(1431.4,342);

	this.shape_66 = new cjs.Shape();
	this.shape_66.graphics.f("rgba(50,125,167,0.588)").s().p("AsWGuIAAtbIYsAAIAANbg");
	this.shape_66.setTransform(1435.8,342);

	this.shape_67 = new cjs.Shape();
	this.shape_67.graphics.f("rgba(50,125,167,0.588)").s().p("ArpGuIAAtbIXTAAIAANbg");
	this.shape_67.setTransform(1440.3,342);

	this.shape_68 = new cjs.Shape();
	this.shape_68.graphics.f("rgba(50,125,167,0.588)").s().p("Aq9GuIAAtbIV6AAIAANbg");
	this.shape_68.setTransform(1444.7,342);

	this.shape_69 = new cjs.Shape();
	this.shape_69.graphics.f("rgba(50,125,167,0.588)").s().p("AqQGuIAAtbIUhAAIAANbg");
	this.shape_69.setTransform(1449.2,342);

	this.shape_70 = new cjs.Shape();
	this.shape_70.graphics.f("rgba(50,125,167,0.588)").s().p("ApkGuIAAtbITIAAIAANbg");
	this.shape_70.setTransform(1453.6,342);

	this.shape_71 = new cjs.Shape();
	this.shape_71.graphics.f("rgba(50,125,167,0.588)").s().p("Ao3GuIAAtbIRvAAIAANbg");
	this.shape_71.setTransform(1458.1,342);

	this.shape_72 = new cjs.Shape();
	this.shape_72.graphics.f("rgba(50,125,167,0.588)").s().p("AoLGuIAAtbIQXAAIAANbg");
	this.shape_72.setTransform(1462.5,342);

	this.shape_73 = new cjs.Shape();
	this.shape_73.graphics.f("rgba(50,125,167,0.588)").s().p("AneGuIAAtbIO9AAIAANbg");
	this.shape_73.setTransform(1466.9,342);

	this.shape_74 = new cjs.Shape();
	this.shape_74.graphics.f("rgba(50,125,167,0.588)").s().p("AmyGuIAAtbINlAAIAANbg");
	this.shape_74.setTransform(1471.4,342);

	this.shape_75 = new cjs.Shape();
	this.shape_75.graphics.f("rgba(50,125,167,0.588)").s().p("AmFGuIAAtbIMLAAIAANbg");
	this.shape_75.setTransform(1475.8,342);

	this.shape_76 = new cjs.Shape();
	this.shape_76.graphics.f("rgba(50,125,167,0.588)").s().p("AlZGuIAAtbIKzAAIAANbg");
	this.shape_76.setTransform(1480.3,342);

	this.shape_77 = new cjs.Shape();
	this.shape_77.graphics.f("rgba(50,125,167,0.588)").s().p("AksGuIAAtbIJZAAIAANbg");
	this.shape_77.setTransform(1484.7,342);

	this.shape_78 = new cjs.Shape();
	this.shape_78.graphics.f("rgba(50,125,167,0.588)").s().p("AkAGuIAAtbIIBAAIAANbg");
	this.shape_78.setTransform(1489.2,342);

	this.shape_79 = new cjs.Shape();
	this.shape_79.graphics.f("rgba(50,125,167,0.588)").s().p("AjTGuIAAtbIGnAAIAANbg");
	this.shape_79.setTransform(1493.6,342);

	this.shape_80 = new cjs.Shape();
	this.shape_80.graphics.f("rgba(50,125,167,0.588)").s().p("AinGuIAAtbIFPAAIAANbg");
	this.shape_80.setTransform(1498.1,342);

	this.shape_81 = new cjs.Shape();
	this.shape_81.graphics.f("rgba(50,125,167,0.588)").s().p("Ah6GuIAAtbID1AAIAANbg");
	this.shape_81.setTransform(1502.5,342);

	this.shape_82 = new cjs.Shape();
	this.shape_82.graphics.f("rgba(50,125,167,0.588)").s().p("AhOGuIAAtbICdAAIAANbg");
	this.shape_82.setTransform(1507,342);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.shape}]},50).to({state:[{t:this.shape_1}]},1).to({state:[{t:this.shape_2}]},1).to({state:[{t:this.shape_3}]},1).to({state:[{t:this.shape_4}]},1).to({state:[{t:this.shape_5}]},1).to({state:[{t:this.shape_6}]},1).to({state:[{t:this.shape_7}]},1).to({state:[{t:this.shape_8}]},1).to({state:[{t:this.shape_9}]},1).to({state:[{t:this.shape_10}]},1).to({state:[{t:this.shape_11}]},1).to({state:[{t:this.shape_12}]},1).to({state:[{t:this.shape_13}]},1).to({state:[{t:this.shape_14}]},1).to({state:[{t:this.shape_15}]},1).to({state:[{t:this.shape_16}]},1).to({state:[{t:this.shape_17}]},1).to({state:[{t:this.shape_18}]},1).to({state:[{t:this.shape_19}]},1).to({state:[{t:this.shape_20}]},1).to({state:[{t:this.shape_21}]},1).to({state:[{t:this.shape_22}]},1).to({state:[{t:this.shape_23}]},1).to({state:[{t:this.shape_24}]},1).to({state:[{t:this.shape_25}]},1).to({state:[{t:this.shape_26}]},1).to({state:[{t:this.shape_27}]},1).to({state:[{t:this.shape_28}]},1).to({state:[{t:this.shape_29}]},1).to({state:[{t:this.shape_30}]},1).to({state:[{t:this.shape_31}]},1).to({state:[{t:this.shape_32}]},1).to({state:[{t:this.shape_33}]},1).to({state:[{t:this.shape_34}]},1).to({state:[{t:this.shape_35}]},1).to({state:[{t:this.shape_36}]},1).to({state:[{t:this.shape_37}]},1).to({state:[{t:this.shape_38}]},1).to({state:[{t:this.shape_39}]},1).to({state:[{t:this.shape_40}]},1).to({state:[{t:this.shape_41}]},1).to({state:[{t:this.shape_42}]},1).to({state:[{t:this.shape_43}]},1).to({state:[{t:this.shape_44}]},1).to({state:[{t:this.shape_45}]},1).to({state:[{t:this.shape_46}]},1).to({state:[{t:this.shape_47}]},1).to({state:[{t:this.shape_48}]},1).to({state:[{t:this.shape_49}]},1).to({state:[{t:this.shape_50}]},1).to({state:[{t:this.shape_51}]},1).to({state:[{t:this.shape_52}]},1).to({state:[{t:this.shape_53}]},1).to({state:[{t:this.shape_54}]},1).to({state:[{t:this.shape_55}]},1).to({state:[{t:this.shape_56}]},1).to({state:[{t:this.shape_57}]},1).to({state:[{t:this.shape_58}]},1).to({state:[{t:this.shape_59}]},1).to({state:[{t:this.shape_60}]},1).to({state:[{t:this.shape_61}]},1).to({state:[{t:this.shape_62}]},1).to({state:[{t:this.shape_63}]},1).to({state:[{t:this.shape_64}]},1).to({state:[{t:this.shape_65}]},1).to({state:[{t:this.shape_66}]},1).to({state:[{t:this.shape_67}]},1).to({state:[{t:this.shape_68}]},1).to({state:[{t:this.shape_69}]},1).to({state:[{t:this.shape_70}]},1).to({state:[{t:this.shape_71}]},1).to({state:[{t:this.shape_72}]},1).to({state:[{t:this.shape_73}]},1).to({state:[{t:this.shape_74}]},1).to({state:[{t:this.shape_75}]},1).to({state:[{t:this.shape_76}]},1).to({state:[{t:this.shape_77}]},1).to({state:[{t:this.shape_78}]},1).to({state:[{t:this.shape_79}]},1).to({state:[{t:this.shape_80}]},1).to({state:[{t:this.shape_81}]},1).to({state:[{t:this.shape_82}]},1).to({state:[{t:this.shape}]},1).wait(58));

	// Layer 1
	this.instance_1 = new lib.ahava_future_web2();

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(191));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(754.8,367.9,2125.3,1252.2);

})(lib = lib||{}, images = images||{}, createjs = createjs||{}, ss = ss||{});
var lib, images, createjs, ss;