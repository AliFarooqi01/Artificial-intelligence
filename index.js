///////////////////////////////slide text effect start//////////////////////////////
////////////////////////////////right slide text effect///////////////////////////////// 
var $tickerWrappers = $(".tickerwrapper");
var $list2 = $tickerWrappers.find("ul.list");
var $clonedList2 = $list2.clone();
var listWidth = 10;

$list2.find("li").each(function (i) {
    listWidth += $(this, i).outerWidth(true);
});

var endPos = $tickerWrappers.width() - listWidth;

$list2.add($clonedList2).css({
    "width": listWidth + "px"
});

$clonedList2.addClass("cloned").appendTo($tickerWrappers);

//TimelineMax
var infinite1 = new TimelineMax({ repeat: -1, paused: true });
var time = 60;

infinite1
    .fromTo($list2, time, { rotation: 0.01, x: 0 }, { force3D: true, x: -listWidth, ease: Linear.easeNone }, 0)
    .fromTo($clonedList2, time, { rotation: 0.01, x: listWidth }, { force3D: true, x: 0, ease: Linear.easeNone }, 0)
    .set($list2, { force3D: true, rotation: 0.01, x: listWidth })
    .to($clonedList2, time, { force3D: true, rotation: 0.01, x: -listWidth, ease: Linear.easeNone }, time)
    .to($list2, time, { force3D: true, rotation: 0.01, x: 0, ease: Linear.easeNone }, time)
    .progress(1).progress(0)
    .play();

//Pause/Play		
$tickerWrappers.on("mouseenter", function () {
    infinite1.pause();
}).on("mouseleave", function () {
    infinite1.play();
});
////////////////////////////////left slide text effect///////////////////////////////// 
var $tickerWrapper1 = $(".tickerwrapper1");
var $list1 = $tickerWrapper1.find("ul.list1");
var $clonedList1 = $list1.clone();
var listWidth = 10;

$list1.find("li").each(function (i) {
    listWidth += $(this, i).outerWidth(true);
});

var endPos1 = $tickerWrapper1.width() + listWidth;

$list1.add($clonedList1).css({
    "width": listWidth + "px"
});

$clonedList1.addClass("cloned1").appendTo($tickerWrapper1);

//TimelineMax
var infinite = new TimelineMax({ repeat: -1, paused: true });
var time = 60;

infinite
    .fromTo($list1, time, { rotation: 0.01, x: 0 }, { force3D: true, x: +listWidth, ease: Linear.easeNone }, 0)
    .fromTo($clonedList1, time, { rotation: 0.01, x: -listWidth }, { force3D: true, x: 0, ease: Linear.easeNone }, 0)
    .set($list1, { force3D: true, rotation: 0.01, x: -listWidth })
    .to($clonedList1, time, { force3D: true, rotation: 0.01, x: +listWidth, ease: Linear.easeNone }, time)
    .to($list1, time, { force3D: true, rotation: 0.01, x: 0, ease: Linear.easeNone }, time)
    .progress(1).progress(0)
    .play();

//Pause/Play		
$tickerWrapper1.on("mouseenter", function () {
    infinite.pause();
}).on("mouseleave", function () {
    infinite.play();
});
////////////////////////////////slide text effect ENd///////////////////////////////// 
////////inner_images/////////
////////////////////////////////left slide text effect///////////////////////////////// 
var $tickerWrapper3 = $(".tickerwrapper3");
var $list3 = $tickerWrapper3.find("ul.list3");
var $clonedList3 = $list3.clone();
var listWidth = 10;

$list3.find("li").each(function (i) {
    listWidth += $(this, i).outerWidth(true);
});

var endPos3 = $tickerWrapper3.width() + listWidth;

$list3.add($clonedList3).css({
    "width": listWidth + "px"
});

$clonedList3.addClass("cloned3").appendTo($tickerWrapper3);

//TimelineMax
var infinite3 = new TimelineMax({ repeat: -1, paused: true });
var time = 100;

infinite3
    .fromTo($list3, time, { rotation: 0.01, x: 0 }, { force3D: true, x: +listWidth, ease: Linear.easeNone }, 0)
    .fromTo($clonedList3, time, { rotation: 0.01, x: -listWidth }, { force3D: true, x: 0, ease: Linear.easeNone }, 0)
    .set($list3, { force3D: true, rotation: 0.01, x: -listWidth })
    .to($clonedList3, time, { force3D: true, rotation: 0.01, x: +listWidth, ease: Linear.easeNone }, time)
    .to($list3, time, { force3D: true, rotation: 0.01, x: 0, ease: Linear.easeNone }, time)
    .progress(1).progress(0)
    .play();

//Pause/Play		
$tickerWrapper3.on("mouseenter", function () {
    infinite3.pause();
}).on("mouseleave", function () {
    infinite3.play();
});

//////////////////////ai chat bot//////////////////////////////////
////////////////////////////////left slide text effect///////////////////////////////// 
var $tickerWrapper4 = $(".tickerwrapper4");
var $list4 = $tickerWrapper4.find("ul.list4");
var $clonedList4 = $list4.clone();
var listWidth = 10;

$list4.find("li").each(function (i) {
    listWidth += $(this, i).outerWidth(true);
});

var endPos3 = $tickerWrapper4.width() + listWidth;

$list4.add($clonedList4).css({
    "width": listWidth + "px"
});

$clonedList4.addClass("cloned4").appendTo($tickerWrapper4);

//TimelineMax
var infinite4 = new TimelineMax({ repeat: -1, paused: true });
var time = 80;

