(function (lib, img, cjs, ss) {

var p; // shortcut to reference prototypes
lib.webFontTxtFilters = {}; 

// library properties:
lib.properties = {
	width: 1200,
	height: 580,
	fps: 35,
	color: "#FFFFFF",
	webfonts: {},
	manifest: []
};



lib.webfontAvailable = function(family) { 
	lib.properties.webfonts[family] = true;
	var txtFilters = lib.webFontTxtFilters && lib.webFontTxtFilters[family] || [];
	for(var f = 0; f < txtFilters.length; ++f) {
		txtFilters[f].updateCache();
	}
};
// symbols:



(lib.Bitmap21 = function() {
	this.spriteSheet = ss["header_atlas_"];
	this.gotoAndStop(0);
}).prototype = p = new cjs.Sprite();



(lib.chatwinpng = function() {
	this.spriteSheet = ss["header_atlas_"];
	this.gotoAndStop(1);
}).prototype = p = new cjs.Sprite();



(lib.laptop1 = function() {
	this.spriteSheet = ss["header_atlas_"];
	this.gotoAndStop(2);
}).prototype = p = new cjs.Sprite();



(lib.laptop2 = function() {
	this.spriteSheet = ss["header_atlas_"];
	this.gotoAndStop(3);
}).prototype = p = new cjs.Sprite();



(lib.Path = function() {
	this.spriteSheet = ss["header_atlas_"];
	this.gotoAndStop(4);
}).prototype = p = new cjs.Sprite();



(lib.Path_2 = function() {
	this.spriteSheet = ss["header_atlas_"];
	this.gotoAndStop(5);
}).prototype = p = new cjs.Sprite();



(lib.Path_3 = function() {
	this.spriteSheet = ss["header_atlas_"];
	this.gotoAndStop(6);
}).prototype = p = new cjs.Sprite();



(lib.Symbol7 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#333333").s().p("AgLAMQgFgGAAgGQAAgFAFgGQAGgFAFAAQAGAAAGAFQAFAGAAAFQAAAGgFAGQgGAFgGAAQgFAAgGgFg");
	this.shape.setTransform(1.8,1.8);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,3.5,3.5);


(lib.Symbol5 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.text = new cjs.Text("რით შემიძლია დაგეხმაროთ ?", "12px 'TBC Din Nusxuri'", "#333333");
	this.text.lineHeight = 17;
	this.text.lineWidth = 207;

	this.timeline.addTween(cjs.Tween.get(this.text).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,211.1,23.1);


(lib.Symbol3 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.laptop2();

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,415,276);


(lib.Symbol2 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.laptop1();

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,340,275);


(lib.Symbol1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.text = new cjs.Text("გამარჯობა, შეკითხვა მაქვს", "12px 'TBC Din Nusxuri'", "#333333");
	this.text.lineHeight = 17;
	this.text.lineWidth = 207;

	this.timeline.addTween(cjs.Tween.get(this.text).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,211.1,23.1);


(lib.lastCOPY = function(mode,startPosition,loop) {
if (loop == null) { loop = false; }	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#F89F18").s().p("AgUAcQgJgMAAgQQAAgPAJgMQAJgLALAAQAMAAAJALQAIAMABAPQgBAQgIAMQgJAMgMAAQgLAAgJgMg");
	this.shape.setTransform(70.3,16.8,0.613,0.613);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#F89F18").s().p("AgUAcQgJgMABgQQgBgPAJgMQAJgLALAAQAMAAAIALQAKAMgBAPQABAQgKAMQgIAMgMAAQgLAAgJgMg");
	this.shape_1.setTransform(61.7,16.8,0.613,0.613);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f().s("#F89F18").ss(2,1).p("AhjgTIAQANQAUANAXAHQBGAXBGg4");
	this.shape_2.setTransform(66,26.7,0.613,0.613);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f().s("#F89F18").ss(2).p("AAAjlQBfAABDBEQBEBDAABeQAABfhEBDQhDBEhfAAQheAAhEhEQhDhDAAhfQAAheBDhDQBEhEBeAAg");
	this.shape_3.setTransform(66,19.9,0.613,0.613);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(50.9,4.8,30.2,30.2);


(lib.chatline2 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#1EAEDB").s().p("AgUAcQgJgMAAgQQAAgPAJgMQAJgLALAAQAMAAAJALQAIAMABAPQgBAQgIAMQgJAMgMAAQgLAAgJgMg");
	this.shape.setTransform(19.2,17.1,0.613,0.613);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#1EAEDB").s().p("AgUAcQgJgMABgQQgBgPAJgMQAJgLALAAQAMAAAIALQAKAMgBAPQABAQgKAMQgIAMgMAAQgLAAgJgMg");
	this.shape_1.setTransform(10.6,17.1,0.613,0.613);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f().s("#1EAEDB").ss(2,1).p("AhjgTIAQANQAUANAXAHQBGAXBGg4");
	this.shape_2.setTransform(14.9,27,0.613,0.613);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f().s("#1EAEDB").ss(2).p("AAAjlQBfAABDBEQBEBDAABeQAABfhEBDQhDBEhfAAQheAAhEhEQhDhDAAhfQAAheBDhDQBEhEBeAAg");
	this.shape_3.setTransform(14.9,20.2,0.613,0.613);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-0.2,5.1,30.2,30.2);


(lib.chatline1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 1481058553_misc-_speechless.svg
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#F89F18").ss(2,1,1).p("AhKAAICVAA");
	this.shape.setTransform(244.7,26.3,0.617,0.617);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#F89F18").s().p("AgUAcQgJgMAAgQQAAgPAJgMQAJgLALAAQAMAAAJALQAIAMABAPQgBAQgIAMQgJAMgMAAQgLAAgJgMg");
	this.shape_1.setTransform(248.8,17.1,0.613,0.613);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#F89F18").s().p("AgUAcQgJgMABgQQgBgPAJgMQAJgLALAAQAMAAAIALQAKAMgBAPQABAQgKAMQgIAMgMAAQgLAAgJgMg");
	this.shape_2.setTransform(240.2,17.1,0.613,0.613);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f().s("#F89F18").ss(2).p("AAAjlQBfAABDBEQBEBDAABeQAABfhEBDQhDBEhfAAQheAAhEhEQhDhDAAhfQAAheBDhDQBEhEBeAAg");
	this.shape_3.setTransform(244.5,20.2,0.613,0.613);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(229.4,5.1,30.2,30.2);


(lib.Path_3_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 2 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("AwQDHQgUAAgPgOQgPgPAAgUIAAkqQAAgWAPgOQAPgPAUAAIfsAAQAVAAAPAPQAOAOAAAWIAABYIA9A8Ig9A9IAABZQAAAUgOAPQgPAOgVAAg");
	mask.setTransform(110,20);

	// Layer 1
	this.instance = new lib.Path_3();
	this.instance.setTransform(-46,-144);

	this.instance.mask = mask;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0.9,0,219.1,40);


(lib.Path_2_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 2 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("AvTDIQgVAAgPgPQgOgOAAgWIAAhYIg9g9IA9g7IAAhaQAAgUAOgPQAPgPAVAAIfsAAQAVAAAPAPQAOAPAAAUIAAEqQAAAWgOAOQgPAPgVAAg");
	mask.setTransform(110,20);

	// Layer 1
	this.instance = new lib.Path_2();
	this.instance.setTransform(-88,-84);

	this.instance.mask = mask;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0.9,0,219.2,40);


(lib.Path_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 2 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("AhPDIQgUAAgPgPQgPgOAAgWIAAhYIg9g9IA9g7IAAhaQAAgUAPgPQAPgPAUAAIDkAAQAVAAAPAPQAOAPAAAUIAAEqQAAAWgOAOQgPAPgVAAg");
	mask.setTransform(20,20);

	// Layer 1
	this.instance = new lib.Path();
	this.instance.setTransform(-88,-204);

	this.instance.mask = mask;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0.9,0,39.1,40);


(lib.chatbox = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.chatwinpng();
	this.instance.setTransform(-30.9,-51);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-30.9,-51,352,402);


(lib.chatline3 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 4
	this.instance = new lib.Symbol7();
	this.instance.setTransform(25,32.4,1,1,0,0,0,1.8,1.8);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(14).to({y:29.4},7,cjs.Ease.get(1)).to({y:32.4},5,cjs.Ease.get(1)).wait(1));

	// Layer 3
	this.instance_1 = new lib.Symbol7();
	this.instance_1.setTransform(16,32.4,1,1,0,0,0,1.8,1.8);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(6).to({y:29.4},6,cjs.Ease.get(1)).to({y:32.4},7,cjs.Ease.get(1)).wait(8));

	// Layer 2
	this.instance_2 = new lib.Symbol7();
	this.instance_2.setTransform(7,32.4,1,1,0,0,0,1.8,1.8);

	this.timeline.addTween(cjs.Tween.get(this.instance_2).to({y:29.4},8,cjs.Ease.get(1)).to({y:32.4},6,cjs.Ease.get(1)).wait(13));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(5.2,30.6,21.5,3.5);


// stage content:



(lib.header = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_135 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).wait(135).call(this.frame_135).wait(1));

	// Layer 10
	this.instance = new lib.chatline3();
	this.instance.setTransform(689.5,245.8,1,1,0,0,0,43.1,19.9);
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(135).to({_off:false},0).wait(1));

	// Layer 3
	this.instance_1 = new lib.Path_1();
	this.instance_1.setTransform(685.8,244.8,0.129,0.129,180,0,0,0.8,20.2);
	this.instance_1._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(123).to({_off:false},0).to({regY:19.9,scaleX:1,scaleY:1,y:244.9},12).wait(1));

	// Layer 6
	this.instance_2 = new lib.chatline3();
	this.instance_2.setTransform(990.9,394.1,0.083,0.083,-15,0,0,41,20.4);
	this.instance_2._off = true;

	this.instance_3 = new lib.lastCOPY();
	this.instance_3.setTransform(687.3,244.8,1,1,0,0,0,40.6,20);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.instance_2}]},109).to({state:[{t:this.instance_3}]},14).wait(13));
	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(109).to({_off:false},0).to({_off:true,regX:40.6,regY:20,scaleX:1,scaleY:1,rotation:0,x:687.3,y:244.8},14).wait(13));

	// Layer 11 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	var mask_graphics_89 = new cjs.Graphics().p("AGIPeIAAl1MAiyAAAIAAF1g");
	var mask_graphics_90 = new cjs.Graphics().p("AHAPeIAAl1MAiyAAAIAAF1g");
	var mask_graphics_91 = new cjs.Graphics().p("AH4PeIAAl1MAiyAAAIAAF1g");
	var mask_graphics_92 = new cjs.Graphics().p("AIwPeIAAl1MAiyAAAIAAF1g");
	var mask_graphics_93 = new cjs.Graphics().p("AJpPeIAAl1MAiyAAAIAAF1g");
	var mask_graphics_94 = new cjs.Graphics().p("AKhPeIAAl1MAiyAAAIAAF1g");
	var mask_graphics_95 = new cjs.Graphics().p("ALZPeIAAl1MAiyAAAIAAF1g");
	var mask_graphics_96 = new cjs.Graphics().p("AMRPeIAAl1MAiyAAAIAAF1g");
	var mask_graphics_97 = new cjs.Graphics().p("ANKPeIAAl1MAiyAAAIAAF1g");
	var mask_graphics_98 = new cjs.Graphics().p("AOCPeIAAl1MAiyAAAIAAF1g");
	var mask_graphics_99 = new cjs.Graphics().p("AO6PeIAAl1MAiyAAAIAAF1g");
	var mask_graphics_100 = new cjs.Graphics().p("APyPeIAAl1MAiyAAAIAAF1g");
	var mask_graphics_101 = new cjs.Graphics().p("AQrPeIAAl1MAiyAAAIAAF1g");
	var mask_graphics_102 = new cjs.Graphics().p("ARjPeIAAl1MAiyAAAIAAF1g");
	var mask_graphics_103 = new cjs.Graphics().p("ASbPeIAAl1MAiyAAAIAAF1g");
	var mask_graphics_104 = new cjs.Graphics().p("ATTPeIAAl1MAiyAAAIAAF1g");
	var mask_graphics_105 = new cjs.Graphics().p("AUMPeIAAl1MAiyAAAIAAF1g");
	var mask_graphics_106 = new cjs.Graphics().p("AVEPeIAAl1MAiyAAAIAAF1g");
	var mask_graphics_107 = new cjs.Graphics().p("AV8PeIAAl1MAiyAAAIAAF1g");
	var mask_graphics_108 = new cjs.Graphics().p("AW0PeIAAl1MAiyAAAIAAF1g");
	var mask_graphics_109 = new cjs.Graphics().p("AXtPeIAAl1MAiyAAAIAAF1g");

	this.timeline.addTween(cjs.Tween.get(mask).to({graphics:null,x:0,y:0}).wait(89).to({graphics:mask_graphics_89,x:261.8,y:99.1}).wait(1).to({graphics:mask_graphics_90,x:267.5,y:99.1}).wait(1).to({graphics:mask_graphics_91,x:273.1,y:99.1}).wait(1).to({graphics:mask_graphics_92,x:278.7,y:99.1}).wait(1).to({graphics:mask_graphics_93,x:284.3,y:99.1}).wait(1).to({graphics:mask_graphics_94,x:290,y:99.1}).wait(1).to({graphics:mask_graphics_95,x:295.6,y:99.1}).wait(1).to({graphics:mask_graphics_96,x:301.2,y:99.1}).wait(1).to({graphics:mask_graphics_97,x:306.8,y:99.1}).wait(1).to({graphics:mask_graphics_98,x:312.5,y:99.1}).wait(1).to({graphics:mask_graphics_99,x:318.1,y:99.1}).wait(1).to({graphics:mask_graphics_100,x:323.7,y:99.1}).wait(1).to({graphics:mask_graphics_101,x:329.3,y:99.1}).wait(1).to({graphics:mask_graphics_102,x:335,y:99.1}).wait(1).to({graphics:mask_graphics_103,x:340.6,y:99.1}).wait(1).to({graphics:mask_graphics_104,x:346.2,y:99.1}).wait(1).to({graphics:mask_graphics_105,x:351.8,y:99.1}).wait(1).to({graphics:mask_graphics_106,x:357.5,y:99.1}).wait(1).to({graphics:mask_graphics_107,x:363.1,y:99.1}).wait(1).to({graphics:mask_graphics_108,x:368.7,y:99.1}).wait(1).to({graphics:mask_graphics_109,x:374.3,y:99.1}).wait(27));

	// Layer 9
	this.instance_4 = new lib.Symbol5();
	this.instance_4.setTransform(630.5,181.9,1,1,0,0,0,105.6,11.5);
	this.instance_4._off = true;

	this.instance_4.mask = mask;

	this.timeline.addTween(cjs.Tween.get(this.instance_4).wait(89).to({_off:false},0).wait(47));

	// Layer 2
	this.instance_5 = new lib.Path_2_1();
	this.instance_5.setTransform(508.7,179.4,0.085,0.085,0,0,0,0.6,20.1);
	this.instance_5._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_5).wait(81).to({_off:false},0).to({regX:0.8,regY:19.9,scaleX:1,scaleY:1,x:508.6},8).wait(47));

	// Layer 5
	this.instance_6 = new lib.chatline2();
	this.instance_6.setTransform(207.4,385,0.05,0.05,15,0,0,129.9,21.1);
	this.instance_6._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_6).wait(69).to({_off:false},0).to({regY:20,scaleX:1,scaleY:1,rotation:0,x:597.8,y:179.4},12,cjs.Ease.get(1)).wait(55));

	// Layer 8 (mask)
	var mask_1 = new cjs.Shape();
	mask_1._off = true;
	var mask_1_graphics_48 = new cjs.Graphics().p("AFJKwIAAmKMAgBAAAIAAGKg");
	var mask_1_graphics_49 = new cjs.Graphics().p("AF8KwIAAmKMAgBAAAIAAGKg");
	var mask_1_graphics_50 = new cjs.Graphics().p("AGwKwIAAmKMAgAAAAIAAGKg");
	var mask_1_graphics_51 = new cjs.Graphics().p("AHjKwIAAmKMAgBAAAIAAGKg");
	var mask_1_graphics_52 = new cjs.Graphics().p("AIWKwIAAmKMAgBAAAIAAGKg");
	var mask_1_graphics_53 = new cjs.Graphics().p("AJJKwIAAmKMAgBAAAIAAGKg");
	var mask_1_graphics_54 = new cjs.Graphics().p("AJ8KwIAAmKMAgCAAAIAAGKg");
	var mask_1_graphics_55 = new cjs.Graphics().p("AKwKwIAAmKMAgBAAAIAAGKg");
	var mask_1_graphics_56 = new cjs.Graphics().p("ALjKwIAAmKMAgBAAAIAAGKg");
	var mask_1_graphics_57 = new cjs.Graphics().p("AMWKwIAAmKMAgBAAAIAAGKg");
	var mask_1_graphics_58 = new cjs.Graphics().p("ANKKwIAAmKMAgAAAAIAAGKg");
	var mask_1_graphics_59 = new cjs.Graphics().p("AN9KwIAAmKMAgBAAAIAAGKg");
	var mask_1_graphics_60 = new cjs.Graphics().p("AOwKwIAAmKMAgBAAAIAAGKg");
	var mask_1_graphics_61 = new cjs.Graphics().p("APjKwIAAmKMAgBAAAIAAGKg");
	var mask_1_graphics_62 = new cjs.Graphics().p("AQWKwIAAmKMAgCAAAIAAGKg");
	var mask_1_graphics_63 = new cjs.Graphics().p("ARKKwIAAmKMAgBAAAIAAGKg");
	var mask_1_graphics_64 = new cjs.Graphics().p("AR9KwIAAmKMAgBAAAIAAGKg");
	var mask_1_graphics_65 = new cjs.Graphics().p("ASwKwIAAmKMAgBAAAIAAGKg");
	var mask_1_graphics_66 = new cjs.Graphics().p("ATkKwIAAmKMAgBAAAIAAGKg");
	var mask_1_graphics_67 = new cjs.Graphics().p("AUXKwIAAmKMAgBAAAIAAGKg");
	var mask_1_graphics_68 = new cjs.Graphics().p("AVKKwIAAmKMAgBAAAIAAGKg");

	this.timeline.addTween(cjs.Tween.get(mask_1).to({graphics:null,x:0,y:0}).wait(48).to({graphics:mask_1_graphics_48,x:237.9,y:68.9}).wait(1).to({graphics:mask_1_graphics_49,x:243,y:68.9}).wait(1).to({graphics:mask_1_graphics_50,x:248.1,y:68.9}).wait(1).to({graphics:mask_1_graphics_51,x:253.2,y:68.9}).wait(1).to({graphics:mask_1_graphics_52,x:258.4,y:68.9}).wait(1).to({graphics:mask_1_graphics_53,x:263.5,y:68.9}).wait(1).to({graphics:mask_1_graphics_54,x:268.6,y:68.9}).wait(1).to({graphics:mask_1_graphics_55,x:273.7,y:68.9}).wait(1).to({graphics:mask_1_graphics_56,x:278.9,y:68.9}).wait(1).to({graphics:mask_1_graphics_57,x:284,y:68.9}).wait(1).to({graphics:mask_1_graphics_58,x:289.1,y:68.9}).wait(1).to({graphics:mask_1_graphics_59,x:294.2,y:68.9}).wait(1).to({graphics:mask_1_graphics_60,x:299.4,y:68.9}).wait(1).to({graphics:mask_1_graphics_61,x:304.5,y:68.9}).wait(1).to({graphics:mask_1_graphics_62,x:309.6,y:68.9}).wait(1).to({graphics:mask_1_graphics_63,x:314.7,y:68.9}).wait(1).to({graphics:mask_1_graphics_64,x:319.9,y:68.9}).wait(1).to({graphics:mask_1_graphics_65,x:325,y:68.9}).wait(1).to({graphics:mask_1_graphics_66,x:330.1,y:68.9}).wait(1).to({graphics:mask_1_graphics_67,x:335.2,y:68.9}).wait(1).to({graphics:mask_1_graphics_68,x:340.4,y:68.9}).wait(68));

	// Layer 7
	this.instance_7 = new lib.Symbol1();
	this.instance_7.setTransform(581.6,118.2,1,1,0,0,0,105.6,11.5);

	this.instance_8 = new lib.Bitmap21();
	this.instance_8.setTransform(519.5,212.6);

	this.instance_7.mask = this.instance_8.mask = mask_1;

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.instance_8},{t:this.instance_7}]},48).wait(88));

	// Layer 1
	this.instance_9 = new lib.Path_3_1();
	this.instance_9.setTransform(687.1,115.6,0.088,0.088,0,0,0,219.8,19.9);
	this.instance_9._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_9).wait(40).to({_off:false},0).to({regX:220,regY:20,scaleX:1,scaleY:1,x:687.2,y:115.7},8).wait(88));

	// Layer 4
	this.instance_10 = new lib.chatline1();
	this.instance_10.setTransform(979.3,383.9,0.106,0.106,-15,0,0,130.3,19.8);
	this.instance_10._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_10).wait(30).to({_off:false},0).to({regX:129.9,regY:20,scaleX:1,scaleY:1,rotation:0,x:597.8,y:115.7},10,cjs.Ease.get(1)).wait(96));

	// chat window
	this.instance_11 = new lib.chatbox();
	this.instance_11.setTransform(600.1,-190.6,1,1,0,0,0,145.1,130.1);
	this.instance_11._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_11).wait(9).to({_off:false},0).to({y:257.9},16,cjs.Ease.get(1)).to({y:199.4},5,cjs.Ease.get(1)).wait(106));

	// right laptop
	this.instance_12 = new lib.Symbol3("synched",0);
	this.instance_12.setTransform(1079.9,735.6,1,1,0,0,0,207.5,138);
	this.instance_12._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_12).wait(4).to({_off:false},0).to({x:992.5,y:442},15,cjs.Ease.get(1)).to({y:455.7},3,cjs.Ease.get(0.99)).wait(114));

	// left laptop
	this.instance_13 = new lib.Symbol2("synched",0);
	this.instance_13.setTransform(113.5,718,1,1,0,0,0,170,137.5);

	this.timeline.addTween(cjs.Tween.get(this.instance_13).to({x:170,y:442.5},14,cjs.Ease.get(0.96)).to({y:456.2},3,cjs.Ease.get(0.97)).wait(119));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(543.5,870.5,340,275);

})(lib = lib||{}, images = images||{}, createjs = createjs||{}, ss = ss||{});
var lib, images, createjs, ss;