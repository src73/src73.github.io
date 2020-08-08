//copyright 2011 S3C, LLC. 


//initial conditions
var orient="";
var prevOrient="dne";
var pageInfoLoc="";
var lightboxOn=false;
var bgColor;
var widthOfLightbox=200;
var paddingOfLightbox=10;
var paddingOfLightboxContent=10;
var heightOfDNav = 50;
var offsetOfNavLandscape = 215;

function pseudonym() {
    dNav=document.getElementById("nav");
    pBody=document.getElementById("pageBody");
    settings=document.getElementById("settings");
    jsOutput=document.getElementById("jsOutput");
    body=document.getElementById("body");
    lightboxOutline=document.getElementById("lightboxOutline");
}

function settingsForm() {
    return "<form action='#' name='settings'>\
        <p class='setHead' style='padding-bottom:1px;font-weight:bold;'>Click on Row</p>\
            <div class='setSelect' onclick='document.settings.clickRow[0].checked=true;rowClick=true;'><input  type='radio' name='clickRow' value='true' checked='true' /> Selects Event</div>\
            <div class='setSelect' onclick='document.settings.clickRow[1].checked=true;rowClick=false;'><input type='radio' name='clickRow' value='false' /> Does Nothing</div>\
    </form>";
}

function centerLightbox() {
    lbContent.style.left= ($(window).width() - widthOfLightbox - 2*paddingOfLightboxContent - 2*paddingOfLightbox)/2 + "px";
    if($(window).width()<widthOfLightbox) {
        lbContent.style.left=$(window).width(); 
    }
    
    lb.style.height=$(document).height();
    lb.style.width=$(document).width();
    
    //alert(lbContent.style.left);
}

function resetLayout() {
    pBody.style.position="relative";
    pBody.style.left="auto";
    pBody.style.top="auto";
    
    dNav.style.position="relative";
    dNav.style.left="auto";
    dNav.style.top="auto";
    dNav.style.width="auto";
    dNav.style.height="auto";
    
    body.style.margin="auto";
}

function lbReset() {
    lightboxOutline.style.width="0px";
    lightboxOutline.style.height="0px";
    
    lightboxOutline.innerHTML="";
    lightboxOn=false;
    //lb.style.align="left";
    }

function dispLightbox(content, bgClass) {
    
    var style="class='"+bgClass+"'";
    
    var newDivs="<div id='lightbox' class = 'darkBG' style='opacity:0.6;filter:alpha(opacity=60);' onclick='lbReset();'></div><div id='lbContent' "+ style +" ></div>";//Note: the filter atribute helps old IE. 
    
    lightboxOutline.innerHTML=newDivs;
    
    lb=document.getElementById("lightbox");
    lbContent=document.getElementById("lbContent");
    
    lightboxOutline.style.height="100%";
    
    lb.style.position="absolute";
    lb.style.left="0px";
    lb.style.top=heightOfDNav + "px";
    lb.style.width="100%";
    
    lb.style.height="100%";
    
    lbContent.style.position="absolute";
    lbContent.style.top=heightOfDNav + 30 + "px";
    lbContent.style.width=widthOfLightbox + "px";
    lbContent.innerHTML=content;
    
    lbContent.style.padding=paddingOfLightbox + "px";
    
    centerLightbox();
    lightboxOn=true;
    
}

function blackBG() {
    dNav.style.height=$(document).height()+"px";
    
}

function settingsEtAlLightbox() {
    return settingsForm() + "<hr><h3>Status</h3>" + statePageInfo();
}

function tinySelectMenu() {
    return "<div class='time tNav' onclick='this.innerHTML=timeNav();this.style.height=\"auto\";this.style.paddingBottom=\"20px\"; this.style.paddingTop=\"20px\";'>"+timeTImg()+"</div>\
        <div class='people tNav' onclick='this.innerHTML=peopleNav();this.style.height=\"auto\";this.style.paddingBottom=\"20px\"'>"+peopleTImg()+"</div>\
        <div class='points tNav' onclick='this.innerHTML=pointsNav();this.style.height=\"auto\";this.style.paddingBottom=\"20px\"'>"+pointsTImg()+"</div>\
        <div class='stuff tNav' onclick='this.innerHTML=stuffNav();this.style.height=\"auto\";this.style.paddingBottom=\"20px\"'>"+stuffTImg()+"</div>\
        <div class='other tNav'>" + settingsEtAlLightbox() + "</div>\
        <div class='other tNav' id='pageInfoOut'></div>";
        }