infinite4
    .fromTo($list4, time, { rotation: 0.01, x: 0 }, { force3D: true, x: -listWidth, ease: Linear.easeNone }, 0)
    .fromTo($clonedList4, time, { rotation: 0.01, x: -listWidth }, { force3D: true, x: 0, ease: Linear.easeNone }, 0)
    .set($list4, { force3D: true, rotation: 0.01, x: -listWidth })
    .to($clonedList4, time, { force3D: true, rotation: 0.01, x: -listWidth, ease: Linear.easeNone }, time)
    .to($list4, time, { force3D: true, rotation: 0.01, x: 0, ease: Linear.easeNone }, time)
    .progress(1).progress(0)
    .play();

//Pause/Play		
$tickerWrapper4.on("mouseenter", function () {
    infinite4.pause();
}).on("mouseleave", function () {
    infinite4.play();
});


////////////////////////////////////////////////

/////////////////////////tab-contant////////////////////////////////

var d1 = document.getElementById('set1');
var d2 = document.getElementById('set2');
var d3 = document.getElementById('set3');
var d4 = document.getElementById('set4');
var d5 = document.getElementById('set5');
var d6 = document.getElementById('set6');
var d7 = document.getElementById('set7');


//////////active class///////////////////

var ac1 = document.getElementById('ac1');
var ac2 = document.getElementById('ac2');
var ac3 = document.getElementById('ac3');
var ac4 = document.getElementById('ac4');
var ac5 = document.getElementById('ac5');
var ac6 = document.getElementById('ac6');
var ac6 = document.getElementById('ac6');
var ac7 = document.getElementById('ac7');


function display1() {
    if (d1.style.display === 'none') {
        d1.style.display = 'flex'
        d2.style.display = 'none'
        d3.style.display = 'none'
        d4.style.display = 'none'
        d5.style.display = 'none'
        d6.style.display = 'none'
        d7.style.display = 'none'
        ////////active class///////////
        ac1.classList.add('active');
        ac2.classList.remove('active');
        ac3.classList.remove('active');
        ac4.classList.remove('active');
        ac5.classList.remove('active');
        ac6.classList.remove('active');
        ac7.classList.remove('active');

    } else {
        d1.style.display = 'none'
    }
}
function display2() {
    if (d2.style.display === 'none') {

        d2.style.display = 'flex'
        d1.style.display = 'none'
        d3.style.display = 'none'
        d4.style.display = 'none'
        d5.style.display = 'none'
        d6.style.display = 'none'
        d7.style.display = 'none'

        ////////active class///////////
        ac1.classList.remove('active');
        ac2.classList.add('active');
        ac3.classList.remove('active');
        ac4.classList.remove('active');
        ac5.classList.remove('active');
        ac7.classList.remove('active');
        ac6.classList.remove('active');
        ac7.classList.remove('active');

    } else {
        d2.style.display = 'none'

    }
}
function display3() {
    if (d3.style.display === 'none') {
        d3.style.display = 'flex'
        d1.style.display = 'none'
        d2.style.display = 'none'
        d4.style.display = 'none'
        d5.style.display = 'none'
        d6.style.display = 'none'
        d7.style.display = 'none'

        ////////active class///////////
        ac1.classList.remove('active')
        ac2.classList.remove('active')
        ac3.classList.add('active')
        ac4.classList.remove('active')
        ac5.classList.remove('active')
        ac7.classList.remove('active');
        ac6.classList.remove('active')
    } else {
        d3.style.display = 'none'

    }
}
function display4() {
    if (d4.style.display === 'none') {
        d4.style.display = 'flex'
        d1.style.display = 'none'
        d2.style.display = 'none'
        d3.style.display = 'none'
        d5.style.display = 'none'
        d6.style.display = 'none'
        d7.style.display = 'none'

        ////////active class///////////
        ac1.classList.remove('active')
        ac2.classList.remove('active')
        ac3.classList.remove('active')
        ac4.classList.add('active')
        ac5.classList.remove('active')
        ac7.classList.remove('active');
        ac6.classList.remove('active')
    } else {
        d4.style.display = 'none'
    }

}
function display5() {
    if (d5.style.display === 'none') {
        d5.style.display = 'flex'
        d1.style.display = 'none'
        d2.style.display = 'none'
        d3.style.display = 'none'
        d4.style.display = 'none'
        d6.style.display = 'none'
        d7.style.display = 'none'

        ////////active class///////////
        ac1.classList.remove('active')
        ac2.classList.remove('active')
        ac3.classList.remove('active')
        ac4.classList.remove('active')
        ac5.classList.add('active')
        ac7.classList.remove('active');
        ac6.classList.remove('active')
    } else {
        d5.style.display = 'none'
    }
}
function display6() {
    if (d6.style.display === 'none') {
        d6.style.display = 'flex'
        d1.style.display = 'none'
        d2.style.display = 'none'
        d3.style.display = 'none'
        d4.style.display = 'none'
        d5.style.display = 'none'
        d7.style.display = 'none'

        ////////active class///////////
        ac1.classList.remove('active')
        ac2.classList.remove('active')
        ac3.classList.remove('active')
        ac4.classList.remove('active')
        ac5.classList.remove('active')
        ac7.classList.remove('active');
        ac6.classList.add('active')
    } else {
        d6.style.display = 'none'
    }
}
function display7() {
    if (d7.style.display === 'none') {
        d7.style.display = 'flex'
        d1.style.display = 'none'
        d2.style.display = 'none'
        d3.style.display = 'none'
        d4.style.display = 'none'
        d5.style.display = 'none'
        d6.style.display = 'none'

        ////////active class///////////
        ac1.classList.remove('active')
        ac2.classList.remove('active')
        ac3.classList.remove('active')
        ac4.classList.remove('active')
        ac5.classList.remove('active')
        ac7.classList.add('active');
        ac6.classList.remove('active')
    } else {
        d7.style.display = 'none'
    }
}

///////////////////////
AOS.init({
    offset: 10,
    duration: 100,

});