function updatePage() {
    
    resetLayout();
    
    if(orient=="l") {///////////////////////////////////////////////////////////////////////////////////////////////Nav layout for landscape mode
        //if landscape
        dNav.innerHTML="\
        <a href='clipboard.splash.steven.3.1.html'><div class='logo vNav' style='height:111px;>"+logoTImg()+"</div></a>\
        <div class='time vNav' onclick='this.innerHTML=timeNav();this.style.height=\"auto\";this.style.paddingBottom=\"20px\";blackBG();'>"+timeTImg()+"</div>\
        <div class='people vNav' onclick='this.innerHTML=peopleNav();this.style.height=\"auto\";this.style.paddingBottom=\"20px\";blackBG();'>"+peopleTImg()+"</div>\
        <div class='points vNav' onclick='this.innerHTML=pointsNav();this.style.height=\"auto\";this.style.paddingBottom=\"20px\";blackBG();'>"+pointsTImg()+"</div>\
        <div class='stuff vNav' onclick='this.innerHTML=stuffNav();this.style.height=\"auto\";this.style.paddingBottom=\"20px\";blackBG();'>"+stuffTImg()+"</div>\
        <div class='other vNav'>" + settingsForm() + "</div>\
        <div class='other vNav' id='pageInfoOut'></div>";
        
        
        pageInfoLoc=document.getElementById("pageInfoOut");
        
        /*dNav.style.float="left";
        dNav.style.width="19%";
        pBody.style.float="right";
        pBody.style.width="79%";*/
        
        pBody.style.position="absolute";
        pBody.style.left=offsetOfNavLandscape + "px";
        pBody.style.top="0px";
        
        dNav.style.position="absolute";
        dNav.style.left="0px";
        dNav.style.top="0px";
        dNav.style.width=offsetOfNavLandscape - 5 +"px";
        dNav.style.height="100%";
        
        
        body.style.margin="0px";
        
        /*settings.style.float="left";
        jsOutput.style.float="left";*/
    }
    
    else if(orient=="p") {///////////////////////////////////////////////////////////////////////////////////////////////Nav layout for portrait mode
        //if port
        dNav.innerHTML="\
            <a href='#' onclick='dispLightbox(timeNav(), \"time\");' class='noExist'><div class='time hNav'>"+timeTImg("portN")+"</div></a>\
            <a href='#' onclick='dispLightbox(peopleNav(), \"people\");' class='noExist'><div class='people hNav'>"+peopleTImg("portN")+"</div></a>\
            <a href='#' onclick='dispLightbox(pointsNav(), \"points\");' class='noExist'><div class='points hNav'>"+pointsTImg("portN")+"</div></a>\
            <a href='#' onclick='dispLightbox(stuffNav(), \"stuff\");' class='noExist'><div class='stuff hNav'>"+stuffTImg("portN")+"</div></a>\
            <a href='#' onclick='dispLightbox(settingsEtAlLightbox(), \"other\");' class='noExist'><div class='other hNav' id='settings' style='width:8%'>"+optTImg("portN")+"</div></a>";
        body.style.marginTop="0px";
        dNav.style.height=heightOfDNav + "px";

        //document.write("");
    }
    
    else if(orient=="t") {///////////////////////////////////////////////////////////////////////////////////////////////Nav layout for tiny mode
        //if tiny
        dNav.innerHTML="\
            <a href='#' onclick='dispLightbox(tinySelectMenu(), \"bgColor\");' class='noExist'>\
            <div class='time sNav'></div>\
            <div class='people sNav'></div>\
            <div class='points sNav'></div>\
            <div class='stuff sNav'></div>\
            <div class='other sNav' id='settings' style='width:8%'></div></a>";
        body.style.marginTop="0px";
        dNav.style.height=heightOfDNav + "px";
        }
}

function statePageInfo(hrt) {
    
        
    if(orient=="t") {
        hrt="tiny";
    }
    
    else if(orient=="p") {
        hrt="portrait";
    }
        
    var status = "<p class='light'>mode: "+ hrt +"<br />prevMode: " + prevOrient + "<br />width: " + $(window).width() + "<br />height: " + $(window).height();

    if(orient=="l") {
        pageInfoLoc.innerHTML=status;
    }
    
    else {
        return status;
    }
}

function updateOrient() {
    if($(window).width() - offsetOfNavLandscape > $(window).height()) {
        orient="l";
        var hrt="landscape";
    }
    
    else {
        //portrait
        orient="p";
        var hrt = "portrait";
    }
    
    if($(window).width() <500) {
        //tiny
        orient = "t";
        var hrt = "tiny";
    }
    
    if(prevOrient != orient) {
        updatePage();
    }
    
    prevOrient=orient;
    
    statePageInfo(hrt);
    
    if(orient=="l") {
        blackBG();
    }
    
    
}

function makePage() {
    pseudonym();
    updateOrient();
    
    $(window).resize(function() { //on the event of resize
        updateOrient();//do this
        
        if(lightboxOn) {
            centerLightbox();
        }
    });
    
}
/*
function drawLogo() {
    var sf=17; //orig=200; 230
    var gr=1.61; //orig = 1.61
    var gapConstant=.1; //orig = .15; .1
    var fontSize=30;
    
    var writingWidth=30;
    
    var sd = sf;
    var ld = gr*sf;
    var gap= gapConstant*sf;
    
    var sd2 = sd/2;
    var ld2 = ld/2
    
    var logo = document.getElementById("logo");
    var lgo = logo.getContext("2d");
    
            //time 
    lgo.fillStyle="#7597B1";
    lgo.fillRect(writingWidth,0,sd2,ld);
    
    //people
    lgo.fillStyle="#E75D5B";
    lgo.fillRect(writingWidth + gap + sd2, 0, ld,sd2);
    
    //points
    lgo.fillStyle="#702D2C";
    lgo.fillRect(writingWidth,ld  + gap,ld ,sd2);
    
    //stuff
    lgo.fillStyle="#313F4A";
    lgo.fillRect(writingWidth + ld  + gap, gap+sd2,sd2,ld);
    
    lgo.font=fontSize + "px Lucidia";
    lgo.textAlign="center";
    //lgo.textBaseline="alphabetic";
    lgo.fillStyle="#2F342E";
    lgo.fillText("3",writingWidth + (sd2+ld+gap)/2 ,(sd2+ld+gap)/2+fontSize/4+6);
    
    
    lgo.fillText("S",20,(sd2+ld+gap)/2+fontSize/4+6);
    lgo.fillText("C",writingWidth + (sd2+ld+gap) + 70/2,(sd2+ld+gap)/2+fontSize/4+6)
}

*/